"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function RentalPage() {
  const [language] = useState("UZ")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  const content = {
    UZ: {
      title: "Ijara Mulklari",
      subtitle: "Sifatli tijorat va turar joy mulklari keng tanlovda",
      search: "Qidirish",
      searchPlaceholder: "Joylashuv yoki mulk nomi bo'yicha qidiring...",
      filterByType: "Tur bo'yicha filtrlash",
      viewDetails: "Batafsil ma'lumot va ko'rib chiqish",
      available: "Bo'sh",
      occupied: "Band",
      area: "Maydon",
      rent: "Ijara haqi",
      deposit: "Kafolat puli",
      features: "Xususiyatlari",
      allTypes: "Barcha turlar",
    },
    RU: {
      title: "Арендная Недвижимость",
      subtitle: "Широкий выбор качественной коммерческой и жилой недвижимости",
      search: "Поиск",
      searchPlaceholder: "Поиск по местоположению или названию объекта...",
      filterByType: "Фильтр по типу",
      viewDetails: "Подробности и бронирование просмотра",
      available: "Свободно",
      occupied: "Занято",
      area: "Площадь",
      rent: "Арендная плата",
      deposit: "Залог",
      features: "Особенности",
      allTypes: "Все типы",
    },
    EN: {
      title: "Rental Properties",
      subtitle: "Wide selection of quality commercial and residential properties",
      search: "Search",
      searchPlaceholder: "Search by location or property name...",
      filterByType: "Filter by Type",
      viewDetails: "Details & Viewing Reservation",
      available: "Available",
      occupied: "Occupied",
      area: "Area",
      rent: "Rent",
      deposit: "Deposit",
      features: "Features",
      allTypes: "All Types",
    },
  }

  const propertyTypes = [
    { id: "all", labelUZ: "Barchasi", labelRU: "Все", labelEN: "All" },
    { id: "office", labelUZ: "Ofis", labelRU: "Офис", labelEN: "Office" },
    { id: "commercial", labelUZ: "Tijorat", labelRU: "Коммерческий", labelEN: "Commercial" },
    { id: "warehouse", labelUZ: "Omborxona", labelRU: "Склад", labelEN: "Warehouse" },
    { id: "residential", labelUZ: "Turar joy", labelRU: "Жилой", labelEN: "Residential" },
  ]

  const properties = [
    {
      id: 1,
      titleUZ: "Toranomon Ofis Markazi",
      titleRU: "Офисный центр Торанomon",
      titleEN: "Toranomon Office Center",
      locationUZ: "Tokyo, Minato tumani, Toranomon",
      locationRU: "Токио, район Минато, Торанomon",
      locationEN: "Tokyo, Minato-ku, Toranomon",
      type: "office",
      typeUZ: "Ofis",
      typeRU: "Офис",
      typeEN: "Office",
      area: "150㎡",
      rent: "¥300,000/oy",
      deposit: "¥600,000",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      featuresUZ: ["Bekatdan 3 daqiqa", "24/7 xavfsizlik", "Yuqori tezlikli internet"],
      featuresRU: ["3 минуты от станции", "24/7 охрана", "Высокоскоростной интернет"],
      featuresEN: ["3 min from station", "24/7 security", "High-speed internet"],
    },
    {
      id: 2,
      titleUZ: "Shinjuku Tijorat Maydoni",
      titleRU: "Коммерческая площадь Синдзюку",
      titleEN: "Shinjuku Commercial Space",
      locationUZ: "Tokyo, Shinjuku tumani",
      locationRU: "Токио, район Синдзюку",
      locationEN: "Tokyo, Shinjuku-ku",
      type: "commercial",
      typeUZ: "Tijorat",
      typeRU: "Коммерческий",
      typeEN: "Commercial",
      area: "80㎡",
      rent: "¥200,000/oy",
      deposit: "¥400,000",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      featuresUZ: ["1-qavat do'kon", "Asosiy yo'l", "Avtomobil joyi"],
      featuresRU: ["Магазин на 1 этаже", "Главная дорога", "Парковка"],
      featuresEN: ["1st floor shop", "Main road", "Parking"],
    },
    {
      id: 3,
      titleUZ: "Osaka Biznes Majmuasi",
      titleRU: "Бизнес-комплекс Осака",
      titleEN: "Osaka Business Complex",
      locationUZ: "Osaka shahri",
      locationRU: "Город Осака",
      locationEN: "Osaka City",
      type: "office",
      typeUZ: "Ofis",
      typeRU: "Офис",
      typeEN: "Office",
      area: "200㎡",
      rent: "¥250,000/oy",
      deposit: "¥500,000",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      featuresUZ: ["Konferens zallari", "Restoran", "Fitness markaz"],
      featuresRU: ["Конференц-залы", "Ресторан", "Фитнес-центр"],
      featuresEN: ["Conference rooms", "Restaurant", "Fitness center"],
    },
    {
      id: 4,
      titleUZ: "Shinagava Omborxona",
      titleRU: "Склад Синагава",
      titleEN: "Shinagawa Warehouse",
      locationUZ: "Tokyo, Shinagava tumani",
      locationRU: "Токио, район Синагава",
      locationEN: "Tokyo, Shinagawa-ku",
      type: "warehouse",
      typeUZ: "Omborxona",
      typeRU: "Склад",
      typeEN: "Warehouse",
      area: "500㎡",
      rent: "¥180,000/oy",
      deposit: "¥360,000",
      image: "/placeholder.svg?height=200&width=300",
      available: false,
      featuresUZ: ["Yuk mashinasi kirishi", "Sovutish", "24/7 foydalanish"],
      featuresRU: ["Въезд грузовика", "Охлаждение", "24/7 использование"],
      featuresEN: ["Truck access", "Refrigeration", "24/7 access"],
    },
    {
      id: 5,
      titleUZ: "Shibuya Turar Joy",
      titleRU: "Жилой комплекс Сибуя",
      titleEN: "Shibuya Residential",
      locationUZ: "Tokyo, Shibuya tumani",
      locationRU: "Токио, район Сибуя",
      locationEN: "Tokyo, Shibuya-ku",
      type: "residential",
      typeUZ: "Turar joy",
      typeRU: "Жилой",
      typeEN: "Residential",
      area: "65㎡",
      rent: "¥150,000/oy",
      deposit: "¥300,000",
      image: "/placeholder.svg?height=200&width=300",
      available: true,
      featuresUZ: ["2 xona", "Balkon", "Kir yuvish mashinasi"],
      featuresRU: ["2 комнаты", "Балкон", "Стиральная машина"],
      featuresEN: ["2 rooms", "Balcony", "Washing machine"],
    },
  ]

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      searchTerm === "" ||
      getTitle(property).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getLocation(property).toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = selectedType === "all" || property.type === selectedType

    return matchesSearch && matchesType
  })

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

  const getType = (property: any) => {
    switch (language) {
      case "RU":
        return property.typeRU
      case "EN":
        return property.typeEN
      default:
        return property.typeUZ
    }
  }

  const getFeatures = (property: any) => {
    switch (language) {
      case "RU":
        return property.featuresRU
      case "EN":
        return property.featuresEN
      default:
        return property.featuresUZ
    }
  }

  const getTypeLabel = (type: any) => {
    switch (language) {
      case "RU":
        return type.labelRU
      case "EN":
        return type.labelEN
      default:
        return type.labelUZ
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content[language as keyof typeof content].title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content[language as keyof typeof content].subtitle}</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="max-w-md mx-auto">
          <Input
            type="text"
            placeholder={content[language as keyof typeof content].searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-4">
            {content[language as keyof typeof content].filterByType}:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {propertyTypes.map((type) => (
              <Button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                variant={selectedType === type.id ? "default" : "outline"}
                className={selectedType === type.id ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {getTypeLabel(type)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="hover:shadow-lg transition-shadow bg-white">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                src={property.image || "/placeholder.svg"}
                alt={getTitle(property)}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-600">
                  {getType(property)}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge
                  variant={property.available ? "default" : "secondary"}
                  className={property.available ? "bg-green-500" : "bg-gray-500"}
                >
                  {property.available
                    ? content[language as keyof typeof content].available
                    : content[language as keyof typeof content].occupied}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">{getTitle(property)}</CardTitle>
              <CardDescription>📍 {getLocation(property)}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">
                  📐 {content[language as keyof typeof content].area}: {property.area}
                </p>
                <p className="text-gray-600">
                  💰 {content[language as keyof typeof content].rent}: {property.rent}
                </p>
                <p className="text-gray-600">
                  🏦 {content[language as keyof typeof content].deposit}: {property.deposit}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {content[language as keyof typeof content].features}:
                </p>
                <div className="flex flex-wrap gap-1">
                  {getFeatures(property)
                    .slice(0, 3)
                    .map((feature: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                </div>
              </div>

              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700" disabled={!property.available}>
                <Link href={`/rental/${property.id}`}>{content[language as keyof typeof content].viewDetails}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {searchTerm || selectedType !== "all" ? "Qidiruv bo'yicha natija topilmadi." : "Mulklar topilmadi."}
          </p>
        </div>
      )}
    </div>
  )
}
