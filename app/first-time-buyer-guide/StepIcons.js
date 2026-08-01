// Simple line icons, one per homebuying stage. Kept as plain inline SVG
// (no icon library) so they inherit color via currentColor and stay tiny.

const props = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const STEP_ICONS = [
  // 1. Think it through — compass / direction
  (
    <svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5l-1.8 4.8-4.8 1.8 1.8-4.8z" />
    </svg>
  ),
  // 2. Prepare your finances — dollar in a circle
  (
    <svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v9M14.3 9.8c0-1.2-1-1.8-2.3-1.8s-2.3.6-2.3 1.7c0 2.4 4.6 1.1 4.6 3.5 0 1.1-1 1.8-2.3 1.8s-2.3-.6-2.3-1.8" />
    </svg>
  ),
  // 3. Get pre-approved — document with checklist
  (
    <svg {...props}>
      <rect x="6" y="3.5" width="12" height="17" rx="1.2" />
      <path d="M9 8.5h6M9 12h6M9 15.5h3.5" />
    </svg>
  ),
  // 4. Find your home — house
  (
    <svg {...props}>
      <path d="M4 11.5l8-6.5 8 6.5" />
      <path d="M6 10.2V20h12v-9.8" />
    </svg>
  ),
  // 5. Under contract — shield with check
  (
    <svg {...props}>
      <path d="M12 3.5l7 2.7v5.6c0 4.6-3 7.6-7 8.7-4-1.1-7-4.1-7-8.7V6.2z" />
      <path d="M9 12l2 2 4-4.3" />
    </svg>
  ),
  // 6. Closing day — key
  (
    <svg {...props}>
      <circle cx="8" cy="12" r="4" />
      <path d="M11.8 12H20M15.8 12v3.2M18.8 12v3.2" />
    </svg>
  ),
];
