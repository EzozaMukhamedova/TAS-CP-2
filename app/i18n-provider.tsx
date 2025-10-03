"use client";

import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import { initI18n } from "@/i18n/i18n";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const i18n = initI18n();

  // Tablar orasida tilni sync qilish
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "lang" && e.newValue) i18n.changeLanguage(e.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [i18n]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
