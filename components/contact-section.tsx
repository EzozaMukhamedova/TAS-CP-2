"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactSection() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      title: "So'rov",
      subtitle: "Savollar uchun telefon orqali yoki aloqa formamiz orqali biz bilan bog'laning.",
      phoneInquiries: "Telefon so'rovlari",
      representative: "Vakil",
      realEstateInfo: "Ko'chmas mulkni sotish bo'yicha ma'lumot kerak",
      businessHours: "Ish vaqti: 9:00-17:30",
      holidayNote: "*Dam olish kunlari, bayramlar va Yangi yil bayramlaridan tashqari",
      contactForm: "Shakl orqali biz bilan bog'laning",
      inquiry: "so'rov",
    },
    RU: {
      title: "Запрос",
      subtitle: "Для вопросов обращайтесь по телефону или через нашу контактную форму.",
      phoneInquiries: "Телефонные запросы",
      representative: "Представитель",
      realEstateInfo: "Информация о продаже недвижимости",
      businessHours: "Рабочие часы: 9:00-17:30",
      holidayNote: "*Кроме выходных, праздников и новогодних каникул",
      contactForm: "Свяжитесь с нами через форму",
      inquiry: "запрос",
    },
    EN: {
      title: "Inquiry",
      subtitle: "For questions, contact us by phone or through our contact form.",
      phoneInquiries: "Phone Inquiries",
      representative: "Representative",
      realEstateInfo: "Real estate sales information",
      businessHours: "Business hours: 9:00-17:30",
      holidayNote: "*Except weekends, holidays and New Year holidays",
      contactForm: "Contact us through form",
      inquiry: "inquiry",
    },
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content[language as keyof typeof content].title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content[language as keyof typeof content].subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Inquiries */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center">📞</div>
                  {content[language as keyof typeof content].phoneInquiries}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                      👤
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {content[language as keyof typeof content].representative}
                      </h4>
                      <p className="text-2xl font-bold text-blue-600">03-5510-8300</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                      🏠
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {content[language as keyof typeof content].realEstateInfo}
                      </h4>
                      <p className="text-2xl font-bold text-green-600">03-5510-8301</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    {content[language as keyof typeof content].businessHours}
                  </p>
                  <p className="text-sm text-gray-600">{content[language as keyof typeof content].holidayNote}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                  ✉️
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {content[language as keyof typeof content].contactForm}
                </h3>
                <p className="text-gray-600 mb-8">
                  {language === "UZ" && "Onlayn forma orqali biz bilan bog'laning va tezkor javob oling"}
                  {language === "RU" && "Свяжитесь с нами через онлайн-форму и получите быстрый ответ"}
                  {language === "EN" && "Contact us through online form and get quick response"}
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  <Link href="/contact">{content[language as keyof typeof content].inquiry}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
