"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const [language] = useState("UZ") // Default to Uzbek

  const content = {
    UZ: {
      title: "Kompaniya haqida",
      subtitle: "Ishonch va tajriba bilan mijozlarimizning mulk qiymatini oshirishda yordam beramiz",
      companyInfo: "Kompaniya ma'lumotlari",
      message: "Xabar",
      messageText:
        "Biz mulk boshqaruvidan quyosh elektr stansiyalarigacha keng ko'lamli xizmatlar orqali mijozlarimizning mulk qiymatini oshirishga hissa qo'shamiz. Ishonch va tajribani to'plab, barqaror jamiyat qurishni maqsad qilganmiz.",
      experience: "yillik tajriba",
      properties: "boshqariladigan mulklar",
      satisfaction: "mijoz mamnuniyati",
    },
    RU: {
      title: "О компании",
      subtitle: "Помогаем повысить стоимость недвижимости наших клиентов с доверием и опытом",
      companyInfo: "Информация о компании",
      message: "Сообщение",
      messageText:
        "Мы способствуем повышению стоимости недвижимости наших клиентов через широкий спектр услуг от управления недвижимостью до солнечных электростанций. Накапливая доверие и опыт, мы стремимся к созданию устойчивого общества.",
      experience: "лет опыта",
      properties: "управляемых объектов",
      satisfaction: "удовлетворенность клиентов",
    },
    EN: {
      title: "About Company",
      subtitle: "We help increase our clients' property value with trust and experience",
      companyInfo: "Company Information",
      message: "Message",
      messageText:
        "We contribute to increasing our clients' property value through a wide range of services from property management to solar power stations. Accumulating trust and experience, we aim to build a sustainable society.",
      experience: "years of experience",
      properties: "managed properties",
      satisfaction: "customer satisfaction",
    },
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

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {content[language as keyof typeof content].companyInfo}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-32">
                        {language === "UZ" && "Kompaniya:"}
                        {language === "RU" && "Компания:"}
                        {language === "EN" && "Company:"}
                      </span>
                      <span className="text-gray-600">Tokyo Asset Solution</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-32">
                        {language === "UZ" && "Manzil:"}
                        {language === "RU" && "Адрес:"}
                        {language === "EN" && "Address:"}
                      </span>
                      <span className="text-gray-600">Tokyo, Minato-ku, Toranomon 1-16-4</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-32">
                        {language === "UZ" && "Telefon:"}
                        {language === "RU" && "Телефон:"}
                        {language === "EN" && "Phone:"}
                      </span>
                      <span className="text-gray-600">03-5510-8300</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-gray-700 w-32">
                        {language === "UZ" && "Tashkil:"}
                        {language === "RU" && "Основана:"}
                        {language === "EN" && "Founded:"}
                      </span>
                      <span className="text-gray-600">2009</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {content[language as keyof typeof content].message}
                  </h3>
                  <blockquote className="text-gray-700 leading-relaxed italic">
                    {content[language as keyof typeof content].messageText}
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-blue-50">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700">{content[language as keyof typeof content].experience}</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-green-50">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-700">{content[language as keyof typeof content].properties}</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-orange-50">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-700">{content[language as keyof typeof content].satisfaction}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
