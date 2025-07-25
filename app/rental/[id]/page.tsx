"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, MapPin, Home, DollarSign, Calendar } from "lucide-react"
import Image from "next/image"

interface PropertyDetailPageProps {
  params: {
    id: string
  }
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      backToRental: "Ijara sahifasiga qaytish",
      propertyDetails: "Mulk Tafsilotlari",
      location: "Joylashuv",
      area: "Maydon",
      rent: "Ijara haqi",
      deposit: "Kafolat puli",
      features: "Xususiyatlari",
      description: "Tavsif",
      contactForViewing: "Ko'rib chiqish uchun bog'laning",
      available: "Bo'sh",
      occupied: "Band",
      floorPlan: "Qavat rejasi",
      nearbyFacilities: "Yaqin atrofdagi ob'ektlar",
      transportAccess: "Transport aloqasi",
    },
    RU: {
      backToRental: "Вернуться к аренде",
      propertyDetails: "Детали Недвижимости",
      location: "Местоположение",
      area: "Площадь",
      rent: "Арендная плата",
      deposit: "Залог",
      features: "Особенности",
      description: "Описание",
      contactForViewing: "Связаться для просмотра",
      available: "Свободно",
      occupied: "Занято",
      floorPlan: "План этажа",
      nearbyFacilities: "Близлежащие объекты",
      transportAccess: "Транспортная доступность",
    },
    EN: {
      backToRental: "Back to Rental",
      propertyDetails: "Property Details",
      location: "Location",
      area: "Area",
      rent: "Rent",
      deposit: "Deposit",
      features: "Features",
      description: "Description",
      contactForViewing: "Contact for Viewing",
      available: "Available",
      occupied: "Occupied",
      floorPlan: "Floor Plan",
      nearbyFacilities: "Nearby Facilities",
      transportAccess: "Transport Access",
    },
  }

  // Mock property data - in real app this would come from API
  const propertyData = {
    1: {
      titleUZ: "Toranomon Ofis Markazi",
      titleRU: "Офисный центр Торанomon",
      titleEN: "Toranomon Office Center",
      locationUZ: "Tokyo, Minato tumani, Toranomon",
      locationRU: "Токио, район Минато, Торанomon",
      locationEN: "Tokyo, Minato-ku, Toranomon",
      type: "office",
      area: "150㎡",
      rent: "¥300,000/oy",
      deposit: "¥600,000",
      available: true,
      featuresUZ: ["Bekatdan 3 daqiqa", "24/7 xavfsizlik", "Yuqori tezlikli internet", "Konferens zali", "Parking"],
      featuresRU: ["3 минуты от станции", "24/7 охрана", "Высокоскоростной интернет", "Конференц-зал", "Парковка"],
      featuresEN: ["3 min from station", "24/7 security", "High-speed internet", "Conference room", "Parking"],
      descriptionUZ:
        "Zamonaviy ofis binosi Toranomon biznes markazida joylashgan. Yuqori sifatli jihozlar va professional muhit bilan ta'minlangan. Metro bekatiga yaqin joylashuvi tufayli transport aloqasi juda qulay.",
      descriptionRU:
        "Современное офисное здание расположено в бизнес-центре Торанomon. Оснащено высококачественным оборудованием и профессиональной средой. Очень удобная транспортная доступность благодаря близости к станции метро.",
      descriptionEN:
        "Modern office building located in Toranomon business center. Equipped with high-quality equipment and professional environment. Very convenient transport access due to proximity to metro station.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    // Add more properties as needed
  }

  const property = propertyData[params.id as keyof typeof propertyData]

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Mulk topilmadi</h1>
          <Button asChild>
            <Link href="/rental">Ijara sahifasiga qaytish</Link>
          </Button>
        </div>
      </div>
    )
  }

  const getTitle = () => {
    switch (language) {
      case "RU":
        return property.titleRU
      case "EN":
        return property.titleEN
      default:
        return property.titleUZ
    }
  }

  const getLocation = () => {
    switch (language) {
      case "RU":
        return property.locationRU
      case "EN":
        return property.locationEN
      default:
        return property.locationUZ
    }
  }

  const getFeatures = () => {
    switch (language) {
      case "RU":
        return property.featuresRU
      case "EN":
        return property.featuresEN
      default:
        return property.featuresUZ
    }
  }

  const getDescription = () => {
    switch (language) {
      case "RU":
        return property.descriptionRU
      case "EN":
        return property.descriptionEN
      default:
        return property.descriptionUZ
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/rental">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToRental}
          </Link>
        </Button>
      </div>

      {/* Property Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{getTitle()}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{getLocation()}</span>
            </div>
          </div>
          <Badge
            variant={property.available ? "default" : "secondary"}
            className={`${property.available ? "bg-green-500" : "bg-gray-500"} text-white`}
          >
            {property.available
              ? content[language as keyof typeof content].available
              : content[language as keyof typeof content].occupied}
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <Card>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="md:col-span-2">
                  <Image
                    src={property.images[0] || "/placeholder.svg"}
                    alt={getTitle()}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                {property.images.slice(1).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${getTitle()} ${index + 2}`}
                    width={400}
                    height={300}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {content[language as keyof typeof content].description}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{getDescription()}</p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {content[language as keyof typeof content].features}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {getFeatures().map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Floor Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {content[language as keyof typeof content].floorPlan}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Home className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">
                    {language === "UZ" && "Qavat rejasi mavjud"}
                    {language === "RU" && "План этажа доступен"}
                    {language === "EN" && "Floor plan available"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Property Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                {content[language as keyof typeof content].propertyDetails}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">{content[language as keyof typeof content].area}</p>
                  <p className="font-semibold">{property.area}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">{content[language as keyof typeof content].rent}</p>
                  <p className="font-semibold">{property.rent}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">{content[language as keyof typeof content].deposit}</p>
                  <p className="font-semibold">{property.deposit}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-6">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700" disabled={!property.available}>
                <Link href="/contact">{content[language as keyof typeof content].contactForViewing}</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Nearby Facilities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">
                {content[language as keyof typeof content].nearbyFacilities}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {language === "UZ" && "Metro bekati"}
                    {language === "RU" && "Станция метро"}
                    {language === "EN" && "Metro station"}
                  </span>
                  <span className="font-medium">3 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {language === "UZ" && "Konbini"}
                    {language === "RU" && "Магазин"}
                    {language === "EN" && "Convenience store"}
                  </span>
                  <span className="font-medium">2 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {language === "UZ" && "Restoran"}
                    {language === "RU" && "Ресторан"}
                    {language === "EN" && "Restaurant"}
                  </span>
                  <span className="font-medium">5 min</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
