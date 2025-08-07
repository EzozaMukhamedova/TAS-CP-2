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
      id: "redevelopment",
      iconImage: "/svg/mulkBoshqaruvi.svg",
      titleUZ: "Qayta Qurish",
      titleRU: "Реконструкция",
      titleEN: "Redevelopment",
      descriptionUZ:
        "Eski va eskirgan binolarni buzib, zamonaviy arxitektura asosida qayta qurish xizmatimiz orqali shahar manzarasini yangilashda yordam beramiz.",
      descriptionRU:
        "Через наш сервис сноса старых и устаревших зданий и их реконструкции на основе современной архитектуры мы помогаем обновить городской пейзаж.",
      descriptionEN:
        "Through our service of demolishing old and outdated buildings and reconstructing them based on modern architecture, we help renew the urban landscape.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "renovation",
      iconImage: "/svg/mulkBoshqaruvi.svg",
      titleUZ: "Renovatsiya",
      titleRU: "Реновация",
      titleEN: "Renovation Business",
      descriptionUZ:
        "Mavjud binolarning ichki dizaynini va inshoot mustahkamligini zamonaviy standartlarga moslash orqali ularning qiymatini oshiramiz.",
      descriptionRU:
        "Мы повышаем стоимость существующих зданий, адаптируя их внутренний дизайн и структурную прочность к современным стандартам.",
      descriptionEN:
        "We increase the value of existing buildings by adapting their interior design and structural strength to modern standards.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "holding",
      iconImage: "/svg/binoBoshqaruvi",
      titleUZ: "Uzoq Muddatli Egalik",
      titleRU: "Долгосрочное Владение",
      titleEN: "Holding Business",
      descriptionUZ:
        "Daromad keltiruvchi ko'chmas mulkni uzoq muddat saqlab, ijaraga berish modeli orqali barqaror daromad ta'minlaymiz.",
      descriptionRU:
        "Мы обеспечиваем стабильный доход через модель долгосрочного владения доходной недвижимостью и сдачи ее в аренду.",
      descriptionEN:
        "We provide stable income through a model of long-term ownership of income-generating real estate and renting it out.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "renewable",
      iconImage: "/svg/tijoratObyectlari.svg",
      titleUZ: "Yashil Energiya",
      titleRU: "Зеленая Энергия",
      titleEN: "Renewable Energy",
      descriptionUZ:
        "Tokka ulangan quyosh stansiyalarini rivojlantirish orqali barqaror energiya ta'minotiga hissa qo'shamiz.",
      descriptionRU:
        "Мы вносим вклад в устойчивое энергоснабжение через развитие подключенных к сети солнечных станций.",
      descriptionEN:
        "We contribute to sustainable energy supply through the development of grid-connected solar stations.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "overseas",
      iconImage: "/svg/quyoshEnergiyasi.svg",
      titleUZ: "Xalqaro Biznes",
      titleRU: "Международный Бизнес",
      titleEN: "Overseas Business",
      descriptionUZ:
        "Filippin va Kambodjadagi strategik loyihalar orqali dollar asosida barqaror daromad olish imkoniyatini taqdim etamiz.",
      descriptionRU:
        "Мы предоставляем возможность получения стабильного дохода в долларах через стратегические проекты на Филиппинах и в Камбодже.",
      descriptionEN:
        "We provide opportunities for stable dollar-based income through strategic projects in the Philippines and Cambodia.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "consulting",
      iconImage: "/svg/Landshaft.svg",
      titleUZ: "Aktivlar Bo'yicha Konsalting",
      titleRU: "Консалтинг по Активам",
      titleEN: "Asset Consulting",
      descriptionUZ:
        "Kompaniyalar, meros va soliqqa oid strategiyalar bo'yicha professional maslahat xizmatlarini taqdim etamiz.",
      descriptionRU:
        "Мы предоставляем профессиональные консультационные услуги по стратегиям для компаний, наследства и налогов.",
      descriptionEN:
        "We provide professional consulting services on strategies for companies, inheritance and taxes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "investment",
      iconImage: "/svg/kompaniya.svg",
      titleUZ: "Investitsiyalarni Boshqarish",
      titleRU: "Управление Инвестициями",
      titleEN: "Investment Arrangement",
      descriptionUZ:
        "Investorlar va perspektivali loyihalar orasida bog'lovchi model orqali muvaffaqiyatli hamkorlik yaratamiz.",
      descriptionRU:
        "Мы создаем успешное сотрудничество через модель-посредник между инвесторами и перспективными проектами.",
      descriptionEN:
        "We create successful cooperation through a connecting model between investors and promising projects.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "property-management",
      iconImage: "/svg/binoBoshqaruvi.svg",
      titleUZ: "Mulk Boshqaruvi",
      titleRU: "Управление Недвижимостью",
      titleEN: "Property Management",
      descriptionUZ:
        "Professional mulk boshqaruvi xizmatlarimiz orqali ijarachilar bilan munosabatlarni nazorat qilamiz va mulkning qiymatini saqlab qolamiz.",
      descriptionRU:
        "Через наши профессиональные услуги управления недвижимостью мы контролируем отношения с арендаторами и сохраняем стоимость недвижимости.",
      descriptionEN:
        "Through our professional property management services, we control tenant relationships and preserve property value.",
    },
    {
      id: "development",
      iconImage: "/svg/Investitsiya.svg",
      titleUZ: "Rivojlantirish Loyihalari",
      titleRU: "Проекты Развития",
      titleEN: "Development Projects",
      descriptionUZ:
        "Yangi qurilish loyihalarini rejalashtirish va amalga oshirish orqali zamonaviy yashash va ish muhitlarini yaratamiz.",
      descriptionRU:
        "Планируя и реализуя новые строительные проекты, мы создаем современную среду для жизни и работы.",
      descriptionEN:
        "By planning and implementing new construction projects, we create modern living and working environments.",
      image: "/placeholder.svg?height=300&width=400",
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
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={getTitle(service)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <img
                        src={service.iconImage}
                        alt="icon"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3
                      className="text-lg font-bold text-white mb-1"
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      {getTitle(service)}
                    </h3>
                  </div>
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

                  <div className="flex gap-2">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 flex-1 text-sm"
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      {content[language as keyof typeof content].learnMore}
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 text-sm"
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      <Link href="/contact">
                        {content[language as keyof typeof content].contactUs}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
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
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg"
              style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
            >
              <Link href="/contact">
                {content[language as keyof typeof content].contactUs}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
