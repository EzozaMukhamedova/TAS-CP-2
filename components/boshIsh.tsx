"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NewsPreview() {
  const [language] = useState("UZ");

  const content = {
    UZ: {
      title: "Bo'sh ish o'rinlari",
      subtitle: "Bizning jamoamizga qo’shiling",
      readMore: "Batafsil ko'rish",
      viewAll: "Barcha yangiliklarni ko'rish",
      addressLabel: "Manzil:",
      yearLabel: "Yil:",
    },
    RU: {
      title: "Последние Новости",
      subtitle: "Присоединяйтесь к нашей команде",
      readMore: "Подробнее",
      viewAll: "Посмотреть все новости",
      addressLabel: "Адрес:",
      yearLabel: "Год:",
    },
    EN: {
      title: "Latest News",
      subtitle: "Join our team",
      readMore: "Read More",
      viewAll: "View All News",
      addressLabel: "Address:",
      yearLabel: "Year:",
    },
  };

  const news = [
    {
      id: 1,
      categoryUZ: "Bo'sh",
      categoryRU: "Проект",
      categoryEN: "Project",
      titleUZ: "Ichki Auditorni Yollash",
      titleRU: "Начался новый проект солнечной электростанции",
      titleEN: "New Solar Power Station Project Started",
      excerptUZ: "Tashkent, Modera Towers 4F",
      excerptRU:
        "В префектуре Хоккайдо началось строительство новой солнечной электростанции...",
      excerptEN: "Construction of a new solar power station has begun...",
      image: "/svg/boshish1.svg",
      year: 2025,
    },
    {
      id: 2,
      categoryUZ: "Bo'sh",
      categoryRU: "Объявление",
      categoryEN: "Announcement",
      titleUZ: "Mulk Menejerini Ishga Olish",
      titleRU: "В Токио открылся новый офисный комплекс",
      titleEN: "New Office Complex Opened in Tokyo",
      excerptUZ: "Tashkent, Modera Towers 4F",
      excerptRU: "В районе Минато представлено современное офисное здание...",
      excerptEN: "A modern Class A office building opened...",
      image: "/svg/boshish2.svg",
      year: 2025,
    },
    {
      id: 3,
      categoryUZ: "Bo'sh",
      categoryRU: "Награда",
      categoryEN: "Award",
      titleUZ: "Chitose Quyosh Stansiyasi",
      titleRU: "Компания признана лучшей компанией недвижимости года",
      titleEN: "Company Recognized as Best Real Estate Company",
      excerptUZ: "Tashkent, Modera Towers 4F",
      excerptRU: "Tokyo Asset Solution награждена...",
      excerptEN: "Tokyo Asset Solution was awarded...",
      image: "/svg/boshish3.svg",
      year: 2025,
    },
  ];

  const getTitle = (item: any) =>
    language === "RU"
      ? item.titleRU
      : language === "EN"
      ? item.titleEN
      : item.titleUZ;

  const getExcerpt = (item: any) =>
    language === "RU"
      ? item.excerptRU
      : language === "EN"
      ? item.excerptEN
      : item.excerptUZ;

  const getCategory = (item: any) =>
    language === "RU"
      ? item.categoryRU
      : language === "EN"
      ? item.categoryEN
      : item.categoryUZ;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2C52] mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content[language].subtitle}
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card
              key={item.id}
              className="shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg cursor-pointer">
                <Image
                  src={item.image}
                  alt={getTitle(item)}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#31519F] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {getCategory(item)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="pt-4 px-6 pb-6 cursor-pointer">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {getTitle(item)}
                </h3>

                <p className="text-sm text-blue-600 mb-1">
                  <span className="font-medium text-[#7E9ACF]">
                    {content[language].addressLabel}
                  </span>{" "}
                  <span className="text-[#31519F]">{getExcerpt(item)}</span>
                </p>

                <p className="text-sm text-[#7E9ACF] mb-4">
                  <span className="font-medium">
                    {content[language].yearLabel}
                  </span>{" "}
                  <span className="text-[#31519F]">{item.year}</span>
                </p>

                {/* Read More Button */}
                <Button
                  asChild
                  className="w-full bg-[#31519F] text-white text-sm font-semibold shadow-md 
                    hover:bg-[#233c7a] hover:shadow-lg 
                    transition-all duration-300 ease-in-out transform 
                    hover:-translate-y-[1px] hover:scale-[1.02] 
                    rounded-md "
                >
                  <Link href={`/news/${item.id}`}>
                    {content[language].readMore}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#31519F] hover:bg-[#233c7a] text-white font-semibold shadow-md cursor-pointer
              hover:shadow-lg transition-all duration-300 ease-in-out 
              transform  hover:scale-[1.02] rounded-md"
          >
            <Link href="/news">{content[language].viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
