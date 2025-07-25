"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TenantInfo() {
  const [language] = useState("UZ") // Default to Uzbek

  const content = {
    UZ: {
      title: "Ijara berish",
      subtitle: "Sifatli mulklar ko'p miqdorda tayyorlab qo'yganmiz",
      viewAll: "Barcha mulklarni ko'rish",
      inquiry: "Ijara so'rovi",
      details: "Batafsil ko'rish",
      available: "Bo'sh",
      occupied: "Band",
      location: "Joylashuv",
      area: "Maydon",
      rent: "Ijara haqi",
    },
    RU: {
      title: "Сдача в аренду",
      subtitle: "Подготовили множество качественных объектов",
      viewAll: "Посмотреть все объекты",
      inquiry: "Запрос аренды",
      details: "Подробнее",
      available: "Свободно",
      occupied: "Занято",
      location: "Расположение",
      area: "Площадь",
      rent: "Арендная плата",
    },
    EN: {
      title: "Rental Properties",
      subtitle: "We have prepared many quality properties",
      viewAll: "View All Properties",
      inquiry: "Rental Inquiry",
      details: "View Details",
      available: "Available",
      occupied: "Occupied",
      location: "Location",
      area: "Area",
      rent: "Rent",
    },
  }

  const properties = [
    {
      titleUZ: "Toranomon Ofis Binosi",
      titleRU: "Офисное здание Торанomon",
      titleEN: "Toranomon Office Building",
      locationUZ: "Tokyo, Minato tumani, Toranomon",
      locationRU: "Токио, район Минато, Торанomon",
      locationEN: "Tokyo, Minato-ku, Toranomon",
      area: "150㎡",
      rent: "¥300,000/oy",
      statusUZ: "Bo'sh",
      statusRU: "Свободно",
      statusEN: "Available",
      available: true,
    },
    {
      titleUZ: "Shinjuku Tijorat Maydoni",
      titleRU: "Коммерческое пространство Синдзюку",
      titleEN: "Shinjuku Commercial Space",
      locationUZ: "Tokyo, Shinjuku tumani",
      locationRU: "Токио, район Синдзюку",
      locationEN: "Tokyo, Shinjuku-ku",
      area: "80㎡",
      rent: "¥200,000/oy",
      statusUZ: "Bo'sh",
      statusRU: "Свободно",
      statusEN: "Available",
      available: true,
    },
    {
      titleUZ: "Shibuya Omborxona",
      titleRU: "Склад Сибуя",
      titleEN: "Shibuya Warehouse",
      locationUZ: "Tokyo, Shibuya tumani",
      locationRU: "Токио, район Сибуя",
      locationEN: "Tokyo, Shibuya-ku",
      area: "300㎡",
      rent: "¥150,000/oy",
      statusUZ: "Band",
      statusRU: "Занято",
      statusEN: "Occupied",
      available: false,
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

  const getStatus = (property: any) => {
    switch (language) {
      case "RU":
        return property.statusRU
      case "EN":
        return property.statusEN
      default:
        return property.statusUZ
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
          {properties.map((property, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.available ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {getStatus(property)}
                  </span>
                  {property.available && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      {content[language as keyof typeof content].details}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
            <Link href="/tenant">{content[language as keyof typeof content].viewAll}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600">
            <Link href="/contact">{content[language as keyof typeof content].inquiry}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
