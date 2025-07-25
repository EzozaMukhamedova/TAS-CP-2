"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function TrackRecordPreview() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      title: "Loyiha Natijalari",
      subtitle: "Muvaffaqiyatli amalga oshirilgan loyihalarimiz",
      viewDetails: "Batafsil ko'rish",
      viewAll: "Barcha loyihalarni ko'rish",
    },
    RU: {
      title: "Результаты Проектов",
      subtitle: "Наши успешно реализованные проекты",
      viewDetails: "Подробнее",
      viewAll: "Посмотреть все проекты",
    },
    EN: {
      title: "Project Results",
      subtitle: "Our successfully completed projects",
      viewDetails: "View Details",
      viewAll: "View All Projects",
    },
  }

  const projects = [
    {
      id: 1,
      titleUZ: "Azabudai Hills Majmuasi",
      titleRU: "Комплекс Азабудай Хиллс",
      titleEN: "Azabudai Hills Complex",
      locationUZ: "Tokyo, Minato tumani",
      locationRU: "Токио, район Минато",
      locationEN: "Minato-ku, Tokyo",
      year: "2023",
      categoryUZ: "Qayta rivojlantirish",
      categoryRU: "Реконструкция",
      categoryEN: "Redevelopment",
      image: "/placeholder.svg?height=300&width=400",
      profit: "+25%",
    },
    {
      id: 2,
      titleUZ: "Kyoto An'anaviy Binolar",
      titleRU: "Традиционные здания Киото",
      titleEN: "Kyoto Traditional Buildings",
      locationUZ: "Kyoto shahri",
      locationRU: "Город Киото",
      locationEN: "Kyoto City",
      year: "2023",
      categoryUZ: "Ta'mirlash",
      categoryRU: "Реновация",
      categoryEN: "Renovation",
      image: "/placeholder.svg?height=300&width=400",
      profit: "+18%",
    },
    {
      id: 3,
      titleUZ: "Chitose Quyosh Stansiyasi",
      titleRU: "Солнечная станция Читосе",
      titleEN: "Chitose Solar Station",
      locationUZ: "Hokkaido",
      locationRU: "Хоккайдо",
      locationEN: "Hokkaido",
      year: "2022",
      categoryUZ: "Energiya",
      categoryRU: "Энергетика",
      categoryEN: "Energy",
      image: "/placeholder.svg?height=300&width=400",
      profit: "+30%",
    },
  ]

  const getTitle = (project: any) => {
    switch (language) {
      case "RU":
        return project.titleRU
      case "EN":
        return project.titleEN
      default:
        return project.titleUZ
    }
  }

  const getLocation = (project: any) => {
    switch (language) {
      case "RU":
        return project.locationRU
      case "EN":
        return project.locationEN
      default:
        return project.locationUZ
    }
  }

  const getCategory = (project: any) => {
    switch (language) {
      case "RU":
        return project.categoryRU
      case "EN":
        return project.categoryEN
      default:
        return project.categoryUZ
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
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={getTitle(project)}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {getCategory(project)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">{project.profit}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{getTitle(project)}</h3>
                <p className="text-gray-600 flex items-center mb-2">
                  <span className="mr-2">📍</span>
                  {getLocation(project)}
                </p>
                <p className="text-gray-500 text-sm mb-4">Yil: {project.year}</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/track-record/${project.id}`}>
                    {content[language as keyof typeof content].viewDetails}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600">
            <Link href="/track-record">{content[language as keyof typeof content].viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
