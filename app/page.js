import MortgageCalculator from "./components/MortgageCalculator";

export default function Home() {
  return (
    <>
      <div className="horizon" />
      <nav className="nav">
        <div className="nav-logo">Miami Home Guide</div>
        <div className="nav-links">
          <a href="#tools">Tools</a>
          <a href="#mortgage-calculator">Mortgage Calculator</a>
          <a href="#neighborhoods">Neighborhoods</a>
          <a href="#blog">Blog</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-fan" />
        <div className="eyebrow">Buying in Miami-Dade</div>
        <h1>Know the block before you make the offer.</h1>
        <p>
          Real neighborhood guides, an instant home value estimate, and a
          first-time buyer tax calculator — built by a local licensed agent,
          not a national franchise.
        </p>
        <div className="btn-row">
          <a className="btn btn-primary" href="#tools">
            Get my home value
          </a>
          <a className="btn btn-ghost" href="#blog">
            Read the blog
          </a>
        </div>
      </section>

      <section className="section" id="tools">
        <div className="section-head">
          <h2>Two tools, before you talk to anyone</h2>
          <p>Answer a few questions and get a real number back — no obligation, no call required.</p>
        </div>
        <div className="tools-grid">
          <div className="tool-card">
            <span className="tool-tag">Free estimate</span>
            <h3>What's my home worth?</h3>
            <p>
              Enter your address and get an instant value range based on
              recent sales nearby, backed by live MLS data.
            </p>
            <a className="link" href="#">Check my value &rarr;</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">First-time buyers</span>
            <h3>Property tax calculator</h3>
            <p>
              See what you'd actually owe each year in Miami-Dade property
              tax, homestead exemption included.
            </p>
            <a className="link" href="#">Estimate my taxes &rarr;</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">Live listings</span>
            <h3>Search the MLS</h3>
            <p>
              Browse active listings across Miami neighborhoods, updated
              straight from the MLS feed.
            </p>
            <a className="link" href="#">Browse homes &rarr;</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">Monthly payment</span>
            <h3>Mortgage calculator</h3>
            <p>
              Estimate your monthly payment with taxes, insurance, and HOA
              included, tuned for Miami-Dade rates.
            </p>
            <a className="link" href="#mortgage-calculator">Calculate my payment &rarr;</a>
          </div>
        </div>
      </section>

      <section className="section" id="mortgage-calculator" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Mortgage calculator</h2>
          <p>Adjust the numbers to see what a home would actually cost you each month.</p>
        </div>
        <MortgageCalculator />
      </section>

      <section className="section" id="neighborhoods" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Pick a neighborhood</h2>
          <p>Every area of Miami-Dade has its own personality and its own price per square foot.</p>
        </div>
        <div className="hoods">
          <div className="hood-card"><h4>Brickell</h4><span>High-rise, walkable, young professionals</span></div>
          <div className="hood-card"><h4>Coral Gables</h4><span>Tree-lined, historic, family-oriented</span></div>
          <div className="hood-card"><h4>Wynwood</h4><span>Art, lofts, nightlife</span></div>
          <div className="hood-card"><h4>Coconut Grove</h4><span>Bayfront, laid-back, established</span></div>
          <div className="hood-card"><h4>Doral</h4><span>New construction, family suburbs</span></div>
        </div>
      </section>

      <section className="section" id="blog" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>From the blog</h2>
          <p>Straight answers about buying and selling in Miami, written in plain English.</p>
        </div>
        <div className="tools-grid">
          <div className="tool-card">
            <span className="tool-tag">Guide</span>
            <h3>Brickell vs. Coral Gables for first-time buyers</h3>
            <p>Two very different Miami lifestyles — here's how the numbers and the vibe compare.</p>
          </div>
          <div className="tool-card">
            <span className="tool-tag">Money</span>
            <h3>What homestead exemption actually saves you</h3>
            <p>A plain-English breakdown of Florida's homestead exemption and who qualifies.</p>
          </div>
          <div className="tool-card">
            <span className="tool-tag">Process</span>
            <h3>What to expect at closing in Florida</h3>
            <p>Every step from accepted offer to keys in hand, in the order it actually happens.</p>
          </div>
        </div>
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <span>Licensed Real Estate Agent, State of Florida</span>
      </footer>
    </>
  );
}
