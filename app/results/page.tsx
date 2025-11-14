"use client";

import { useTranslation } from "react-i18next";

export default function ResultPage() {
  const { t } = useTranslation(); // default namespace

  return (
    <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center text-3xl sm:text-3xl lg:text-4xl font-bold text-[#31519F] mb-4">
            {t("Results.title")}
          </h2>
          <p className="mt-3 text-center text-sm sm:text-base text-gray-500">
            {t("Results.subtitle")}
          </p>

          {/* Card */}
          <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="px-6 sm:px-10 py-8 text-center space-y-2">
              <p className="text-sm sm:text-base text-gray-600">
                {t("Results.soonText")}
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#1C3990]">
                {t("Results.soonHighlight")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
