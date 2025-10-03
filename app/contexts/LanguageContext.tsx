"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "UZ" | "RU" | "EN";

type LanguageContextType = {
  language: Lang;
  setLanguage: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Lang) || "UZ";
    }
    return "UZ";
  });

  // persist in localStorage
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  // keep tabs/windows in sync (optional)
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "lang" && e.newValue) {
        setLanguage(e.newValue as Lang);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
