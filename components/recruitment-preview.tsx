"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RecruitmentPreview() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      title: "Bizga Qo'shiling",
      subtitle: "Professional jamoamizning bir qismi bo'ling",
      applyNow: "Hoziroq ariza bering",
      viewAll: "Barcha vakansiyalarni ko'rish",
      fullTime: "To'liq vaqt",
      location: "Joylashuv",
    },
    RU: {
      title: "Присоединяйтесь к Нам",
      subtitle: "Станьте частью нашей профессиональной команды",
      applyNow: "Подать заявку сейчас",
      viewAll: "Посмотреть все вакансии",
      fullTime: "Полный рабочий день",
      location: "Местоположение",
    },
    EN: {
      title: "Join Us",
      subtitle: "Become part of our professional team",
      applyNow: "Apply Now",
      viewAll: "View All Positions",
      fullTime: "Full-time",
      location: "Location",
    },
  }

  const positions = [
    {
      id: 1,
      titleUZ: "Ko'chmas Mulk Menejeri",
      titleRU: "Менеджер по недвижимости",
      titleEN: "Real Estate Manager",
      locationUZ: "Tokyo",
      locationRU: "Токио",
      locationEN: "Tokyo",
      descriptionUZ: "Mulk portfellarini boshqarish va mijozlar bilan ishlash",
      descriptionRU: "Управление портфелями недвижимости и работа с клиентами",
      descriptionEN: "Managing property portfolios and client relations",
    },
    {
      id: 2,
      titleUZ: "Loyiha Koordinatori",
      titleRU: "Координатор проектов",
      titleEN: "Project Coordinator",
      locationUZ: "Osaka",
      locationRU: "Осака",
      locationEN: "Osaka",
      descriptionUZ: "Qurilish loyihalarini rejalashtirish va nazorat qilish",
      descriptionRU: "Планирование и контроль строительных проектов",
      descriptionEN: "Planning and overseeing construction projects",
    },
    {
      id: 3,
      titleUZ: "Marketing Mutaxassisi",
      titleRU: "Специалист по маркетингу",
      titleEN: "Marketing Specialist",
      locationUZ: "Tokyo",
      locationRU: "Токио",
      locationEN: "Tokyo",
      descriptionUZ: "Raqamli marketing va brendni rivojlantirish",
      descriptionRU: "Цифровой маркетинг и развитие бренда",
      descriptionEN: "Digital marketing and brand development",
    },
  ]

  const getTitle = (position: any) => {
    switch (language) {
      case "RU":
        return position.titleRU
      case "EN":
        return position.titleEN
      default:
        return position.titleUZ
    }
  }

  const getDescription = (position: any) => {
    switch (language) {
      case "RU":
        return position.descriptionRU
      case "EN":
        return position.descriptionEN
      default:
        return position.descriptionUZ
    }
  }

  const getLocation = (position: any) => {
    switch (language) {
      case "RU":
        return position.locationRU
      case "EN":
        return position.locationEN
      default:
        return position.locationUZ
    }
  }

  return (
    <section className="py-20 bg-white">
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
          {positions.map((position) => (
            <Card key={position.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-gray-900">{getTitle(position)}</CardTitle>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {content[language as keyof typeof content].fullTime}
                  </span>
                </div>
                <p className="text-gray-600">
                  📍 {content[language as keyof typeof content].location}: {getLocation(position)}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{getDescription(position)}</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/recruitment/apply/${position.id}`}>
                    {content[language as keyof typeof content].applyNow}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600">
            <Link href="/recruitment">{content[language as keyof typeof content].viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
