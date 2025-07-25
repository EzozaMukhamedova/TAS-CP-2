"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [language] = useState("UZ") // Default to Uzbek

  const content = {
    UZ: {
      title: "Odamlardan shaharlarga, jamiyatga va kelajakga",
      subtitle: "Ko'chmas mulk boshqaruvi va texnik xizmat sohasida professional yechimlar",
      button1: "Biznes haqida",
      button2: "Bog'lanish",
    },
    RU: {
      title: "От людей к городам, обществу и будущему",
      subtitle: "Профессиональные решения в сфере управления недвижимостью и технического обслуживания",
      button1: "О бизнесе",
      button2: "Связаться",
    },
    EN: {
      title: "From People to Cities, Society and the Future",
      subtitle: "Professional solutions in property management and technical services",
      button1: "About Business",
      button2: "Contact Us",
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Content */}
      <div className="text-center px-4 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            {content[language as keyof typeof content].title}
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-600 leading-relaxed">
            {content[language as keyof typeof content].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
            >
              <Link href="/business">{content[language as keyof typeof content].button1}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-medium"
            >
              <Link href="/contact">{content[language as keyof typeof content].button2}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
