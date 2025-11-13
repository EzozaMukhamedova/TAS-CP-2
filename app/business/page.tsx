"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BusinessPage() {
  const [language] = useState("UZ");

  const content = {
    UZ: {
      title: "Xizmatlarimiz",
      subtitle:
        "Ko'chmas mulk va investitsiya sohasida keng qamrovli professional yechimlar",
      learnMore: "Batafsil ma'lumot",
      contactUs: "Biz bilan bog'laning",
    },
    RU: {
      title: "Наши Услуги",
      subtitle:
        "Комплексные профессиональные решения в сфере недвижимости и инвестиций",
      learnMore: "Подробнее",
      contactUs: "Связаться с нами",
    },
    EN: {
      title: "Our Services",
      subtitle:
        "Comprehensive professional solutions in real estate and investment",
      learnMore: "Learn More",
      contactUs: "Contact Us",
    },
  };

  const services = [
    {
      id: "qayta-qurish",

      titleUZ: "Qayta qurish va tiklash",
      titleRU: "Реконструкция",
      titleEN: "Redevelopment",
      descriptionUZ:
        "Eski binolarni zamonaviy arxitektura asosida qayta qurish va shahar manzarasini yangilash",
      descriptionRU:
        "Через наш сервис сноса старых и устаревших зданий и их реконструкции на основе современной архитектуры мы помогаем обновить городской пейзаж.",
      descriptionEN:
        "Through our service of demolishing old and outdated buildings and reconstructing them based on modern architecture, we help renew the urban landscape.",
      image: "/svg/qaytaQurishTiklanish.svg",
    },
    {
      id: "kochmas-mulk",

      titleUZ: "Ko'chmas mulk va rivojlantirish",
      titleRU: "Реновация",
      titleEN: "Renovation Business",
      descriptionUZ:
        "Yangi qurilish loyihalari va mavjud binolarni qayta qurish xizmatlari",
      descriptionRU:
        "Мы повышаем стоимость существующих зданий, адаптируя их внутренний дизайн и структурную прочность к современным стандартам.",
      descriptionEN:
        "We increase the value of existing buildings by adapting their interior design and structural strength to modern standards.",
      image: "/svg/kochmasMulk1.svg",
    },
    {
      id: "logistika-inshootlari",

      titleUZ: "Logistika inshootlari",
      titleRU: "Долгосрочное Владение",
      titleEN: "Holding Business",
      descriptionUZ:
        "Zamonaviy logistika markazlari va omborxonalar qurish va boshqarish",
      descriptionRU:
        "Мы обеспечиваем стабильный доход через модель долгосрочного владения доходной недвижимостью и сдачи ее в аренду.",
      descriptionEN:
        "We provide stable income through a model of long-term ownership of income-generating real estate and renting it out.",
      image: "/svg/logistika.svg",
    },

    {
      id: "bizness",

      titleUZ: "M&A Biznes",
      titleRU: "Международный Бизнес",
      titleEN: "Overseas Business",
      descriptionUZ:
        "Kompaniyalarni birlashtirish va sotib olish bo'yicha maslahat xizmatlari",
      descriptionRU:
        "Мы предоставляем возможность получения стабильного дохода в долларах через стратегические проекты на Филиппинах и в Камбодже.",
      descriptionEN:
        "We provide opportunities for stable dollar-based income through strategic projects in the Philippines and Cambodia.",
      image: "/svg/bizness.svg",
    },
    {
      id: "fond-boshqaruvi",

      titleUZ: "Fondlarni boshqarish loyihalari",
      titleRU: "Консалтинг по Активам",
      titleEN: "Asset Consulting",
      descriptionUZ:
        "Investitsiya fondlarini professional boshqarish va strategik rejalashtirish.",
      descriptionRU:
        "Мы предоставляем профессиональные консультационные услуги по стратегиям для компаний, наследства и налогов.",
      descriptionEN:
        "We provide professional consulting services on strategies for companies, inheritance and taxes.",
      image: "/svg/fond.svg",
    },
    {
      id: "professional-mulk",

      titleUZ: "Professional mulk boshqaruvi loyihalari",
      titleRU: "Управление Инвестициями",
      titleEN: "Investment Arrangement",
      descriptionUZ:
        "Ko'chmas mulk obyektlarini to'liq boshqarish va texnik xizmat ko'rsatish",
      descriptionRU:
        "Мы создаем успешное сотрудничество через модель-посредник между инвесторами и перспективными проектами.",
      descriptionEN:
        "We create successful cooperation through a connecting model between investors and promising projects.",
      image: "/svg/professional.svg",
    },
    {
      id: "xalqaro-loyihalar",

      titleUZ: "Xalqaro loyihalar",
      titleRU: "Управление Недвижимостью",
      titleEN: "Property Management",
      descriptionUZ:
        "Xalqaro bozorlarida investitsiya loyihalari va hamkorlik qilish",
      descriptionRU:
        "Через наши профессиональные услуги управления недвижимостью мы контролируем отношения с арендаторами и сохраняем стоимость недвижимости.",
      descriptionEN:
        "Through our professional property management services, we control tenant relationships and preserve property value.",
      image: "/svg/xalqaroLoyihlar.svg",
    },
    {
      id: "qayta-energiya",

      titleUZ: "Qayta Tiklanadigan Energiya",
      titleRU: "Проекты Развития",
      titleEN: "Development Projects",
      descriptionUZ:
        "Quyosh va shamol energiyasi loyihalari, ekologik toza yechimlar",
      descriptionRU:
        "Планируя и реализуя новые строительные проекты, мы создаем современную среду для жизни и работы.",
      descriptionEN:
        "By planning and implementing new construction projects, we create modern living and working environments.",
      image: "/svg/qaytaqurish.svg",
    },
  ];

  const getTitle = (service: any) => {
    switch (language) {
      case "RU":
        return service.titleRU;
      case "EN":
        return service.titleEN;
      default:
        return service.titleUZ;
    }
  };

  const getDescription = (service: any) => {
    switch (language) {
      case "RU":
        return service.descriptionRU;
      case "EN":
        return service.descriptionEN;
      default:
        return service.descriptionUZ;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-ful  bg-[#F5F7FF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="max-w-xl mx-auto">
            <h1 className="text-[#1C3990]  font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              Biznes <br /> Xizmatlarimiz
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl mb-6">
              Ko‘chmas mulk sohasida keng qamrovli professional xizmatlar
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Biz ko‘chmas mulk sohasida to‘liq spektrli xizmatlar ko‘rsatamiz.
              Rivojlanish loyihalaridan tortib xalqaro investitsiyalargacha, har
              bir mijozning ehtiyojlariga mos yechimlar taklif etamiz.
            </p>

            <a
              href="#contact"
              className="inline-block bg-[#1C3990] hover:bg-[#2d4a9b] text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Biz bilan bog‘laning
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-3xl shadow-xl overflow-hidden bg-white">
              <Image
                src="/svg/biznes_image.svg"
                alt="Biznes xizmatlar"
                fill
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Xizmatlarimiz */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173758]">
            Bizning Xizmatlarimiz
          </h2>
          <div className="h-1 w-16 bg-[#1C3990] rounded-full mx-auto mt-4 mb-10" />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1 — Mulk Boshqaruvi */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  {/* icon */}
                  <span className="text-2xl">
                    <img src="svg/mulk_boshqaruvi.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mulk Boshqaruvi</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Professional mulk boshqaruvi va operatsion xizmatlar
                  </p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    Umumiy Ma’lumot
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Biz ko‘chmas mulkni sifatli boshqarish orqali uning
                    qiymatini oshiramiz.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    Xususiyatlar
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Ijarachilar bilan doimiy aloqani ta’minlaymiz va
                        ularning ehtiyojlariga tezkor javob beramiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Moliyaviy hisobot, ijara to‘lovlari va shartnomalarni
                        shaffof tarzda boshqaramiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Mulkni uzoq muddatli daromad keltiradigan aktivga
                        aylantiramiz.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2 — Bino Boshqaruvi */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/bino_boshqaruvi.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Bino Boshqaruvi</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    To‘liq bino boshqaruvi va texnik xizmat
                  </p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    Umumiy Ma’lumot
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Binalarning barqaror ishlashini va xavfsizligini
                    ta’minlaymiz.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    Xususiyatlar
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Barcha texnik tizimlar (elektr, suv, isitish, sovutish)
                        uzluksiz ishlashini nazorat qilamiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Xavfsizlik va sanitariya standartlariga to‘liq rioya
                        etamiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Bino ekspluatatsiya xarajatlarini kamaytirish uchun
                        profilaktik xizmat ko‘rsatamiz.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3 — Tijorat Ob’ektlari */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/tijorat_obyectlari.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Tijorat Ob’ektlari</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Do‘kon va omborxonalar uchun professional xizmat
                  </p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    Umumiy Ma’lumot
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Tijorat maydonlarining samarali ishlashini ta’minlaymiz.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    Xususiyatlar
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Savdo markazlari, ofislar va omborlarni yuqori darajada
                        boshqaramiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Bozor talabiga moslangan ijara siyosatini ishlab
                        chiqamiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Ijarachilar aylanishini kamaytirish va daromadni
                        barqarorlashtirish bo‘yicha strategiyalar ishlab
                        chiqamiz.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4 — Quyosh Energiyasi */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/quyosh_energiyasi.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Quyosh Energiyasi</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Quyosh elektr stansiyalari texnik xizmati
                  </p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    Umumiy Ma’lumot
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Ekologik toza energiya yechimlarini taqdim etamiz.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    Xususiyatlar
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Quyosh panellarining samarali ishlashini doimiy kuzatib
                        boramiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Energiya ishlab chiqarish va tarmoq bilan ishlashni
                        tahlil qilib optimallashtiramiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Texnik xizmat, testlash va monitoring tizimlarini
                        muntazam yangilab turamiz.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5 — Landshaft Dizayni */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/landshaft_dizayni.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Landshaft Dizayni</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Professional landshaft parvarishi va dizayni
                  </p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    Umumiy Ma’lumot
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Yashil hudud va bog‘larning chiroyli saqlanishini
                    ta’minlaymiz.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    Xususiyatlar
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Landshaft loyihalarini estetik va ekologik talablar
                        asosida ishlab chiqamiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Sug‘orish, parvarish va bezak ekinlarini doimiy yangilab
                        turamiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Tabiiy muhit va arxitektura uyg‘unligini ta’minlaymiz.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6 — Investitsiya Konsaltingi */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex items-center gap-3 bg-[#1C3990] text-white px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-2xl">
                    <img src="svg/investitsiya_consaltingi.svg" alt="" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Investitsiya Konsaltingi
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Ko‘chmas mulk investitsiyalari bo‘yicha maslahatlar
                  </p>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-1">
                    Umumiy Ma’lumot
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Investitsiya strategiyasini to‘liq tahlil qilamiz.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#1C3990] mb-2">
                    Xususiyatlar
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Mulk bozori tahlili asosida foydali investitsiya
                        imkoniyatlarini aniqlaymiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Sarmoya risklarini kamaytirish va daromadni oshirish
                        bo‘yicha tavsiyalar beramiz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1C3990]" />
                      <span>
                        Mijoz ehtiyojiga mos investitsiya portfellarini
                        shakllantiramiz.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* grid tugaydi */}
        </div>
        {/* container tugaydi */}
      </section>

      {/* Nega tanlash? */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173758]">
            Nima uchun bizni tanlash kerak?
          </h2>
          <div className="h-1 w-20 bg-[#1C3990] rounded-full mx-auto mt-4 mb-10" />

          {/* 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
            {/* 1 – Professional Ekspertiza */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E5ECFF]">
                <span className="text-2xl text-[#1C3990]">
                  <img src="svg/ekspertiza.svg" alt="" />
                </span>
              </div>
              <h3 className="font-semibold text-lg text-[#173758]">
                Professional Ekspertiza
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-600 max-w-xs">
                Ko‘chmas mulk sohasida chuqur bilim va ko‘p yillik tajribaga ega
                mutaxassislar jamoasi.
              </p>
            </div>

            {/* 2 – Xalqaro Tajriba */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E5ECFF]">
                <span className="text-2xl text-[#1C3990]">
                  <img src="svg/xalqaro_tajriba.svg" alt="" />
                </span>
              </div>
              <h3 className="font-semibold text-lg text-[#173758]">
                Xalqaro Tajriba
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-600 max-w-xs">
                Turli mamlakatlarda muvaffaqiyatli loyihalar amalga oshirgan va
                global bozorlarni yaxshi biladigan jamoa.
              </p>
            </div>

            {/* 3 – Individual Yondashuv */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E5ECFF]">
                <span className="text-2xl text-[#1C3990]">
                  <img src="svg/individual_yondashuv.svg" alt="" />
                </span>
              </div>
              <h3 className="font-semibold text-lg text-[#173758]">
                Individual Yondashuv
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-600 max-w-xs">
                Har bir mijozning o‘ziga xos ehtiyojlarini inobatga olgan holda
                maxsus yechimlar ishlab chiqamiz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
