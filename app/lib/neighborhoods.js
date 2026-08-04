// Pricing is approximate — pulled from public market reports (Redfin,
// Zillow, Miami Today, local brokerage market reports) as of mid-2026, and
// moves constantly. Treat every figure here as a starting reference point,
// not a valuation — always confirm with current MLS comps.
const neighborhoods = [
  {
    slug: "brickell",
    name: "Brickell",
    image: "/images/brickell.jpg",
    tagline: {
      en: "High-rise, walkable, young professionals",
      es: "Rascacielos, transitable a pie, jóvenes profesionales",
      fr: "Gratte-ciels, quartier piétonnier, jeunes professionnels",
      ht: "Gratsyèl, katye pou mache, jèn pwofesyonèl",
      pt: "Arranha-céus, fácil de caminhar, jovens profissionais",
      it: "Grattacieli, quartiere pedonale, giovani professionisti",
    },
    history: {
      en: "Once known as \"Millionaire's Row\" for the mansions lining Brickell Avenue in the early 1900s, Brickell reinvented itself as Miami's financial district — the \"Wall Street of the South\" — starting in the 1970s. Since the 2000s it's exploded into one of the densest, most vertical residential neighborhoods in the country.",
      es: "Antes conocida como la \"Milla de los Millonarios\" por las mansiones a lo largo de Brickell Avenue a principios del siglo XX, Brickell se reinventó como el distrito financiero de Miami — el \"Wall Street del Sur\" — a partir de la década de 1970. Desde la década de 2000 se ha convertido en uno de los vecindarios residenciales más densos y verticales del país.",
      fr: "Autrefois surnommée « Millionaire's Row » pour les manoirs qui bordaient Brickell Avenue au début des années 1900, Brickell s'est réinventée en district financier de Miami — le « Wall Street du Sud » — à partir des années 1970. Depuis les années 2000, elle est devenue l'un des quartiers résidentiels les plus denses et les plus verticaux du pays.",
      ht: "Yon fwa yo te rele li \"Millionaire's Row\" pou gwo kay rich ki te alinye sou Brickell Avenue nan kòmansman ane 1900 yo, Brickell te reenvante tèt li kòm distri finansye Miami — \"Wall Street Sid la\" — kòmanse nan ane 1970 yo. Depi ane 2000 yo li eksploze pou li vin youn nan katye rezidansyèl ki pi dans, ki pi vètikal nan peyi a.",
      pt: "Antes conhecida como \"Millionaire's Row\" pelas mansões que margeavam a Brickell Avenue no início dos anos 1900, Brickell se reinventou como o distrito financeiro de Miami — a \"Wall Street do Sul\" — a partir da década de 1970. Desde os anos 2000, explodiu e se tornou um dos bairros residenciais mais densos e verticais do país.",
      it: "Un tempo conosciuta come \"Millionaire's Row\" per le ville che costeggiavano Brickell Avenue all'inizio del XX secolo, Brickell si è reinventata come distretto finanziario di Miami — la \"Wall Street del Sud\" — a partire dagli anni '70. Dagli anni 2000 è esplosa diventando uno dei quartieri residenziali più densi e verticali del paese.",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "Almost no single-family stock — Brickell is nearly all high-rise.", es: "Casi no hay viviendas unifamiliares — Brickell es casi todo rascacielos." } },
      condo: { value: 790000, note: { en: "Entry-level 1BR units run roughly $300K–$500K.", es: "Las unidades de 1 habitación de nivel inicial rondan los $300,000–$500,000." } },
    },
    center: [25.7617, -80.1918],
    newConstruction: {
      en: "Brickell's skyline keeps climbing — SIRO Brickell (350 branded residences by Kerzner), the Foster + Partners-designed 619 Brickell, and a 60-story Miami River tower with 300 feet of waterfront are all underway, adding to roughly 4,500 new condo units expected by 2030.",
      es: "El horizonte de Brickell sigue creciendo — SIRO Brickell (350 residencias de marca por Kerzner), la torre 619 Brickell diseñada por Foster + Partners, y una torre de 60 pisos junto al río Miami con 300 pies de frente al agua están en construcción, sumando cerca de 4,500 nuevas unidades de condominio previstas para 2030.",
    },
    funFacts: {
      en: [
        "Brickell Avenue was once called 'Millionaire's Row' — lined with waterfront mansions in the early 1900s before it became Miami's financial district.",
        "With over 26,500 condo units packed into about one square mile, it's one of the most densely built residential neighborhoods in the U.S.",
        "Brickell City Centre's open-air 'Climate Ribbon' canopy was engineered specifically to cool and shade the plaza below.",
      ],
      es: [
        "Brickell Avenue alguna vez se llamó 'la Milla de los Millonarios' — bordeada de mansiones frente al agua a principios del siglo XX antes de convertirse en el distrito financiero de Miami.",
        "Con más de 26,500 unidades de condominio en aproximadamente una milla cuadrada, es uno de los vecindarios residenciales más densos de EE. UU.",
        "El techo abierto 'Climate Ribbon' de Brickell City Centre fue diseñado específicamente para enfriar y dar sombra a la plaza.",
      ],
    },
    family: {
      en: "Brickell is almost entirely high-rise condos, so it suits families who want an urban, walkable lifestyle more than a big yard — Brickell Key and the Simpson Park green spaces are the main outdoor options, and most families with school-age kids look at private schools nearby rather than zoned public options.",
      es: "Brickell es casi todo condominios de gran altura, así que se adapta mejor a familias que buscan un estilo de vida urbano y transitable a pie que a las que buscan un gran patio — Brickell Key y el parque Simpson Park son las principales opciones al aire libre, y la mayoría de las familias con niños en edad escolar consideran escuelas privadas cercanas en lugar de opciones públicas zonificadas.",
    },
    movingTips: {
      en: "Coming from outside Miami-Dade, budget for condo association fees on top of the mortgage — they can run $1,000–$2,000+/month in Brickell towers — and know that most buildings require board approval before you can close.",
      es: "Si vienes de fuera de Miami-Dade, presupuesta las cuotas de la asociación de condominio además de la hipoteca — pueden ser de $1,000–$2,000+ al mes en las torres de Brickell — y ten en cuenta que la mayoría de los edificios requieren aprobación de la junta antes de poder cerrar la compra.",
    },
  },
  {
    slug: "coral-gables",
    name: "Coral Gables",
    image: "/images/coral-gables.jpg",
    tagline: {
      en: "Tree-lined, historic, family-oriented",
      es: "Arbolado, histórico, orientado a familias",
      fr: "Arboré, historique, familial",
      ht: "Plen pyebwa, istorik, oryante pou fanmi",
      pt: "Arborizado, histórico, voltado para famílias",
      it: "Alberato, storico, a misura di famiglia",
    },
    history: {
      en: "Built by George Merrick starting in 1921, Coral Gables was one of America's first master-planned communities — a \"City Beautiful\" of Mediterranean Revival architecture, grand boulevards, and coral-rock landmarks like the Biltmore Hotel and Venetian Pool. It remains one of Miami-Dade's most tightly regulated, historic neighborhoods.",
      es: "Construida por George Merrick a partir de 1921, Coral Gables fue una de las primeras comunidades planificadas de Estados Unidos — una \"Ciudad Bella\" de arquitectura de Estilo Mediterráneo Revival, grandes bulevares y monumentos de piedra coralina como el Hotel Biltmore y la Piscina Veneciana. Sigue siendo uno de los vecindarios históricos más regulados de Miami-Dade.",
      fr: "Construite par George Merrick à partir de 1921, Coral Gables fut l'une des premières communautés planifiées d'Amérique — une « Cité Idéale » d'architecture néo-méditerranéenne, de grands boulevards et de monuments en pierre de corail comme le Biltmore Hotel et le Venetian Pool. Elle reste l'un des quartiers historiques les plus strictement réglementés de Miami-Dade.",
      ht: "Konstwi pa George Merrick kòmanse an 1921, Coral Gables te youn nan premye kominote Amerik ki te planifye antyeman — yon \"Vil Bèl\" ak achitekti Mediterane Revival, gwo boulva, ak monimen wòch koray tankou Biltmore Hotel ak Venetian Pool. Li rete youn nan katye istorik Miami-Dade ki pi byen reglemante.",
      pt: "Construída por George Merrick a partir de 1921, Coral Gables foi uma das primeiras comunidades planejadas da América — uma \"Cidade Bela\" de arquitetura de estilo mediterrâneo, grandes avenidas e marcos em pedra de coral como o Biltmore Hotel e a Venetian Pool. Continua sendo um dos bairros históricos mais rigidamente regulamentados de Miami-Dade.",
      it: "Costruita da George Merrick a partire dal 1921, Coral Gables fu una delle prime comunità pianificate d'America — una \"Città Ideale\" di architettura in stile mediterraneo, grandi viali e monumenti in roccia corallina come l'Hotel Biltmore e la Venetian Pool. Resta uno dei quartieri storici più rigidamente regolamentati di Miami-Dade.",
    },
    pricing: {
      singleFamily: { value: 2400000, note: { en: "Among the highest in Miami-Dade, driven by historic estates and strict zoning.", es: "Entre los más altos de Miami-Dade, impulsado por propiedades históricas y zonificación estricta." } },
      condo: { value: 650000, note: { en: "Fewer condo towers than Brickell — most stock is mid-rise.", es: "Menos torres de condominios que Brickell — la mayoría son edificios de baja altura." } },
    },
    center: [25.7215, -80.2685],
    newConstruction: {
      en: "Construction has broken ground on Seventeen Gables Residences (117 condos from the mid-$600Ks) on Douglas Road, and two North Gables apartment projects will add 362 more units along the Galiano Street corridor by 2028.",
      es: "Ya comenzó la construcción de Seventeen Gables Residences (117 condominios desde los $600,000) en Douglas Road, y dos proyectos de apartamentos en North Gables sumarán 362 unidades más a lo largo del corredor de Galiano Street para 2028.",
    },
    funFacts: {
      en: [
        "Founder George Merrick required Mediterranean Revival architecture and coral-rock detailing by deed restriction — rules the city still enforces today.",
        "The Venetian Pool, carved out of a former coral rock quarry in 1923, is on the National Register of Historic Places and still open to swim.",
        "Coral Gables has its own police, fire, and public works departments — one of the few Miami-Dade cities to run nearly everything in-house.",
      ],
      es: [
        "El fundador George Merrick exigió arquitectura de estilo mediterráneo y detalles de piedra coralina mediante restricciones de escritura — reglas que la ciudad todavía hace cumplir hoy.",
        "La Venetian Pool, tallada en una antigua cantera de piedra coralina en 1923, está en el Registro Nacional de Lugares Históricos y sigue abierta para nadar.",
        "Coral Gables tiene su propio departamento de policía, bomberos y obras públicas — una de las pocas ciudades de Miami-Dade que maneja casi todo internamente.",
      ],
    },
    family: {
      en: "Coral Gables is consistently one of the most family-oriented cities in the county — strict zoning keeps streets low-density and tree-canopied, and it's zoned for some of Miami-Dade's top-rated public schools alongside well-known private schools like Ransom Everglades.",
      es: "Coral Gables es constantemente una de las ciudades más orientadas a familias del condado — la zonificación estricta mantiene las calles de baja densidad y con dosel de árboles, y está zonificada para algunas de las escuelas públicas mejor calificadas de Miami-Dade junto con escuelas privadas reconocidas como Ransom Everglades.",
    },
    movingTips: {
      en: "If you're relocating from out of state, know that Coral Gables enforces some of the strictest architectural and landscaping review rules in Florida — even paint colors and tree removal can require city approval, so factor that into renovation plans.",
      es: "Si te mudas desde otro estado, ten en cuenta que Coral Gables aplica algunas de las reglas de revisión arquitectónica y paisajística más estrictas de Florida — incluso el color de la pintura y la remoción de árboles pueden requerir aprobación de la ciudad, así que considera esto en tus planes de renovación.",
    },
  },
  {
    slug: "wynwood",
    name: "Wynwood",
    image: "/images/wynwood.jpg",
    tagline: {
      en: "Art, lofts, nightlife",
      es: "Arte, lofts, vida nocturna",
      fr: "Art, lofts, vie nocturne",
      ht: "Atizay, lof, lavi nannwit",
      pt: "Arte, lofts, vida noturna",
      it: "Arte, loft, vita notturna",
    },
    history: {
      en: "A former garment-district and warehouse area, Wynwood was transformed starting in 2009 when developer Tony Goldman commissioned the Wynwood Walls mural project. It's now Miami's arts and nightlife district, with warehouse conversions, breweries, and a fast-growing wave of new-construction lofts and mixed-use towers.",
      es: "Antiguo distrito de confección y bodegas, Wynwood se transformó a partir de 2009 cuando el desarrollador Tony Goldman encargó el proyecto de murales Wynwood Walls. Ahora es el distrito de arte y vida nocturna de Miami, con bodegas convertidas, cervecerías y una ola creciente de lofts de nueva construcción y torres de uso mixto.",
      fr: "Ancien quartier de la confection et des entrepôts, Wynwood s'est transformé à partir de 2009 lorsque le promoteur Tony Goldman a commandé le projet de fresques murales Wynwood Walls. C'est aujourd'hui le quartier des arts et de la vie nocturne de Miami, avec des entrepôts reconvertis, des brasseries, et une vague croissante de lofts neufs et de tours à usage mixte.",
      ht: "Yon ansyen zòn distri rad ak depo, Wynwood te transfòme kòmanse an 2009 lè devlopè Tony Goldman te kòmande pwojè miral Wynwood Walls la. Kounye a se distri atizay ak lavi nannwit Miami, ak depo ki konvèti, brasri, ak yon vag k ap grandi vit nan lof nouvo konstriksyon ak tou itilizasyon mikste.",
      pt: "Antiga região de fábricas de roupas e galpões, Wynwood foi transformada a partir de 2009, quando o incorporador Tony Goldman encomendou o projeto de murais Wynwood Walls. Hoje é o distrito de arte e vida noturna de Miami, com galpões convertidos, cervejarias artesanais e uma onda crescente de lofts de construção nova e torres de uso misto.",
      it: "Ex quartiere dell'abbigliamento e dei magazzini, Wynwood si è trasformato a partire dal 2009, quando lo sviluppatore Tony Goldman commissionò il progetto di murales Wynwood Walls. Oggi è il quartiere dell'arte e della vita notturna di Miami, con magazzini riconvertiti, birrifici e un'ondata crescente di loft di nuova costruzione e torri a uso misto.",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "Very limited single-family inventory — the area is dominated by lofts and new towers.", es: "Inventario unifamiliar muy limitado — el área está dominada por lofts y torres nuevas." } },
      condo: { value: 550000, note: { en: "Loft and condo prices vary widely by building age and finish level.", es: "Los precios de lofts y condominios varían mucho según la antigüedad del edificio y el nivel de acabado." } },
    },
    center: [25.8010, -80.1990],
    newConstruction: {
      en: "NoMad Residences Wynwood (329 condos) is nearing completion, while Twenty Sixth & 2nd Wynwood Residences and the Frida Kahlo Residences — both from PMG and Lndmrk — are under construction, adding hundreds more condo and retail units through 2028.",
      es: "NoMad Residences Wynwood (329 condominios) está por terminarse, mientras que Twenty Sixth & 2nd Wynwood Residences y Frida Kahlo Residences — ambos de PMG y Lndmrk — están en construcción, sumando cientos de unidades más de condominio y locales comerciales hasta 2028.",
    },
    funFacts: {
      en: [
        "Wynwood Walls, launched in 2009 by developer Tony Goldman, turned old warehouse walls into one of the world's largest outdoor street-art collections.",
        "The neighborhood was once Miami's garment-manufacturing district — many of today's galleries and breweries still sit inside converted 1950s warehouses.",
        "Wynwood has one of the highest concentrations of independent breweries in South Florida, several within walking distance of each other.",
      ],
      es: [
        "Wynwood Walls, lanzado en 2009 por el desarrollador Tony Goldman, convirtió antiguos muros de bodegas en una de las colecciones de arte urbano al aire libre más grandes del mundo.",
        "El vecindario fue alguna vez el distrito de manufactura de ropa de Miami — muchas de las galerías y cervecerías actuales todavía están dentro de bodegas convertidas de los años 1950.",
        "Wynwood tiene una de las concentraciones más altas de cervecerías independientes del sur de Florida, varias a poca distancia caminando entre sí.",
      ],
    },
    family: {
      en: "Wynwood skews young and nightlife-heavy rather than family-oriented — there's very little single-family housing or green space, so most families passing through are visiting rather than settling down, though that could shift as new residential towers add more livable square footage.",
      es: "Wynwood tiende a ser más joven y orientado a la vida nocturna que a las familias — hay muy poca vivienda unifamiliar o espacio verde, así que la mayoría de las familias que pasan por ahí están de visita más que estableciéndose, aunque eso podría cambiar a medida que las nuevas torres residenciales agreguen más espacio habitable.",
    },
    movingTips: {
      en: "Coming from a quieter area, be prepared for street noise and foot traffic on weekends — Wynwood is one of Miami's busiest nightlife and events districts, which is part of the appeal for some buyers and a dealbreaker for others.",
      es: "Si vienes de una zona más tranquila, prepárate para el ruido de la calle y el tráfico peatonal los fines de semana — Wynwood es uno de los distritos de vida nocturna y eventos más concurridos de Miami, lo cual es parte del atractivo para algunos compradores y un problema para otros.",
    },
  },
  {
    slug: "coconut-grove",
    name: "Coconut Grove",
    image: "/images/coconut-grove.jpg",
    tagline: {
      en: "Bayfront, laid-back, established",
      es: "Frente a la bahía, relajado, establecido",
      fr: "Front de baie, décontracté, établi",
      ht: "Bò benen, dekontrakte, byen etabli",
      pt: "Litoral da baía, descontraído, tradicional",
      it: "Sul mare, rilassato, consolidato",
    },
    history: {
      en: "Miami's oldest continuously inhabited neighborhood, Coconut Grove was settled in the 1800s by New England sailors and Bahamian immigrants, whose descendants still anchor the historic West Grove community. It grew into a bohemian, artsy enclave by the mid-1900s and remains one of Miami's leafiest, most laid-back areas.",
      es: "El vecindario habitado continuamente más antiguo de Miami, Coconut Grove fue colonizado en el siglo XIX por marineros de Nueva Inglaterra e inmigrantes bahameños, cuyos descendientes todavía anclan la comunidad histórica de West Grove. Se convirtió en un enclave bohemio y artístico a mediados del siglo XX y sigue siendo una de las áreas más arboladas y relajadas de Miami.",
      fr: "Quartier habité en continu le plus ancien de Miami, Coconut Grove fut colonisé au XIXe siècle par des marins de Nouvelle-Angleterre et des immigrants bahaméens, dont les descendants ancrent encore la communauté historique de West Grove. Il est devenu une enclave bohème et artistique au milieu du XXe siècle et reste l'une des zones les plus verdoyantes et décontractées de Miami.",
      ht: "Katye ki pi ansyen ki abite san rete nan Miami, Coconut Grove te etabli nan ane 1800 yo pa maren New England ak imigran Bahamyen, epi desandan yo toujou ankre kominote istorik West Grove la. Li te vin yon enklav boèm, atistik nan mitan ane 1900 yo epi li rete youn nan zòn ki gen plis pyebwa e ki pi dekontrakte nan Miami.",
      pt: "O bairro habitado continuamente mais antigo de Miami, Coconut Grove foi colonizado no século XIX por marinheiros da Nova Inglaterra e imigrantes bahamenses, cujos descendentes ainda são a base da histórica comunidade de West Grove. Tornou-se um enclave boêmio e artístico em meados do século XX e continua sendo uma das áreas mais arborizadas e descontraídas de Miami.",
      it: "Il quartiere abitato ininterrottamente più antico di Miami, Coconut Grove fu colonizzato nell'Ottocento da marinai del New England e immigrati bahamensi, i cui discendenti sono ancora il fulcro della storica comunità di West Grove. Divenne un'enclave bohémien e artistica verso la metà del Novecento e resta una delle zone più verdi e rilassate di Miami.",
    },
    pricing: {
      singleFamily: { value: 2700000, note: { en: "Among the priciest in the county, especially near the bay.", es: "Entre los más caros del condado, especialmente cerca de la bahía." } },
      condo: { value: 700000, note: { en: "Concentrated in a handful of bayfront and village-center buildings.", es: "Concentrado en un puñado de edificios frente a la bahía y en el centro del pueblo." } },
    },
    center: [25.7280, -80.2400],
    newConstruction: {
      en: "Terra Group's wellness-focused tower 'The Well' broke ground in January 2026 (194 residences, completion 2028), while Arbor Coconut Grove (45 boutique homes) just delivered and Four Seasons Residences' second tower is selling high-floor units from $4.5M.",
      es: "La torre enfocada en bienestar 'The Well' de Terra Group inició construcción en enero de 2026 (194 residencias, finalización en 2028), mientras que Arbor Coconut Grove (45 residencias boutique) acaba de entregarse y la segunda torre de Four Seasons Residences vende unidades de piso alto desde $4.5M.",
    },
    funFacts: {
      en: [
        "Coconut Grove is Miami's oldest continuously inhabited neighborhood, settled in the 1820s — decades before the city of Miami itself was incorporated.",
        "It was once a bohemian artists' enclave and is still home to Miami's oldest house museum, the 1891 Barnacle Historic State Park.",
        "The Grove's tree canopy is so dense in parts that some streets feel more like rural Florida than a major city.",
      ],
      es: [
        "Coconut Grove es el vecindario más antiguo de Miami habitado sin interrupción, establecido en la década de 1820 — décadas antes de que la ciudad de Miami misma se incorporara.",
        "Alguna vez fue un enclave bohemio de artistas y todavía alberga la casa-museo más antigua de Miami, el Barnacle Historic State Park de 1891.",
        "El dosel de árboles del Grove es tan denso en algunas partes que algunas calles se sienten más como la Florida rural que como una gran ciudad.",
      ],
    },
    family: {
      en: "Coconut Grove is one of Miami's most established family neighborhoods — it's zoned for well-regarded public and private schools, has some of the city's best parkland (Kennedy Park, Peacock Park, the Vizcaya grounds nearby), and its sailing clubs and youth programs are a draw for active families.",
      es: "Coconut Grove es uno de los vecindarios familiares más consolidados de Miami — está zonificado para escuelas públicas y privadas bien valoradas, tiene algunos de los mejores parques de la ciudad (Kennedy Park, Peacock Park, los terrenos de Vizcaya cerca) y sus clubes de vela y programas juveniles atraen a familias activas.",
    },
    movingTips: {
      en: "If you're used to flat grid streets, note the Grove's older, curving, tree-lined layout can make navigation and parking trickier — and its bayfront and low-lying pockets carry real flood risk, so check elevation and flood zone before buying.",
      es: "Si estás acostumbrado a calles rectas en cuadrícula, ten en cuenta que el trazado más antiguo, curvo y arbolado del Grove puede complicar la navegación y el estacionamiento — y sus zonas bajas cerca de la bahía tienen riesgo real de inundación, así que verifica la elevación y la zona de inundación antes de comprar.",
    },
  },
  {
    slug: "doral",
    name: "Doral",
    image: "/images/doral.jpg",
    tagline: {
      en: "New construction, family suburbs",
      es: "Construcción nueva, suburbios familiares",
      fr: "Constructions neuves, banlieues familiales",
      ht: "Nouvo konstriksyon, sibèb fanmi",
      pt: "Construções novas, subúrbios familiares",
      it: "Nuove costruzioni, sobborghi familiari",
    },
    history: {
      en: "Named for founders Doris and Alfred Kaskel (\"Dor-Al\"), Doral was developed in the 1960s around a golf resort and incorporated as its own city in 2003. Its proximity to Miami International Airport and business parks fueled explosive growth as a hub for Venezuelan and other Latin American expat communities.",
      es: "Nombrado en honor a sus fundadores Doris y Alfred Kaskel (\"Dor-Al\"), Doral se desarrolló en la década de 1960 alrededor de un resort de golf y se incorporó como ciudad propia en 2003. Su cercanía al Aeropuerto Internacional de Miami y a parques empresariales impulsó un crecimiento explosivo como centro para comunidades de expatriados venezolanos y otros latinoamericanos.",
      fr: "Nommée d'après ses fondateurs Doris et Alfred Kaskel (« Dor-Al »), Doral fut développée dans les années 1960 autour d'un complexe de golf et devint une ville à part entière en 2003. Sa proximité avec l'aéroport international de Miami et les parcs d'affaires a alimenté une croissance explosive en tant que pôle pour les communautés d'expatriés vénézuéliens et autres Latino-Américains.",
      ht: "Yo te nonmen li dapre fondatè Doris ak Alfred Kaskel (\"Dor-Al\"), Doral te devlope nan ane 1960 yo alantou yon rezò gòlf epi li te vin yon vil pou kont li an 2003. Pwoksimite li ak Ayewopò Entènasyonal Miami ak pak biznis yo te alimante yon kwasans eksplozif kòm yon sant pou kominote ekspatriye Venezyelyen ak lòt Amerikendlatin.",
      pt: "Batizada em homenagem aos fundadores Doris e Alfred Kaskel (\"Dor-Al\"), Doral foi desenvolvida na década de 1960 ao redor de um resort de golfe e se tornou uma cidade própria em 2003. Sua proximidade com o Aeroporto Internacional de Miami e parques empresariais impulsionou um crescimento explosivo como polo para comunidades de expatriados venezuelanos e outros latino-americanos.",
      it: "Chiamata così in onore dei fondatori Doris e Alfred Kaskel (\"Dor-Al\"), Doral fu sviluppata negli anni '60 attorno a un resort golfistico e divenne una città a sé stante nel 2003. La vicinanza all'Aeroporto Internazionale di Miami e ai parchi commerciali ne alimentò una crescita esplosiva come polo per le comunità di espatriati venezuelani e di altri latinoamericani.",
    },
    pricing: {
      singleFamily: { value: 1000000, note: { en: "Mostly newer-construction homes in gated communities.", es: "Principalmente casas de construcción reciente en comunidades cerradas." } },
      condo: { value: 476000, note: { en: "Large, relatively young condo inventory compared to the rest of the county.", es: "Inventario de condominios grande y relativamente joven comparado con el resto del condado." } },
    },
    center: [25.8195, -80.3553],
    newConstruction: {
      en: "Doral keeps adding master-planned communities — Urbana and Landmark by Lennar, Park Central, Modern Doral, and Canarias at Downtown Doral are all active, with new-construction list prices around a median of $680,000.",
      es: "Doral sigue sumando comunidades planificadas — Urbana y Landmark de Lennar, Park Central, Modern Doral y Canarias en Downtown Doral están activas, con precios de nueva construcción en una mediana de alrededor de $680,000.",
    },
    funFacts: {
      en: [
        "Doral is named after founders Doris and Alfred Kaskel, who combined their first names to name the resort they built here in the 1960s.",
        "It's home to Trump National Doral, one of the largest golf resorts in the country, with four courses on-site.",
        "Doral has one of the largest concentrations of Venezuelan and other Latin American residents in Miami-Dade, earning it the nickname 'Doralzuela.'",
      ],
      es: [
        "Doral lleva el nombre de sus fundadores Doris y Alfred Kaskel, quienes combinaron sus nombres para nombrar el resort que construyeron aquí en la década de 1960.",
        "Es sede de Trump National Doral, uno de los resorts de golf más grandes del país, con cuatro campos en el sitio.",
        "Doral tiene una de las mayores concentraciones de residentes venezolanos y de otros países latinoamericanos en Miami-Dade, lo que le valió el apodo de 'Doralzuela'.",
      ],
    },
    family: {
      en: "Doral is one of Miami-Dade's most family-friendly newer cities — its gated communities, A-rated schools, and low crime consistently draw relocating families, and Downtown Doral's walkable park-and-retail core was purpose-built with families in mind.",
      es: "Doral es una de las ciudades más nuevas y orientadas a familias de Miami-Dade — sus comunidades cerradas, escuelas calificadas A y baja criminalidad atraen constantemente a familias que se mudan, y el núcleo transitable de parques y comercios de Downtown Doral fue construido pensando en las familias.",
    },
    movingTips: {
      en: "Doral sits close to Miami International Airport, so check flight-path noise before committing to a specific block — and many communities are HOA-gated, so factor HOA dues and rules into your budget the same way you would condo fees elsewhere.",
      es: "Doral está cerca del Aeropuerto Internacional de Miami, así que verifica el ruido de las rutas de vuelo antes de comprometerte con una cuadra específica — y muchas comunidades tienen HOA cerrada, así que considera las cuotas y reglas del HOA en tu presupuesto igual que las cuotas de condominio en otros lugares.",
    },
  },
  {
    slug: "midtown-edgewater",
    name: "Midtown / Edgewater",
    image: "/images/midtown-edgewater.jpg",
    tagline: {
      en: "Trendy, waterfront high-rises, walkable",
      es: "De moda, rascacielos junto al agua, transitable a pie",
      fr: "Branché, gratte-ciels en bord de mer, quartier piétonnier",
      ht: "Nan mòd, gratsyèl bò dlo, katye pou mache",
      pt: "Moderno, prédios altos à beira-mar, fácil de caminhar",
      it: "Alla moda, grattacieli sul mare, quartiere pedonale",
    },
    history: {
      en: "Midtown was built in the 2000s on a former FEC railway yard as a master-planned, walkable district of shops and condos, while neighboring Edgewater — an older Biscayne Bay-front area — has filled in rapidly with new high-rise towers, becoming one of Miami's fastest-growing condo corridors.",
      es: "Midtown se construyó en la década de 2000 sobre un antiguo patio ferroviario de FEC como un distrito planificado y transitable a pie de tiendas y condominios, mientras que la vecina Edgewater — un área más antigua frente a la Bahía de Biscayne — se ha llenado rápidamente de nuevas torres de gran altura, convirtiéndose en uno de los corredores de condominios de más rápido crecimiento de Miami.",
      fr: "Midtown fut construit dans les années 2000 sur un ancien dépôt ferroviaire de la FEC comme un district planifié et piétonnier de boutiques et de condos, tandis que la voisine Edgewater — une zone plus ancienne en front de la baie de Biscayne — s'est rapidement remplie de nouvelles tours de grande hauteur, devenant l'un des corridors de condos à la croissance la plus rapide de Miami.",
      ht: "Yo te konstwi Midtown nan ane 2000 yo sou yon ansyen depo tren FEC kòm yon distri byen planifye, ki bon pou mache ak magazen ak kondo, pandan Edgewater vwazen an — yon zòn pi ansyen bò Bwa Biscayne — te ranpli rapid ak nouvo gratsyèl, epi li vin youn nan koridò kondo k ap grandi pi vit nan Miami.",
      pt: "Midtown foi construída nos anos 2000 sobre um antigo pátio ferroviário da FEC como um distrito planejado e fácil de caminhar, com lojas e condomínios, enquanto a vizinha Edgewater — uma área mais antiga à beira da Baía de Biscayne — se preencheu rapidamente com novas torres altas, tornando-se um dos corredores de condomínios que mais crescem em Miami.",
      it: "Midtown fu costruita negli anni 2000 su un ex scalo ferroviario della FEC come distretto pianificato e pedonale di negozi e condomini, mentre la vicina Edgewater — un'area più vecchia affacciata sulla Baia di Biscayne — si è rapidamente riempita di nuove torri, diventando uno dei corridoi di condomini in più rapida crescita di Miami.",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "Almost no single-family stock — this is a dense, high-rise corridor.", es: "Casi no hay propiedades unifamiliares — este es un corredor denso de gran altura." } },
      condo: { value: 715000, note: { en: "Newer waterfront towers in Edgewater command a premium over Midtown's older stock.", es: "Las torres más nuevas frente al agua en Edgewater tienen un precio superior al inventario más antiguo de Midtown." } },
    },
    center: [25.8050, -80.1920],
    newConstruction: {
      en: "Edgewater is in the middle of a major building wave — Villa Miami (72 ultra-luxury units) completes in late 2026, EDITION Residences Edgewater (185 units, 55 stories) is underway, and ELLE Residences broke ground in 2026 as the fashion brand's first residential tower.",
      es: "Edgewater está en medio de una gran ola de construcción — Villa Miami (72 unidades de ultra lujo) se completa a finales de 2026, EDITION Residences Edgewater (185 unidades, 55 pisos) está en construcción, y ELLE Residences inició obras en 2026 como la primera torre residencial de la marca de moda.",
    },
    funFacts: {
      en: [
        "Edgewater's Bayshore Drive gives it one of the most uninterrupted stretches of Biscayne Bay waterfront in the city, which is driving its current condo boom.",
        "Midtown Miami was built on the site of a former Florida East Coast Railway freight yard, redeveloped in the mid-2000s into open-air shopping and lofts.",
        "The neighborhood sits directly between the Design District and Downtown, making it one of the most central places to live in the urban core.",
      ],
      es: [
        "Bayshore Drive le da a Edgewater uno de los tramos más ininterrumpidos de costa en la Bahía de Biscayne de la ciudad, lo que impulsa su actual auge de condominios.",
        "Midtown Miami se construyó sobre el sitio de un antiguo patio de carga del ferrocarril Florida East Coast, remodelado a mediados de la década de 2000 en tiendas al aire libre y lofts.",
        "El vecindario está justo entre el Design District y Downtown, lo que lo convierte en uno de los lugares más centrales para vivir en el núcleo urbano.",
      ],
    },
    family: {
      en: "Like Brickell, Midtown/Edgewater is almost entirely condo towers, so it suits families prioritizing walkability and bay views over yard space — Margaret Pace Park is the main green space and popular with young families for its waterfront playground and dog park.",
      es: "Al igual que Brickell, Midtown/Edgewater es casi todo torres de condominios, así que se adapta a familias que priorizan la caminabilidad y las vistas a la bahía sobre el espacio de patio — Margaret Pace Park es el principal espacio verde y popular entre familias jóvenes por su parque infantil frente a la bahía y su área para perros.",
    },
    movingTips: {
      en: "If you're coming from outside Florida, note that many Edgewater towers are still in pre-construction or under construction — buying pre-construction means deposits held in escrow and a closing date years out, which is a different process than buying a finished resale home.",
      es: "Si vienes de fuera de Florida, ten en cuenta que muchas torres de Edgewater todavía están en preconstrucción o en obra — comprar en preconstrucción significa depósitos en garantía (escrow) y una fecha de cierre a años vista, lo cual es un proceso diferente a comprar una casa de reventa ya terminada.",
    },
  },
  {
    slug: "miami-beach",
    name: "Miami Beach",
    image: "/images/miami-beach.jpg",
    tagline: {
      en: "Beaches, Art Deco, nightlife",
      es: "Playas, Art Deco, vida nocturna",
      fr: "Plages, Art déco, vie nocturne",
      ht: "Plaj, Art Deco, lavi nannwit",
      pt: "Praias, Art Déco, vida noturna",
      it: "Spiagge, Art Déco, vita notturna",
    },
    history: {
      en: "Built on reclaimed mangrove swamp starting in the 1910s by developer Carl Fisher, Miami Beach boomed with Art Deco hotels in the 1930s–40s, fell into decline mid-century, then was reborn as a fashion and nightlife capital during South Beach's 1980s–90s revival. Its Art Deco Historic District remains one of the largest in the US.",
      es: "Construida sobre un manglar recuperado a partir de la década de 1910 por el promotor Carl Fisher, Miami Beach floreció con hoteles Art Deco en los años 1930-40, decayó a mediados de siglo y luego renació como capital de la moda y la vida nocturna durante el renacimiento de South Beach en los años 1980-90. Su Distrito Histórico Art Deco sigue siendo uno de los más grandes de EE. UU.",
      fr: "Construite sur un marécage de mangrove asséché à partir des années 1910 par le promoteur Carl Fisher, Miami Beach a connu un essor avec ses hôtels Art déco dans les années 1930-40, puis a décliné au milieu du siècle avant de renaître comme capitale de la mode et de la vie nocturne lors de la renaissance de South Beach dans les années 1980-90. Son quartier historique Art déco reste l'un des plus grands des États-Unis.",
      ht: "Konstwi sou yon marekaj mangwov ki te ranbleye kòmanse nan ane 1910 yo pa devlopè Carl Fisher, Miami Beach te boom ak otèl Art Deco nan ane 1930-40 yo, li te tonbe an deklen nan mitan syèk la, epi apre li te renèt kòm kapital mòd ak lavi nannwit pandan renesans South Beach nan ane 1980-90 yo. Distri Istorik Art Deco li a rete youn nan pi gwo yo Ozetazini.",
      pt: "Construída sobre um mangue aterrado a partir da década de 1910 pelo incorporador Carl Fisher, Miami Beach prosperou com hotéis Art Déco nos anos 1930-40, entrou em declínio em meados do século, e depois renasceu como capital da moda e da vida noturna durante o renascimento de South Beach nos anos 1980-90. Seu Distrito Histórico Art Déco continua sendo um dos maiores dos EUA.",
      it: "Costruita su una palude di mangrovie bonificata a partire dagli anni '10 dallo sviluppatore Carl Fisher, Miami Beach visse un boom di hotel Art Déco negli anni '30-'40, per poi declinare a metà secolo e rinascere come capitale della moda e della vita notturna durante la rinascita di South Beach negli anni '80-'90. Il suo quartiere storico Art Déco resta uno dei più grandi degli Stati Uniti.",
    },
    pricing: {
      singleFamily: { value: 630000, note: { en: "Wide range — from small bungalows to waterfront mansions on the barrier island.", es: "Amplio rango — desde pequeños bungalós hasta mansiones frente al mar en la isla barrera." } },
      condo: { value: 539000, note: { en: "Includes everything from vintage Art Deco walk-ups to new luxury towers.", es: "Incluye desde edificios Art Deco vintage sin ascensor hasta nuevas torres de lujo." } },
    },
    center: [25.7907, -80.1300],
    newConstruction: {
      en: "New development is concentrated in Mid-Beach — a 12-story, 222-residence short-term-rental-friendly tower broke ground in March 2026, alongside ultra-luxury projects like The Perigon and Cipriani Residences, with oceanfront pricing starting around $1,500–$2,500 per square foot.",
      es: "El nuevo desarrollo se concentra en Mid-Beach — una torre de 12 pisos y 222 residencias apta para alquiler a corto plazo inició obras en marzo de 2026, junto con proyectos de ultra lujo como The Perigon y Cipriani Residences, con precios frente al mar que comienzan alrededor de $1,500–$2,500 por pie cuadrado.",
    },
    funFacts: {
      en: [
        "Miami Beach's Art Deco Historic District has the largest concentration of Art Deco architecture in the world, with over 800 protected buildings.",
        "The city is built almost entirely on a barrier island and dredged land, connected to the mainland by a handful of causeways.",
        "South Beach's Ocean Drive became a design and nightlife icon largely through 1980s-90s preservation efforts that saved its pastel hotels from demolition.",
      ],
      es: [
        "El Distrito Histórico Art Deco de Miami Beach tiene la mayor concentración de arquitectura Art Deco del mundo, con más de 800 edificios protegidos.",
        "La ciudad está construida casi por completo sobre una isla de barrera y tierra dragada, conectada al continente por un puñado de calzadas.",
        "Ocean Drive en South Beach se convirtió en un ícono de diseño y vida nocturna en gran parte gracias a esfuerzos de preservación en los años 80 y 90 que salvaron sus hoteles de colores pastel de la demolición.",
      ],
    },
    family: {
      en: "Families tend to gravitate toward the quieter North Beach and Mid-Beach areas rather than South Beach's nightlife strip — North Beach has a more residential, walkable feel with good parks, while South Beach's schools and street noise make it a tougher sell for young kids.",
      es: "Las familias tienden a preferir las zonas más tranquilas de North Beach y Mid-Beach en lugar de la franja de vida nocturna de South Beach — North Beach tiene un ambiente más residencial y transitable con buenos parques, mientras que las escuelas y el ruido de South Beach lo hacen más difícil para niños pequeños.",
    },
    movingTips: {
      en: "Miami Beach is a barrier island, so flood insurance and hurricane preparedness aren't optional — get a flood zone and elevation certificate before making an offer, and budget for windstorm insurance on top of standard homeowner's coverage.",
      es: "Miami Beach es una isla de barrera, así que el seguro contra inundaciones y la preparación para huracanes no son opcionales — obtén una zona de inundación y un certificado de elevación antes de hacer una oferta, y presupuesta el seguro contra vientos además de la cobertura estándar de propietario.",
    },
  },
  {
    slug: "downtown",
    name: "Downtown Miami",
    image: "/images/downtown.jpg",
    tagline: {
      en: "Urban core, business, transit hub",
      es: "Núcleo urbano, negocios, centro de transporte",
      fr: "Cœur urbain, affaires, pôle de transport",
      ht: "Sant iben, biznis, pwen tranzit",
      pt: "Centro urbano, negócios, polo de transporte",
      it: "Centro urbano, affari, snodo dei trasporti",
    },
    history: {
      en: "The site of Miami's original 1896 incorporation around the Miami River and Flagler Street, Downtown spent decades as a daytime-only business district before a 2000s condo boom filled it with residential towers, turning it into a genuine 24-hour urban core connected by Metromover and Metrorail.",
      es: "El sitio de la incorporación original de Miami en 1896 alrededor del río Miami y Flagler Street, el Downtown pasó décadas como distrito de negocios solo diurno antes de que un auge de condominios en la década de 2000 lo llenara de torres residenciales, convirtiéndolo en un verdadero núcleo urbano de 24 horas conectado por Metromover y Metrorail.",
      fr: "Site de l'incorporation originelle de Miami en 1896 autour de la rivière Miami et de Flagler Street, le Downtown a passé des décennies comme district d'affaires uniquement diurne avant qu'un boom des condos dans les années 2000 ne le remplisse de tours résidentielles, en faisant un véritable cœur urbain actif 24h/24, connecté par le Metromover et le Metrorail.",
      ht: "Sit orijinal enkòporasyon Miami nan 1896 alantou Rivyè Miami ak Flagler Street, Downtown te pase plizyè dekad kòm yon distri biznis ki fonksyone sèlman lajounen anvan yon boom kondo nan ane 2000 yo te ranpli l ak gratsyèl rezidansyèl, sa ki te fè l vin yon vrè sant iben 24 sou 24, konekte pa Metromover ak Metrorail.",
      pt: "Local da incorporação original de Miami em 1896, ao redor do Rio Miami e da Flagler Street, o Downtown passou décadas como um distrito comercial apenas diurno antes que um boom de condomínios nos anos 2000 o preenchesse com torres residenciais, transformando-o em um verdadeiro centro urbano 24 horas conectado pelo Metromover e Metrorail.",
      it: "Sede dell'incorporazione originale di Miami nel 1896 attorno al fiume Miami e a Flagler Street, il Downtown ha trascorso decenni come distretto commerciale solo diurno prima che un boom immobiliare di condomini negli anni 2000 lo riempisse di torri residenziali, trasformandolo in un vero centro urbano attivo 24 ore su 24, collegato da Metromover e Metrorail.",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "No meaningful single-family market — Downtown is entirely high-rise.", es: "No hay un mercado unifamiliar significativo — el Downtown es completamente de rascacielos." } },
      condo: { value: 650000, note: { en: "Ranges from older 2000s-boom towers to brand-new luxury developments.", es: "Va desde torres más antiguas del auge de los 2000 hasta desarrollos de lujo completamente nuevos." } },
    },
    center: [25.7743, -80.1937],
    newConstruction: {
      en: "Downtown's skyline is filling in fast — Downtown 6 (824 units, 60 stories) finishes in Q4 2026, the 902-foot Okan Tower is topping out with a Hilton hotel and 399 combined residences, and Palm Tree Residences launched sales ahead of the 2026 FIFA World Cup in Miami.",
      es: "El horizonte de Downtown se está llenando rápidamente — Downtown 6 (824 unidades, 60 pisos) se termina en el cuarto trimestre de 2026, la torre Okan de 902 pies está alcanzando su altura máxima con un hotel Hilton y 399 residencias combinadas, y Palm Tree Residences lanzó ventas antes de la Copa Mundial de la FIFA 2026 en Miami.",
    },
    funFacts: {
      en: [
        "Downtown Miami's Freedom Tower, built in 1925, processed more than 400,000 Cuban refugees in the 1960s-70s and is now a National Historic Landmark.",
        "Miami Worldcenter is one of the largest urban development projects in the U.S., spanning 27 acres and multiple city blocks.",
        "The Metromover, Downtown's elevated people-mover train, is completely free to ride.",
      ],
      es: [
        "La Freedom Tower de Downtown Miami, construida en 1925, procesó a más de 400,000 refugiados cubanos entre los años 60 y 70 y ahora es un Monumento Histórico Nacional.",
        "Miami Worldcenter es uno de los proyectos de desarrollo urbano más grandes de EE. UU., que abarca 27 acres y varias cuadras de la ciudad.",
        "El Metromover, el tren elevado de Downtown, es completamente gratis.",
      ],
    },
    family: {
      en: "Downtown is still primarily young professionals and investors rather than families — there's limited green space and few zoned public schools nearby, though Museum Park and the growing Worldcenter retail core are slowly adding family-friendly amenities.",
      es: "Downtown todavía es principalmente de jóvenes profesionales e inversionistas más que de familias — hay espacio verde limitado y pocas escuelas públicas zonificadas cerca, aunque Museum Park y el creciente núcleo comercial de Worldcenter están agregando poco a poco comodidades para familias.",
    },
    movingTips: {
      en: "If you're relocating for work downtown, most buildings are condo towers with rental restrictions and HOA rules — check whether a building allows short-term rentals if that matters to you, and expect to pay for parking separately from your unit.",
      es: "Si te mudas por trabajo a Downtown, la mayoría de los edificios son torres de condominios con restricciones de alquiler y reglas de HOA — verifica si un edificio permite alquileres a corto plazo si eso te importa, y espera pagar el estacionamiento por separado de tu unidad.",
    },
  },
  {
    slug: "hialeah",
    name: "Hialeah",
    image: "/images/hialeah.jpg",
    tagline: {
      en: "Cuban heritage, dense, working-class",
      es: "Herencia cubana, denso, clase trabajadora",
      fr: "Héritage cubain, dense, classe populaire",
      ht: "Eritaj kiben, dans, klas travayè",
      pt: "Herança cubana, denso, classe trabalhadora",
      it: "Eredità cubana, denso, classe operaia",
    },
    history: {
      en: "Founded in 1925 around an aviation field and the Hialeah Park horse-racing track, Hialeah became a major landing point for Cuban immigrants from the 1960s onward. It's now one of the most densely populated cities in Florida and has one of the highest concentrations of Cuban-Americans in the country.",
      es: "Fundada en 1925 alrededor de un campo de aviación y el hipódromo Hialeah Park, Hialeah se convirtió en un importante punto de llegada para inmigrantes cubanos a partir de la década de 1960. Ahora es una de las ciudades más densamente pobladas de Florida y tiene una de las concentraciones más altas de cubanoamericanos del país.",
      fr: "Fondée en 1925 autour d'un terrain d'aviation et de l'hippodrome de Hialeah Park, Hialeah est devenue un point d'arrivée majeur pour les immigrants cubains à partir des années 1960. C'est aujourd'hui l'une des villes les plus densément peuplées de Floride, avec l'une des plus fortes concentrations de Cubano-Américains du pays.",
      ht: "Fonde an 1925 alantou yon jaden avyasyon ak pis kous chwal Hialeah Park, Hialeah te vin yon gwo pwen ateri pou imigran kiben depi ane 1960 yo. Kounye a se youn nan vil ki gen plis popilasyon dans nan Florid e li gen youn nan konsantrasyon Kibano-Ameriken ki pi wo nan peyi a.",
      pt: "Fundada em 1925 ao redor de um campo de aviação e da pista de corrida de cavalos do Hialeah Park, Hialeah se tornou um importante ponto de chegada para imigrantes cubanos a partir da década de 1960. Hoje é uma das cidades mais densamente povoadas da Flórida e tem uma das maiores concentrações de cubano-americanos do país.",
      it: "Fondata nel 1925 attorno a un campo di aviazione e all'ippodromo di Hialeah Park, Hialeah divenne un importante punto di arrivo per gli immigrati cubani a partire dagli anni '60. Oggi è una delle città più densamente popolate della Florida e ha una delle concentrazioni più alte di cubano-americani del paese.",
    },
    pricing: {
      singleFamily: { value: 450000, note: { en: "One of the more affordable single-family markets in Miami-Dade.", es: "Uno de los mercados unifamiliares más asequibles de Miami-Dade." } },
      condo: { value: 350000, note: { en: "Mostly older, smaller buildings compared to coastal neighborhoods.", es: "Principalmente edificios más antiguos y pequeños comparados con los vecindarios costeros." } },
    },
    center: [25.8576, -80.2781],
    newConstruction: {
      en: "New construction in Hialeah leans smaller-scale than its high-rise neighbors — recent approvals include a 71-unit apartment building and the Flightway Nineteen mixed-use project with over 91,000 sq ft of commercial and warehouse space, alongside steady single-family building from Lennar, D.R. Horton, and other national builders.",
      es: "La nueva construcción en Hialeah tiende a ser de menor escala que la de sus vecinos con rascacielos — las aprobaciones recientes incluyen un edificio de apartamentos de 71 unidades y el proyecto de uso mixto Flightway Nineteen con más de 91,000 pies cuadrados de espacio comercial y de bodega, junto con construcción constante de viviendas unifamiliares por parte de Lennar, D.R. Horton y otras constructoras nacionales.",
    },
    funFacts: {
      en: [
        "Hialeah is the second-most populous city in Miami-Dade after Miami itself, and one of the most densely Cuban-American cities in the U.S.",
        "Hialeah Park Race Track, opened in 1925, was once home to a flock of flamingos so famous it inspired the pink color scheme used across the city.",
        "Spanish is the primary language spoken at home for the vast majority of Hialeah households — it's one of the most Spanish-speaking cities in the country.",
      ],
      es: [
        "Hialeah es la segunda ciudad más poblada de Miami-Dade después de Miami misma, y una de las ciudades cubanoamericanas más densas de EE. UU.",
        "El Hialeah Park Race Track, inaugurado en 1925, alguna vez albergó una bandada de flamencos tan famosa que inspiró el esquema de color rosa usado en toda la ciudad.",
        "El español es el idioma principal que se habla en casa para la gran mayoría de los hogares de Hialeah — es una de las ciudades más hispanohablantes del país.",
      ],
    },
    family: {
      en: "Hialeah is a working- and middle-class family city with some of the most affordable housing in Miami-Dade — it's largely single-family and duplex housing rather than high-rises, which appeals to families wanting more space and yard for the price.",
      es: "Hialeah es una ciudad de familias de clase trabajadora y media con algunas de las viviendas más asequibles de Miami-Dade — la vivienda es en su mayoría unifamiliar y dúplex en lugar de rascacielos, lo cual atrae a familias que buscan más espacio y patio por el precio.",
    },
    movingTips: {
      en: "If you're moving from outside the Cuban-American community, know that daily life here runs heavily in Spanish — city services are bilingual, but expect Spanish to be the default in stores, restaurants, and casual conversation more than almost anywhere else in the county.",
      es: "Si te mudas desde fuera de la comunidad cubanoamericana, ten en cuenta que la vida diaria aquí se desarrolla mayormente en español — los servicios de la ciudad son bilingües, pero espera que el español sea el idioma predeterminado en tiendas, restaurantes y conversaciones casuales más que en casi cualquier otro lugar del condado.",
    },
  },
  {
    slug: "miami-gardens",
    name: "Miami Gardens",
    image: "/images/miami-gardens.jpg",
    tagline: {
      en: "Suburban, diverse, family-focused",
      es: "Suburbano, diverso, orientado a familias",
      fr: "Suburbain, diversifié, axé sur la famille",
      ht: "Sibèben, divès, oryante sou fanmi",
      pt: "Suburbano, diverso, focado na família",
      it: "Suburbano, variegato, orientato alla famiglia",
    },
    history: {
      en: "Incorporated in 2003 from the Carol City and Opa-locka North areas, Miami Gardens is one of Miami-Dade's newest cities and has the largest Black population of any city in Florida. It's home to Hard Rock Stadium, home field for the Miami Dolphins and host to Super Bowls and the Miami Grand Prix.",
      es: "Incorporada en 2003 a partir de las áreas de Carol City y Opa-locka Norte, Miami Gardens es una de las ciudades más nuevas de Miami-Dade y tiene la mayor población afroamericana de cualquier ciudad de Florida. Es sede del Hard Rock Stadium, campo local de los Miami Dolphins y anfitrión de Super Bowls y el Gran Premio de Miami.",
      fr: "Constituée en ville en 2003 à partir des quartiers de Carol City et d'Opa-locka Nord, Miami Gardens est l'une des villes les plus récentes de Miami-Dade et compte la plus grande population noire de toutes les villes de Floride. Elle abrite le Hard Rock Stadium, domicile des Miami Dolphins et hôte de Super Bowls et du Grand Prix de Miami.",
      ht: "Enkòpore an 2003 apati zòn Carol City ak Opa-locka Nò, Miami Gardens se youn nan vil ki pi nouvo nan Miami-Dade epi li gen popilasyon Nwa ki pi gwo pase nenpòt lòt vil nan Florid. Se la Hard Rock Stadium ye, teren lakay Miami Dolphins ki te akeyi Super Bowl ak Miami Grand Prix.",
      pt: "Incorporada em 2003 a partir das áreas de Carol City e Opa-locka Norte, Miami Gardens é uma das cidades mais novas de Miami-Dade e tem a maior população negra entre todas as cidades da Flórida. É a sede do Hard Rock Stadium, campo dos Miami Dolphins e anfitrião de Super Bowls e do Grande Prêmio de Miami.",
      it: "Costituita come città nel 2003 a partire dalle zone di Carol City e Opa-locka North, Miami Gardens è una delle città più recenti di Miami-Dade e ha la più grande popolazione nera di qualsiasi città della Florida. Ospita l'Hard Rock Stadium, campo di casa dei Miami Dolphins e sede di Super Bowl e del Gran Premio di Miami.",
    },
    pricing: {
      singleFamily: { value: 400000, note: { en: "One of the more affordable single-family markets in the county.", es: "Uno de los mercados unifamiliares más asequibles del condado." } },
      condo: { value: 300000, note: { en: "Smaller condo/townhome market than coastal areas.", es: "Mercado de condominios/casas adosadas más pequeño que en las áreas costeras." } },
    },
    center: [25.9420, -80.2456],
    newConstruction: {
      en: "Miami Gardens is investing heavily in civic and mixed-use projects — a $60–70M Performing Arts Center breaks ground in fall 2026, Serenity Gardens will add 153 affordable senior residences, and a 162-acre mixed-use project nearby includes 190 affordable rental units plus new retail.",
      es: "Miami Gardens está invirtiendo fuertemente en proyectos cívicos y de uso mixto — un Centro de Artes Escénicas de $60–70M inicia obras en otoño de 2026, Serenity Gardens sumará 153 residencias asequibles para adultos mayores, y un proyecto de uso mixto de 162 acres cercano incluye 190 unidades de alquiler asequible además de nuevos comercios.",
    },
    funFacts: {
      en: [
        "Miami Gardens is home to Hard Rock Stadium, host to Super Bowls, College Football Playoff games, and the Miami Dolphins.",
        "Incorporated in 2003, it's one of Florida's newer cities, formed when several unincorporated communities voted to combine into a single municipality.",
        "It's one of the largest predominantly African-American cities in the United States by population.",
      ],
      es: [
        "Miami Gardens alberga el Hard Rock Stadium, sede de Super Bowls, juegos de playoffs universitarios de fútbol americano y los Miami Dolphins.",
        "Incorporada en 2003, es una de las ciudades más nuevas de Florida, formada cuando varias comunidades no incorporadas votaron para unirse en un solo municipio.",
        "Es una de las ciudades predominantemente afroamericanas más grandes de Estados Unidos por población.",
      ],
    },
    family: {
      en: "Miami Gardens offers some of the most affordable single-family housing in Miami-Dade, and the city has invested significantly in parks and youth recreation programs, though families should research specific school zones carefully since ratings vary block to block.",
      es: "Miami Gardens ofrece algunas de las viviendas unifamiliares más asequibles de Miami-Dade, y la ciudad ha invertido significativamente en parques y programas de recreación juvenil, aunque las familias deben investigar cuidadosamente las zonas escolares específicas ya que las calificaciones varían de cuadra a cuadra.",
    },
    movingTips: {
      en: "Traffic around Hard Rock Stadium spikes hard on game days and event nights — if you're looking at homes near the stadium, drive the area during an event before you commit so you know what to expect.",
      es: "El tráfico alrededor de Hard Rock Stadium aumenta mucho los días de juego y noches de eventos — si estás viendo casas cerca del estadio, maneja por la zona durante un evento antes de comprometerte para saber qué esperar.",
    },
  },
  {
    slug: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    image: "/images/sunny-isles-beach.jpg",
    tagline: {
      en: "Oceanfront towers, luxury condos",
      es: "Torres frente al mar, condominios de lujo",
      fr: "Tours en front de mer, condos de luxe",
      ht: "Tou bò lanmè, kondo liks",
      pt: "Torres à beira-mar, condomínios de luxo",
      it: "Torri sul mare, condomini di lusso",
    },
    history: {
      en: "Once a strip of budget motels nicknamed \"Motel Row\" in the mid-1900s, this barrier-island city was rebuilt starting in the 1990s–2000s into a corridor of luxury oceanfront condo towers, drawing enough international buyers — especially from Russia and Latin America — to earn the nickname \"Little Moscow.\"",
      es: "Antes una franja de moteles económicos apodada \"Motel Row\" a mediados del siglo XX, esta ciudad en la isla barrera fue reconstruida a partir de los años 1990-2000 en un corredor de torres de condominios de lujo frente al mar, atrayendo suficientes compradores internacionales — especialmente de Rusia y América Latina — para ganarse el apodo de \"Little Moscow\".",
      fr: "Autrefois une bande de motels bon marché surnommée « Motel Row » au milieu du XXe siècle, cette ville d'île-barrière a été reconstruite à partir des années 1990-2000 en un corridor de tours de condos de luxe en front de mer, attirant suffisamment d'acheteurs internationaux — notamment de Russie et d'Amérique latine — pour gagner le surnom de « Little Moscow ».",
      ht: "Yon fwa se te yon bann motèl bon mache yo te bay ti non \"Motel Row\" nan mitan ane 1900 yo, vil sa a ki sou yon zile bawyè te rekonstwi kòmanse nan ane 1990-2000 yo pou vin yon koridò tou kondo liks bò lanmè, li te atire ase achtè entènasyonal — espesyalman soti Larisi ak Amerik Latin — pou l resevwa ti non \"Little Moscow.\"",
      pt: "Antes uma faixa de motéis econômicos apelidada de \"Motel Row\" em meados do século XX, essa cidade em uma ilha-barreira foi reconstruída a partir dos anos 1990-2000 em um corredor de torres de condomínios de luxo à beira-mar, atraindo compradores internacionais suficientes — especialmente da Rússia e da América Latina — para ganhar o apelido de \"Little Moscow\".",
      it: "Un tempo una fila di motel economici soprannominata \"Motel Row\" a metà del Novecento, questa città su un'isola barriera fu ricostruita a partire dagli anni '90-2000 in un corridoio di torri di condomini di lusso sul mare, attirando abbastanza acquirenti internazionali — soprattutto da Russia e America Latina — da guadagnarsi il soprannome di \"Little Moscow\".",
    },
    pricing: {
      singleFamily: { value: null, note: { en: "Almost no single-family homes — this is a barrier-island condo market.", es: "Casi no hay casas unifamiliares — este es un mercado de condominios en isla barrera." } },
      condo: { value: 749000, note: { en: "Luxury oceanfront towers push the median well above nearby areas; some units trade above $1.3M.", es: "Las torres de lujo frente al mar elevan la mediana muy por encima de las áreas cercanas; algunas unidades se venden por encima de $1.3M." } },
    },
    center: [25.9420, -80.1225],
    newConstruction: {
      en: "Two supertall towers are reshaping the skyline — the 62-story Bentley Residences (216 units, the world's first Bentley-branded tower, with in-unit car elevators) has gone vertical, and Related/Dezer/BH's newly approved 62-story oceanfront tower at 19051 Collins adds 145 more residences.",
      es: "Dos torres supertall están transformando el horizonte — Bentley Residences de 62 pisos (216 unidades, la primera torre de marca Bentley en el mundo, con elevadores de autos dentro de la unidad) ya está en construcción vertical, y la torre frente al mar de 62 pisos recién aprobada de Related/Dezer/BH en 19051 Collins suma 145 residencias más.",
    },
    funFacts: {
      en: [
        "Sunny Isles Beach is nicknamed 'Florida's Riviera' for its dense strip of oceanfront luxury condo towers.",
        "It's one of the smallest cities in Miami-Dade by land area, yet has one of the highest concentrations of high-rise buildings per square mile.",
        "The city has a large Russian and Eastern European community, with signage and services in Russian common along Collins Avenue.",
      ],
      es: [
        "Sunny Isles Beach es apodada 'la Riviera de Florida' por su densa fila de torres de condominios de lujo frente al mar.",
        "Es una de las ciudades más pequeñas de Miami-Dade en área terrestre, pero tiene una de las mayores concentraciones de edificios altos por milla cuadrada.",
        "La ciudad tiene una gran comunidad rusa y de Europa del Este, con señalización y servicios en ruso comunes a lo largo de Collins Avenue.",
      ],
    },
    family: {
      en: "Most Sunny Isles housing is oceanfront condo towers rather than single-family homes, but the city has invested in a well-regarded K-8 school and beachfront parks, making it workable for families who want beach living in a high-rise.",
      es: "La mayoría de las viviendas en Sunny Isles son torres de condominios frente al mar en lugar de casas unifamiliares, pero la ciudad ha invertido en una escuela K-8 bien valorada y parques frente a la playa, lo que la hace viable para familias que quieren vivir en la playa en un edificio alto.",
    },
    movingTips: {
      en: "Collins Avenue traffic can be heavy, especially in winter tourist season — and like any barrier-island city, confirm flood zone and windstorm insurance costs before you make an offer, since they can add significantly to monthly costs.",
      es: "El tráfico en Collins Avenue puede ser pesado, especialmente en temporada alta de invierno — y como en cualquier ciudad de isla de barrera, confirma la zona de inundación y los costos del seguro contra vientos antes de hacer una oferta, ya que pueden aumentar significativamente los costos mensuales.",
    },
  },
  {
    slug: "aventura",
    name: "Aventura",
    image: "/images/aventura.jpg",
    tagline: {
      en: "Shopping, high-rises, planned community",
      es: "Compras, rascacielos, comunidad planificada",
      fr: "Shopping, gratte-ciels, communauté planifiée",
      ht: "Achte, gratsyèl, kominote planifye",
      pt: "Compras, prédios altos, comunidade planejada",
      it: "Shopping, grattacieli, comunità pianificata",
    },
    history: {
      en: "Developed starting in the 1970s by Don Soffer as a master-planned community anchored by Aventura Mall, one of the largest shopping centers in the US, Aventura grew into a dense corridor of luxury condo towers and became its own incorporated city in 1995.",
      es: "Desarrollada a partir de la década de 1970 por Don Soffer como una comunidad planificada anclada en Aventura Mall, uno de los centros comerciales más grandes de EE. UU., Aventura creció hasta convertirse en un denso corredor de torres de condominios de lujo y se convirtió en su propia ciudad incorporada en 1995.",
      fr: "Développée à partir des années 1970 par Don Soffer comme une communauté planifiée ancrée par l'Aventura Mall, l'un des plus grands centres commerciaux des États-Unis, Aventura est devenue un corridor dense de tours de condos de luxe et une ville constituée à part entière en 1995.",
      ht: "Devlope kòmanse nan ane 1970 yo pa Don Soffer kòm yon kominote byen planifye ki ankre pa Aventura Mall, youn nan pi gwo sant komèsyal nan Etazini, Aventura te grandi vin yon koridò dans ak tou kondo liks epi li te vin pwòp vil enkòpore li an 1995.",
      pt: "Desenvolvida a partir da década de 1970 por Don Soffer como uma comunidade planejada ancorada pelo Aventura Mall, um dos maiores centros comerciais dos EUA, Aventura cresceu até se tornar um corredor denso de torres de condomínios de luxo e se tornou sua própria cidade incorporada em 1995.",
      it: "Sviluppata a partire dagli anni '70 da Don Soffer come comunità pianificata incentrata sull'Aventura Mall, uno dei più grandi centri commerciali degli Stati Uniti, Aventura è cresciuta fino a diventare un denso corridoio di torri di condomini di lusso ed è diventata una città a sé stante nel 1995.",
    },
    pricing: {
      singleFamily: { value: 480000, note: { en: "A small slice of the market — Aventura is overwhelmingly condo towers.", es: "Una pequeña parte del mercado — Aventura es abrumadoramente de torres de condominios." } },
      condo: { value: 550000, note: { en: "Wide range from older towers to new luxury high-rises near the mall.", es: "Amplio rango desde torres antiguas hasta nuevos rascacielos de lujo cerca del centro comercial." } },
    },
    center: [25.9565, -80.1392],
    newConstruction: {
      en: "Aventura's Biscayne Boulevard corridor is adding Centtral Aventura, a 9-story, 145,000-sq-ft mixed-use project with the city's first multi-story digital billboard, plus Avenia Aventura by Fendi Casa completing in 2026 and two proposed 31-story towers at the Arium Lincoln Pointe site.",
      es: "El corredor de Biscayne Boulevard en Aventura está sumando Centtral Aventura, un proyecto de uso mixto de 9 pisos y 145,000 pies cuadrados con la primera valla publicitaria digital de varios pisos de la ciudad, además de Avenia Aventura de Fendi Casa que se completa en 2026 y dos torres propuestas de 31 pisos en el sitio de Arium Lincoln Pointe.",
    },
    funFacts: {
      en: [
        "Aventura Mall is the third-largest mall in the U.S. by leasable retail space, drawing shoppers from across South Florida and abroad.",
        "The city is built around the Turnberry golf course and marina, developed by the Soffer family starting in the 1970s.",
        "Aventura is one of the most walkable cities in Miami-Dade, with a dedicated trolley system connecting residential towers to the mall and business district.",
      ],
      es: [
        "Aventura Mall es el tercer centro comercial más grande de EE. UU. por espacio comercial arrendable, atrayendo compradores de todo el sur de Florida y del extranjero.",
        "La ciudad se construyó alrededor del campo de golf y la marina de Turnberry, desarrollados por la familia Soffer a partir de la década de 1970.",
        "Aventura es una de las ciudades más transitables a pie de Miami-Dade, con un sistema de trolebús dedicado que conecta las torres residenciales con el centro comercial y el distrito de negocios.",
      ],
    },
    family: {
      en: "Aventura draws families who want a resort-like, walkable lifestyle in condo towers — the city runs its own highly-rated charter school (Aventura City of Excellence School), a strong draw for families choosing between condo living and a traditional suburb.",
      es: "Aventura atrae a familias que buscan un estilo de vida transitable y tipo resort en torres de condominios — la ciudad opera su propia escuela chárter muy bien calificada (Aventura City of Excellence School), un fuerte atractivo para familias que eligen entre vivir en condominio y un suburbio tradicional.",
    },
    movingTips: {
      en: "Aventura sits right on the Miami-Dade/Broward county line, so double check which county and school district a specific building or address falls into — it affects property tax rates and school zoning even for addresses just blocks apart.",
      es: "Aventura está justo en el límite entre los condados de Miami-Dade y Broward, así que verifica bien en qué condado y distrito escolar cae un edificio o dirección específica — esto afecta las tasas de impuesto a la propiedad y la zonificación escolar incluso para direcciones a pocas cuadras de distancia.",
    },
  },
  {
    slug: "hallandale-beach",
    name: "Hallandale Beach",
    image: "/images/hallandale-beach.jpg",
    tagline: {
      en: "Beachfront, condos, quiet",
      es: "Frente a la playa, condominios, tranquilo",
      fr: "Front de mer, condos, tranquille",
      ht: "Bò plaj, kondo, trankil",
      pt: "Litoral, condomínios, tranquilo",
      it: "Fronte spiaggia, condomini, tranquillo",
    },
    history: {
      en: "A historically working-class beach town in southern Broward County, Hallandale Beach transformed over the 2000s as Gulfstream Park's casino and beachfront condo development brought in new investment, while still remaining more affordable than its neighbors to the south.",
      es: "Un pueblo costero históricamente de clase trabajadora en el sur del condado de Broward, Hallandale Beach se transformó durante la década de 2000 cuando el casino de Gulfstream Park y el desarrollo de condominios frente a la playa atrajeron nuevas inversiones, aunque sigue siendo más asequible que sus vecinos al sur.",
      fr: "Historiquement une ville balnéaire de classe ouvrière dans le sud du comté de Broward, Hallandale Beach s'est transformée au cours des années 2000 lorsque le casino de Gulfstream Park et le développement de condos en front de mer ont apporté de nouveaux investissements, tout en restant plus abordable que ses voisines au sud.",
      ht: "Yon vil bò plaj ki istorikman se te klas travayè nan sid Konte Broward, Hallandale Beach te transfòme pandan ane 2000 yo lè kazino Gulfstream Park la ak devlopman kondo bò plaj la te pote nouvo envestisman, pandan li rete pi abòdab pase vwazen li yo nan sid la.",
      pt: "Historicamente uma cidade praiana de classe trabalhadora no sul do Condado de Broward, Hallandale Beach se transformou ao longo dos anos 2000, quando o cassino do Gulfstream Park e o desenvolvimento de condomínios à beira-mar trouxeram novos investimentos, embora continue mais acessível que suas vizinhas ao sul.",
      it: "Storicamente una città balneare di classe operaia nella parte meridionale della Contea di Broward, Hallandale Beach si è trasformata nel corso degli anni 2000, quando il casinò di Gulfstream Park e lo sviluppo di condomini sul mare hanno portato nuovi investimenti, pur restando più accessibile rispetto alle vicine a sud.",
    },
    pricing: {
      singleFamily: { value: 383000, note: { en: "Notably more affordable than Sunny Isles Beach or Aventura just to the south.", es: "Notablemente más asequible que Sunny Isles Beach o Aventura, justo al sur." } },
      condo: { value: 300000, note: { en: "A mix of older beachfront buildings and newer towers near Gulfstream Park.", es: "Una mezcla de edificios más antiguos frente a la playa y torres más nuevas cerca de Gulfstream Park." } },
    },
    center: [25.9812, -80.1484],
    newConstruction: {
      en: "Hallandale Beach is in the middle of a development wave — Oasis Hallandale's second 25-story tower just topped off within a 10-acre mixed-use project, Seven Park is adding 121 condos from $375,000, and SQUARE Hallandale delivered a 360,000-sq-ft office-condo project.",
      es: "Hallandale Beach está en medio de una ola de desarrollo — la segunda torre de 25 pisos de Oasis Hallandale acaba de alcanzar su altura máxima dentro de un proyecto de uso mixto de 10 acres, Seven Park suma 121 condominios desde $375,000, y SQUARE Hallandale entregó un proyecto de oficinas-condominio de 360,000 pies cuadrados.",
    },
    funFacts: {
      en: [
        "Hallandale Beach is home to Gulfstream Park, a historic thoroughbred horse racing track and casino operating since 1939.",
        "It's one of the smallest cities by land area in Broward County, but its beachfront and casino draw crowds well beyond its size.",
        "The city has a significant Canadian and Quebecois snowbird population, especially in the winter months.",
      ],
      es: [
        "Hallandale Beach alberga Gulfstream Park, un histórico hipódromo y casino en operación desde 1939.",
        "Es una de las ciudades más pequeñas por área terrestre del condado de Broward, pero su costa y su casino atraen multitudes mucho mayores que su tamaño.",
        "La ciudad tiene una población significativa de 'snowbirds' canadienses y quebequenses, especialmente en los meses de invierno.",
      ],
    },
    family: {
      en: "Hallandale Beach is more of a mixed retiree-and-investor market than a traditional family suburb — condo towers dominate the housing stock, and families looking for zoned public schools often look slightly inland or toward neighboring Aventura and Hollywood.",
      es: "Hallandale Beach es más un mercado mixto de jubilados e inversionistas que un suburbio familiar tradicional — las torres de condominios dominan la vivienda, y las familias que buscan escuelas públicas zonificadas suelen mirar un poco más hacia el interior o hacia las vecinas Aventura y Hollywood.",
    },
    movingTips: {
      en: "Hallandale Beach is in Broward County, not Miami-Dade, so property tax rates, school districts, and some permitting rules differ from Miami-Dade cities just a few minutes south — don't assume Miami-Dade rules apply here.",
      es: "Hallandale Beach está en el condado de Broward, no en Miami-Dade, así que las tasas de impuesto a la propiedad, los distritos escolares y algunas reglas de permisos difieren de las ciudades de Miami-Dade a solo minutos al sur — no asumas que las reglas de Miami-Dade aplican aquí.",
    },
  },
  {
    slug: "kendall-pinecrest",
    name: "Kendall / Pinecrest",
    image: "/images/kendall-pinecrest.jpg",
    tagline: {
      en: "Suburban, tree-lined, top schools",
      es: "Suburbano, arbolado, mejores escuelas",
      fr: "Suburbain, arboré, écoles de premier plan",
      ht: "Sibèben, plen pyebwa, pi bon lekòl",
      pt: "Suburbano, arborizado, ótimas escolas",
      it: "Suburbano, alberato, scuole di alto livello",
    },
    history: {
      en: "Kendall, named for a 19th-century land manager for the Florida East Coast Railway, grew after WWII into a sprawling unincorporated suburb of shopping strips and family subdivisions. Pinecrest broke off to incorporate as its own village in 1996 specifically to preserve its oak-canopied streets and large lots, and is now home to some of Miami-Dade's top-rated public schools.",
      es: "Kendall, nombrado en honor a un administrador de tierras del siglo XIX del Florida East Coast Railway, creció después de la Segunda Guerra Mundial hasta convertirse en un extenso suburbio no incorporado de centros comerciales y urbanizaciones familiares. Pinecrest se separó para incorporarse como su propio pueblo en 1996 específicamente para preservar sus calles con dosel de robles y sus grandes lotes, y ahora alberga algunas de las escuelas públicas mejor calificadas de Miami-Dade.",
      fr: "Kendall, nommée d'après un gestionnaire foncier du XIXe siècle pour le Florida East Coast Railway, s'est développée après la Seconde Guerre mondiale en une vaste banlieue non constituée de centres commerciaux et de lotissements familiaux. Pinecrest s'en est détachée pour devenir son propre village en 1996, spécifiquement pour préserver ses rues bordées de chênes et ses grands terrains, et abrite aujourd'hui certaines des écoles publiques les mieux notées de Miami-Dade.",
      ht: "Kendall, yo te nonmen li dapre yon jesyonè tè nan 19yèm syèk la pou Florida East Coast Railway, li te grandi apre Dezyèm Gè Mondyal la pou vin yon gwo sibèb ki pa enkòpore ak strip komèsyal ak divizyon fanmi. Pinecrest te separe pou vin pwòp vilaj li an 1996 espesyalman pou prezève lari li yo ki gen gwo chenn (oak) k ap kouvri yo ak gwo teren, epi kounye a li se lakay kèk nan pi bon lekòl piblik Miami-Dade yo.",
      pt: "Kendall, batizada em homenagem a um administrador de terras do século XIX da Florida East Coast Railway, cresceu após a Segunda Guerra Mundial e se tornou um extenso subúrbio não incorporado de centros comerciais e loteamentos familiares. Pinecrest se separou para se tornar sua própria vila em 1996, especificamente para preservar suas ruas arborizadas com carvalhos e seus grandes lotes, e hoje abriga algumas das escolas públicas mais bem avaliadas de Miami-Dade.",
      it: "Kendall, il cui nome deriva da un amministratore fondiario ottocentesco della Florida East Coast Railway, crebbe dopo la Seconda Guerra Mondiale fino a diventare un vasto sobborgo non incorporato di centri commerciali e lottizzazioni familiari. Pinecrest se ne staccò per diventare un villaggio a sé nel 1996, specificamente per preservare le sue strade alberate di querce e i suoi ampi lotti, e oggi ospita alcune delle scuole pubbliche più quotate di Miami-Dade.",
    },
    pricing: {
      singleFamily: { value: 500000, note: { en: "Kendall runs closer to this citywide figure; incorporated Pinecrest next door is far pricier, often averaging $2.5M+.", es: "Kendall se acerca más a esta cifra general; el vecino Pinecrest, incorporado, es mucho más caro, con un promedio de $2.5M o más." } },
      condo: { value: 320000, note: { en: "Condo and townhome stock is concentrated in Kendall — Pinecrest has almost none and strongly favors single-family zoning.", es: "El inventario de condominios y casas adosadas se concentra en Kendall — Pinecrest tiene casi ninguno y favorece fuertemente la zonificación unifamiliar." } },
    },
    center: [25.6660, -80.3010],
    newConstruction: {
      en: "New construction here is almost entirely custom single-family homes rather than towers — recent Kendall-area completions include multi-million-dollar modern estates on large lots, with roughly 150 active new-home communities and builders across the broader Kendall area.",
      es: "La nueva construcción aquí es casi toda de casas unifamiliares personalizadas en lugar de torres — las finalizaciones recientes en el área de Kendall incluyen fincas modernas multimillonarias en lotes grandes, con aproximadamente 150 comunidades y constructores activos de casas nuevas en el área más amplia de Kendall.",
    },
    funFacts: {
      en: [
        "Pinecrest incorporated as its own village in 1996 specifically to preserve its oak-canopied streets and large-lot zoning from denser development.",
        "Kendall is named after Henry Kendall, a 19th-century land manager for the Florida East Coast Railway who never actually lived there.",
        "Pinecrest Gardens, the village's signature park, sits on the site of the former Parrot Jungle attraction and still has tropical botanical gardens open to the public.",
      ],
      es: [
        "Pinecrest se incorporó como su propio pueblo en 1996 específicamente para preservar sus calles con dosel de robles y la zonificación de lotes grandes frente a un desarrollo más denso.",
        "Kendall lleva el nombre de Henry Kendall, un administrador de tierras del siglo XIX del ferrocarril Florida East Coast que nunca vivió allí realmente.",
        "Pinecrest Gardens, el parque insignia del pueblo, está en el sitio de la antigua atracción Parrot Jungle y todavía tiene jardines botánicos tropicales abiertos al público.",
      ],
    },
    family: {
      en: "This is one of the most family-oriented corners of Miami-Dade — large lots, mature tree canopy, and some of the county's top-rated public schools make Pinecrest especially popular with families, while Kendall offers a more affordable version of the same suburban lifestyle.",
      es: "Este es uno de los rincones más orientados a familias de Miami-Dade — lotes grandes, dosel de árboles maduros y algunas de las escuelas públicas mejor calificadas del condado hacen que Pinecrest sea especialmente popular entre familias, mientras que Kendall ofrece una versión más asequible del mismo estilo de vida suburbano.",
    },
    movingTips: {
      en: "If you're moving from a dense urban area, expect to need a car for almost everything here — this is classic car-dependent Miami-Dade suburb, with far less walkability than Brickell or Coral Gables, so factor commute times into your decision.",
      es: "Si te mudas desde una zona urbana densa, espera necesitar un auto para casi todo aquí — este es un suburbio clásico de Miami-Dade dependiente del auto, con mucha menos posibilidad de caminar que Brickell o Coral Gables, así que considera los tiempos de traslado en tu decisión.",
    },
  },
];

export function getAllNeighborhoods() {
  return neighborhoods;
}

export function getNeighborhood(slug) {
  return neighborhoods.find((n) => n.slug === slug);
}
