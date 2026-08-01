import Parser from "rss-parser";

// Refetch these feeds at most this often — keeps the blog section current
// without hammering the source sites on every page load.
const REVALIDATE_SECONDS = 60 * 60 * 24 * 2; // 2 days

const FEEDS = [
  {
    category: "news",
    source: "Local 10 News (WPLG)",
    url: "https://www.local10.com/arc/outboundfeeds/rss/?outputType=xml",
    count: 2,
  },
  {
    category: "realEstate",
    source: "Miami Today",
    url: "https://www.miamitodaynews.com/feed/",
    count: 2,
    // Miami Today covers all local business news — narrow it to real estate.
    onlyCategory: "Real Estate",
  },
  {
    category: "food",
    source: "Eater Miami",
    url: "https://miami.eater.com/rss/index.xml",
    count: 2,
  },
  {
    category: "culture",
    source: "Miami New Times",
    url: "https://www.miaminewtimes.com/news/rss",
    count: 2,
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

    return items.slice(0, config.count).map((item) => ({
      title: item.title,
      link: item.link,
      source: config.source,
      author: item.creator || item.author?.name || null,
      pubDate: item.isoDate || item.pubDate || null,
      excerpt: truncate(item.contentSnippet, 160),
      image: extractImage(item),
      category: config.category,
    }));
  } catch (err) {
    return [];
  }
}

export async function getMiamiArticles() {
  const results = await Promise.all(FEEDS.map(fetchFeed));
  return {
    news: results[0],
    realEstate: results[1],
    food: results[2],
    culture: results[3],
  };
}
