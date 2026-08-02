"use client";

import { createContext, useContext, useEffect, useState } from "react";
import translations from "./translations";

export const SUPPORTED_LANGS = ["en", "es", "fr", "ht", "pt", "it"];

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("mhg-lang");
    if (SUPPORTED_LANGS.includes(saved)) setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mhg-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Falls back to English for any language whose translation content isn't
  // filled in yet, so picking a newer language never breaks the page.
  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
