"use client"

import { useState } from "react"
import Link from "next/link"
import ContactSection from "./contact-section"

export default function Footer() {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      services: "Xizmatlar",
      sitemap: "Sayt xaritasi",
      languages: "Tillar",
      rights: "Barcha huquqlar himoyalangan.",
    },
    RU: {
      services: "Услуги",
      sitemap: "Карта сайта",
      languages: "Языки",
      rights: "Все права защищены.",
    },
    EN: {
      services: "Services",
      sitemap: "Sitemap",
      languages: "Languages",
      rights: "All rights reserved.",
    },
  }

  const servicesList = {
    UZ: [
      "Qayta Qurish",
      "Renovatsiya",
      "Uzoq Muddatli Egalik",
      "Yashil Energiya",
      "Xalqaro Biznes",
      "Aktivlar Konsaltingi",
      "Investitsiya Boshqaruvi",
    ],
    RU: [
      "Реконструкция",
      "Реновация",
      "Долгосрочное Владение",
      "Зеленая Энергия",
      "Международный Бизнес",
      "Консалтинг Активов",
      "Управление Инвестициями",
    ],
    EN: [
      "Redevelopment",
      "Renovation",
      "Long-term Ownership",
      "Green Energy",
      "International Business",
      "Asset Consulting",
      "Investment Management",
    ],
  }

  const navLinks = {
    UZ: [
      { href: "/business", label: "Biznes" },
      { href: "/track-record", label: "Natijalar" },
      { href: "/company", label: "Kompaniya" },
      { href: "/tenant", label: "Ijara" },
      { href: "/recruitment", label: "Ish" },
      { href: "/news", label: "Yangiliklar" },
    ],
    RU: [
      { href: "/business", label: "Бизнес" },
      { href: "/track-record", label: "Результаты" },
      { href: "/company", label: "Компания" },
      { href: "/tenant", label: "Аренда" },
      { href: "/recruitment", label: "Работа" },
      { href: "/news", label: "Новости" },
    ],
    EN: [
      { href: "/business", label: "Business" },
      { href: "/track-record", label: "Track Record" },
      { href: "/company", label: "Company" },
      { href: "/tenant", label: "Tenant" },
      { href: "/recruitment", label: "Jobs" },
      { href: "/news", label: "News" },
    ],
  }

  return (
    <>
      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
                </div>
                <span className="text-lg font-bold">Tokyo Asset Solution</span>
              </div>
              <div className="text-gray-400 space-y-1">
                <p>〒105-0001</p>
                <p>Tokyo, Minato-ku, Toranomon 1-16-4</p>
                <p>📞 03-5510-8300</p>
                <p>✉️ info@to-as.com</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">{content[language as keyof typeof content].services}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {servicesList[language as keyof typeof servicesList].map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">{content[language as keyof typeof content].sitemap}</h3>
              <ul className="space-y-2">
                {navLinks[language as keyof typeof navLinks].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-semibold mb-4">{content[language as keyof typeof content].languages}</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>🇺🇿 O'zbek tili (Uzbek)</p>
                <p>🇷🇺 Русский (Russian)</p>
                <p>🇺🇸 English</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Tokyo Asset Solution. {content[language as keyof typeof content].rights}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
