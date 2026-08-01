export default function SiteFooter({ children }) {
  return (
    <footer>
      <div className="footer-left">
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        {children}
      </div>
      <div className="eho-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M6 12l6-5 6 5" />
          <path d="M7.5 10.8V18h9v-7.2" />
          <path d="M10.3 18v-3.5h3.4V18" />
        </svg>
        <span>Equal Housing Opportunity</span>
      </div>
    </footer>
  );
}
