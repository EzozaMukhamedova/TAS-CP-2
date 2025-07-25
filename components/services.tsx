"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  const [language] = useState("UZ") // Default to Uzbek

  const content = {
    UZ: {
      title: "Biznes yo'nalishlari",
      subtitle: "Ko'chmas mulk boshqaruvidan quyosh elektr stansiyalarigacha keng ko'lamli xizmatlar",
      button: "Barcha xizmatlarni ko'rish",
    },
    RU: {
      title: "Направления бизнеса",
      subtitle: "Широкий спектр услуг от управления недвижимостью до солнечных электростанций",
      button: "Посмотреть все услуги",
    },
    EN: {
      title: "Business Directions",
      subtitle: "Wide range of services from property management to solar power stations",
      button: "View All Services",
    },
  }

  const services = [
    {
      icon: "🏢",
      titleUZ: "Mulk Boshqaruvi",
      titleRU: "Управление Недвижимостью",
      titleEN: "Property Management",
      descriptionUZ: "Ko'chmas mulkni to'liq boshqarish va operatsion xizmatlar ko'rsatish.",
      descriptionRU: "Полное управление недвижимостью и операционные услуги.",
      descriptionEN: "Comprehensive property management and operational services.",
    },
    {
      icon: "🏗️",
      titleUZ: "Bino Boshqaruvi",
      titleRU: "Управление Зданиями",
      titleEN: "Building Management",
      descriptionUZ: "Binolarni saqlash va boshqarishda yagona xizmat ko'rsatish.",
      descriptionRU: "Единый сервис по содержанию и управлению зданиями.",
      descriptionEN: "Integrated building maintenance and management services.",
    },
    {
      icon: "🏪",
      titleUZ: "Do'kon va Omborxona Xizmati",
      titleRU: "Обслуживание Магазинов и Складов",
      titleEN: "Shop & Warehouse Service",
      descriptionUZ: "Tijorat ob'ektlari va omborxonalar uchun professional texnik yordam.",
      descriptionRU: "Профессиональная техническая поддержка для коммерческих объектов и складов.",
      descriptionEN: "Professional technical support for commercial facilities and warehouses.",
    },
    {
      icon: "☀️",
      titleUZ: "Quyosh Elektr Stansiyasi",
      titleRU: "Солнечная Электростанция",
      titleEN: "Solar Power Station",
      descriptionUZ: "Quyosh elektr qurilmalarini texnik xizmat ko'rsatish va ta'mirlash.",
      descriptionRU: "Техническое обслуживание и ремонт солнечного электрооборудования.",
      descriptionEN: "Maintenance and repair of solar power equipment.",
    },
    {
      icon: "🌿",
      titleUZ: "Landshaft Parvarishi",
      titleRU: "Уход за Ландшафтом",
      titleEN: "Landscape Care",
      descriptionUZ: "Yashil hududlar va bog'larni chiroyli saqlash uchun professional xizmat.",
      descriptionRU: "Профессиональный сервис для красивого содержания зеленых зон и садов.",
      descriptionEN: "Professional service for beautiful maintenance of green areas and gardens.",
    },
  ]

  const getTitle = (service: any) => {
    switch (language) {
      case "RU":
        return service.titleRU
      case "EN":
        return service.titleEN
      default:
        return service.titleUZ
    }
  }

  const getDescription = (service: any) => {
    switch (language) {
      case "RU":
        return service.descriptionRU
      case "EN":
        return service.descriptionEN
      default:
        return service.descriptionUZ
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-gray-900 font-bold mb-2">{getTitle(service)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed text-center">
                  {getDescription(service)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/business">{content[language as keyof typeof content].button}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
