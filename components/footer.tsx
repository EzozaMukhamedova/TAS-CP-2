"use client";

import { useState } from "react";
import Link from "next/link";
import ContactSection from "./contact-section";
import Image from "next/image";

export default function Footer() {
  const [language] = useState("UZ");

  const content = {
    UZ: {
      services: "Xizmatlar",
      sitemap: "Sayt xaritasi",
      languages: "Ijtimoiy tarmoqlar",
      rights: "Barcha huquqlar himoyalangan.",
    },
    RU: {
      services: "Услуги",
      sitemap: "Карта сайта",
      languages: "Социальные сети",
      rights: "Все права защищены.",
    },
    EN: {
      services: "Services",
      sitemap: "Sitemap",
      languages: "Social networks",
      rights: "All rights reserved.",
    },
  };

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
  };

  const navLinks = {
    UZ: [
      { href: "/business", label: "Biznes" },

      { href: "/company", label: "Kompaniya" },

      { href: "/recruitment", label: "Ish" },
    ],
    RU: [
      { href: "/business", label: "Бизнес" },

      { href: "/company", label: "Компания" },

      { href: "/recruitment", label: "Работа" },
    ],
    EN: [
      { href: "/business", label: "Business" },

      { href: "/company", label: "Company" },

      { href: "/recruitment", label: "Jobs" },
    ],
  };

  return (
    <>
      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#05284B] text-white py-12 ">
        <div className="container mx-auto px-6 flex lg:flex-row justify-between items-start gap-12 w-[1536px]">
          {/* Chap Tomon: Matnlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full lg:w-[60%]">
            <div className="flex flex-col gap-[72px] ">
              {/* Kompaniya Ma'lumotlari */}
              <div className="space-y-4">
                <Image
                  src="/svg/logo_white.svg"
                  alt="Logo"
                  width={318}
                  height={50}
                />
                <div className="text-gray-400 space-y-1 text-sm">
                  <p>〒100102</p>
                  <p>Modera Towers,4F Shota Rustaveli street 19, Tashkent</p>
                  <p>03-5510-8300</p>
                  <p>info@to-as.com</p>
                </div>
              </div>

              {/* Xizmatlar */}
              <div>
                <h3 className="font-semibold mb-4">Xizmatlar</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Qayta Qurish</li>
                  <li>Renovatsiya</li>
                  <li>Uzoq Muddatli Egalik</li>
                  <li>Yashil Energiya</li>
                  <li>Xalqaro Biznes</li>
                  <li>Aktivlar Konsaltingi</li>
                  <li>Investitsiya Boshqaruvi</li>
                </ul>
              </div>
            </div>

            {/* Sayt xaritasi + Ijtimoiy */}
            <div>
              <h3 className="font-semibold mb-4 mt-[50px]">Sayt xaritasi</h3>
              <ul className="space-y-2 text-gray-400 text-sm mb-6">
                <li>
                  <Link href="/company">Kompaniya</Link>
                </li>
                <li>
                  <Link href="/business">Biznes</Link>
                </li>
                <li>
                  <Link href="/recruitment">Ish</Link>
                </li>
              </ul>
              <h3 className="font-semibold mb-4 mt-[100px]">
                Ijtimoiy Tarmoqlar
              </h3>
              <div className="flex flex-col gap-[30px]">
                <Image
                  src="/svg/logos_telegram.svg"
                  alt="Telegram"
                  width={27}
                  height={27}
                />
                <Image
                  src="/svg/instagram.svg"
                  alt="Instagram"
                  width={27}
                  height={27}
                />
                <Image
                  src="/svg/logos_facebook.svg"
                  alt="Facebook"
                  width={27}
                  height={27}
                />
              </div>
            </div>
          </div>

          {/* Xarita o‘ng tomonda */}
          <div className="w-full lg:w-[40%] flex justify-center items-center mx-auto text-center mt-[40px]">
            <Image
              src="/svg/xarita.svg"
              alt="Xarita"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Pastki qism */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            TAS Capital Partners.
          </span>{" "}
          Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </>
  );
}
