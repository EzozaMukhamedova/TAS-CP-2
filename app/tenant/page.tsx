"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function TenantPage() {
  const [language] = useState("UZ") // Default to Uzbek

  const content = {
    UZ: {
      title: "Ijara berish",
      subtitle: "Sifatli mulklar ko'p miqdorda tayyorlab qo'yganmiz. Bemalol murojaat qiling.",
      propertyList: "Ijara beriladigan mulklar ro'yxati",
      inquiryForm: "Ijara so'rovi",
      inquiryDescription: "Mulk haqida so'rovlaringiz uchun",
      name: "Ism",
      company: "Kompaniya",
      email: "Elektron pochta",
      phone: "Telefon",
      property: "Kerakli mulk",
      selectProperty: "Mulkni tanlang",
      message: "So'rov matni",
      messagePlaceholder: "Mulk haqida batafsil ma'lumot bering...",
      submit: "So'rovni yuborish",
      detailsReservation: "Batafsil ma'lumot va ko'rib chiqish",
      available: "Bo'sh",
      area: "Maydon",
      rent: "Ijara haqi",
      deposit: "Kafolat puli",
      features: "Xususiyatlari",
      location: "Joylashuv",
    },
    RU: {
      title: "Сдача в аренду",
      subtitle: "Подготовили множество качественных объектов. Обращайтесь без стеснения.",
      propertyList: "Список сдаваемых объектов",
      inquiryForm: "Запрос аренды",
      inquiryDescription: "Для ваших запросов об объектах",
      name: "Имя",
      company: "Компания",
      email: "Электронная почта",
      phone: "Телефон",
      property: "Желаемый объект",
      selectProperty: "Выберите объект",
      message: "Текст запроса",
      messagePlaceholder: "Расскажите подробно об объекте...",
      submit: "Отправить запрос",
      detailsReservation: "Подробности и бронирование просмотра",
      available: "Свободно",
      area: "Площадь",
      rent: "Арендная плата",
      deposit: "Залог",
      features: "Особенности",
      location: "Расположение",
    },
    EN: {
      title: "Rental Properties",
      subtitle: "We have prepared many quality properties. Please feel free to contact us.",
      propertyList: "List of rental properties",
      inquiryForm: "Rental Inquiry",
      inquiryDescription: "For your property inquiries",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      property: "Desired Property",
      selectProperty: "Select Property",
      message: "Inquiry Message",
      messagePlaceholder: "Tell us about the property in detail...",
      submit: "Send Inquiry",
      detailsReservation: "Details & Viewing Reservation",
      available: "Available",
      area: "Area",
      rent: "Rent",
      deposit: "Deposit",
      features: "Features",
      location: "Location",
    },
  }

  const properties = [
    {
      id: 1,
      titleUZ: "Toranomon Ofis Binosi A Blok",
      titleRU: "Офисное здание Торанomon блок A",
      titleEN: "Toranomon Office Building Block A",
      locationUZ: "Tokyo, Minato tumani, Toranomon 1-16-4",
      locationRU: "Токио, район Минато, Торанomon 1-16-4",
      locationEN: "Tokyo, Minato-ku, Toranomon 1-16-4",
      area: "150㎡",
      rent: "¥300,000/oy",
      deposit: "¥600,000",
      featuresUZ: ["Bekatdan 3 daqiqa piyoda", "Lift mavjud", "24 soat xavfsizlik"],
      featuresRU: ["3 минуты пешком от станции", "Лифт в наличии", "24-часовая охрана"],
      featuresEN: ["3 minutes walk from station", "Elevator available", "24-hour security"],
      status: "available",
    },
    {
      id: 2,
      titleUZ: "Shinjuku Tijorat Maydoni",
      titleRU: "Коммерческое пространство Синдзюку",
      titleEN: "Shinjuku Commercial Space",
      locationUZ: "Tokyo, Shinjuku tumani, G'arbiy Shinjuku 2-8-1",
      locationRU: "Токио, район Синдзюку, Западный Синдзюку 2-8-1",
      locationEN: "Tokyo, Shinjuku-ku, West Shinjuku 2-8-1",
      area: "80㎡",
      rent: "¥200,000/oy",
      deposit: "¥400,000",
      featuresUZ: ["1-qavat ko'cha do'koni", "Asosiy yo'l yonida", "2 ta avtomobil joyi"],
      featuresRU: ["Магазин на 1 этаже", "На главной дороге", "2 парковочных места"],
      featuresEN: ["1st floor street shop", "On main road", "2 parking spaces"],
      status: "available",
    },
    {
      id: 3,
      titleUZ: "Shinagava Omborxona Majmuasi",
      titleRU: "Складской комплекс Синагава",
      titleEN: "Shinagawa Warehouse Complex",
      locationUZ: "Tokyo, Shinagava tumani, Sharqiy Shinagava 4-12-8",
      locationRU: "Токио, район Синагава, Восточная Синагава 4-12-8",
      locationEN: "Tokyo, Shinagawa-ku, East Shinagawa 4-12-8",
      area: "500㎡",
      rent: "¥250,000/oy",
      deposit: "¥500,000",
      featuresUZ: ["Yuk mashinasi yaqinlashishi mumkin", "Sovutish jihozlari", "24 soat foydalanish mumkin"],
      featuresRU: ["Подъезд грузовика возможен", "Холодильное оборудование", "24-часовое использование"],
      featuresEN: ["Truck access possible", "Refrigeration equipment", "24-hour usage available"],
      status: "available",
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content[language as keyof typeof content].title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content[language as keyof typeof content].subtitle}</p>
      </div>

      {/* Property Listings */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {content[language as keyof typeof content].propertyList}
          </h2>
          <div className="space-y-6">
            {properties.map((property) => (
              <Card key={property.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{getTitle(property)}</CardTitle>
                      <CardDescription className="mt-2">📍 {getLocation(property)}</CardDescription>
                    </div>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {content[language as keyof typeof content].available}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
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
                    <div>
                      <p className="text-gray-700 font-medium mb-2">
                        {content[language as keyof typeof content].features}:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {getFeatures(property).map((feature: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {content[language as keyof typeof content].detailsReservation}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {content[language as keyof typeof content].inquiryForm}
              </CardTitle>
              <CardDescription>{content[language as keyof typeof content].inquiryDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{content[language as keyof typeof content].name} *</Label>
                    <Input id="name" placeholder="Ism Familiya" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{content[language as keyof typeof content].company}</Label>
                    <Input id="company" placeholder="Kompaniya nomi" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{content[language as keyof typeof content].email} *</Label>
                  <Input id="email" type="email" placeholder="example@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{content[language as keyof typeof content].phone}</Label>
                  <Input id="phone" type="tel" placeholder="03-1234-5678" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="property">{content[language as keyof typeof content].property}</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">{content[language as keyof typeof content].selectProperty}</option>
                    {properties.map((property) => (
                      <option key={property.id} value={property.id}>
                        {getTitle(property)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{content[language as keyof typeof content].message} *</Label>
                  <Textarea
                    id="message"
                    placeholder={content[language as keyof typeof content].messagePlaceholder}
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {content[language as keyof typeof content].submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
