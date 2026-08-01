"use client";

export default function ResourceLinks({ intro, links, note }) {
  return (
    <div className="resource-card">
      <p className="resource-intro">{intro}</p>
      <div className="resource-links">
        {links.map((link) => (
          <a key={link.href} className="resource-link" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
      {note && <p className="map-note">{note}</p>}
    </div>
  );
}
