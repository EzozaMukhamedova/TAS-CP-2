"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RedevelopmentPage() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      backToBusiness: "Biznes sahifasiga qaytish",
      title: "Qayta Qurish",
      overview: "Xizmat haqida umumiy ma'lumot",
      ourApproach: "Bizning Yondashuvimiz",
      keyFeatures: "Asosiy Xususiyatlar",
      benefits: "Afzalliklar",
      contactUs: "Biz bilan bog'laning",
    },
    RU: {
      backToBusiness: "Вернуться к бизнесу",
      title: "Реконструкция",
      overview: "Обзор услуги",
      ourApproach: "Наш Подход",
      keyFeatures: "Ключевые Особенности",
      benefits: "Преимущества",
      contactUs: "Связаться с нами",
    },
    EN: {
      backToBusiness: "Back to Business",
      title: "Redevelopment",
      overview: "Service Overview",
      ourApproach: "Our Approach",
      keyFeatures: "Key Features",
      benefits: "Benefits",
      contactUs: "Contact Us",
    },
  }

  const features = [
    {
      titleUZ: "Zamonaviy Arxitektura",
      titleRU: "Современная Архитектура",
      titleEN: "Modern Architecture",
      descriptionUZ: "Eng so'nggi arxitektura tendentsiyalari va dizayn yechimlarini qo'llaymiz",
      descriptionRU: "Применяем новейшие архитектурные тенденции и дизайнерские решения",
      descriptionEN: "We apply the latest architectural trends and design solutions",
      icon: "🏗️",
    },
    {
      titleUZ: "Energiya Samaradorligi",
      titleRU: "Энергоэффективность",
      titleEN: "Energy Efficiency",
      descriptionUZ: "Energiya tejamkor materiallar va texnologiyalardan foydalanish",
      descriptionRU: "Использование энергосберегающих материалов и технологий",
      descriptionEN: "Using energy-efficient materials and technologies",
      icon: "⚡",
    },
    {
      titleUZ: "Barqaror Rivojlanish",
      titleRU: "Устойчивое Развитие",
      titleEN: "Sustainable Development",
      descriptionUZ: "Atrof-muhitga zarar yetkazmaydigan qurilish usullari",
      descriptionRU: "Экологически безопасные методы строительства",
      descriptionEN: "Environmentally friendly construction methods",
      icon: "🌱",
    },
  ]

  const getFeatureTitle = (feature: any) => {
    switch (language) {
      case "RU":
        return feature.titleRU
      case "EN":
        return feature.titleEN
      default:
        return feature.titleUZ
    }
  }

  const getFeatureDescription = (feature: any) => {
    switch (language) {
      case "RU":
        return feature.descriptionRU
      case "EN":
        return feature.descriptionEN
      default:
        return feature.descriptionUZ
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/business">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToBusiness}
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="lg:col-span-1">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Redevelopment"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{content[language as keyof typeof content].title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {language === "UZ" &&
              "Eski va eskirgan binolarni buzib, zamonaviy arxitektura asosida qayta qurish xizmatimiz orqali shahar manzarasini yangilashda yordam beramiz. Bizning tajribali jamoamiz har bir loyihani batafsil o'rganib, eng samarali yechimlarni taklif etadi."}
            {language === "RU" &&
              "Через наш сервис сноса старых и устаревших зданий и их реконструкции на основе современной архитектуры мы помогаем обновить городской пейзаж. Наша опытная команда детально изучает каждый проект и предлагает наиболее эффективные решения."}
            {language === "EN" &&
              "Through our service of demolishing old and outdated buildings and reconstructing them based on modern architecture, we help renew the urban landscape. Our experienced team thoroughly studies each project and offers the most effective solutions."}
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 w-fit">
            <Link href="/contact">{content[language as keyof typeof content].contactUs}</Link>
          </Button>
        </div>
      </div>

      {/* Our Approach */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">
              {content[language as keyof typeof content].ourApproach}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              {language === "UZ" &&
                "Qayta qurish jarayonida biz zamonaviy qurilish texnologiyalari, energiya tejamkor materiallar va barqaror rivojlanish tamoyillaridan foydalanib, yangi avlod binolarini yaratamiz. Har bir loyiha mahalliy me'morchilik an'analarini hurmat qilgan holda, zamonaviy talablarga javob beradi."}
              {language === "RU" &&
                "В процессе реконструкции мы используем современные строительные технологии, энергоэффективные материалы и принципы устойчивого развития для создания зданий нового поколения. Каждый проект отвечает современным требованиям, уважая местные архитектурные традиции."}
              {language === "EN" &&
                "In the reconstruction process, we use modern construction technologies, energy-efficient materials and sustainable development principles to create next-generation buildings. Each project meets modern requirements while respecting local architectural traditions."}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {content[language as keyof typeof content].keyFeatures}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{getFeatureTitle(feature)}</h3>
                <p className="text-gray-600">{getFeatureDescription(feature)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section>
        <Card className="shadow-lg border-0 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600 text-center">
              {content[language as keyof typeof content].benefits}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    {language === "UZ" && "Mulk qiymatining sezilarli o'sishi"}
                    {language === "RU" && "Значительное увеличение стоимости недвижимости"}
                    {language === "EN" && "Significant increase in property value"}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    {language === "UZ" && "Energiya xarajatlarining kamayishi"}
                    {language === "RU" && "Снижение энергозатрат"}
                    {language === "EN" && "Reduced energy costs"}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    {language === "UZ" && "Zamonaviy qulayliklar va texnologiyalar"}
                    {language === "RU" && "Современные удобства и технологии"}
                    {language === "EN" && "Modern amenities and technologies"}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    {language === "UZ" && "Atrof-muhitga ijobiy ta'sir"}
                    {language === "RU" && "Положительное воздействие на окружающую среду"}
                    {language === "EN" && "Positive environmental impact"}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
