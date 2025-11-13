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

      <section className="w-full py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center sm:text-3xl lg:text-4xl text-3xl font-bold text-[#31519F] mb-4">
            Karyera Imkoniyatlari
          </h2>
          <p className="mt-3 text-center text-sm sm:text-base text-gray-500">
            Professional rivojlanish va muvaffaqiyat yo‘li
          </p>

          {/* Card */}
          <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="px-6 sm:px-10 py-8 text-center space-y-2">
              <p className="text-sm sm:text-base text-gray-600">
                Yangi ish o‘rinlari va kasbiy imkoniyatlar tez orada qo‘shiladi.
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#1C3990]">
                Bizning jamoamizga qo‘shilish uchun kuzatib turing!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
