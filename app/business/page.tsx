"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function BusinessPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="max-w-xl mx-auto text-center lg:text-left">
            <h1 className="text-[#1C3990] font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              {t("Business.hero.titleLine1")} <br />
              {t("Business.hero.titleLine2")}
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl mb-6">
              {t("Business.hero.subtitle")}
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              {t("Business.hero.body")}
            </p>

            <a
              href="/contact"
              className="inline-block bg-[#1C3990] hover:bg-[#2d4a9b] text-white font-medium px-6 py-3 rounded-lg transition"
            >
              {t("Business.hero.cta")}
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-3xl shadow-xl overflow-hidden bg-white">
              <Image
                src="/svg/biznes_image.svg"
                alt={t("Business.hero.imageAlt")}
                fill
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Xizmatlarimiz */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173758]">
            {t("Business.servicesSectionTitle")}
          </h2>
          <div className="h-1 w-16 bg-[#1C3990] rounded-full mx-auto mt-4 mb-10" />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1 — Mulk Boshqaruvi */}
            <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/mulk_boshqaruvi.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("Business.services.property.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {t("Business.services.property.subtitle")}
                  </p>
                </div>
              </div>

              <CardContent className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    {t("Business.common.overview")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("Business.services.property.overview")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    {t("Business.common.features")}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.property.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.property.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.property.feature3")}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 2 — Bino Boshqaruvi */}
            <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/bino_boshqaruvi.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("Business.services.building.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {t("Business.services.building.subtitle")}
                  </p>
                </div>
              </div>

              <CardContent className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    {t("Business.common.overview")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("Business.services.building.overview")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    {t("Business.common.features")}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.building.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.building.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.building.feature3")}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 3 — Tijorat Ob’ektlari */}
            <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/tijorat_obyectlari.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("Business.services.commercial.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {t("Business.services.commercial.subtitle")}
                  </p>
                </div>
              </div>

              <CardContent className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    {t("Business.common.overview")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("Business.services.commercial.overview")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    {t("Business.common.features")}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.commercial.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.commercial.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.commercial.feature3")}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 4 — Quyosh Energiyasi */}
            <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/quyosh_energiyasi.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("Business.services.solar.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {t("Business.services.solar.subtitle")}
                  </p>
                </div>
              </div>

              <CardContent className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    {t("Business.common.overview")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("Business.services.solar.overview")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    {t("Business.common.features")}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.solar.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.solar.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.solar.feature3")}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 5 — Landshaft Dizayni */}
            <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/landshaft_dizayni.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("Business.services.landscape.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {t("Business.services.landscape.subtitle")}
                  </p>
                </div>
              </div>

              <CardContent className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    {t("Business.common.overview")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("Business.services.landscape.overview")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    {t("Business.common.features")}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.landscape.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.landscape.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.landscape.feature3")}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 6 — Investitsiya Konsaltingi */}
            <Card className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/investitsiya_consaltingi.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("Business.services.investment.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {t("Business.services.investment.subtitle")}
                  </p>
                </div>
              </div>

              <CardContent className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    {t("Business.common.overview")}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t("Business.services.investment.overview")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    {t("Business.common.features")}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.investment.feature1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.investment.feature2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>{t("Business.services.investment.feature3")}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nega tanlash? */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173758]">
            {t("Business.whyTitle")}
          </h2>
          <div className="h-1 w-20 bg-[#1C3990] rounded-full mx-auto mt-4 mb-10" />

          {/* 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
            {/* 1 – Professional Ekspertiza */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E5ECFF]">
                <span className="text-2xl text-[#1C3990]">
                  <img src="svg/ekspertiza.svg" alt="" />
                </span>
              </div>
              <h3 className="font-semibold text-lg text-[#173758]">
                {t("Business.why.expertise.title")}
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-600 max-w-xs">
                {t("Business.why.expertise.body")}
              </p>
            </div>

            {/* 2 – Xalqaro Tajriba */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E5ECFF]">
                <span className="text-2xl text-[#1C3990]">
                  <img src="svg/xalqaro_tajriba.svg" alt="" />
                </span>
              </div>
              <h3 className="font-semibold text-lg text-[#173758]">
                {t("Business.why.international.title")}
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-600 max-w-xs">
                {t("Business.why.international.body")}
              </p>
            </div>

            {/* 3 – Individual Yondashuv */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E5ECFF]">
                <span className="text-2xl text-[#1C3990]">
                  <img src="svg/individual_yondashuv.svg" alt="" />
                </span>
              </div>
              <h3 className="font-semibold text-lg text-[#173758]">
                {t("Business.why.individual.title")}
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-600 max-w-xs">
                {t("Business.why.individual.body")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
