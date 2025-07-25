"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function OrganizationalStructurePage() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      backToCompany: "Kompaniyaga qaytish",
      title: "Tashkiliy Tuzilma",
      otherSections: "Boshqa Bo'limlar",
    },
    RU: {
      backToCompany: "Вернуться к компании",
      title: "Организационная Структура",
      otherSections: "Другие Разделы",
    },
    EN: {
      backToCompany: "Back to Company",
      title: "Organizational Structure",
      otherSections: "Other Sections",
    },
  }

  const organizationalStructure = {
    UZ: [
      "Aktsiyadorlar Yig'ilishi",
      "Direktorlar Kengashi",
      "Bosh Direktor Prezident",
      "Direktorlar Kengashi Raisi",
      "Kuzatuv Kengashi",
      "Komplayens Ofitseri",
      "Komplayens Risk Boshqaruvi Qo'mitasi",
      "Investitsiya Rejalashtirish Bosh Boshqarmasi",
      "Ko'chmas Mulk Biznes Bosh Boshqarmasi",
      "Rejalashtirish Boshqaruv Bosh Boshqarmasi",
      "Investitsiya Rejalashtirish Bo'limi",
      "Yechimlar Bo'limi",
      "Ichki Audit Bo'limi",
      "Rejalashtirish Rivojlantirish Bo'limi",
      "DX Targ'ibot Bo'limi",
      "Boshqaruv Rejalashtirish Bo'limi",
      "Rejalashtirish Dizayn",
      "Rejalashtirish Rivojlantirish",
      "DX Targ'ibot",
      "Ma'lumotlar Fani",
      "Savdo Birinchi Bo'limi",
      "Savdo Ikkinchi Bo'limi",
      "Savdo Uchinchi Bo'limi",
      "Umumiy Ishlar Kadrlar Bo'limi",
      "Moliya Bo'limi",
      "Buxgalteriya Bo'limi",
      "Biznes Tekshiruv Bo'limi",
    ],
    RU: [
      "Общее Собрание Акционеров",
      "Совет Директоров",
      "Президент Генеральный Директор",
      "Председатель Совета Директоров",
      "Наблюдательный Совет",
      "Офицер Комплаенса",
      "Комитет Управления Рисками Комплаенса",
      "Главное Управление Планирования Инвестиций",
      "Главное Управление Бизнеса Недвижимости",
      "Главное Управление Планирования и Управления",
      "Отдел Планирования Инвестиций",
      "Отдел Решений",
      "Отдел Внутреннего Аудита",
      "Отдел Планирования и Развития",
      "Отдел Продвижения DX",
      "Отдел Планирования Управления",
      "Планирование и Дизайн",
      "Планирование и Развитие",
      "Продвижение DX",
      "Наука о Данных",
      "Первый Отдел Продаж",
      "Второй Отдел Продаж",
      "Третий Отдел Продаж",
      "Отдел Общих Дел и Кадров",
      "Финансовый Отдел",
      "Бухгалтерский Отдел",
      "Отдел Проверки Бизнеса",
    ],
    EN: [
      "Shareholders' Meeting",
      "Board of Directors",
      "President CEO",
      "Chairman of the Board",
      "Supervisory Board",
      "Compliance Officer",
      "Compliance Risk Management Committee",
      "Investment Planning Headquarters",
      "Real Estate Business Headquarters",
      "Planning Management Headquarters",
      "Investment Planning Department",
      "Solutions Department",
      "Internal Audit Department",
      "Planning Development Department",
      "DX Promotion Department",
      "Management Planning Department",
      "Planning Design",
      "Planning Development",
      "DX Promotion",
      "Data Science",
      "Sales Department 1",
      "Sales Department 2",
      "Sales Department 3",
      "General Affairs HR Department",
      "Finance Department",
      "Accounting Department",
      "Business Review Department",
    ],
  }

  const otherSections = [
    {
      id: "management-vision",
      titleUZ: "Boshqaruv Ko'rinishi",
      titleRU: "Видение Управления",
      titleEN: "Management Vision",
    },
    { id: "company-history", titleUZ: "Kompaniya Tarixi", titleRU: "История Компании", titleEN: "Company History" },
    {
      id: "partners-banks",
      titleUZ: "Hamkor Tashkilotlar",
      titleRU: "Партнерские Организации",
      titleEN: "Partner Organizations",
    },
    { id: "general-info", titleUZ: "Umumiy Ma'lumot", titleRU: "Общая Информация", titleEN: "General Information" },
  ]

  const getStructure = () => {
    switch (language) {
      case "RU":
        return organizationalStructure.RU
      case "EN":
        return organizationalStructure.EN
      default:
        return organizationalStructure.UZ
    }
  }

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

      {/* Organizational Structure */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990] text-center">
              {language === "UZ" && "Kompaniya Tuzilmasi"}
              {language === "RU" && "Структура Компании"}
              {language === "EN" && "Company Structure"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Top Level */}
              <div className="text-center">
                <div className="inline-block bg-[#1C3990] text-white px-6 py-3 rounded-lg font-semibold">
                  {getStructure()[0]}
                </div>
              </div>

              {/* Second Level */}
              <div className="flex justify-center">
                <div className="bg-blue-100 text-[#1C3990] px-6 py-3 rounded-lg font-semibold">{getStructure()[1]}</div>
              </div>

              {/* Third Level */}
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-blue-50 text-[#1C3990] px-4 py-2 rounded-lg text-center font-medium">
                  {getStructure()[2]}
                </div>
                <div className="bg-blue-50 text-[#1C3990] px-4 py-2 rounded-lg text-center font-medium">
                  {getStructure()[3]}
                </div>
              </div>

              {/* Fourth Level */}
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-center">{getStructure()[4]}</div>
                <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-center">{getStructure()[5]}</div>
              </div>

              {/* Committee */}
              <div className="text-center">
                <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-medium">
                  {getStructure()[6]}
                </div>
              </div>

              {/* Main Departments */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-center font-medium">
                  {getStructure()[7]}
                </div>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-center font-medium">
                  {getStructure()[8]}
                </div>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-center font-medium">
                  {getStructure()[9]}
                </div>
              </div>

              {/* Sub Departments */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {getStructure()
                  .slice(10)
                  .map((department, index) => (
                    <div key={index} className="bg-gray-50 text-gray-700 px-3 py-2 rounded text-center text-sm">
                      {department}
                    </div>
                  ))}
              </div>
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
