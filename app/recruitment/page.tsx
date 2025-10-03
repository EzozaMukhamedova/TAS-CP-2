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
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function RecruitmentPage() {
  const [language] = useState("UZ");

  const content = {
    UZ: {
      title: "Ishga qabul qilish",
      subtitle: "Ishga qabul qilish haqida ma'lumot",
      newGraduates: "2026 yangi bitiruvchilarni ishga qabul qilish",
      midCareer: "O'rta martaba ishga qabul qilish",
      welcomeMessage: "Sizning arizangizni intiqlik bilan kutamiz",
      description:
        "Biz ish va ishtirokchilarga nisbatan ishtiyoq va samimiylik bilan biz bilan ishlay oladigan hamkasblarni qidiramiz.",
      videoMessage:
        "Biz bosh direktorimiz Terashikidan kompaniyamiz biznesi va kelajakga bo'lgan qarashlarimiz bilan tanishtiruvchi videomurojaatini e'lon qildik.",
      clickForVideo: "Xabar videosi uchun bu yerni bosing",
      newGraduateDetails:
        "2026 yilda yangi bitiruvchilarni ishga olish uchun Mynavi orqali murojaat qiling.",
      midCareerDetails: "Ilova tafsilotlari",
      positions: "Ochiq Pozitsiyalar",
      inquiries: "Ishga qabul qilish bo'yicha so'rovlar",
      inquiriesDescription:
        "Savollar uchun telefon orqali yoki aloqa formamiz orqali biz bilan bog'laning.",
      phone: "03-5510-8300 (Vakil)",
    },
    RU: {
      title: "Трудоустройство",
      subtitle: "Информация о трудоустройстве",
      newGraduates: "Трудоустройство новых выпускников 2026",
      midCareer: "Трудоустройство среднего звена",
      welcomeMessage: "Мы с нетерпением ждем ваших заявок",
      description:
        "Мы ищем коллег, которые могут работать с нами с энтузиазмом и искренностью по отношению к работе и участникам.",
      videoMessage:
        "Мы опубликовали видеообращение от нашего генерального директора Терашики, знакомящее с нашим бизнесом и взглядами на будущее.",
      clickForVideo: "Нажмите здесь для просмотра видео",
      newGraduateDetails:
        "Подавайте заявки через Mynavi для трудоустройства новых выпускников в 2026 году.",
      midCareerDetails: "Детали заявки",
      positions: "Открытые Позиции",
      inquiries: "Запросы по трудоустройству",
      inquiriesDescription:
        "Для вопросов обращайтесь по телефону или через нашу контактную форму.",
      phone: "03-5510-8300 (Представитель)",
    },
    EN: {
      title: "Recruitment",
      subtitle: "Recruitment Information",
      newGraduates: "2026 New Graduate Recruitment",
      midCareer: "Mid-Career Recruitment",
      welcomeMessage: "We eagerly await your applications",
      description:
        "We are looking for colleagues who can work with us with enthusiasm and sincerity towards work and participants.",
      videoMessage:
        "We have published a video message from our CEO Terashiki introducing our company business and views on the future.",
      clickForVideo: "Click here for the message video",
      newGraduateDetails:
        "Apply through Mynavi for new graduate recruitment in 2026.",
      midCareerDetails: "Application details",
      positions: "Open Positions",
      inquiries: "Recruitment Inquiries",
      inquiriesDescription:
        "For questions, please contact us by phone or through our contact form.",
      phone: "03-5510-8300 (Representative)",
    },
  };

  const positions = [
    {
      id: "internal-auditor",
      titleUZ: "Ichki Auditorni Yollash",
      titleRU: "Найм Внутреннего Аудитора",
      titleEN: "Internal Auditor Recruitment",
      descriptionUZ:
        "IPOga tayyorgarlik ko'rish jarayonida biz ichki auditni amalga oshira oladigan xodimlarni qidirmoqdamiz. Biz rahbar o'rinbosari yoki bo'lim boshlig'i lavozimiga bitta nomzodni ishga olishni rejalashtirmoqdamiz.",
      descriptionRU:
        "В процессе подготовки к IPO мы ищем сотрудников, способных проводить внутренний аудит. Мы планируем нанять одного кандидата на должность заместителя руководителя или начальника отдела.",
      descriptionEN:
        "In the process of preparing for IPO, we are looking for employees who can conduct internal audits. We plan to hire one candidate for the position of deputy manager or department head.",
    },
    {
      id: "property-manager",
      titleUZ: "Mulk Menejerini Ishga Olish",
      titleRU: "Найм Менеджера по Недвижимости",
      titleEN: "Property Manager Recruitment",
      descriptionUZ:
        "Boshqaruv ostidagi mulklar ko'payganligi sababli biz mulk boshqaruvchisini yollaymiz.",
      descriptionRU:
        "В связи с увеличением количества управляемых объектов недвижимости мы нанимаем управляющего недвижимостью.",
      descriptionEN:
        "Due to the increase in managed properties, we are hiring a property manager.",
    },
    {
      id: "planning-construction",
      titleUZ: "Rejalashtirish va Qurilish Bo'limi",
      titleRU: "Отдел Планирования и Строительства",
      titleEN: "Planning and Construction Department",
      descriptionUZ:
        "Biz ko'chmas mulk va qurilish sohasidagi ixtisoslashgan ko'nikmalarini rivojlantirishni targ'ib qilish uchun ishlata oladigan odamni qidirmoqdamiz.",
      descriptionRU:
        "Мы ищем человека, которого можем использовать для продвижения развития специализированных навыков в сфере недвижимости и строительства.",
      descriptionEN:
        "We are looking for a person we can use to promote the development of specialized skills in real estate and construction.",
    },
    {
      id: "planning-development",
      titleUZ: "Rejalashtirish va Rivojlantirish Bo'limi",
      titleRU: "Отдел Планирования и Развития",
      titleEN: "Planning and Development Department",
      descriptionUZ:
        "Biz ko'chmas mulk va qurilish sohasida o'zlarining ixtisoslashgan ko'nikmalarini rivojlantirishni rag'batlantirish ishlarini olib borish uchun ishlata oladigan odamlarni qidiramiz.",
      descriptionRU:
        "Мы ищем людей, которых можем использовать для проведения работ по стимулированию развития их специализированных навыков в сфере недвижимости и строительства.",
      descriptionEN:
        "We are looking for people we can use to carry out work to encourage the development of their specialized skills in real estate and construction.",
    },
    {
      id: "sales-position",
      titleUZ: "Savdo Pozitsiyasi",
      titleRU: "Торговая Позиция",
      titleEN: "Sales Position",
      descriptionUZ:
        "Biz tashkilotimizni mustahkamlash uchun qo'shimcha xodimlarni yollashni qidirmoqdamiz.",
      descriptionRU:
        "Мы ищем дополнительных сотрудников для укрепления нашей организации.",
      descriptionEN:
        "We are looking to hire additional staff to strengthen our organization.",
    },
  ];

  const getTitle = (position: any) => {
    switch (language) {
      case "RU":
        return position.titleRU;
      case "EN":
        return position.titleEN;
      default:
        return position.titleUZ;
    }
  };

  const getDescription = (position: any) => {
    switch (language) {
      case "RU":
        return position.descriptionRU;
      case "EN":
        return position.descriptionEN;
      default:
        return position.descriptionUZ;
    }
  };

  return (
    <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      {/* Hero */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h1 className="font-bold text-[#1C3990] mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mt-8 sm:mt-16">
          {content[language as keyof typeof content].title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          {content[language as keyof typeof content].subtitle}
        </p>
      </div>

      {/* Welcome Message */}
      {/* <section className="mb-10 sm:mb-12 lg:mb-[64px]">
        <div className="bg-[#DCEBFE] rounded-2xl p-5 sm:p-8 lg:p-10 text-[#374151] relative overflow-hidden">
    
          <div className="absolute top-0 right-0 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-14 lg:-translate-y-16 translate-x-10 sm:translate-x-12 lg:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-10 lg:translate-y-12 -translate-x-8 sm:-translate-x-10 lg:-translate-x-12"></div>

          <div className="relative z-10 mx-auto text-center max-w-prose">
            <h2 className="font-bold mb-3 sm:mb-4 text-2xl sm:text-3xl">
              {content[language as keyof typeof content].welcomeMessage}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Biz ish va ishtirokchilarga nisbatan ishtiyoq va samimiylik bilan
              biz bilan ishlay oladigan hamkasblarni qidiramiz.{" "}
              <br className="hidden sm:block" />
              Biz bosh direktorimiz Terashikidan kompaniyamiz biznesi va
              kelajakga bo'lgan qarashlarimiz bilan tanishtiruvchi
              videomurojaatini e'lon qildik.
            </p>
            <div className="max-w-[420px] mx-auto mt-5 sm:mt-6">
              <Button
                type="button"
                className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold bg-[#1C3990] hover:bg-[#2d4a9b]"
              >
                Xabar videosi uchun bu yerni bosing
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Recruitment Types */}
      <section className="mb-10 sm:mb-12 lg:mb-[64px]">
        <div className="mx-auto w-full max-w-2xl sm:max-w-3xl">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-900">
                {content[language as keyof typeof content].newGraduates}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                {content[language as keyof typeof content].newGraduateDetails}
              </p>
              <a
                href="https://tashkent.hh.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="bg-[#1C3990] hover:bg-[#2d4a9b] w-full h-11 sm:h-12">
                  hh.uz 2026
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          {content[language as keyof typeof content].positions}
        </h2>

        {/* 1 column on mobile, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {positions.map((position) => (
            <Card
              key={position.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-[#1C3990] mb-2 text-lg sm:text-xl">
                      {getTitle(position)}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {getDescription(position)}
                    </CardDescription>
                  </div>
                  <Badge className="bg-[#1C3990] text-white shrink-0">
                    {language === "UZ" && "Ochiq"}
                    {language === "RU" && "Открыто"}
                    {language === "EN" && "Open"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="bg-[#1C3990] hover:bg-[#2d4a9b] w-full h-11 sm:h-12"
                >
                  <Link href={`/recruitment/apply/${position.id}`}>
                    {language === "UZ" && "Batafsil "}
                    {language === "RU" &&
                      "Страница информации о трудоустройстве"}
                    {language === "EN" && "Recruitment information page"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Inquiries */}
      <section>
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-gray-900">
              {content[language as keyof typeof content].inquiries}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              {content[language as keyof typeof content].inquiriesDescription}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/svg/smartphone.svg"
                alt="Phone"
                width={26}
                height={26}
                className="sm:w-[30px] sm:h-[30px]"
              />
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                {content[language as keyof typeof content].phone}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
