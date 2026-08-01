export default function BackLink({ href, children }) {
  return (
    <div className="back-link-row">
      <a href={href} className="back-home-btn">{children}</a>
    </div>
  );
}
