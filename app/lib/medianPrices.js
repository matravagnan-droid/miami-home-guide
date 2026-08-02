// Median single-family and condo sale prices for Miami-Dade and Broward
// municipalities not already covered in neighborhoods.js (see that file for the
// 8 curated cities: Coral Gables, Doral, Miami Beach, Hialeah, Miami Gardens,
// Sunny Isles Beach, Aventura, Hallandale Beach).
//
// Most figures below are the Zillow Home Value Index (ZHVI) for June 2026,
// split by home type (single-family vs. condo/co-op tier), downloaded from
// Zillow's public research data files (zillow.com/research/data -> Home Values
// -> ZHVI by home type, city-level CSVs). ZHVI is a smoothed, seasonally
// adjusted estimate of the typical home value for the middle price tier, not a
// raw median of closed sales -- treat it the same way as the rest of this site's
// pricing data: a starting reference point, not a valuation.
//
// A couple of cities (South Miami, Medley) aren't in Zillow's city-level ZHVI
// file, so their figures instead come directly from Redfin's city housing-market
// page (median sale price, all home types blended -- these two cities have
// little to no condo stock, so the figure is used as the single-family number).
//
// City id keys match app/lib/counties.js. Every value below traces to a real
// public source -- null means no credible figure was found, not a guess.
export const MEDIAN_PRICES = {
  "bal-harbour": {
    singleFamily: 7083000,
    condo: 1778000,
    source: "Zillow Home Value Index (ZHVI) by home type, Bal Harbour FL, accessed August 2026",
  },
  "bay-harbor-islands": {
    singleFamily: 2795000,
    condo: 574000,
    source: "Zillow Home Value Index (ZHVI) by home type, Bay Harbor Islands FL, accessed August 2026",
  },
  "biscayne-park": {
    singleFamily: 977000,
    condo: null,
    source: "Zillow Home Value Index (ZHVI) by home type, Biscayne Park FL, accessed August 2026",
  },
  "coconut-creek": {
    singleFamily: 518000,
    condo: 193000,
    source: "Zillow Home Value Index (ZHVI) by home type, Coconut Creek FL, accessed August 2026",
  },
  "cooper-city": {
    singleFamily: 674000,
    condo: 361000,
    source: "Zillow Home Value Index (ZHVI) by home type, Cooper City FL, accessed August 2026",
  },
  "coral-springs": {
    singleFamily: 642000,
    condo: 191000,
    source: "Zillow Home Value Index (ZHVI) by home type, Coral Springs FL, accessed August 2026",
  },
  "cutler-bay": {
    singleFamily: 596000,
    condo: 264000,
    source: "Zillow Home Value Index (ZHVI) by home type, Cutler Bay FL, accessed August 2026",
  },
  "dania-beach": {
    singleFamily: 502000,
    condo: 214000,
    source: "Zillow Home Value Index (ZHVI) by home type, Dania Beach FL, accessed August 2026",
  },
  "davie": {
    singleFamily: 629000,
    condo: 229000,
    source: "Zillow Home Value Index (ZHVI) by home type, Davie FL, accessed August 2026",
  },
  "deerfield-beach": {
    singleFamily: 430000,
    condo: 148000,
    source: "Zillow Home Value Index (ZHVI) by home type, Deerfield Beach FL, accessed August 2026",
  },
  "el-portal": {
    singleFamily: 876000,
    condo: null,
    source: "Zillow Home Value Index (ZHVI) by home type, El Portal FL, accessed August 2026",
  },
  "florida-city": {
    singleFamily: 373000,
    condo: null,
    source: "Zillow Home Value Index (ZHVI) by home type, Florida City FL, accessed August 2026",
  },
  "fort-lauderdale": {
    singleFamily: 589000,
    condo: 405000,
    source: "Zillow Home Value Index (ZHVI) by home type, Fort Lauderdale FL, accessed August 2026",
  },
  "golden-beach": {
    singleFamily: 7789000,
    condo: null,
    source: "Zillow Home Value Index (ZHVI) by home type, Golden Beach FL, accessed August 2026",
  },
  "hialeah-gardens": {
    singleFamily: 526000,
    condo: 284000,
    source: "Zillow Home Value Index (ZHVI) by home type, Hialeah Gardens FL, accessed August 2026",
  },
  "hillsboro-beach": {
    singleFamily: 983000,
    condo: 490000,
    source: "Zillow Home Value Index (ZHVI) by home type, Hillsboro Beach FL, accessed August 2026",
  },
  "hollywood": {
    singleFamily: 511000,
    condo: 251000,
    source: "Zillow Home Value Index (ZHVI) by home type, Hollywood FL, accessed August 2026",
  },
  "homestead": {
    singleFamily: 455000,
    condo: 225000,
    source: "Zillow Home Value Index (ZHVI) by home type, Homestead FL, accessed August 2026",
  },
  "key-biscayne": {
    singleFamily: 4129000,
    condo: 1355000,
    source: "Zillow Home Value Index (ZHVI) by home type, Key Biscayne FL, accessed August 2026",
  },
  "lauderdale-lakes": {
    singleFamily: 411000,
    condo: 101000,
    source: "Zillow Home Value Index (ZHVI) by home type, Lauderdale Lakes FL, accessed August 2026",
  },
  "lauderhill": {
    singleFamily: 407000,
    condo: 114000,
    source: "Zillow Home Value Index (ZHVI) by home type, Lauderhill FL, accessed August 2026",
  },
  "lighthouse-point": {
    singleFamily: 1229000,
    condo: 172000,
    source: "Zillow Home Value Index (ZHVI) by home type, Lighthouse Point FL, accessed August 2026",
  },
  "margate": {
    singleFamily: 442000,
    condo: 125000,
    source: "Zillow Home Value Index (ZHVI) by home type, Margate FL, accessed August 2026",
  },
  "miami": {
    singleFamily: 666000,
    condo: 381000,
    source: "Zillow Home Value Index (ZHVI) by home type, Miami FL, accessed August 2026",
  },
  "miami-lakes": {
    singleFamily: 733000,
    condo: 306000,
    source: "Zillow Home Value Index (ZHVI) by home type, Miami Lakes FL, accessed August 2026",
  },
  "miami-shores": {
    singleFamily: 953000,
    condo: 334000,
    source: "Zillow Home Value Index (ZHVI) by home type, Miami Shores FL, accessed August 2026",
  },
  "miami-springs": {
    singleFamily: 755000,
    condo: 236000,
    source: "Zillow Home Value Index (ZHVI) by home type, Miami Springs FL, accessed August 2026",
  },
  "miramar": {
    singleFamily: 556000,
    condo: 267000,
    source: "Zillow Home Value Index (ZHVI) by home type, Miramar FL, accessed August 2026",
  },
  "north-bay-village": {
    singleFamily: 1112000,
    condo: 361000,
    source: "Zillow Home Value Index (ZHVI) by home type, North Bay Village FL, accessed August 2026",
  },
  "north-lauderdale": {
    singleFamily: 379000,
    condo: 167000,
    source: "Zillow Home Value Index (ZHVI) by home type, North Lauderdale FL, accessed August 2026",
  },
  "north-miami": {
    singleFamily: 510000,
    condo: 183000,
    source: "Zillow Home Value Index (ZHVI) by home type, North Miami FL, accessed August 2026",
  },
  "north-miami-beach": {
    singleFamily: 512000,
    condo: 228000,
    source: "Zillow Home Value Index (ZHVI) by home type, North Miami Beach FL, accessed August 2026",
  },
  "oakland-park": {
    singleFamily: 453000,
    condo: 173000,
    source: "Zillow Home Value Index (ZHVI) by home type, Oakland Park FL, accessed August 2026",
  },
  "opa-locka": {
    singleFamily: 483000,
    condo: 210000,
    source: "Zillow Home Value Index (ZHVI) by home type, Opa-locka FL, accessed August 2026",
  },
  "palmetto-bay": {
    singleFamily: 1157000,
    condo: 222000,
    source: "Zillow Home Value Index (ZHVI) by home type, Palmetto Bay FL, accessed August 2026",
  },
  "parkland": {
    singleFamily: 1105000,
    condo: 452000,
    source: "Zillow Home Value Index (ZHVI) by home type, Parkland FL, accessed August 2026",
  },
  "pembroke-park": {
    singleFamily: 318000,
    condo: 157000,
    source: "Zillow Home Value Index (ZHVI) by home type, Pembroke Park FL, accessed August 2026",
  },
  "pembroke-pines": {
    singleFamily: 593000,
    condo: 189000,
    source: "Zillow Home Value Index (ZHVI) by home type, Pembroke Pines FL, accessed August 2026",
  },
  "pinecrest": {
    singleFamily: 2512000,
    condo: 289000,
    source: "Zillow Home Value Index (ZHVI) by home type, Pinecrest FL, accessed August 2026",
  },
  "plantation": {
    singleFamily: 621000,
    condo: 208000,
    source: "Zillow Home Value Index (ZHVI) by home type, Plantation FL, accessed August 2026",
  },
  "pompano-beach": {
    singleFamily: 448000,
    condo: 249000,
    source: "Zillow Home Value Index (ZHVI) by home type, Pompano Beach FL, accessed August 2026",
  },
  "southwest-ranches": {
    singleFamily: 1467000,
    condo: null,
    source: "Zillow Home Value Index (ZHVI) by home type, Southwest Ranches FL, accessed August 2026",
  },
  "sunrise": {
    singleFamily: 473000,
    condo: 139000,
    source: "Zillow Home Value Index (ZHVI) by home type, Sunrise FL, accessed August 2026",
  },
  "surfside": {
    singleFamily: 1570000,
    condo: 929000,
    source: "Zillow Home Value Index (ZHVI) by home type, Surfside FL, accessed August 2026",
  },
  "sweetwater": {
    singleFamily: 580000,
    condo: 276000,
    source: "Zillow Home Value Index (ZHVI) by home type, Sweetwater FL, accessed August 2026",
  },
  "tamarac": {
    singleFamily: 378000,
    condo: 155000,
    source: "Zillow Home Value Index (ZHVI) by home type, Tamarac FL, accessed August 2026",
  },
  "virginia-gardens": {
    singleFamily: 630000,
    condo: 204000,
    source: "Zillow Home Value Index (ZHVI) by home type, Virginia Gardens FL, accessed August 2026",
  },
  "west-miami": {
    singleFamily: 673000,
    condo: null,
    source: "Zillow Home Value Index (ZHVI) by home type, West Miami FL, accessed August 2026",
  },
  "west-park": {
    singleFamily: 431000,
    condo: null,
    source: "Zillow Home Value Index (ZHVI) by home type, West Park FL, accessed August 2026",
  },
  "weston": {
    singleFamily: 813000,
    condo: 310000,
    source: "Zillow Home Value Index (ZHVI) by home type, Weston FL, accessed August 2026",
  },
  "wilton-manors": {
    singleFamily: 711000,
    condo: 238000,
    source: "Zillow Home Value Index (ZHVI) by home type, Wilton Manors FL, accessed August 2026",
  },
  "south-miami": {
    singleFamily: 822000,
    condo: null,
    source: "Redfin, South Miami FL housing market data (all home types, 3-mo. median), accessed August 2026",
  },
  "medley": {
    singleFamily: 659000,
    condo: null,
    source: "Redfin, Medley FL housing market data (all home types, 3-mo. median), accessed August 2026",
  },
};
