export default function SiteFooter({ children }) {
  return (
    <>
      <div className="eho-badge">
        <svg viewBox="0 0 100 118" fill="#000" role="img" aria-label="Equal Housing Opportunity">
          <path d="M50 6 L93 43 L79 43 L50 21 L21 43 L7 43 Z" />
          <rect x="19" y="43" width="9" height="37" />
          <rect x="72" y="43" width="9" height="37" />
          <rect x="37" y="47" width="26" height="14" />
          <rect x="37" y="65" width="26" height="14" />
          <rect x="7" y="82" width="86" height="7" />
          <text x="50" y="100" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="0.3">EQUAL HOUSING</text>
          <text x="50" y="113" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="0.3">OPPORTUNITY</text>
        </svg>
      </div>
      <footer>
        <div className="footer-left">
          <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
          {children}
        </div>
      </footer>
    </>
  );
}
