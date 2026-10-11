"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PortfolioContent, Locale, contentMap, defaultLocale } from "@/content";

interface LanguageContextType {
  locale: Locale;
  content: PortfolioContent;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  content: contentMap[defaultLocale],
  setLocale: () => {},
  toggleLocale: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // 1. Check if user already has an explicit preference in localStorage
    const savedLocale = localStorage.getItem("preferred_locale") as Locale | null;
    if (savedLocale === "en" || savedLocale === "id") {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
      return;
    }

    // 2. Detect user browser location / language setting
    // If Indonesian ('id' or 'id-ID') is detected, set to 'id'. Otherwise, default to 'en'.
    try {
      const languages = [
        navigator.language,
        ...(navigator.languages || []),
      ].filter(Boolean);

      const hasIndonesian = languages.some((lang) =>
        lang.toLowerCase().startsWith("id")
      );

      if (hasIndonesian) {
        setLocaleState("id");
        document.documentElement.lang = "id";
      } else {
        setLocaleState("en");
        document.documentElement.lang = "en";
      }
    } catch {
      // Fallback default
      setLocaleState(defaultLocale);
      document.documentElement.lang = defaultLocale;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("preferred_locale", newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore in environments with disabled storage
    }
  };

  const toggleLocale = () => {
    const next = locale === "en" ? "id" : "en";
    setLocale(next);
  };

  const content = contentMap[locale];

  return (
    <LanguageContext.Provider value={{ locale, content, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

