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
      descriptionUZ: "Xalqaro bozorlarida investitsiya loyihalari va hamkorlik qilish",
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-[60px] font-bold text-[#1C3990] mb-6 mt-[66px]"
              style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
            >
              {content[language as keyof typeof content].title}
            </h1>
            <p
              className="text-xl text-gray-600 leading-relaxed"
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontSize: "20px",
              }}
            >
              {content[language as keyof typeof content].subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Modern Services Layout - 3x3 Grid */}
      <section className="pt-[30px] pb-[100px]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white"
              >
                {/* Image Section (DROP-IN REPLACEMENT) */}
                <div className="relative h-48 overflow-hidden">
                  {/* Rasm */}
                  <img
                    src={service.image.replace(/\?.*$/, "")}
                    alt={getTitle(service)}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 cursor-pointer"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/svg/placeholder.svg";
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent
                  transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/30"
                  />

                  {/* Sarlavha (nom) */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {getTitle(service)}
                    </h3>
                  </div>

                  {/* 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {getTitle(service)}
                    </h3>
                  </div> */}
                </div>

                {/* Content Section */}
                <CardContent className="p-6">
                  <div className="space-y-4 mb-6">
                    <p
                      className="text-gray-700 leading-relaxed text-sm"
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      {getDescription(service)}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      fluid
                      size="default"
                      className="bg-[#1C3990] hover:bg-[#162c6d] text-white"
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      {/* <Link href={`/company/ ${section.id}`}>
                        {content[language as keyof typeof content].learnMore}
                      </Link> */}

                      <Link href={`/business/${service.id}`}>
                        {content[language as "UZ" | "RU" | "EN"].learnMore}
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      fluid
                      size="default"
                      className="border-[#1C3990] text-[#162c6d] hover:bg-[#1C3990] hover:text-white"
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      <Link href="/contact">
                        {content[language as keyof typeof content].contactUs}
                      </Link>
                    </Button>
                  </div>

                  {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      fluid
                      size="default"
                      className="bg-[#1C3990] hover:bg-[#162c6d] text-white"
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      {content[language as keyof typeof content].learnMore}
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      fluid
                      size="default"
                      className="border-[#1C3990] text-[#162c6d] hover:bg-[#1C3990] hover:text-white"
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      <Link href="/contact">
                        {content[language as keyof typeof content].contactUs}
                      </Link>
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3C5DAE]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-4xl font-bold text-white mb-6"
              style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
            >
              {language === "UZ" &&
                "Loyihangizni muhokama qilishga tayyormisiz?"}
              {language === "RU" && "Готовы обсудить ваш проект?"}
              {language === "EN" && "Ready to discuss your project?"}
            </h2>
            <p
              className="text-xl text-blue-100 mb-8"
              style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
            >
              {language === "UZ" &&
                "Bizning ekspert jamoamiz sizning ehtiyojlaringizga mos yechimlar taklif etishga tayyor"}
              {language === "RU" &&
                "Наша команда экспертов готова предложить решения, соответствующие вашим потребностям"}
              {language === "EN" &&
                "Our expert team is ready to offer solutions that meet your needs"}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#3C5DAE] hover:bg-gray-100 px-12 py-4 text-lg"
              style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
            >
              <Link href="/contact" className="flex items-center gap-6">
                <Image
                  src="/svg/tel.svg"
                  alt="Telefon"
                  width={24}
                  height={24}
                  className="text-[#3C5DAE]"
                />
                {content[language as keyof typeof content].contactUs}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
