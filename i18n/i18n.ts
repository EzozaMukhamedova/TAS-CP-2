"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjima resurslari
import uz from "@/messages/uz.json";
import ru from "@/messages/ru.json";
import en from "@/messages/en.json";

export const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
  en: { translation: en },
} as const;

export function initI18n() {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      resources,
      lng:
        typeof window !== "undefined"
          ? localStorage.getItem("lang") ?? "uz"
          : "uz",
      fallbackLng: "uz",
      interpolation: { escapeValue: false },
      // Massiv/obyekt qaytarishni yoqamiz (slides uchun)
      returnObjects: true,
    });
  }
  return i18n;
}
