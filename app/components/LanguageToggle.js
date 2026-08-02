"use client";


export default function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage();
  const isEnglish = lang === "en";

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={isEnglish ? t.toggle.ariaSwitchToSpanish : t.toggle.ariaSwitchToEnglish}
    >
      <span className={`lang-flag ${isEnglish ? "active" : ""}`}>🇺🇸</span>
      <span className="lang-track">
        <span className={`lang-knob ${isEnglish ? "" : "right"}`} />
      </span>
      <span className={`lang-flag ${isEnglish ? "" : "active"}`}>🇪🇸</span>
    </button>
  );
}
