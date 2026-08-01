// Pricing is approximate — pulled from public market reports (Redfin,
// Zillow, Miami Today, local brokerage market reports) as of mid-2026, and
// moves constantly. Treat every figure here as a starting reference point,
// not a valuation — always confirm with current MLS comps.
const neighborhoods = [
  {
    slug: "brickell",
    name: "Brickell",
    image: "/images/brickell.jpg",
    tagline: { en: "High-rise, walkable, young professionals", es: "Rascacielos, transitable a pie, jóvenes profesionales" },
    history: {
      en: "Once known as \"Millionaire's Row\" for the mansions lining Brickell Avenue in the early 1900s, Brickell reinvented itself as Miami's financial district — the \"Wall Street of the South\" — starting in the 1970s. Since the 2000s it's exploded into one of the densest, most vertical residential neighborhoods in the country.",
      es: "Antes conocida como la \"Milla de los Millonarios\" por las mansiones a lo largo de Brickell Avenue a principios del siglo XX, Brickell se reinventó como el distrito financiero de Miami — el \"Wall Street del Sur\" — a partir de la década de 1970. Desde la década de 2000 se ha convertido en uno de los vecindarios residenciales más densos y verticales del país.",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "Almost no single-family stock — Brickell is nearly all high-rise.", es: "Casi no hay viviendas unifamiliares — Brickell es casi todo rascacielos." } },
      condo: { value: 790000, note: { en: "Entry-level 1BR units run roughly $300K–$500K.", es: "Las unidades de 1 habitación de nivel inicial rondan los $300,000–$500,000." } },
      multifamily: { note: { en: "Virtually no small multifamily stock; investment activity here is almost entirely condo units bought for rental.", es: "Prácticamente no hay propiedades multifamiliares pequeñas; la inversión aquí es casi toda en condominios comprados para alquiler." } },
    },
  },
  {
    slug: "coral-gables",
    name: "Coral Gables",
    image: "/images/coral-gables.jpg",
    tagline: { en: "Tree-lined, historic, family-oriented", es: "Arbolado, histórico, orientado a familias" },
    history: {
      en: "Built by George Merrick starting in 1921, Coral Gables was one of America's first master-planned communities — a \"City Beautiful\" of Mediterranean Revival architecture, grand boulevards, and coral-rock landmarks like the Biltmore Hotel and Venetian Pool. It remains one of Miami-Dade's most tightly regulated, historic neighborhoods.",
      es: "Construida por George Merrick a partir de 1921, Coral Gables fue una de las primeras comunidades planificadas de Estados Unidos — una \"Ciudad Bella\" de arquitectura de Estilo Mediterráneo Revival, grandes bulevares y monumentos de piedra coralina como el Hotel Biltmore y la Piscina Veneciana. Sigue siendo uno de los vecindarios históricos más regulados de Miami-Dade.",
    },
    pricing: {
      singleFamily: { value: 2400000, note: { en: "Among the highest in Miami-Dade, driven by historic estates and strict zoning.", es: "Entre los más altos de Miami-Dade, impulsado por propiedades históricas y zonificación estricta." } },
      condo: { value: 650000, note: { en: "Fewer condo towers than Brickell — most stock is mid-rise.", es: "Menos torres de condominios que Brickell — la mayoría son edificios de baja altura." } },
      multifamily: { note: { en: "Small multifamily is rare and expensive here; zoning strongly favors single-family.", es: "Las propiedades multifamiliares pequeñas son raras y costosas aquí; la zonificación favorece fuertemente lo unifamiliar." } },
    },
  },
  {
    slug: "wynwood",
    name: "Wynwood",
    image: "/images/wynwood.jpg",
    tagline: { en: "Art, lofts, nightlife", es: "Arte, lofts, vida nocturna" },
    history: {
      en: "A former garment-district and warehouse area, Wynwood was transformed starting in 2009 when developer Tony Goldman commissioned the Wynwood Walls mural project. It's now Miami's arts and nightlife district, with warehouse conversions, breweries, and a fast-growing wave of new-construction lofts and mixed-use towers.",
      es: "Antiguo distrito de confección y bodegas, Wynwood se transformó a partir de 2009 cuando el desarrollador Tony Goldman encargó el proyecto de murales Wynwood Walls. Ahora es el distrito de arte y vida nocturna de Miami, con bodegas convertidas, cervecerías y una ola creciente de lofts de nueva construcción y torres de uso mixto.",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "Very limited single-family inventory — the area is dominated by lofts and new towers.", es: "Inventario unifamiliar muy limitado — el área está dominada por lofts y torres nuevas." } },
      condo: { value: 550000, note: { en: "Loft and condo prices vary widely by building age and finish level.", es: "Los precios de lofts y condominios varían mucho según la antigüedad del edificio y el nivel de acabado." } },
      multifamily: { note: { en: "Older 2-4 unit buildings still exist near the edges and draw strong investor interest given redevelopment potential.", es: "Todavía existen edificios más antiguos de 2 a 4 unidades cerca de los bordes y atraen fuerte interés de inversionistas por su potencial de reurbanización." } },
    },
  },
  {
    slug: "coconut-grove",
    name: "Coconut Grove",
    image: "/images/coconut-grove.jpg",
    tagline: { en: "Bayfront, laid-back, established", es: "Frente a la bahía, relajado, establecido" },
    history: {
      en: "Miami's oldest continuously inhabited neighborhood, Coconut Grove was settled in the 1800s by New England sailors and Bahamian immigrants, whose descendants still anchor the historic West Grove community. It grew into a bohemian, artsy enclave by the mid-1900s and remains one of Miami's leafiest, most laid-back areas.",
      es: "El vecindario habitado continuamente más antiguo de Miami, Coconut Grove fue colonizado en el siglo XIX por marineros de Nueva Inglaterra e inmigrantes bahameños, cuyos descendientes todavía anclan la comunidad histórica de West Grove. Se convirtió en un enclave bohemio y artístico a mediados del siglo XX y sigue siendo una de las áreas más arboladas y relajadas de Miami.",
    },
    pricing: {
      singleFamily: { value: 2700000, note: { en: "Among the priciest in the county, especially near the bay.", es: "Entre los más caros del condado, especialmente cerca de la bahía." } },
      condo: { value: 700000, note: { en: "Concentrated in a handful of bayfront and village-center buildings.", es: "Concentrado en un puñado de edificios frente a la bahía y en el centro del pueblo." } },
      multifamily: { note: { en: "Some small multifamily remains in West Grove, though development pressure is pushing prices up quickly.", es: "Quedan algunas propiedades multifamiliares pequeñas en West Grove, aunque la presión del desarrollo está subiendo los precios rápidamente." } },
    },
  },
  {
    slug: "doral",
    name: "Doral",
    image: "/images/doral.jpg",
    tagline: { en: "New construction, family suburbs", es: "Construcción nueva, suburbios familiares" },
    history: {
      en: "Named for founders Doris and Alfred Kaskel (\"Dor-Al\"), Doral was developed in the 1960s around a golf resort and incorporated as its own city in 2003. Its proximity to Miami International Airport and business parks fueled explosive growth as a hub for Venezuelan and other Latin American expat communities.",
      es: "Nombrado en honor a sus fundadores Doris y Alfred Kaskel (\"Dor-Al\"), Doral se desarrolló en la década de 1960 alrededor de un resort de golf y se incorporó como ciudad propia en 2003. Su cercanía al Aeropuerto Internacional de Miami y a parques empresariales impulsó un crecimiento explosivo como centro para comunidades de expatriados venezolanos y otros latinoamericanos.",
    },
    pricing: {
      singleFamily: { value: 1000000, note: { en: "Mostly newer-construction homes in gated communities.", es: "Principalmente casas de construcción reciente en comunidades cerradas." } },
      condo: { value: 476000, note: { en: "Large, relatively young condo inventory compared to the rest of the county.", es: "Inventario de condominios grande y relativamente joven comparado con el resto del condado." } },
      multifamily: { note: { en: "Limited — Doral was built out mostly as single-family and condo, not duplex/triplex stock.", es: "Limitado — Doral se construyó principalmente como unifamiliar y condominios, no como dúplex/tríplex." } },
    },
  },
  {
    slug: "midtown-edgewater",
    name: "Midtown / Edgewater",
    image: "/images/midtown-edgewater.jpg",
    tagline: { en: "Trendy, waterfront high-rises, walkable", es: "De moda, rascacielos junto al agua, transitable a pie" },
    history: {
      en: "Midtown was built in the 2000s on a former FEC railway yard as a master-planned, walkable district of shops and condos, while neighboring Edgewater — an older Biscayne Bay-front area — has filled in rapidly with new high-rise towers, becoming one of Miami's fastest-growing condo corridors.",
      es: "Midtown se construyó en la década de 2000 sobre un antiguo patio ferroviario de FEC como un distrito planificado y transitable a pie de tiendas y condominios, mientras que la vecina Edgewater — un área más antigua frente a la Bahía de Biscayne — se ha llenado rápidamente de nuevas torres de gran altura, convirtiéndose en uno de los corredores de condominios de más rápido crecimiento de Miami.",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "Almost no single-family stock — this is a dense, high-rise corridor.", es: "Casi no hay propiedades unifamiliares — este es un corredor denso de gran altura." } },
      condo: { value: 715000, note: { en: "Newer waterfront towers in Edgewater command a premium over Midtown's older stock.", es: "Las torres más nuevas frente al agua en Edgewater tienen un precio superior al inventario más antiguo de Midtown." } },
      multifamily: { note: { en: "Essentially no small multifamily stock left — nearly all redeveloped into condo towers.", es: "Prácticamente no quedan propiedades multifamiliares pequeñas — casi todas reurbanizadas en torres de condominios." } },
    },
  },
  {
    slug: "miami-beach",
    name: "Miami Beach",
    image: "/images/miami-beach.jpg",
    tagline: { en: "Beaches, Art Deco, nightlife", es: "Playas, Art Deco, vida nocturna" },
    history: {
      en: "Built on reclaimed mangrove swamp starting in the 1910s by developer Carl Fisher, Miami Beach boomed with Art Deco hotels in the 1930s–40s, fell into decline mid-century, then was reborn as a fashion and nightlife capital during South Beach's 1980s–90s revival. Its Art Deco Historic District remains one of the largest in the US.",
      es: "Construida sobre un manglar recuperado a partir de la década de 1910 por el promotor Carl Fisher, Miami Beach floreció con hoteles Art Deco en los años 1930-40, decayó a mediados de siglo y luego renació como capital de la moda y la vida nocturna durante el renacimiento de South Beach en los años 1980-90. Su Distrito Histórico Art Deco sigue siendo uno de los más grandes de EE. UU.",
    },
    pricing: {
      singleFamily: { value: 630000, note: { en: "Wide range — from small bungalows to waterfront mansions on the barrier island.", es: "Amplio rango — desde pequeños bungalós hasta mansiones frente al mar en la isla barrera." } },
      condo: { value: 539000, note: { en: "Includes everything from vintage Art Deco walk-ups to new luxury towers.", es: "Incluye desde edificios Art Deco vintage sin ascensor hasta nuevas torres de lujo." } },
      multifamily: { note: { en: "Small Art Deco-era apartment buildings are common and popular with investors, subject to historic preservation rules.", es: "Los edificios de apartamentos de la era Art Deco son comunes y populares entre inversionistas, sujetos a reglas de preservación histórica." } },
    },
  },
  {
    slug: "downtown",
    name: "Downtown Miami",
    image: "/images/downtown.jpg",
    tagline: { en: "Urban core, business, transit hub", es: "Núcleo urbano, negocios, centro de transporte" },
    history: {
      en: "The site of Miami's original 1896 incorporation around the Miami River and Flagler Street, Downtown spent decades as a daytime-only business district before a 2000s condo boom filled it with residential towers, turning it into a genuine 24-hour urban core connected by Metromover and Metrorail.",
      es: "El sitio de la incorporación original de Miami en 1896 alrededor del río Miami y Flagler Street, el Downtown pasó décadas como distrito de negocios solo diurno antes de que un auge de condominios en la década de 2000 lo llenara de torres residenciales, convirtiéndolo en un verdadero núcleo urbano de 24 horas conectado por Metromover y Metrorail.",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "No meaningful single-family market — Downtown is entirely high-rise.", es: "No hay un mercado unifamiliar significativo — el Downtown es completamente de rascacielos." } },
      condo: { value: 650000, note: { en: "Ranges from older 2000s-boom towers to brand-new luxury developments.", es: "Va desde torres más antiguas del auge de los 2000 hasta desarrollos de lujo completamente nuevos." } },
      multifamily: { note: { en: "No small multifamily stock — investment activity is entirely condo units.", es: "No hay propiedades multifamiliares pequeñas — la actividad de inversión es completamente en unidades de condominio." } },
    },
  },
  {
    slug: "hialeah",
    name: "Hialeah",
    image: "/images/hialeah.jpg",
    tagline: { en: "Cuban heritage, dense, working-class", es: "Herencia cubana, denso, clase trabajadora" },
    history: {
      en: "Founded in 1925 around an aviation field and the Hialeah Park horse-racing track, Hialeah became a major landing point for Cuban immigrants from the 1960s onward. It's now one of the most densely populated cities in Florida and has one of the highest concentrations of Cuban-Americans in the country.",
      es: "Fundada en 1925 alrededor de un campo de aviación y el hipódromo Hialeah Park, Hialeah se convirtió en un importante punto de llegada para inmigrantes cubanos a partir de la década de 1960. Ahora es una de las ciudades más densamente pobladas de Florida y tiene una de las concentraciones más altas de cubanoamericanos del país.",
    },
    pricing: {
      singleFamily: { value: 450000, note: { en: "One of the more affordable single-family markets in Miami-Dade.", es: "Uno de los mercados unifamiliares más asequibles de Miami-Dade." } },
      condo: { value: 350000, note: { en: "Mostly older, smaller buildings compared to coastal neighborhoods.", es: "Principalmente edificios más antiguos y pequeños comparados con los vecindarios costeros." } },
      multifamily: { note: { en: "Duplexes and small apartment buildings are common and popular with investors for their cash flow.", es: "Los dúplex y edificios pequeños de apartamentos son comunes y populares entre inversionistas por su flujo de caja." } },
    },
  },
  {
    slug: "miami-gardens",
    name: "Miami Gardens",
    image: "/images/miami-gardens.jpg",
    tagline: { en: "Suburban, diverse, family-focused", es: "Suburbano, diverso, orientado a familias" },
    history: {
      en: "Incorporated in 2003 from the Carol City and Opa-locka North areas, Miami Gardens is one of Miami-Dade's newest cities and has the largest Black population of any city in Florida. It's home to Hard Rock Stadium, home field for the Miami Dolphins and host to Super Bowls and the Miami Grand Prix.",
      es: "Incorporada en 2003 a partir de las áreas de Carol City y Opa-locka Norte, Miami Gardens es una de las ciudades más nuevas de Miami-Dade y tiene la mayor población afroamericana de cualquier ciudad de Florida. Es sede del Hard Rock Stadium, campo local de los Miami Dolphins y anfitrión de Super Bowls y el Gran Premio de Miami.",
    },
    pricing: {
      singleFamily: { value: 400000, note: { en: "One of the more affordable single-family markets in the county.", es: "Uno de los mercados unifamiliares más asequibles del condado." } },
      condo: { value: 300000, note: { en: "Smaller condo/townhome market than coastal areas.", es: "Mercado de condominios/casas adosadas más pequeño que en las áreas costeras." } },
      multifamily: { note: { en: "Popular with investors for duplexes and small rental buildings given relatively low entry prices.", es: "Popular entre inversionistas para dúplex y edificios pequeños de alquiler dado el precio de entrada relativamente bajo." } },
    },
  },
  {
    slug: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    image: "/images/sunny-isles-beach.jpg",
    tagline: { en: "Oceanfront towers, luxury condos", es: "Torres frente al mar, condominios de lujo" },
    history: {
      en: "Once a strip of budget motels nicknamed \"Motel Row\" in the mid-1900s, this barrier-island city was rebuilt starting in the 1990s–2000s into a corridor of luxury oceanfront condo towers, drawing enough international buyers — especially from Russia and Latin America — to earn the nickname \"Little Moscow.\"",
      es: "Antes una franja de moteles económicos apodada \"Motel Row\" a mediados del siglo XX, esta ciudad en la isla barrera fue reconstruida a partir de los años 1990-2000 en un corredor de torres de condominios de lujo frente al mar, atrayendo suficientes compradores internacionales — especialmente de Rusia y América Latina — para ganarse el apodo de \"Little Moscow\".",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "Almost no single-family homes — this is a barrier-island condo market.", es: "Casi no hay casas unifamiliares — este es un mercado de condominios en isla barrera." } },
      condo: { value: 749000, note: { en: "Luxury oceanfront towers push the median well above nearby areas; some units trade above $1.3M.", es: "Las torres de lujo frente al mar elevan la mediana muy por encima de las áreas cercanas; algunas unidades se venden por encima de $1.3M." } },
      multifamily: { note: { en: "Essentially no small multifamily stock — the market is entirely high-rise condo.", es: "Prácticamente no hay propiedades multifamiliares pequeñas — el mercado es completamente de condominios de gran altura." } },
    },
  },
  {
    slug: "aventura",
    name: "Aventura",
    image: "/images/aventura.jpg",
    tagline: { en: "Shopping, high-rises, planned community", es: "Compras, rascacielos, comunidad planificada" },
    history: {
      en: "Developed starting in the 1970s by Don Soffer as a master-planned community anchored by Aventura Mall, one of the largest shopping centers in the US, Aventura grew into a dense corridor of luxury condo towers and became its own incorporated city in 1995.",
      es: "Desarrollada a partir de la década de 1970 por Don Soffer como una comunidad planificada anclada en Aventura Mall, uno de los centros comerciales más grandes de EE. UU., Aventura creció hasta convertirse en un denso corredor de torres de condominios de lujo y se convirtió en su propia ciudad incorporada en 1995.",
    },
    pricing: {
      singleFamily: { value: 480000, note: { en: "A small slice of the market — Aventura is overwhelmingly condo towers.", es: "Una pequeña parte del mercado — Aventura es abrumadoramente de torres de condominios." } },
      condo: { value: 550000, note: { en: "Wide range from older towers to new luxury high-rises near the mall.", es: "Amplio rango desde torres antiguas hasta nuevos rascacielos de lujo cerca del centro comercial." } },
      multifamily: { note: { en: "Essentially no small multifamily stock — nearly all residential inventory is condo.", es: "Prácticamente no hay propiedades multifamiliares pequeñas — casi todo el inventario residencial es de condominios." } },
    },
  },
  {
    slug: "hallandale-beach",
    name: "Hallandale Beach",
    image: "/images/hallandale-beach.jpg",
    tagline: { en: "Beachfront, condos, quiet", es: "Frente a la playa, condominios, tranquilo" },
    history: {
      en: "A historically working-class beach town in southern Broward County, Hallandale Beach transformed over the 2000s as Gulfstream Park's casino and beachfront condo development brought in new investment, while still remaining more affordable than its neighbors to the south.",
      es: "Un pueblo costero históricamente de clase trabajadora en el sur del condado de Broward, Hallandale Beach se transformó durante la década de 2000 cuando el casino de Gulfstream Park y el desarrollo de condominios frente a la playa atrajeron nuevas inversiones, aunque sigue siendo más asequible que sus vecinos al sur.",
    },
    pricing: {
      singleFamily: { value: 383000, note: { en: "Notably more affordable than Sunny Isles Beach or Aventura just to the south.", es: "Notablemente más asequible que Sunny Isles Beach o Aventura, justo al sur." } },
      condo: { value: 300000, note: { en: "A mix of older beachfront buildings and newer towers near Gulfstream Park.", es: "Una mezcla de edificios más antiguos frente a la playa y torres más nuevas cerca de Gulfstream Park." } },
      multifamily: { note: { en: "Some small multifamily near the older town core, popular with investors for its relative affordability.", es: "Algunas propiedades multifamiliares pequeñas cerca del centro más antiguo del pueblo, populares entre inversionistas por su relativa asequibilidad." } },
    },
  },
];

export function getAllNeighborhoods() {
  return neighborhoods;
}

export function getNeighborhood(slug) {
  return neighborhoods.find((n) => n.slug === slug);
}
