// Blog posts for the "Real Estate" category. Content is written in English
// only (see project notes) — the surrounding page chrome (nav labels, "read
// more", etc.) goes through the i18n system in i18n/translations.js, but
// article bodies below are plain English strings.
//
// Section paragraphs/list items can be either a plain string, or an array
// mixing strings with { text, href } link segments — BlogPostClient renders
// those as inline <a> links. `checklist` renders as a numbered step list.
// `neighborhoods` renders as a grid of linked cards pulling the real name
// from lib/neighborhoods.js by slug.
//
// Facts, statute numbers, and dollar figures below were verified via web
// search against multiple sources (Florida Senate statute text, DBPR/legal
// guidance, and 2025-2026 closing-cost and lending industry sources) as of
// August 2026. Always confirm current figures with a licensed professional
// before relying on them for a transaction — this is informational content,
// not legal, financial, or tax advice.

const blogPosts = [
  {
    slug: "florida-condo-buying-guide-milestone-inspections-sirs-special-assessments",
    category: "Real Estate",
    title:
      "Florida Condo Buying Guide: Milestone Inspections, SIRS Reports, and Special Assessments Explained (2026)",
    metaDescription:
      "What Miami condo buyers need to know about Florida's milestone inspection and SIRS laws, why special assessments have spiked since 2025, and a practical due-diligence checklist before you make an offer.",
    publishDate: "2026-08-03",
    readTime: "10 min read",
    excerpt:
      "Florida's post-Surfside condo safety laws changed how buildings have to fund repairs — and a bad SIRS report or looming special assessment can mean a five- or six-figure surprise bill after closing. Here's what to check before you buy.",
    sections: [
      {
        heading: "Why condo due diligence changed after 2021",
        paragraphs: [
          "The 2021 collapse of Champlain Towers South in Surfside pushed the Florida Legislature to rewrite the rules for how aging condominium and cooperative buildings have to prove they're structurally sound — and how they have to pay for repairs. Two requirements came out of that: the Milestone Inspection and the Structural Integrity Reserve Study, usually shortened to SIRS. Both apply statewide, but they land hardest in Miami-Dade and Broward, where a large share of the condo stock is 30, 40, even 50+ years old and sits within a few miles of the coast.",
          "For a buyer, this isn't background regulatory noise. Buildings that spent decades collecting minimal reserves are now required to catch up fast, and many are doing it through special assessments — one-time bills to every owner — or steep increases to monthly HOA dues. If you buy into a building with a bad milestone inspection, an unfunded SIRS, or a special assessment about to be voted on, you can inherit a bill worth tens of thousands of dollars within months of closing.",
        ],
      },
      {
        heading: "What a Milestone Inspection actually checks",
        paragraphs: [
          "Under Florida Statute 553.899, condo and co-op buildings of three or more habitable stories have to be inspected by a licensed engineer or architect once the building hits a certain age, based on the date its certificate of occupancy was issued: 30 years for inland buildings, or 25 years if the building sits within three miles of the coastline — which covers most of the barrier-island and waterfront condo stock across Miami-Dade and Broward. The inspection then repeats every 10 years.",
          "It runs in two phases. Phase 1 is a visual structural inspection. If the engineer finds \"substantial structural deterioration,\" that triggers a more invasive Phase 2 evaluation, which is a strong signal that real (and often expensive) repair work is coming. When you're evaluating a building, ask not just whether it has passed its milestone inspection, but whether it required a Phase 2 — that detail tells you a lot more than a simple pass/fail.",
        ],
      },
      {
        heading: "What a SIRS report actually is",
        paragraphs: [
          "A Structural Integrity Reserve Study, required under Florida Statute 718.112(2)(g) for the same 3-story-and-up buildings, is different from the milestone inspection. It's a funding plan: a licensed engineer or professional inspects a defined set of structural components — the roof, load-bearing structural members, floor, foundation, fireproofing and fire protection systems, plumbing, electrical, and waterproofing/exterior painting and windows/exterior doors — estimates the remaining useful life and replacement cost of each, and tells the association exactly how much money should be sitting in reserves for each item.",
          "A SIRS report is the single most useful document a buyer can request, because it converts the physical condition of the building into dollar figures: what needs to be replaced, roughly when, what it will cost, and whether the association currently has that money set aside or not.",
        ],
      },
      {
        heading: "The 2025-2026 deadlines behind the current wave of assessments",
        paragraphs: [
          "The original SIRS completion deadline was December 31, 2024. House Bill 913, signed into law and effective July 1, 2025, pushed that deadline to December 31, 2025 — so by the time you're reading this, most applicable associations should have a completed SIRS on file.",
          "The bigger shift for buyers is what kicked in after that: as of January 1, 2026, full reserve funding for the specific SIRS structural components became mandatory. Boards can no longer vote to waive or underfund those particular reserves the way they routinely did for decades (non-structural reserves, like pools or landscaping, can still be reduced or waived by owner vote). That change is exactly why special assessments have spiked over the past year — associations that ran on minimal reserves are now legally required to catch up, and catching up costs money right now, not spread out over another decade.",
          "The dollar figures involved are not small. Special assessments in older coastal buildings with deferred maintenance have run anywhere from roughly $10,000 to well over $100,000 per unit, and some associations have raised monthly reserve contributions from the $50–$100 range to $300–$800 per unit per month to reach full SIRS funding. Those numbers vary enormously by building — but they show why this line item deserves the same scrutiny as the purchase price itself.",
        ],
      },
      {
        heading: "Why this can become a surprise bill after closing",
        paragraphs: [
          "Special assessments and reserve shortfalls are a shared liability among all unit owners, not just the ones who lived through the underfunded years. If you close on a unit and the board approves a special assessment a few months later, you're on the hook — the fact that you weren't the owner when the building's roof or concrete started deteriorating doesn't exempt you. Even short of an assessment, a building playing catch-up on reserves usually means climbing monthly HOA dues that quietly erode what you can actually afford.",
          "There's a financing angle too: boards now submit SIRS data electronically to the state, and that data is increasingly visible to lenders and insurers pricing risk on a building-by-building basis. A non-compliant or poorly funded building can mean a higher insurance premium, a lender declining to finance units in that building at all, or a lender requiring a larger down payment. Before you fall in love with a unit, it's worth confirming your financing is realistic for that specific building, not just for the purchase price.",
        ],
      },
      {
        heading: "Your due-diligence checklist before you make an offer",
        paragraphs: [
          "None of this is a reason to avoid Florida condos — it's a reason to be specific about what you ask for. Work through this list with your agent before you write an offer, or at minimum before your inspection period ends:",
        ],
        checklist: [
          {
            title: "Request the Milestone Inspection report and the SIRS",
            body: "Florida Statute 718.503 requires sellers to provide, at their own expense, a current copy of the inspector-prepared milestone inspection summary and the association's most recent SIRS (or a written statement that no SIRS has been completed) to any buyer under contract. If your agent hasn't already requested these in writing, ask now.",
          },
          {
            title: "Check the reserve funding status",
            body: "Ask what percentage of the SIRS-designated reserves are actually funded today, not just whether a study exists. A completed SIRS that shows the association is 20% funded is a very different situation than one that shows 90% funded.",
          },
          {
            title: "Review the current budget for insurance increases",
            body: "A sharp jump in the master insurance policy line item is often the earliest visible sign of structural or reserve trouble, sometimes showing up before an assessment is even discussed publicly.",
          },
          {
            title: "Confirm milestone inspection compliance status",
            body: "Has the building passed its most recent inspection, is a Phase 2 evaluation underway, or is a compliance deadline still coming up? Ask for the actual report, not just a verbal confirmation.",
          },
          {
            title: "Read recent board meeting minutes",
            body: "Associations typically have to make these available on request. Minutes from the last several months often surface assessment discussions, deferred maintenance items, or insurance renewal problems well before they become official.",
          },
          {
            title: "Ask directly about pending special assessments",
            body: "If one has already been approved or is actively being discussed, negotiate now — either for the seller to cover it, a price adjustment, or walk away with your eyes open. Once you own the unit, future assessments are yours regardless of when the underlying issue started.",
          },
        ],
      },
      {
        heading: "What to do with what you find",
        paragraphs: [
          [
            "If the documents are missing, incomplete, or show real deficiencies, treat that as financial risk, not paperwork. Florida law gives buyers a right to extend closing by up to three business days after receiving the milestone inspection summary or SIRS, if you request the extension in writing — use that time. For older buildings or anything that raises real questions, involve a Florida real estate attorney before you waive your inspection contingency. And because a bad condo-docs review can sometimes mean walking away from a deal later than you'd like, it helps to ",
            { text: "get pre-approved", href: "/get-pre-approved" },
            " early, so you're not scrambling on financing at the same time you're renegotiating over a special assessment.",
          ],
        ],
      },
    ],
    faqs: [
      {
        q: "What is a milestone inspection in Florida?",
        a: "A structural inspection required by Florida Statute 553.899 for condo and co-op buildings of three or more habitable stories, performed by a licensed engineer or architect once the building reaches 30 years of age (or 25 years if within three miles of the coast), and every 10 years after that. It has two phases: a visual review, and, if problems are found, a more invasive follow-up evaluation.",
      },
      {
        q: "Am I responsible for a special assessment if I buy a condo?",
        a: "Generally, whoever owns the unit when an assessment is officially approved or levied is responsible for paying it — regardless of how long they've owned the unit. If an assessment has already been approved before you close, you can try to negotiate for the seller to cover it or adjust the price, but this is a matter of contract negotiation, not automatic protection, so confirm the details with a real estate attorney.",
      },
      {
        q: "Are sellers required to give me the SIRS and milestone inspection report?",
        a: "Yes. Under Florida Statute 718.503, sellers in a condo resale must provide, at their own expense, a current copy of the milestone inspection summary and the association's most recent SIRS (or written confirmation that none has been completed). Ask your agent to request these in writing as early as possible.",
      },
    ],
  },
  {
    slug: "how-much-down-payment-do-you-need-to-buy-a-home-in-miami",
    category: "Real Estate",
    title: "How Much Down Payment Do You Actually Need to Buy a Home in Miami?",
    metaDescription:
      "The 20% down payment myth, explained: what conventional and FHA loans really require, how PMI works, and how your down payment affects your monthly payment and your offer in Miami's market.",
    publishDate: "2026-08-03",
    readTime: "8 min read",
    excerpt:
      "You don't need 20% down to buy in Miami. Here's what conventional and FHA loans actually require, what changes at each down payment level, and how to run your own numbers before you start touring homes.",
    sections: [
      {
        heading: "The 20% myth",
        paragraphs: [
          "\"You need 20% down to buy a house\" is one of the most repeated pieces of real estate folklore, and it's largely wrong for most buyers. Twenty percent down is the threshold at which you avoid paying private mortgage insurance on a conventional loan — it was never a universal requirement to qualify for a mortgage in the first place. Plenty of buyers in Miami-Dade and Broward close every month with far less down.",
          "That doesn't mean down payment size doesn't matter — it changes your monthly payment, your loan pricing, and in some cases how competitive your offer looks. It just means the number to plan around isn't automatically 20%.",
        ],
      },
      {
        heading: "What conventional loans actually require",
        paragraphs: [
          "Many conventional loans allow as little as 3% down for first-time buyers, through programs like Fannie Mae's HomeReady and Freddie Mac's Home Possible, and 5% is a common baseline for other eligible buyers. Below 20% down, lenders require private mortgage insurance (PMI) — an added monthly cost that protects the lender, not you, in case you default. It's not a penalty for a smaller down payment so much as the mechanism that makes a smaller down payment possible at all.",
        ],
      },
      {
        heading: "FHA loans: as little as 3.5% down",
        paragraphs: [
          "FHA loans, insured by the federal government, allow down payments as low as 3.5% for borrowers with a credit score of 580 or higher; borrowers with lower scores typically need a larger down payment, and requirements can vary somewhat by lender. Instead of PMI, FHA loans carry their own mortgage insurance premium (MIP): an upfront premium (around 1.75% of the loan amount, often rolled into the loan) plus an ongoing annual premium. The key difference from conventional PMI: if you put down less than 10%, FHA's MIP typically stays for the life of the loan; put down 10% or more, and it can usually be canceled after 11 years.",
        ],
      },
      {
        heading: "What PMI actually costs",
        paragraphs: [
          "PMI typically runs somewhere around $30 to $70 per month for every $100,000 borrowed, depending on your credit score and loan-to-value ratio — so on a $400,000 loan, that's roughly $120 to $280 a month. It's not permanent on a conventional loan: federal law requires it to automatically terminate once your loan balance reaches 78% of the home's original value, and you can typically request cancellation yourself once you hit 80% (20% equity), assuming a good payment history and lender sign-off.",
        ],
      },
      {
        heading: "What actually changes at each down payment level",
        list: [
          "A smaller down payment means a larger loan, a larger monthly payment, and — below 20% down on a conventional loan — an added PMI cost until you build equity.",
          "A larger down payment lowers your monthly payment two ways at once: a smaller loan balance, and no PMI once you're at or above 20% down.",
          "Down payment size can also nudge your interest rate slightly through loan-level pricing adjustments, which most conventional lenders tie in part to loan-to-value ratio — generally, more equity at closing means slightly better pricing, all else equal.",
          "In a competitive submarket — multiple offers on the same listing, or a building where many buyers pay cash — a larger down payment (or a strong pre-approval with a solid loan-to-value ratio) can make your offer look lower-risk to a seller, even though it isn't a formal requirement to get a loan approved.",
        ],
      },
      {
        heading: "Programs that can shrink the number further",
        paragraphs: [
          "A few programs go below even the 3-3.5% range. VA loans, for eligible active-duty service members, veterans, and some surviving spouses, allow 0% down with no PMI (VA loans carry their own funding fee instead). And Florida runs its own down payment assistance program, Florida Hometown Heroes, aimed at teachers, nurses, first responders, and other frontline workers with a Florida-based employer: eligible buyers can receive down payment and closing cost help worth 5% of the loan amount (between roughly $10,000 and $35,000) as a 0%-interest second mortgage, subject to credit score, income limits that vary by county, and a requirement that you haven't owned a home in the past three years. Funding is limited and allocated first-come, first-served each cycle, so eligibility and availability are worth confirming directly with a participating lender before you count on it.",
        ],
      },
      {
        heading: "Run your own numbers",
        paragraphs: [
          [
            "Every buyer's math looks different depending on price point, credit, and loan program, so the most useful next step is plugging in your own numbers. Try the ",
            { text: "mortgage calculator", href: "/mortgage-calculator" },
            " with a few different down payment percentages — 3%, 5%, 10%, 20% — and see exactly how each one moves your monthly payment. Then, before you start touring homes, ",
            { text: "get pre-approved", href: "/get-pre-approved" },
            " to find out what you actually qualify for, at what rate, with what down payment — that number is far more useful for house hunting than any rule of thumb.",
          ],
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need 20% down to buy a home in Miami?",
        a: "No. Conventional loans often allow 3-5% down, and FHA loans allow as little as 3.5% down with a qualifying credit score. Twenty percent down is simply the level at which you avoid PMI on a conventional loan, not a minimum requirement to get a mortgage.",
      },
      {
        q: "What's the minimum down payment for an FHA loan?",
        a: "3.5% of the purchase price, for borrowers with a credit score of 580 or higher. Borrowers with lower credit scores typically need a larger down payment, and specific requirements can vary by lender.",
      },
      {
        q: "Can I get rid of PMI once I have equity?",
        a: "Yes, on a conventional loan. It automatically terminates once your loan balance reaches 78% of the home's original value, and you can usually request cancellation yourself once you reach 80% (20% equity), subject to your lender's requirements and payment history.",
      },
    ],
  },
  {
    slug: "best-miami-neighborhoods-families-young-professionals-investors",
    category: "Real Estate",
    title: "Best Miami Neighborhoods for Families, Young Professionals, and Investors",
    metaDescription:
      "A practical guide to Miami-Dade and Broward neighborhoods segmented by buyer type — families, young professionals, and investors — with links to real pricing and history for each area.",
    publishDate: "2026-08-03",
    readTime: "9 min read",
    excerpt:
      "Miami-Dade and Broward aren't one market — they're dozens of very different ones. Here's a grounded breakdown of which real neighborhoods tend to fit families, young professionals, and investors, and why.",
    sections: [
      {
        heading: "Miami isn't one market",
        paragraphs: [
          "\"Where should I buy in Miami\" doesn't have one answer, because Miami-Dade and Broward aren't a single market — they're a patchwork of very different neighborhoods, sometimes changing character block by block. A young professional who wants to walk to dinner and a family shopping for a top school zone are often better off looking at entirely different parts of the county, even if their budgets overlap.",
          "This guide groups 14 real neighborhoods this site covers in detail by the kind of buyer they tend to suit best, based on what's actually true about each place — school access, housing stock, walkability, and the kind of inventory (single-family vs. condo) that dominates. Every neighborhood below links to its full profile page, with real pricing and history.",
        ],
      },
      {
        heading: "Best for families",
        paragraphs: [
          "For families, the priorities tend to be school quality, yard space or room to grow, and a slower pace than the high-rise core. These four consistently come up for exactly those reasons:",
        ],
        neighborhoods: [
          {
            slug: "coral-gables",
            note: "Tree-lined, historic, and among the most tightly zoned neighborhoods in the county — a classic choice for families who want established character and strong schools within a walkable, low-density setting.",
          },
          {
            slug: "kendall-pinecrest",
            note: "Pinecrest is consistently one of Miami-Dade's top-rated public school zones, with oak-canopied streets and large lots; Kendall next door offers a more attainable entry point into the same general school district.",
          },
          {
            slug: "doral",
            note: "Mostly newer-construction homes in gated communities, built explicitly around family living — a strong fit if you'd rather have modern construction and HOA amenities than historic character.",
          },
          {
            slug: "miami-gardens",
            note: "One of the more affordable single-family markets in the county, with a suburban, diverse, family-focused feel — worth a serious look if budget is the primary constraint.",
          },
        ],
      },
      {
        heading: "Best for young professionals",
        paragraphs: [
          "If a short commute, walkability, and being near restaurants and nightlife matter more than square footage, these high-rise, condo-dominant neighborhoods tend to be the ones people actually move to:",
        ],
        neighborhoods: [
          {
            slug: "brickell",
            note: "Miami's financial district and densest high-rise corridor — walk to work, restaurants, and nightlife, with entry-level 1BR condos typically priced well below the neighborhood median.",
          },
          {
            slug: "wynwood",
            note: "Miami's arts and nightlife district, dominated by lofts and new-construction mixed-use towers, for buyers who want to be in the middle of the scene rather than a short drive from it.",
          },
          {
            slug: "midtown-edgewater",
            note: "A walkable, trendy stretch of waterfront high-rises bridging Wynwood and the bay — generally newer stock than Downtown, with more of a neighborhood feel than Brickell.",
          },
          {
            slug: "downtown",
            note: "The most transit-connected part of the county, linked by Metromover and Metrorail — a fit if you want a genuine 24-hour urban core and don't want to depend on a car.",
          },
        ],
      },
      {
        heading: "Best for investors",
        paragraphs: [
          "For rental income or long-term appreciation, condo-heavy corridors with strong, durable demand — from international buyers, seasonal residents, or renters who want to be near the water — tend to perform best:",
        ],
        neighborhoods: [
          {
            slug: "sunny-isles-beach",
            note: "A barrier-island luxury condo corridor with strong, longstanding international buyer demand and almost no single-family competition to worry about.",
          },
          {
            slug: "aventura",
            note: "Anchored by one of the largest shopping malls in the US, with a dense corridor of condo towers that draws steady rental interest from a wide range of tenants.",
          },
          {
            slug: "hallandale-beach",
            note: "A more affordable beachfront alternative just south of Aventura and Sunny Isles Beach, with a mix of older and newer condo stock at a meaningfully lower entry price.",
          },
        ],
        list: [
          [
            "One caveat specific to condo investing in Florida right now: reserve funding and special assessments directly affect your returns, not just owner-occupants. Before you buy a rental condo, read our ",
            {
              text: "guide to milestone inspections, SIRS reports, and special assessments",
              href: "/blog/florida-condo-buying-guide-milestone-inspections-sirs-special-assessments",
            },
            " — an underfunded building can turn a good rental yield into a break-even year fast.",
          ],
        ],
      },
      {
        heading: "Worth a look if you want something different",
        paragraphs: [
          "A few neighborhoods don't fit neatly into one bucket above but are worth knowing about:",
        ],
        neighborhoods: [
          {
            slug: "coconut-grove",
            note: "Miami's oldest continuously inhabited neighborhood — bayfront, leafy, and laid-back, splitting the difference between Coral Gables' formality and Brickell's density.",
          },
          {
            slug: "miami-beach",
            note: "Beaches, Art Deco architecture, and nightlife on the barrier island — more of a lifestyle choice than a single buyer category, spanning everything from vintage walk-ups to new luxury towers.",
          },
          {
            slug: "hialeah",
            note: "One of the more affordable, densely populated cities in the county, with deep Cuban-American cultural roots — worth a look for buyers prioritizing price over coastal proximity.",
          },
        ],
      },
      {
        heading: "See the full picture",
        paragraphs: [
          [
            "Every neighborhood mentioned here has its own detailed profile page on this site, with real pricing data and history — not estimates written for this article. Browse the full set on the ",
            { text: "homepage neighborhoods section", href: "/#neighborhoods" },
            ", and if a down payment or monthly payment question comes up while you're comparing areas, the ",
            { text: "mortgage calculator", href: "/mortgage-calculator" },
            " can help you see how price differences between neighborhoods actually translate to your budget.",
          ],
        ],
      },
    ],
    faqs: [
      {
        q: "What's the best Miami neighborhood for families?",
        a: "Coral Gables and Kendall/Pinecrest are the most consistently recommended for families prioritizing schools and established character, while Doral and Miami Gardens offer newer construction or more affordable entry points with a similar family-oriented feel.",
      },
      {
        q: "What's the best Miami neighborhood for real estate investors?",
        a: "Condo-heavy corridors with strong, durable rental demand — Sunny Isles Beach, Aventura, and Hallandale Beach — tend to perform well, but always check a condo building's SIRS report and reserve funding status before buying, since special assessments directly affect investment returns.",
      },
      {
        q: "What's the most walkable Miami neighborhood for young professionals?",
        a: "Brickell is generally the most walkable and work-adjacent option as Miami's financial district, with Midtown/Edgewater and Wynwood as strong alternatives that trade some density for a more neighborhood feel.",
      },
    ],
  },
  {
    slug: "miami-closing-costs-explained-what-buyers-actually-pay",
    category: "Real Estate",
    title: "Miami Closing Costs Explained: What Buyers Actually Pay at Closing",
    metaDescription:
      "A breakdown of every fee on a typical Miami-Dade or Broward closing statement — lender fees, title insurance, prepaids, estoppel fees, and Florida's unusual rules on who pays what.",
    publishDate: "2026-08-03",
    readTime: "9 min read",
    excerpt:
      "Your mortgage payment isn't the only number that matters. Here's what actually shows up on a Miami closing statement, and Florida's unusual — and often misunderstood — rules on who pays title insurance and transfer taxes.",
    sections: [
      {
        heading: "What \"closing costs\" actually means",
        paragraphs: [
          [
            "Two things this site's calculators already cover — your ",
            { text: "monthly mortgage payment", href: "/mortgage-calculator" },
            " and your ",
            { text: "annual property tax", href: "/property-tax-calculator" },
            " — are ongoing costs. Closing costs are different: they're the one-time cash due at the closing table, separate from your down payment. For a financed purchase in Florida, buyer closing costs typically run somewhere in the range of 2% to 5% of the purchase price; cash buyers land at the lower end of that, since there are no lender-related fees involved.",
          ],
        ],
      },
      {
        heading: "Lender fees",
        paragraphs: [
          "If you're financing, expect an origination fee, an appraisal fee, a credit report fee, and often an underwriting or processing fee. These vary meaningfully from lender to lender, which is exactly why comparing the Loan Estimate from more than one lender is worth the effort — the fees aren't standardized the way some other closing costs are.",
        ],
      },
      {
        heading: "Title insurance and the title search",
        paragraphs: [
          "Florida is a \"promulgated rate\" state, meaning the state sets one premium schedule that every title company has to charge for the same coverage: $5.75 per $1,000 of coverage on the first $100,000, and $5.00 per $1,000 above that up to $1 million. That means you can't shop for a cheaper premium — only the title company's separate search and closing service fees vary.",
          "There are two policies involved. The lender's title policy protects the lender and is essentially always paid by the buyer on a financed purchase. The owner's title policy protects you, the buyer — and this is where Florida has a real regional quirk: in most of the state, the seller customarily pays for and selects the owner's title policy. But in Miami-Dade and Broward (along with a couple of other counties, like Sarasota and Collier), local custom flips that — the buyer customarily pays for and selects the owner's title policy instead. This is a matter of local custom, not state law, so it's always negotiable in the purchase contract, but it's worth knowing which way the norm runs before you're negotiating an offer.",
        ],
      },
      {
        heading: "Recording fees and transfer taxes",
        paragraphs: [
          "The county clerk charges a recording fee to file the deed and mortgage in the public record. Separately, Florida charges a documentary stamp tax on the deed itself — $0.70 per $100 of the sale price statewide, except in Miami-Dade, which charges a slightly lower $0.60 per $100. By Florida custom, the seller pays this one.",
          "The mortgage itself triggers two more charges that fall to the buyer by custom: a documentary stamp tax on the note ($0.35 per $100 of the loan amount) and a nonrecurring intangible tax on the mortgage (0.2% of the loan amount, sometimes described as 2 mills). Both are calculated off your loan amount, not the purchase price, so a larger down payment slightly reduces them.",
        ],
      },
      {
        heading: "Prepaid items",
        paragraphs: [
          [
            "Lenders generally require you to prepay a handful of costs at closing so your escrow account starts funded: a full year of homeowners insurance (notably higher in Florida because of hurricane and flood exposure), an escrow cushion plus prorated share of property taxes — the ",
            { text: "property tax calculator", href: "/property-tax-calculator" },
            " is a good place to estimate that annual number first — and prepaid daily interest between your closing date and the end of that month.",
          ],
        ],
      },
      {
        heading: "HOA and condo estoppel fees",
        paragraphs: [
          [
            "If you're buying a condo or a home in an HOA, the association has to issue an estoppel certificate confirming exactly what's owed on the account before it can transfer. Florida law caps this fee: $299 for standard delivery, up to $119 more for expedited (3-business-day) delivery, and up to $179 more if the account has a delinquent balance. Who pays it is negotiable, though buyers often end up covering it. If you're buying a condo specifically, it's worth pairing this step with the broader due-diligence process in our ",
            {
              text: "condo buying guide",
              href: "/blog/florida-condo-buying-guide-milestone-inspections-sirs-special-assessments",
            },
            " — the estoppel certificate is only part of what you should be checking on the association's finances.",
          ],
        ],
      },
      {
        heading: "A realistic total",
        paragraphs: [
          "Add it up and a financed purchase in Miami-Dade or Broward typically lands somewhere around 2% to 5% of the purchase price in buyer closing costs — on a $500,000 home, roughly $10,000 to $25,000, though the real number depends heavily on your loan amount, insurance premium, and which fees you end up negotiating with the seller. Treat that range as a starting planning figure, not a quote — your lender's Loan Estimate and, later, your Closing Disclosure will give you the actual numbers for your specific transaction.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much are closing costs in Miami?",
        a: "For a financed purchase, buyer closing costs typically run about 2% to 5% of the purchase price in Miami-Dade or Broward. Cash purchases usually land toward the lower end of that range since no lender fees apply.",
      },
      {
        q: "Does the buyer or seller pay for title insurance in Miami?",
        a: "In Miami-Dade and Broward, local custom has the buyer paying for and selecting the owner's title insurance policy — the reverse of the norm in most other Florida counties, where the seller typically pays. It's set by local custom, not state law, so it's negotiable in the contract.",
      },
      {
        q: "What is an estoppel fee and do I have to pay it?",
        a: "It's the fee an HOA or condo association charges to confirm the account balance before your purchase can close. Florida law caps it at $299 for standard delivery, plus up to $119 for a rush request and up to $179 more if the account is delinquent. Who pays is negotiable between buyer and seller.",
      },
    ],
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPost(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
