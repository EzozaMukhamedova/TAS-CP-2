"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function RecruitmentPage() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      title: "Ishga Qabul Qilish",
      subtitle: "Ishga qabul qilish haqida ma'lumot",
      newGraduates: "2026 yangi bitiruvchilarni ishga qabul qilish",
      midCareer: "O'rta martaba ishga qabul qilish",
      welcomeMessage: "Sizning arizangizni intiqlik bilan kutamiz",
      description:
        "Biz ish va ishtirokchilarga nisbatan ishtiyoq va samimiylik bilan biz bilan ishlay oladigan hamkasblarni qidiramiz.",
      videoMessage:
        "Biz bosh direktorimiz Terashikidan kompaniyamiz biznesi va kelajakga bo'lgan qarashlarimiz bilan tanishtiruvchi videomurojaatini e'lon qildik.",
      clickForVideo: "Xabar videosi uchun bu yerni bosing",
      newGraduateDetails: "2026 yilda yangi bitiruvchilarni ishga olish uchun Mynavi orqali murojaat qiling.",
      midCareerDetails: "Ilova tafsilotlari",
      positions: "Ochiq Pozitsiyalar",
      inquiries: "Ishga qabul qilish bo'yicha so'rovlar",
      inquiriesDescription: "Savollar uchun telefon orqali yoki aloqa formamiz orqali biz bilan bog'laning.",
      phone: "03-5510-8300 (Vakil)",
    },
    RU: {
      title: "Трудоустройство",
      subtitle: "Информация о трудоустройстве",
      newGraduates: "Трудоустройство новых выпускников 2026",
      midCareer: "Трудоустройство среднего звена",
      welcomeMessage: "Мы с нетерпением ждем ваших заявок",
      description:
        "Мы ищем коллег, которые могут работать с нами с энтузиазмом и искренностью по отношению к работе и участникам.",
      videoMessage:
        "Мы опубликовали видеообращение от нашего генерального директора Терашики, знакомящее с нашим бизнесом и взглядами на будущее.",
      clickForVideo: "Нажмите здесь для просмотра видео",
      newGraduateDetails: "Подавайте заявки через Mynavi для трудоустройства новых выпускников в 2026 году.",
      midCareerDetails: "Детали заявки",
      positions: "Открытые Позиции",
      inquiries: "Запросы по трудоустройству",
      inquiriesDescription: "Для вопросов обращайтесь по телефону или через нашу контактную форму.",
      phone: "03-5510-8300 (Представитель)",
    },
    EN: {
      title: "Recruitment",
      subtitle: "Recruitment Information",
      newGraduates: "2026 New Graduate Recruitment",
      midCareer: "Mid-Career Recruitment",
      welcomeMessage: "We eagerly await your applications",
      description:
        "We are looking for colleagues who can work with us with enthusiasm and sincerity towards work and participants.",
      videoMessage:
        "We have published a video message from our CEO Terashiki introducing our company business and views on the future.",
      clickForVideo: "Click here for the message video",
      newGraduateDetails: "Apply through Mynavi for new graduate recruitment in 2026.",
      midCareerDetails: "Application details",
      positions: "Open Positions",
      inquiries: "Recruitment Inquiries",
      inquiriesDescription: "For questions, please contact us by phone or through our contact form.",
      phone: "03-5510-8300 (Representative)",
    },
  }

  const positions = [
    {
      id: "internal-auditor",
      titleUZ: "Ichki Auditorni Yollash",
      titleRU: "Найм Внутреннего Аудитора",
      titleEN: "Internal Auditor Recruitment",
      descriptionUZ:
        "IPOga tayyorgarlik ko'rish jarayonida biz ichki auditni amalga oshira oladigan xodimlarni qidirmoqdamiz. Biz rahbar o'rinbosari yoki bo'lim boshlig'i lavozimiga bitta nomzodni ishga olishni rejalashtirmoqdamiz.",
      descriptionRU:
        "В процессе подготовки к IPO мы ищем сотрудников, способных проводить внутренний аудит. Мы планируем нанять одного кандидата на должность заместителя руководителя или начальника отдела.",
      descriptionEN:
        "In the process of preparing for IPO, we are looking for employees who can conduct internal audits. We plan to hire one candidate for the position of deputy manager or department head.",
    },
    {
      id: "property-manager",
      titleUZ: "Mulk Menejerini Ishga Olish",
      titleRU: "Найм Менеджера по Недвижимости",
      titleEN: "Property Manager Recruitment",
      descriptionUZ: "Boshqaruv ostidagi mulklar ko'payganligi sababli biz mulk boshqaruvchisini yollaymiz.",
      descriptionRU:
        "В связи с увеличением количества управляемых объектов недвижимости мы нанимаем управляющего недвижимостью.",
      descriptionEN: "Due to the increase in managed properties, we are hiring a property manager.",
    },
    {
      id: "planning-construction",
      titleUZ: "Rejalashtirish va Qurilish Bo'limi",
      titleRU: "Отдел Планирования и Строительства",
      titleEN: "Planning and Construction Department",
      descriptionUZ:
        "Biz ko'chmas mulk va qurilish sohasidagi ixtisoslashgan ko'nikmalarini rivojlantirishni targ'ib qilish uchun ishlata oladigan odamni qidirmoqdamiz.",
      descriptionRU:
        "Мы ищем человека, которого можем использовать для продвижения развития специализированных навыков в сфере недвижимости и строительства.",
      descriptionEN:
        "We are looking for a person we can use to promote the development of specialized skills in real estate and construction.",
    },
    {
      id: "planning-development",
      titleUZ: "Rejalashtirish va Rivojlantirish Bo'limi",
      titleRU: "Отдел Планирования и Развития",
      titleEN: "Planning and Development Department",
      descriptionUZ:
        "Biz ko'chmas mulk va qurilish sohasida o'zlarining ixtisoslashgan ko'nikmalarini rivojlantirishni rag'batlantirish ishlarini olib borish uchun ishlata oladigan odamlarni qidiramiz.",
      descriptionRU:
        "Мы ищем людей, которых можем использовать для проведения работ по стимулированию развития их специализированных навыков в сфере недвижимости и строительства.",
      descriptionEN:
        "We are looking for people we can use to carry out work to encourage the development of their specialized skills in real estate and construction.",
    },
    {
      id: "sales-position",
      titleUZ: "Savdo Pozitsiyasi",
      titleRU: "Торговая Позиция",
      titleEN: "Sales Position",
      descriptionUZ: "Biz tashkilotimizni mustahkamlash uchun qo'shimcha xodimlarni yollashni qidirmoqdamiz.",
      descriptionRU: "Мы ищем дополнительных сотрудников для укрепления нашей организации.",
      descriptionEN: "We are looking to hire additional staff to strengthen our organization.",
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content[language as keyof typeof content].title}</h1>
        <p className="text-lg text-gray-600">{content[language as keyof typeof content].subtitle}</p>
      </div>

      {/* Welcome Message - Enhanced Design */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">👋</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">{content[language as keyof typeof content].welcomeMessage}</h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              {content[language as keyof typeof content].description}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">🎥</div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">
                    {language === "UZ" && "Bosh direktor xabari"}
                    {language === "RU" && "Сообщение генерального директора"}
                    {language === "EN" && "CEO Message"}
                  </h3>
                  <p className="text-blue-100 text-sm">{content[language as keyof typeof content].videoMessage}</p>
                </div>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                {content[language as keyof typeof content].clickForVideo}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Types */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* New Graduates */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                {content[language as keyof typeof content].newGraduates}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{content[language as keyof typeof content].newGraduateDetails}</p>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">Mynavi 2026</Button>
            </CardContent>
          </Card>

          {/* Mid-Career */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                {content[language as keyof typeof content].midCareer}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{content[language as keyof typeof content].midCareerDetails}</p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600">
                {language === "UZ" && "Batafsil ma'lumot"}
                {language === "RU" && "Подробная информация"}
                {language === "EN" && "Detailed Information"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{content[language as keyof typeof content].positions}</h2>
        <div className="space-y-6">
          {positions.map((position) => (
            <Card key={position.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2">{getTitle(position)}</CardTitle>
                    <CardDescription className="text-base">{getDescription(position)}</CardDescription>
                  </div>
                  <Badge className="bg-blue-600 text-white ml-4">
                    {language === "UZ" && "Ochiq"}
                    {language === "RU" && "Открыто"}
                    {language === "EN" && "Open"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={`/recruitment/apply/${position.id}`}>
                    {language === "UZ" && "Ishga qabul qilish haqida ma'lumot sahifasi"}
                    {language === "RU" && "Страница информации о трудоустройстве"}
                    {language === "EN" && "Recruitment information page"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Inquiries */}
      <section>
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              {content[language as keyof typeof content].inquiries}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{content[language as keyof typeof content].inquiriesDescription}</p>
            <div className="flex items-center gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <p className="font-semibold text-gray-900">{content[language as keyof typeof content].phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
