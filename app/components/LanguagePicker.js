"use client";

import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const LANGUAGES = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "ht", flag: "🇭🇹", label: "Kreyòl Ayisyen" },
  { code: "pt", flag: "🇵🇹", label: "Português" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
];

export default function LanguagePicker() {
  const { lang, setLang, t } = useLanguage();
  const detailsRef = useRef(null);
  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  function pick(code) {
    setLang(code);
    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <details className="lang-picker" ref={detailsRef}>
      <summary className="lang-picker-current" aria-label={t.toggle.ariaLabel}>
        <span className="lang-flag active">{current.flag}</span>
        <span className="lang-picker-code">{current.code.toUpperCase()}</span>
      </summary>
      <div className="lang-picker-menu">
        {LANGUAGES.map((l) => (
          <button
            type="button"
            key={l.code}
            className={`lang-picker-option${l.code === lang ? " active" : ""}`}
            onClick={() => pick(l.code)}
          >
            <span className="lang-flag active">{l.flag}</span>
            {l.label}
          </button>
        ))}
      </div>
    </details>
  );
}
