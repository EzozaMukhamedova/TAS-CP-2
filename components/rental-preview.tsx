"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RentalPreview() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      title: "Ijara Mulklari",
      subtitle: "Sifatli tijorat va turar joy mulklari",
      moreInfo: "Ko'proq ma'lumot",
      viewAll: "Barcha mulklarni ko'rish",
      available: "Bo'sh",
      area: "Maydon",
      rent: "Ijara haqi",
    },
    RU: {
      title: "Арендная Недвижимость",
      subtitle: "Качественная коммерческая и жилая недвижимость",
      moreInfo: "Подробнее",
      viewAll: "Посмотреть всю недвижимость",
      available: "Свободно",
      area: "Площадь",
      rent: "Арендная плата",
    },
    EN: {
      title: "Rental Properties",
      subtitle: "Quality commercial and residential properties",
      moreInfo: "More Info",
      viewAll: "View All Properties",
      available: "Available",
      area: "Area",
      rent: "Rent",
    },
  }

  const properties = [
    {
      id: 1,
      titleUZ: "Toranomon Ofis Markazi",
      titleRU: "Офисный центр Торанomon",
      titleEN: "Toranomon Office Center",
      locationUZ: "Tokyo, Minato tumani",
      locationRU: "Токио, район Минато",
      locationEN: "Tokyo, Minato-ku",
      area: "150㎡",
      rent: "¥300,000/oy",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
    },
    {
      id: 2,
      titleUZ: "Shinjuku Tijorat Maydoni",
      titleRU: "Коммерческая площадь Синдзюку",
      titleEN: "Shinjuku Commercial Space",
      locationUZ: "Tokyo, Shinjuku tumani",
      locationRU: "Токио, район Синдзюку",
      locationEN: "Tokyo, Shinjuku-ku",
      area: "80㎡",
      rent: "¥200,000/oy",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
    },
    {
      id: 3,
      titleUZ: "Osaka Biznes Majmuasi",
      titleRU: "Бизнес-комплекс Осака",
      titleEN: "Osaka Business Complex",
      locationUZ: "Osaka shahri",
      locationRU: "Город Осака",
      locationEN: "Osaka City",
      area: "200㎡",
      rent: "¥250,000/oy",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
    },
  ]

  const getTitle = (property: any) => {
    switch (language) {
      case "RU":
        return property.titleRU
      case "EN":
        return property.titleEN
      default:
        return property.titleUZ
    }
  }

  const getLocation = (property: any) => {
    switch (language) {
      case "RU":
        return property.locationRU
      case "EN":
        return property.locationEN
      default:
        return property.locationUZ
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
          {properties.map((property) => (
            <Card key={property.id} className="hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={getTitle(property)}
                  className="w-full h-full object-cover"
                />
                {property.available && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {content[language as keyof typeof content].available}
                    </span>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{getTitle(property)}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">📍 {getLocation(property)}</p>
                  <p className="text-gray-600">
                    📐 {content[language as keyof typeof content].area}: {property.area}
                  </p>
                  <p className="text-gray-600">
                    💰 {content[language as keyof typeof content].rent}: {property.rent}
                  </p>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/rental/${property.id}`}>{content[language as keyof typeof content].moreInfo}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600">
            <Link href="/rental">{content[language as keyof typeof content].viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
