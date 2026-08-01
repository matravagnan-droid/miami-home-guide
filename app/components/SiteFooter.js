export default function SiteFooter({ children }) {
  return (
    <footer>
      <div className="footer-left">
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        {children}
      </div>
      <div className="eho-badge">
        <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <path d="M50 6 L93 43 L79 43 L50 21 L21 43 L7 43 Z" />
          <rect x="19" y="43" width="9" height="37" />
          <rect x="72" y="43" width="9" height="37" />
          <rect x="37" y="47" width="26" height="14" />
          <rect x="37" y="65" width="26" height="14" />
          <rect x="7" y="82" width="86" height="7" />
        </svg>
        <span>Equal Housing Opportunity</span>
      </div>
    </footer>
  );
}
