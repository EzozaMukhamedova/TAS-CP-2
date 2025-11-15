"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type Reason = { title: string; text: string };
type Bullet = string;

export default function CompanyPage() {
  // Default namespace (Hero, Contact ham shuni ishlatyapti)
  const { t } = useTranslation();

  const [isPresidentTextExpanded, setIsPresidentTextExpanded] = useState(false);

  const moreLabel = isPresidentTextExpanded
    ? t("Companys.leaderMessage.less")
    : t("Companys.leaderMessage.more");

  // "Nima uchun bizga ishonishingiz kerak" kartochkalari
  const reasons = t("Company.reasons", { returnObjects: true }) as Reason[];

  // Facility / Property bo‘limlari punktlari
  const facilityBullets = t("Company.facility.points", {
    returnObjects: true,
  }) as Bullet[];

  const propertyBullets = t("Company.property.points", {
    returnObjects: true,
  }) as Bullet[];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Header */}
      <div className="text-center mb-10 md:mb-16 mt-[86px]">
        <h1 className="font-bold text-[#1C3990] text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight">
          {t("Company.title")}
        </h1>
      </div>

      {/* Company Overview */}
      <section className="mb-12 md:mb-20">
        <Card className="border-0">
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              {/* TEXT */}
              <div className="w-full lg:w-[516px]">
                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 md:ml-[50px]">
                  {t("Company.overview.body")}
                </p>
              </div>

              {/* IMAGE */}
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto">
                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[1/1]">
                  <Image
                    src="/svg/kompaniyaPageImg.svg"
                    alt="Company Building"
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    priority
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Headquarters Management / Ofis Rahbariyati */}
      <section className="mb-12 md:mb-16">
        <Card className="shadow-lg border-0">
          <CardHeader className="flex items-center justify-center gap-4">
            <CardTitle
              className="
          text-[#173758]
          font-bold
          text-2xl
          sm:text-3xl
          lg:text-4xl
          text-center
          leading-tight
        "
            >
              {t("Companys.leaderMessage.sectionTitle")}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
              {/* Left – image & name */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative w-56 sm:w-64 md:w-full max-w-[345px] aspect-square">
                  <Image
                    src="/svg/nobuaki.svg"
                    alt={t("Companys.leaderMessage.name")}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 60vw, 345px"
                  />
                </div>
                <p
                  className="
              text-center mt-4 font-semibold px-4
              w-full
              sm:w-[260px]
              lg:w-[350px]
            "
                >
                  {t("Companys.leaderMessage.name")}
                </p>

                <p className="text-center text-gray-600">
                  {t("Companys.leaderMessage.role")}
                </p>
              </div>

              {/* Right – text */}
              <div className="md:col-span-2">
                <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed max-w-none">
                  <p
                    className={`transition-all duration-300 
                ${
                  isPresidentTextExpanded
                    ? "max-h-[2000px]"
                    : "max-h-[110px] overflow-hidden lg:max-h-none"
                }`}
                  >
                    {t("Companys.leaderMessage.message")}
                  </p>

                  {/* Learn more / show less – faqat mobile & tablet */}
                  <button
                    type="button"
                    onClick={() => setIsPresidentTextExpanded((prev) => !prev)}
                    className="mt-3 text-sm font-medium text-blue-600 hover:underline lg:hidden"
                  >
                    {moreLabel}
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* President's Message / Kompaniya vakillari */}
      <section className="mb-12 md:mb-16">
        <Card className="shadow-lg border-0">
          <CardHeader className="flex items-center justify-center gap-4">
            <CardTitle
              className="
                text-[#173758]
                font-bold
                text-2xl
                sm:text-3xl
                lg:text-4xl
                text-center
                leading-tight
              "
            >
              {t("Company.president.title")}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
              {/* Left – image & name */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative w-56 sm:w-64 md:w-full max-w-[345px] aspect-square">
                  <Image
                    src="/svg/boshdirektor2.png"
                    alt={t("Company.president.name")}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 60vw, 345px"
                  />
                </div>
                <p
                  className="
                    text-center mt-4 font-semibold px-4
                    w-full
                    sm:w-[260px]
                    lg:w-[350px]
                  "
                >
                  {t("Company.president.name")}
                </p>

                <p className="text-center text-gray-600">
                  {t("Company.president.position")}
                </p>
              </div>

              {/* Right – text */}
              <div className="md:col-span-2">
                <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed max-w-none">
                  <p
                    className={`transition-all duration-300 
                      ${
                        isPresidentTextExpanded
                          ? "max-h-[2000px]"
                          : "max-h-[110px] overflow-hidden lg:max-h-none"
                      }`}
                  >
                    {t("Company.president.body")}
                  </p>

                  {/* Learn more / show less – faqat mobile & tablet */}
                  <button
                    type="button"
                    onClick={() => setIsPresidentTextExpanded((prev) => !prev)}
                    className="mt-3 text-sm font-medium text-blue-600 hover:underline lg:hidden"
                  >
                    {moreLabel}
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Nega ishonish? */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173758] mb-12">
            {t("Company.reasonsTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-md px-6 py-7 lg:px-7 lg:py-8"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E5F0FF]">
                  {/* check icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#4F8DF9"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 6.71 9.29L9 11.586l6.296-6.296a1 1 0 0 1 1.408 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold text-lg mb-3 text-[#173758]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility & Property sections */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Facility */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#173758] mb-6 leading-snug">
                {t("Company.facility.title")} <br />
                <span className="text-gray-600 text-[22px] font-normal">
                  {t("Company.facility.subtitle")}
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 max-w-[600px]">
                {t("Company.facility.body")}
              </p>

              <ul className="space-y-3 text-gray-700">
                {facilityBullets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-[3px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="/svg/management.svg"
                  alt="Facility Management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Property */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center order-1 lg:order-none">
              <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="/svg/property_management.svg"
                  alt="Property Management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#173758] mb-6 leading-snug">
                {t("Company.property.title")} <br />
                <span className="text-gray-600 text-[22px] font-normal">
                  {t("Company.property.subtitle")}
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 max-w-[600px]">
                {t("Company.property.body")}
              </p>

              <ul className="space-y-3 text-gray-700">
                {propertyBullets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-[3px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
