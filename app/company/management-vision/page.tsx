"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ManagementVisionPage() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      backToCompany: "Kompaniyaga qaytish",
      title: "Boshqaruv Ko'rinishi",
      mission: "Bizning Missiyamiz",
      managementPhilosophy: "Boshqaruv Falsafasi",
      ethicsPhilosophy: "Odob-Axloq Falsafasi",
      otherSections: "Boshqa Bo'limlar",
    },
    RU: {
      backToCompany: "Вернуться к компании",
      title: "Видение Управления",
      mission: "Наша Миссия",
      managementPhilosophy: "Философия Управления",
      ethicsPhilosophy: "Этическая Философия",
      otherSections: "Другие Разделы",
    },
    EN: {
      backToCompany: "Back to Company",
      title: "Management Vision",
      mission: "Our Mission",
      managementPhilosophy: "Management Philosophy",
      ethicsPhilosophy: "Ethics Philosophy",
      otherSections: "Other Sections",
    },
  }

  const ethicsValues = [
    {
      titleUZ: "Samimiy va kamtarlik bilan",
      titleRU: "С искренностью и скромностью",
      titleEN: "With sincerity and humility",
    },
    {
      titleUZ: "Challengeni qabul qiling",
      titleRU: "Принимайте вызовы",
      titleEN: "Accept challenges",
    },
    {
      titleUZ: "Fikrlaringiz va harakatlaringizda saxiy bo'ling",
      titleRU: "Будьте щедры в мыслях и действиях",
      titleEN: "Be generous in your thoughts and actions",
    },
    {
      titleUZ: "Do'stlaringizni qadrlang",
      titleRU: "Цените своих друзей",
      titleEN: "Value your friends",
    },
    {
      titleUZ: "Ishlashdan zavqlaning",
      titleRU: "Получайте удовольствие от работы",
      titleEN: "Enjoy working",
    },
    {
      titleUZ: "Tezlik hissi bilan ishlang",
      titleRU: "Работайте с чувством скорости",
      titleEN: "Work with a sense of speed",
    },
    {
      titleUZ: "Muloyim bo'ling",
      titleRU: "Будьте мягкими",
      titleEN: "Be gentle",
    },
    {
      titleUZ: "O'z-o'zini takomillashtirish",
      titleRU: "Самосовершенствование",
      titleEN: "Self-improvement",
    },
  ]

  const otherSections = [
    { id: "company-history", titleUZ: "Kompaniya Tarixi", titleRU: "История Компании", titleEN: "Company History" },
    {
      id: "organizational-structure",
      titleUZ: "Tashkiliy Tuzilma",
      titleRU: "Организационная Структура",
      titleEN: "Organizational Structure",
    },
    {
      id: "partners-banks",
      titleUZ: "Hamkor Tashkilotlar",
      titleRU: "Партнерские Организации",
      titleEN: "Partner Organizations",
    },
    { id: "general-info", titleUZ: "Umumiy Ma'lumot", titleRU: "Общая Информация", titleEN: "General Information" },
  ]

  const getEthicsTitle = (value: any) => {
    switch (language) {
      case "RU":
        return value.titleRU
      case "EN":
        return value.titleEN
      default:
        return value.titleUZ
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/company">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToCompany}
          </Link>
        </Button>
      </div>

      {/* Page Header with Image */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="lg:col-span-1">
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Management Vision"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="lg:col-span-1 flex flex-col justify-center h-full">
          <h1 className="text-4xl font-bold text-[#1C3990] mb-6">{content[language as keyof typeof content].title}</h1>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {language === "UZ" &&
                "Bizning boshqaruv ko'rinishimiz barqaror rivojlanish, innovatsiya va ijtimoiy mas'uliyat tamoyillariga asoslangan. Biz har bir qarorni kelajak avlodlar manfaatlarini hisobga olgan holda qabul qilamiz."}
              {language === "RU" &&
                "Наше видение управления основано на принципах устойчивого развития, инноваций и социальной ответственности. Мы принимаем каждое решение с учетом интересов будущих поколений."}
              {language === "EN" &&
                "Our management vision is based on the principles of sustainable development, innovation and social responsibility. We make every decision taking into account the interests of future generations."}
            </p>
            <p>
              {language === "UZ" &&
                "Kompaniyamizning asosiy qiymatlari xodimlarning professional o'sishi, mijozlar ehtiyojlarini qondirish va jamiyat rivojlanishiga hissa qo'shishdan iborat."}
              {language === "RU" &&
                "Основные ценности нашей компании включают профессиональный рост сотрудников, удовлетворение потребностей клиентов и вклад в развитие общества."}
              {language === "EN" &&
                "Our company's core values include employee professional growth, meeting customer needs and contributing to community development."}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].mission}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {language === "UZ" &&
                  "Bizning missiyamiz ko'chmas mulk innovatsiyalari orqali barqaror qiymat yaratish va jamiyat rivojlanishiga hissa qo'shishdir. Biz nafaqat binolar quramiz, balki odamlarning hayot sifatini yaxshilashtiruvchi muhit yaratamiz."}
                {language === "RU" &&
                  "Наша миссия - создание устойчивой ценности через инновации в недвижимости и вклад в развитие общества. Мы не только строим здания, но и создаем среду, улучшающую качество жизни людей."}
                {language === "EN" &&
                  "Our mission is to create sustainable value through real estate innovation and contribute to community development. We don't just build buildings, but create environments that improve people's quality of life."}
              </p>
              <p>
                {language === "UZ" &&
                  "Har bir loyihada biz mahalliy jamoalar bilan hamkorlik qilib, ularning ehtiyojlarini hisobga olgan holda yechimlar ishlab chiqamiz. Bizning maqsadimiz faqat moliyaviy foyda olish emas, balki ijtimoiy ta'sir yaratishdir."}
                {language === "RU" &&
                  "В каждом проекте мы сотрудничаем с местными сообществами, разрабатывая решения с учетом их потребностей. Наша цель - не только получение финансовой прибыли, но и создание социального воздействия."}
                {language === "EN" &&
                  "In every project, we collaborate with local communities, developing solutions that take their needs into account. Our goal is not only financial profit, but also creating social impact."}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Management Philosophy */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].managementPhilosophy}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {language === "UZ" && "Asosiy Tamoyillar"}
                  {language === "RU" && "Основные Принципы"}
                  {language === "EN" && "Core Principles"}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#1C3990] rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      {language === "UZ" && "Mijozlar ehtiyojlarini birinchi o'ringa qo'yish"}
                      {language === "RU" && "Приоритет потребностей клиентов"}
                      {language === "EN" && "Prioritizing customer needs"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#1C3990] rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      {language === "UZ" && "Innovatsiya va texnologik rivojlanish"}
                      {language === "RU" && "Инновации и технологическое развитие"}
                      {language === "EN" && "Innovation and technological development"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#1C3990] rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      {language === "UZ" && "Barqaror rivojlanish va ekologik mas'uliyat"}
                      {language === "RU" && "Устойчивое развитие и экологическая ответственность"}
                      {language === "EN" && "Sustainable development and environmental responsibility"}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {language === "UZ" && "Boshqaruv Yondashuvi"}
                  {language === "RU" && "Подход к Управлению"}
                  {language === "EN" && "Management Approach"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "UZ" &&
                    "Bizning boshqaruv yondashuvimiz ochiq kommunikatsiya, jamoaviy qaror qabul qilish va doimiy o'rganishga asoslangan. Biz har bir xodimning fikrlarini qadrlaydi va ularning professional rivojlanishini qo'llab-quvvatlaymiz."}
                  {language === "RU" &&
                    "Наш подход к управлению основан на открытой коммуникации, командном принятии решений и непрерывном обучении. Мы ценим мнение каждого сотрудника и поддерживаем их профессиональное развитие."}
                  {language === "EN" &&
                    "Our management approach is based on open communication, team decision-making and continuous learning. We value every employee's opinion and support their professional development."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Ethics Philosophy - Uniform Design */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990] text-center">
              {content[language as keyof typeof content].ethicsPhilosophy}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                {language === "UZ" &&
                  "Bizning odob-axloq falsafamiz halollik, shaffoflik va mas'uliyat tamoyillariga asoslangan. Quyidagi qiymatlar bizning har kungi faoliyatimizni yo'naltiradi:"}
                {language === "RU" &&
                  "Наша этическая философия основана на принципах честности, прозрачности и ответственности. Следующие ценности направляют нашу повседневную деятельность:"}
                {language === "EN" &&
                  "Our ethical philosophy is based on the principles of honesty, transparency and responsibility. The following values guide our daily activities:"}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ethicsValues.map((value, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border-2 border-gray-200 bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#1C3990] text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight">{getEthicsTitle(value)}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Sections */}
      <section>
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].otherSections}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {otherSections.map((section) => (
                <Button
                  key={section.id}
                  asChild
                  variant="outline"
                  className="h-auto p-4 justify-start border-[#1C3990] text-[#1C3990] hover:bg-[#1C3990] hover:text-white"
                >
                  <Link href={`/company/${section.id}`}>
                    {language === "RU" ? section.titleRU : language === "EN" ? section.titleEN : section.titleUZ}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
