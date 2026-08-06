export default function SiteFooter({ children }) {
  return (
    <footer>
      <div className="footer-left">
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        {children}
      </div>
      <div className="eho-badge">
        <svg viewBox="0 0 100 118" fill="currentColor" role="img" aria-label="Equal Housing Opportunity">
          <path d="M50 4 L92 42 L78 42 L50 20 L22 42 L8 42 Z" />
          <rect x="20" y="42" width="11" height="40" />
          <rect x="69" y="42" width="11" height="40" />
          <rect x="35" y="48" width="30" height="15" />
          <rect x="35" y="67" width="30" height="15" />
          <rect x="8" y="84" width="84" height="8" />
          <text x="50" y="101" textAnchor="middle" fontSize="11.5" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.4">EQUAL HOUSING</text>
          <text x="50" y="114" textAnchor="middle" fontSize="11.5" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.4">OPPORTUNITY</text>
        </svg>
      </div>
    </footer>
  );
}
