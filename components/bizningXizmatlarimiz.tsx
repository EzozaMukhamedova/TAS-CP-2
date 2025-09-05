"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ServicesOverview() {
  const [language] = useState("UZ");

  const content = {
    UZ: {
      title: "Bizning Xizmatlarimiz",
      subtitle: "Ko'chmas mulk sohasida keng ko'lamli professional yechimlar",
      viewAll: "Barcha xizmatlarni ko'rish",
    },
    RU: {
      title: "Наши Услуги",
      subtitle: "Широкий спектр профессиональных решений в сфере недвижимости",
      viewAll: "Посмотреть все услуги",
    },
    EN: {
      title: "Our Services",
      subtitle: "Comprehensive professional solutions in real estate",
      viewAll: "View All Services",
    },
  };

  const services = [
    {
      iconImage: "/svg/mulkBoshqaruviicon.svg",
      titleUZ: "Mulk Boshqaruvi",
      titleRU: "Управление Недвижимостью",
      titleEN: "Property Management",
      descriptionUZ: "Professional mulk boshqaruvi va operatsion xizmatlar",
      descriptionRU:
        "Профессиональное управление недвижимостью и операционные услуги",
      descriptionEN:
        "Professional property management and operational services",
    },
    {
      iconImage: "/svg/binoBoshqaruvi.svg",
      titleUZ: "Bino Boshqaruvi",
      titleRU: "Управление Зданиями",
      titleEN: "Building Management",
      descriptionUZ: "To'liq bino boshqaruvi va texnik xizmat",
      descriptionRU: "Полное управление зданиями и техническое обслуживание",
      descriptionEN: "Complete building management and technical services",
    },
    {
      iconImage: "/svg/tijoratObyectlari.svg",
      titleUZ: "Tijorat Ob'ektlari",
      titleRU: "Коммерческие Объекты",
      titleEN: "Commercial Properties",
      descriptionUZ: "Do'kon va omborxonalar uchun professional xizmat",
      descriptionRU: "Профессиональные услуги для магазинов и складов",
      descriptionEN: "Professional services for shops and warehouses",
    },
    {
      iconImage: "/svg/quyoshEnergiyasi.svg",
      titleUZ: "Quyosh Energiyasi",
      titleRU: "Солнечная Энергия",
      titleEN: "Solar Energy",
      descriptionUZ: "Quyosh elektr stansiyalari texnik xizmati",
      descriptionRU: "Техническое обслуживание солнечных электростанций",
      descriptionEN: "Solar power station technical services",
    },
    {
      iconImage: "/svg/landshaft.svg",
      titleUZ: "Landshaft Dizayni",
      titleRU: "Ландшафтный Дизайн",
      titleEN: "Landscape Design",
      descriptionUZ: "Professional landshaft parvarishi va dizayni",
      descriptionRU: "Профессиональный уход за ландшафтом и дизайн",
      descriptionEN: "Professional landscape care and design",
    },
    {
      iconImage: "/svg/investtitsiya.svg",
      titleUZ: "Investitsiya Konsaltingi",
      titleRU: "Инвестиционный Консалтинг",
      titleEN: "Investment Consulting",
      descriptionUZ: "Ko'chmas mulk investitsiyalari bo'yicha maslahat",
      descriptionRU: "Консультации по инвестициям в недвижимость",
      descriptionEN: "Real estate investment consulting",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#173758] mb-6">
            {content[language as keyof typeof content].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content[language as keyof typeof content].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={service.iconImage}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold mb-2">
                  {getTitle(service)}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-base text-gray-600 leading-relaxed text-center">
                  {getDescription(service)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#31519F] hover:bg-[#233c7a] text-white font-semibold shadow-md cursor-pointer
              hover:shadow-lg transition-all duration-300 ease-in-out 
              transform  hover:scale-[1.02] rounded-md w-[246px]"
          >
            <Link href="/business">
              {content[language as keyof typeof content].viewAll}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
