"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Lang = "UZ" | "RU" | "EN";

export default function CompanyPage() {
  const [language] = useState<Lang>("UZ");

  const content = {
    UZ: {
      title: "Kompaniya haqida qisqacha",
      // companyOverview: "Kompaniya haqida",
      presidentMessage: "Kompaniya Vakillari",
      presidentName: "O'ng tarafdagi: Azizbek va chap tarafdagi: Takashima",
      presidentTitle: "—",
      sections: "Kompaniya bo'limlari",
      viewDetails: "Batafsil ko'rish",
    },
    RU: {
      title: "О компании",
      companyOverview: "Краткая информация о компании",
      presidentMessage: "Сообщение президента",
      presidentName: "Нобуаки Терашики",
      presidentTitle: "Президент и генеральный директор",
      sections: "Разделы компании",
      viewDetails: "Подробнее",
    },
    EN: {
      title: "About Company",
      companyOverview: "Company Overview",
      presidentMessage: "President's Message",
      presidentName: "Nobuaki Terashiki",
      presidentTitle: "President & CEO",
      sections: "Company Sections",
      viewDetails: "View Details",
    },
  } satisfies Record<Lang, any>;

  const companySections = [
    {
      id: "management-vision",
      titleUZ: "Boshqaruv Ko'rinishi",
      titleRU: "Видение Управления",
      titleEN: "Management Vision",
      descriptionUZ: "Kompaniya missiyasi, boshqaruv falsafasi",
      descriptionRU:
        "Миссия компании, философия управления и этические принципы",
      descriptionEN:
        "Company mission, management philosophy and ethical principles",
      image: "/svg/boshqaruvKorinishi1.png",
    },
    {
      id: "company-history",
      titleUZ: "Kompaniya Tarixi",
      titleRU: "История Компании",
      titleEN: "Company History",
      descriptionUZ: "2009 yildan bugungi kungacha bo'lgan rivojlanish yo'li",
      descriptionRU: "Путь развития с 2009 года до сегодняшнего дня",
      descriptionEN: "Development path from 2009 to the present day",
      image: "/svg/kompaniyatarixi.svg",
    },
    {
      id: "organizational-structure",
      titleUZ: "Tashkiliy Tuzilma",
      titleRU: "Организационная Структура",
      titleEN: "Organizational Structure",
      descriptionUZ: "Kompaniya bo'limlari va boshqaruv ierarxiyasi",
      descriptionRU: "Отделы компании и управленческая иерархия",
      descriptionEN: "Company departments and management hierarchy",
      image: "/svg/tashkiliytuzilma.svg",
    },
    {
      id: "partners-banks",
      titleUZ: "Asosiy Bank va Hamkor Tashkilotlar",
      titleRU: "Основные Банки и Партнерские Организации",
      titleEN: "Main Banks and Partner Organizations",
      descriptionUZ: "Moliyaviy hamkorlar va strategik ittifoqchilar",
      descriptionRU: "Финансовые партнеры и стратегические союзники",
      descriptionEN: "Financial partners and strategic allies",
      image: "/svg/asosiyhamkor.svg",
    },
    {
      id: "general-info",
      titleUZ: "Kompaniya Haqidagi Umumiy Ma'lumot",
      titleRU: "Общая Информация о Компании",
      titleEN: "General Company Information",
      descriptionUZ: "Kompaniya profili va joylashuv xaritasi",
      descriptionRU: "Профиль компании и карта расположения",
      descriptionEN: "Company profile and location map",
      image: "/svg/kompaniyahaqida.svg",
    },
  ];

  const getTitle = (section: any) => {
    switch (language) {
      case "RU":
        return section.titleRU;
      case "EN":
        return section.titleEN;
      default:
        return section.titleUZ;
    }
  };

  const getDescription = (section: any) => {
    switch (language) {
      case "RU":
        return section.descriptionRU;
      case "EN":
        return section.descriptionEN;
      default:
        return section.descriptionUZ;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Header */}
      <div className="text-center mb-10 md:mb-16 mt-[86px]">
        <h1 className="font-bold text-[#1C3990] text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight">
          {content[language].title}
        </h1>
      </div>

      {/* Company Overview */}
      <section className="mb-12 md:mb-20">
        <Card className="border-0">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-xl sm:text-2xl text-[#1C3990]">
              {content[language].companyOverview}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="max-w-prose">
                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  {language === "UZ" &&
                    "Tokyo Asset Solution 2009 yilda tashkil etilgan ko'chmas mulk va investitsiya sohasida faoliyat yurituvchi kompaniya hisoblanadi. Biz qayta qurish, renovatsiya, uzoq muddatli egalik va yashil energiya loyihalarida ixtisoslashganmiz."}
                  {language === "RU" &&
                    "Tokyo Asset Solution - компания, основанная в 2009 году и работающая в сфере недвижимости и инвестиций. Мы специализируемся на реконструкции, реновации, долгосрочном владении и проектах зеленой энергии."}
                  {language === "EN" &&
                    "Tokyo Asset Solution is a company established in 2009, operating in the real estate and investment sector. We specialize in redevelopment, renovation, long-term ownership and green energy projects."}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {language === "UZ" &&
                    "Bizning maqsadimiz barqaror rivojlanish tamoyillari asosida innovatsion yechimlar yaratish va mijozlarimiz uchun uzoq muddatli qiymat yaratishdir."}
                  {language === "RU" &&
                    "Наша цель - создание инновационных решений на основе принципов устойчивого развития и создание долгосрочной ценности для наших клиентов."}
                  {language === "EN" &&
                    "Our goal is to create innovative solutions based on sustainable development principles and create long-term value for our clients."}
                </p>
              </div>

              <div className="relative w-full max-w-md md:max-w-none mx-auto">
                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[1/1]">
                  <Image
                    src="/svg/kompaniyaPageImg.svg"
                    alt="Company Building"
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                    priority
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* President's Message */}
      <section className="mb-12 md:mb-16">
        <Card className="shadow-lg border-0">
          <CardHeader className="flex items-center justify-center gap-4">
            <CardTitle className="text-xl sm:text-2xl text-[#0A2C52] text-center">
              {content[language].presidentMessage}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
              {/* Left – image & name */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative w-56 sm:w-64 md:w-full max-w-[345px] aspect-square">
                  <Image
                    src="/svg/boshdirektor2.png"
                    alt={content[language].presidentName}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 60vw, 345px"
                  />
                </div>
                <p className="text-center mt-4 font-semibold px-4">
                  {content[language].presidentName}
                </p>
                {content[language].presidentTitle && (
                  <p className="text-center text-gray-600">
                    {content[language].presidentTitle}
                  </p>
                )}
              </div>

              {/* Right – text */}
              <div className="md:col-span-2">
                <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed space-y-4 sm:space-y-5 max-w-none">
                  <p>
                    {language === "UZ" &&
                      "Hurmatli hamkorlar va mijozlar! Tokyo Asset Solution kompaniyasining prezidenti sifatida sizlarni tabriklayman. Bizning kompaniyamiz 2009 yildan beri ko'chmas mulk sohasida innovatsion yechimlar yaratib kelmoqda."}
                    {language === "RU" &&
                      "Уважаемые партнеры и клиенты! Как президент компании Tokyo Asset Solution, я приветствую вас. Наша компания с 2009 года создает инновационные решения в сфере недвижимости."}
                    {language === "EN" &&
                      "Dear partners and clients! As the president of Tokyo Asset Solution, I welcome you. Our company has been creating innovative solutions in the real estate sector since 2009."}
                  </p>
                  <p>
                    {language === "UZ" &&
                      "Biz nafaqat binolar quramiz, balki kelajak avlodlar uchun barqaror muhit yaratamiz. Har bir loyihada an'ana va innovatsiyani muvozanatlashtirishga harakat qilamiz."}
                    {language === "RU" &&
                      "Мы не только строим здания, но и создаем устойчивую среду для будущих поколений. В каждом проекте мы стремимся сбалансировать традиции и инновации."}
                    {language === "EN" &&
                      "We don't just build buildings, but create a sustainable environment for future generations. In every project, we strive to balance tradition and innovation."}
                  </p>
                  <p>
                    {language === "UZ" &&
                      "Bizning jamoamiz - bu bizning eng katta boyligimiz. Har bir xodimning professional o'sishi kompaniyamizning muvaffaqiyatining asosi hisoblanadi."}
                    {language === "RU" &&
                      "Наша команда - это наше самое большое богатство. Профессиональный рост каждого сотрудника является основой успеха нашей компании."}
                    {language === "EN" &&
                      "Our team is our greatest asset. The professional growth of each employee is the foundation of our company's success."}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Company Sections */}
      <section>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2C52]">
            {content[language].sections}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {companySections.map((section) => (
            <Card
              key={section.id}
              className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden"
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={getTitle(section)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <CardContent className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#0A2C52]">
                  {getTitle(section)}
                </h3>

                <CardDescription className="mt-2 mb-3 min-h-[1.5rem]">
                  {getDescription(section)}
                </CardDescription>

                <Button
                  asChild
                  className="w-full bg-[#1C3990] hover:bg-[#2d4a9b]"
                  variant="default"
                >
                  <Link href={`/company/${section.id}`}>
                    {content[language].viewDetails}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
