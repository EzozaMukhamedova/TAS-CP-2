"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NewsPreview() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      title: "So'nggi Yangiliklar",
      subtitle: "Kompaniya faoliyati va loyihalar haqida eng yangi ma'lumotlar",
      readMore: "Batafsil",
      viewAll: "Barcha yangiliklarni ko'rish",
    },
    RU: {
      title: "Последние Новости",
      subtitle: "Самая свежая информация о деятельности компании и проектах",
      readMore: "Подробнее",
      viewAll: "Посмотреть все новости",
    },
    EN: {
      title: "Latest News",
      subtitle: "The latest information about company activities and projects",
      readMore: "Read More",
      viewAll: "View All News",
    },
  }

  const news = [
    {
      id: 1,
      date: "2024.01.15",
      categoryUZ: "Loyiha",
      categoryRU: "Проект",
      categoryEN: "Project",
      titleUZ: "Yangi Quyosh Elektr Stansiyasi Loyihasi Boshlandi",
      titleRU: "Начался новый проект солнечной электростанции",
      titleEN: "New Solar Power Station Project Started",
      excerptUZ: "Hokkaido viloyatida 50MW quvvatli yangi quyosh elektr stansiyasi qurilishi boshlandi...",
      excerptRU: "В префектуре Хоккайдо началось строительство новой солнечной электростанции мощностью 50МВт...",
      excerptEN: "Construction of a new 50MW solar power station has begun in Hokkaido Prefecture...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      date: "2024.01.10",
      categoryUZ: "E'lon",
      categoryRU: "Объявление",
      categoryEN: "Announcement",
      titleUZ: "Tokyo'da Yangi Ofis Majmuasi Ochildi",
      titleRU: "В Токио открылся новый офисный комплекс",
      titleEN: "New Office Complex Opened in Tokyo",
      excerptUZ: "Minato tumanida zamonaviy A-sinf ofis binosi mijozlarga taqdim etildi...",
      excerptRU: "В районе Минато представлено современное офисное здание класса А для клиентов...",
      excerptEN: "A modern Class A office building has been presented to clients in Minato district...",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      date: "2024.01.05",
      categoryUZ: "Mukofot",
      categoryRU: "Награда",
      categoryEN: "Award",
      titleUZ: "Kompaniya Yilning Eng Yaxshi Ko'chmas Mulk Kompaniyasi Deb Tan Olindi",
      titleRU: "Компания признана лучшей компанией недвижимости года",
      titleEN: "Company Recognized as Best Real Estate Company of the Year",
      excerptUZ: "Tokyo Asset Solution Yaponiya Ko'chmas Mulk Assotsiatsiyasi tomonidan mukofotlandi...",
      excerptRU: "Tokyo Asset Solution награждена Японской ассоциацией недвижимости...",
      excerptEN: "Tokyo Asset Solution was awarded by the Japan Real Estate Association...",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getTitle = (item: any) => {
    switch (language) {
      case "RU":
        return item.titleRU
      case "EN":
        return item.titleEN
      default:
        return item.titleUZ
    }
  }

  const getExcerpt = (item: any) => {
    switch (language) {
      case "RU":
        return item.excerptRU
      case "EN":
        return item.excerptEN
      default:
        return item.excerptUZ
    }
  }

  const getCategory = (item: any) => {
    switch (language) {
      case "RU":
        return item.categoryRU
      case "EN":
        return item.categoryEN
      default:
        return item.categoryUZ
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content[language as keyof typeof content].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content[language as keyof typeof content].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={getTitle(item)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {getCategory(item)}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <CardTitle className="text-lg text-gray-900 leading-tight">{getTitle(item)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{getExcerpt(item)}</p>
                <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600">
                  <Link href={`/news/${item.id}`}>{content[language as keyof typeof content].readMore}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/news">{content[language as keyof typeof content].viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
