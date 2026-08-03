import Parser from "rss-parser";

// Refetch these feeds at most this often — keeps the tabs current without
// hammering the source sites on every page load.
const REVALIDATE_SECONDS = 60 * 60 * 24 * 2; // 2 days

const LOCAL10_URL = "https://www.local10.com/arc/outboundfeeds/rss/?outputType=xml";

// Four tabs: Real Estate, Recent News, Sports & Restaurants, Things To Do.
// Sports & Restaurants pulls from two sources, tagged with their own badge
// but grouped into one tab.
const FEEDS = [
  {
    tab: "realEstate",
    badge: "realEstate",
    source: "Miami Today",
    url: "https://www.miamitodaynews.com/feed/",
    count: 2,
    onlyCategory: "Real Estate",
  },
  {
    // Miami Today only tags a handful of stories "Real Estate" at any given
    // time (their RSS only carries their 10 most recent items total), so
    // pair it with a dedicated South Florida real estate outlet to keep this
    // tab reliably populated.
    tab: "realEstate",
    badge: "realEstate",
    source: "The Real Deal Miami",
    url: "https://therealdeal.com/miami/feed/",
    count: 6,
  },
  {
    tab: "news",
    badge: "news",
    source: "Local 10 News (WPLG)",
    url: LOCAL10_URL,
    count: 4,
    // Local10's general feed mixes in AP wire national stories — narrow to
    // their own South Florida local desk.
    linkContains: "/news/local/",
  },
  {
    tab: "sportsFood",
    badge: "sports",
    source: "Local 10 News (WPLG)",
    url: LOCAL10_URL,
    count: 2,
    linkContains: "/sports/",
  },
  {
    tab: "sportsFood",
    badge: "restaurants",
    source: "Eater Miami",
    url: "https://miami.eater.com/rss/index.xml",
    count: 2,
  },
  {
    tab: "thingsToDo",
    badge: "thingsToDo",
    source: "Miami New Times",
    url: "https://www.miaminewtimes.com/things-to-do/rss",
    count: 4,
  },
];

const parser = new Parser({
  customFields: {
    item: [["media:content", "mediaContent", { keepArray: true }]],
  },
});

function extractImage(item) {
  const media = item.mediaContent?.[0]?.$?.url;
  if (media) return media;

  if (item.enclosure?.url) return item.enclosure.url;

  const html = item.content || item["content:encoded"] || "";
  const match = html.match(/<img[^>]+src="([^"]+)"/i);
  return match ? match[1] : null;
}

function truncate(text, max) {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? clean.slice(0, max).trim() + "…" : clean;
}

async function fetchFeed(config) {
  try {
    const res = await fetch(config.url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; MiamiHomeGuideBot/1.0)" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const feed = await parser.parseString(xml);

    let items = feed.items || [];

    if (config.onlyCategory) {
      const filtered = items.filter((item) =>
        (item.categories || []).some(
          (c) => c.toLowerCase() === config.onlyCategory.toLowerCase()
        )
      );
      if (filtered.length > 0) items = filtered;
    }

    if (config.linkContains) {
      items = items.filter((item) => item.link?.includes(config.linkContains));
    }

    return items.slice(0, config.count).map((item) => ({
      title: item.title,
      link: item.link,
      source: config.source,
      badge: config.badge,
      pubDate: item.isoDate || item.pubDate || null,
      excerpt: truncate(item.contentSnippet, 160),
      image: extractImage(item),
    }));
  } catch (err) {
    return [];
  }
}

function byNewestFirst(a, b) {
  const aTime = a.pubDate ? new Date(a.pubDate).getTime() : 0;
  const bTime = b.pubDate ? new Date(b.pubDate).getTime() : 0;
  return bTime - aTime;
}

export async function getMiamiArticles() {
  const results = await Promise.all(FEEDS.map(fetchFeed));
  const byTab = { realEstate: [], news: [], sportsFood: [], thingsToDo: [] };

  FEEDS.forEach((config, i) => {
    byTab[config.tab].push(...results[i]);
  });

  Object.keys(byTab).forEach((tab) => {
    byTab[tab].sort(byNewestFirst);
  });

  return byTab;
}
