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

export default function CompanyPage() {
  const [language] = useState("UZ");

  const content = {
    UZ: {
      title: "Kompaniya haqida qisqacha",

      presidentMessage: "Kompaniya Vakillari",
      presidentName: "O'ng tarafdagi: Azizbek va chap tarafdagi: Takashima",
      // presidentTitle: "Bosh direktor",
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
  };

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
      image: "/svg/boshqaruvKorinishi1.png?height=200&width=300",
    },
    {
      id: "company-history",
      titleUZ: "Kompaniya Tarixi",
      titleRU: "История Компании",
      titleEN: "Company History",
      descriptionUZ: "2009 yildan bugungi kungacha bo'lgan rivojlanish yo'li",
      descriptionRU: "Путь развития с 2009 года до сегодняшнего дня",
      descriptionEN: "Development path from 2009 to the present day",
      image: "/svg/kompaniyatarixi.svg?height=200&width=300",
    },
    {
      id: "organizational-structure",
      titleUZ: "Tashkiliy Tuzilma",
      titleRU: "Организационная Структура",
      titleEN: "Organizational Structure",
      descriptionUZ: "Kompaniya bo'limlari va boshqaruv ierarxiyasi",
      descriptionRU: "Отделы компании и управленческая иерархия",
      descriptionEN: "Company departments and management hierarchy",
      image: "/svg/tashkiliytuzilma.svg?height=200&width=300",
    },
    {
      id: "partners-banks",
      titleUZ: "Asosiy Bank va Hamkor Tashkilotlar",
      titleRU: "Основные Банки и Партнерские Организации",
      titleEN: "Main Banks and Partner Organizations",
      descriptionUZ: "Moliyaviy hamkorlar va strategik ittifoqchilar",
      descriptionRU: "Финансовые партнеры и стратегические союзники",
      descriptionEN: "Financial partners and strategic allies",
      image: "/svg/asosiyhamkor.svg?height=200&width=300",
    },
    {
      id: "general-info",
      titleUZ: "Kompaniya Haqidagi Umumiy Ma'lumot",
      titleRU: "Общая Информация о Компании",
      titleEN: "General Company Information",
      descriptionUZ: "Kompaniya profili va joylashuv xaritasi",
      descriptionRU: "Профиль компании и карта расположения",
      descriptionEN: "Company profile and location map",
      image: "/svg/kompaniyahaqida.svg?height=200&width=300",
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
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-[#1C3990] text-[60px] mb-[132px] mt-[86px]">
          {content[language as keyof typeof content].title}
        </h1>
      </div>

      {/* Company Overview */}
      <section className="mb-[121px]">
        <Card className=" border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].companyOverview}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-[231px] ">
              <div className=" w-[516px] items-center justify-center ">
                <p className="text-gray-700 leading-relaxed mb-[60px] mt-[70px]">
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

              <div className="flex ">
                <Image
                  src="/svg/kompaniyaPageImg.svg?height=400&width=400"
                  alt="Company Building"
                  width={450}
                  height={450}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* President's Message */}
      <section className="mb-16">
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-[#0A2C52] ml-[80px]">
              {content[language as keyof typeof content].presidentMessage}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-10 items-start">
              {/* Chap taraf – rasm va ism */}
              <div className="md:col-span-1 flex flex-col items-center">
                <Image
                  src="/svg/boshdirektor2.png"
                  alt={content[language as keyof typeof content].presidentName}
                  width={345}
                  height={345}
                  className="rounded-lg object-cover"
                />
                <p className="text-center mt-4 font-semibold w-[300px]">
                  {content[language as keyof typeof content].presidentName}
                </p>
                <p className="text-center text-gray-600">
                  {content[language as keyof typeof content].presidentTitle}
                </p>
              </div>

              {/* O‘ng taraf – matn */}
              <div className="md:col-span-2">
                <div className="text-base text-gray-700 leading-relaxed space-y-5 max-w-[720px]">
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
        <div className="text-center mb-12 ">
          <h2 className="text-[30px] font-bold text-[#0A2C52] mb-4">
            {content[language as keyof typeof content].sections}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {companySections.map((section) => (
            <Card
              key={section.id}
              className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden "
            >
              <div className="relative h-48 overflow-hidden ">
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={getTitle(section)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-[18px] font-bold text-[#0A2C52]">
                  {getTitle(section)}
                </h3>

                <CardDescription className="text-[14px] mt-[10px] mb-[10px] h-[30px]">
                  {getDescription(section)}
                </CardDescription>
                <Button
                  asChild
                  className="w-full bg-[#1C3990] hover:bg-[#2d4a9b]"
                >
                  <Link href={`/company/${section.id}`}>
                    {content[language as keyof typeof content].viewDetails}
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
