"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PartnersBanksPage() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      backToCompany: "Kompaniyaga qaytish",
      title: "Asosiy Bank va Hamkor Tashkilotlar",
      financialInstitutions: "Moliyaviy institutlar",
      mainClients: "Asosiy mijozlar",
      noOrder: "(Hech qanday tartibda, sarlavhalar qoldirilmagan)",
      otherSections: "Boshqa Bo'limlar",
    },
    RU: {
      backToCompany: "Вернуться к компании",
      title: "Основные Банки и Партнерские Организации",
      financialInstitutions: "Финансовые институты",
      mainClients: "Основные клиенты",
      noOrder: "(Без определенного порядка, заголовки опущены)",
      otherSections: "Другие Разделы",
    },
    EN: {
      backToCompany: "Back to Company",
      title: "Main Banks and Partner Organizations",
      financialInstitutions: "Financial Institutions",
      mainClients: "Main Clients",
      noOrder: "(No particular order, titles omitted)",
      otherSections: "Other Sections",
    },
  }

  const financialInstitutions = [
    "Mizuho banki",
    "Mitsubishi UFJ banki",
    "Resona banki",
    "SBJ banki",
    "Aozora banki",
    "Okinava banki",
    "Kiraboshi banki",
    "Kyoto banki",
    "Shizuoka banki",
    "77-bank",
    "Chiba Kogyo Bank",
    "Toho banki",
    "Towa banki",
    "Hokuriku banki",
    "Musashino banki",
    "Higashi-Nippon banki",
    "Osaka farovonlik Shinkin banki",
    "Sawayaka Shinkin banki",
    "Shonan Shinkin banki",
    "Johoku Shinkin Bank",
    "Sugamo Shinkin banki",
    "Seibu Shinkin banki",
    "Tokyo Shinkin Bank",
    "Uri kredit uyushmasi",
    "Osaka Kyoei kredit uyushmasi",
    "Daitokyo Shinkin Bank",
    "Tokio farovonlik kredit uyushmasi",
    "Hana kredit uyushmasi",
    "Mille kredit uyushmasi",
    "Markaziy savdo va sanoat banki",
  ]

  const mainClients = [
    "NTT shaharsozlik korporatsiyasi",
    "Open House Group Co., Ltd.",
    "Sankei Building Co., Ltd.",
    "Daiwa House Industry Co., Ltd.",
    "Tokyu Real Estate Co., Ltd.",
    "Nomura Real Estate Co., Ltd.",
    "Haseko korporatsiyasi",
    "Hankyu Hanshin Properties Co., Ltd.",
    "Mitsui Fudosan Residential Co., Ltd.",
    "Mitsubishi Estate Residence Co., Ltd.",
    "Itochu korporatsiyasi",
    "Ken Corporation Co., Ltd.",
    "Keihan Electric Railway Real Estate Co., Ltd.",
    "Goldman Sachs Securities Co., Ltd.",
    "Saison Realty Co., Ltd.",
    "Daiei Real Estate Co., Ltd.",
    "Daiwa Estate Co., Ltd.",
    "Tokyu Real Estate Capital Management Co., Ltd.",
    "Yasuda Real Estate Co., Ltd.",
    "CBRE Inc.",
    "Japan Estate Co., Ltd.",
    "Jons Lang LaSalle Co., Ltd.",
    "Green Seed Co., Ltd.",
    "Tokyu Livable Co., Ltd.",
    "Tokyo Tatemono Real Estate Sales Co., Ltd.",
    "Toyo Real Estate Co., Ltd.",
    "Nomura Real Estate Solutions Co., Ltd.",
    "Mitsui Fudosan Realty Co., Ltd.",
    "Mizuho Trust & Banking",
    "Mizuho Real Estate Sales Co., Ltd.",
    "Mitsubishi UFJ Trust and Banking Corporation",
    "Mitsubishi UFJ Real Estate Sales Co., Ltd.",
    "Sumitomo Mitsui Trust Bank",
    "Sumitomo Mitsui Trust Realty Co., Ltd.",
  ]

  const otherSections = [
    {
      id: "management-vision",
      titleUZ: "Boshqaruv Ko'rinishi",
      titleRU: "Видение Управления",
      titleEN: "Management Vision",
    },
    { id: "company-history", titleUZ: "Kompaniya Tarixi", titleRU: "История Компании", titleEN: "Company History" },
    {
      id: "organizational-structure",
      titleUZ: "Tashkiliy Tuzilma",
      titleRU: "Организационная Структура",
      titleEN: "Organizational Structure",
    },
    { id: "general-info", titleUZ: "Umumiy Ma'lumot", titleRU: "Общая Информация", titleEN: "General Information" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/company">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToCompany}
          </Link>
        </Button>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1C3990] mb-6">{content[language as keyof typeof content].title}</h1>
      </div>

      {/* Financial Institutions */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].financialInstitutions}
            </CardTitle>
            <p className="text-gray-600 text-sm">{content[language as keyof typeof content].noOrder}</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {financialInstitutions.map((institution, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1C3990] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      🏦
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main Clients */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].mainClients}
            </CardTitle>
            <p className="text-gray-600 text-sm">{content[language as keyof typeof content].noOrder}</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainClients.map((client, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      🏢
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{client}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Company Information */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {language === "UZ" && "Kompaniya haqida ma'lumot"}
              {language === "RU" && "Информация о компании"}
              {language === "EN" && "Company Information"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {language === "UZ" &&
                  "Tokyo Asset Solution ko'chmas mulk sohasida faoliyat yurituvchi yetakchi kompaniya sifatida yuqorida ko'rsatilgan moliyaviy institutlar va mijozlar bilan uzoq muddatli hamkorlik munosabatlarini o'rnatgan. Bizning keng hamkor tarmog'imiz loyihalarimizning muvaffaqiyatli amalga oshirilishini ta'minlaydi."}
                {language === "RU" &&
                  "Tokyo Asset Solution как ведущая компания в сфере недвижимости установила долгосрочные партнерские отношения с вышеуказанными финансовыми институтами и клиентами. Наша широкая партнерская сеть обеспечивает успешную реализацию наших проектов."}
                {language === "EN" &&
                  "Tokyo Asset Solution as a leading company in the real estate sector has established long-term partnerships with the above financial institutions and clients. Our extensive partner network ensures the successful implementation of our projects."}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Sections */}
      <section>
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].otherSections}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {otherSections.map((section) => (
                <Button
                  key={section.id}
                  asChild
                  variant="outline"
                  className="h-auto p-4 justify-start border-[#1C3990] text-[#1C3990] hover:bg-[#1C3990] hover:text-white"
                >
                  <Link href={`/company/${section.id}`}>
                    {language === "RU" ? section.titleRU : language === "EN" ? section.titleEN : section.titleUZ}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
