"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Building2,
  Wrench,
  TrendingUp,
  KeyRound,
  FileBarChart,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Gauge,
  UserCheck,
  Wallet,
  Home,
} from "lucide-react";

export default function CompanyHistoryPage() {
  const [language] = useState("UZ");

  const content = {
    UZ: {
      backToCompany: "Kompaniyaga qaytish",
      title: "Kompaniya Tarixi",
      overview: "Bizning Rivojlanish Yo'li",
      timeline: "Tarixiy Voqealar",
      otherSections: "Boshqa Bo'limlar",
    },
    RU: {
      backToCompany: "Вернуться к компании",
      title: "История Компании",
      overview: "Наш Путь Развития",
      timeline: "Исторические События",
      otherSections: "Другие Разделы",
    },
    EN: {
      backToCompany: "Back to Company",
      title: "Company History",
      overview: "Our Development Path",
      timeline: "Historical Events",
      otherSections: "Other Sections",
    },
  };

  const historyEvents = [
    {
      year: "2009",
      month: "1",
      eventUZ: "Norixiro Katada Vakil direktor etib tayinlandi",
      eventRU: "Норихиро Катада назначен представительным директором",
      eventEN: "Norixiro Katada appointed as Representative Director",
    },
    {
      year: "2009",
      month: "5",
      eventUZ:
        "Kyokuto Securities Co., Ltd fond kompaniyasi sarmoyasi asosida tashkil etilgan. Kompaniya nomi Tokyo Asset Solution Co., Ltd ga o'zgartirildi.",
      eventRU:
        "Основана на инвестициях фондовой компании Kyokuto Securities Co., Ltd. Название компании изменено на Tokyo Asset Solution Co., Ltd.",
      eventEN:
        "Established based on investment from Kyokuto Securities Co., Ltd fund company. Company name changed to Tokyo Asset Solution Co., Ltd.",
    },
    {
      year: "2015",
      month: "3",
      eventUZ:
        "Norixiro Katada boshqaruv raisi etib tayinlandi. Nobuaki Terashiki prezident va bosh direktor etib tayinlandi. Quyosh energiyasini ishlab chiqarish biznesi boshlandi",
      eventRU:
        "Норихиро Катада назначен председателем правления. Нобуаки Терашики назначен президентом и генеральным директором. Начат бизнес по производству солнечной энергии",
      eventEN:
        "Norixiro Katada appointed as Chairman. Nobuaki Terashiki appointed as President and CEO. Solar energy production business started",
    },
    {
      year: "2017",
      month: "11",
      eventUZ: "Chet elda biznesning boshlanishi",
      eventRU: "Начало зарубежного бизнеса",
      eventEN: "Start of overseas business",
    },
    {
      year: "2018",
      month: "12",
      eventUZ:
        "Birinchi yangi qurilgan ijara kvartirasining qurilishi tugallandi",
      eventRU: "Завершено строительство первой новой арендной квартиры",
      eventEN: "Completion of construction of the first new rental apartment",
    },
    {
      year: "2019",
      month: "6",
      eventUZ:
        "Xolding sifatida tashkil etilgan ST Holdings Co., Ltd. orqali Sato Building Co., Ltd. va Toshin Co., Ltd. M&A orqali guruh kompaniyalariga aylandi. Toshin korporatsiyasi orqali logistika ombor biznesini yo'lga qo'ygan",
      eventRU:
        "Через ST Holdings Co., Ltd., организованную как холдинг, Sato Building Co., Ltd. и Toshin Co., Ltd. стали групповыми компаниями через M&A. Запущен логистический складской бизнес через корпорацию Toshin",
      eventEN:
        "Through ST Holdings Co., Ltd. organized as a holding company, Sato Building Co., Ltd. and Toshin Co., Ltd. became group companies through M&A. Logistics warehouse business launched through Toshin Corporation",
    },
    {
      year: "2022",
      month: "12",
      eventUZ:
        "Xokkaydo shamol energiyasini ishlab chiqarish loyihasi boshlanadi",
      eventRU: "Начинается проект по производству ветровой энергии в Хоккайдо",
      eventEN: "Hokkaido wind energy production project begins",
    },
    {
      year: "2023",
      month: "2",
      eventUZ:
        "TAS HOLDINGS Co., Ltd., 100 foiz xolding kompaniyasi, Kyokuto Securities Co., Ltd. fond kompaniyasiga tegishli chiqarilgan oddiy aktsiyalarni sotib oladi va MBOni amalga oshiradi.",
      eventRU:
        "TAS HOLDINGS Co., Ltd., 100-процентная холдинговая компания, приобретает обыкновенные акции, принадлежащие фондовой компании Kyokuto Securities Co., Ltd., и осуществляет MBO.",
      eventEN:
        "TAS HOLDINGS Co., Ltd., a 100% holding company, acquires common shares owned by Kyokuto Securities Co., Ltd. fund company and implements MBO.",
    },
    {
      year: "2023",
      month: "11",
      eventUZ:
        "100% qayta tiklanadigan energiyani e'lon qiladi va RE Actionda ishtirok etadi",
      eventRU:
        "Объявляет о 100% возобновляемой энергии и участвует в RE Action",
      eventEN: "Announces 100% renewable energy and participates in RE Action",
    },
    {
      year: "2024",
      month: "2",
      eventUZ: '"Nifit" brendi ijaraga olingan kvartira',
      eventRU: 'Арендная квартира под брендом "Nifit"',
      eventEN: '"Nifit" brand rental apartment',
    },
    {
      year: "2024",
      month: "5",
      eventUZ: "Shintaro Tanahara boshqaruv raisi etib tayinlandi",
      eventRU: "Шинтаро Танахара назначен председателем правления",
      eventEN: "Shintaro Tanahara appointed as Chairman",
    },
  ];

  const otherSections = [
    {
      id: "management-vision",
      titleUZ: "Boshqaruv Ko'rinishi",
      titleRU: "Видение Управления",
      titleEN: "Management Vision",
    },
    {
      id: "organizational-structure",
      titleUZ: "Tashkiliy Tuzilma",
      titleRU: "Организационная Структура",
      titleEN: "Organizational Structure",
    },
    {
      id: "partners-banks",
      titleUZ: "Hamkor Tashkilotlar",
      titleRU: "Партнерские Организации",
      titleEN: "Partner Organizations",
    },
    {
      id: "general-info",
      titleUZ: "Umumiy Ma'lumot",
      titleRU: "Общая Информация",
      titleEN: "General Information",
    },
  ];

  const getEvent = (event: any) => {
    switch (language) {
      case "RU":
        return event.eventRU;
      case "EN":
        return event.eventEN;
      default:
        return event.eventUZ;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* HERO (rasmdagidek) */}
      <section className="bg-[#F7FAFF]">
        <div className="container mx-auto px-4 py-10 md:py-14 text-center">
          {/* Orqaga link */}
          <Button
            asChild
            variant="link"
            className="h-auto p-0 text-sm font-medium gap-2
                 text-[#3C5DAE] hover:text-[#1C3990] hover:underline"
          >
            <Link href="/business" aria-label="Biznes sahifasiga qaytish">
              <ArrowLeft className="h-4 w-4" />
              Biznes sahifasiga qaytish
              {/* yoki content[language].backToCompany */}
            </Link>
          </Button>

          {/* Sarlavha */}
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professional mulk boshqaruvi loyihalari
            {/* yoki {content[language].title} */}
          </h1>

          {/* Subtitr */}
          <p className="mt-3 text-slate-600 md:text-lg max-w-3xl mx-auto">
            Global bozorlarda muvaffaqiyatli ko'chmas mulk loyihalarini amalga
            oshirish
            {/* yoki {content[language].subtitle} */}
          </p>

          {/* CTA tugmalar */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              asChild
              className="h-9 md:h-10 px-4 md:px-5 rounded-md
                   bg-[#1C3990] hover:bg-[#162c6d] text-white shadow-sm"
            >
              <Link href="/contact">Biz bilan bog'laning</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-9 md:h-10 px-4 md:px-5 rounded-md
                   border-[#1C3990] text-[#1C3990]
                   hover:bg-[#1C3990] hover:text-white"
            >
              <Link href="/investment">Investitsiyani boshlash</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Page Header with Image */}
      <div className="grid lg:grid-cols-2 items-center gap-8 mb-12 pt-[40px]">
        {/* Chap: rasm kartasi (soya + ring) */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative rounded-2xl overflow-hidden bg-white shadow-lg ring-1 ring-black/5 hover:shadow-2xl transition-shadow
                 w-[280px] h-[280px] md:w-[420px] md:h-[420px] lg:w-[543px] lg:h-[543px]"
          >
            {/* Variant A: <img> (SVG uchun oddiy va barqaror) */}
            <img
              src="/svg/professional.svg"
              alt="Company History"
              className="block w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#1C3990] mb-6">
            {content[language as keyof typeof content].title}
          </h1>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {language === "UZ" &&
                "Tashkil etilganimizdan hozirgi kungacha biz global moliyaviy inqiroz, Buyuk Sharqiy Yaponiya zilzilasi va pandemiya kabi ijtimoiy-iqtisodiy o'zgarishlarni engib o'tdik va biznesimiz asoslarini asosan Tokioda qurdik."}
              {language === "RU" &&
                "С момента нашего основания до сегодняшнего дня мы преодолели социально-экономические изменения, такие как глобальный финансовый кризис, Великое восточно-японское землетрясение и пандемия, и заложили основы нашего бизнеса в основном в Токио."}
              {language === "EN" &&
                "From our establishment to the present day, we have overcome socio-economic changes such as the global financial crisis, the Great East Japan Earthquake and the pandemic, and have laid the foundations of our business mainly in Tokyo."}
            </p>
            <p>
              {language === "UZ" &&
                "Biz ko'plab kichik loyihalarni amalga oshirdik, bu bizga biznes imkoniyatlarining keng doirasiga ega bo'lish imkonini berdi. 2023 yilda MBO dasturidan o'tganimizdan so'ng biz o'sishning yangi bosqichiga qadam qo'yamiz va ko'chmas mulk bilan bog'liq biznesimiz orqali odamlarni, shaharlarni, jamiyatni va kelajakni yaratuvchi kompaniya sifatida yanada o'sishni maqsad qilamiz."}
              {language === "RU" &&
                "Мы реализовали множество небольших проектов, что позволило нам получить широкий спектр бизнес-возможностей. После прохождения программы MBO в 2023 году мы вступаем в новый этап роста и стремимся к дальнейшему росту как компания, создающая людей, города, общество и будущее через наш бизнес, связанный с недвижимостью."}
              {language === "EN" &&
                "We have implemented many small projects, which allowed us to have a wide range of business opportunities. After going through the MBO program in 2023, we are entering a new stage of growth and aim to grow further as a company that creates people, cities, society and the future through our real estate-related business."}
            </p>
          </div>
        </div>
      </div>

      {/* Bizning Xizmatlarimiz */}
      <section className="py-10 md:py-14 bg-[#F7FAFF]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900">
            Bizning Xizmatlarimiz
          </h2>
          <div className="h-1 w-12 bg-[#1C3990] rounded mx-auto mt-3" />

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Building2,
                title: "Bino Boshqaruvi",
                desc: "Ofis binolari, savdo va mavsumiy obyektlarni to‘liq boshqarish",
              },
              {
                Icon: Wrench,
                title: "Texnik Xizmat",
                desc: "Elektro, suv-ta’minoti, vent va issiqlik tizimlari texnik xizmat",
              },
              {
                Icon: TrendingUp,
                title: "Qimmat Oshirish",
                desc: "Mulk qiymatini oshirish va daromadni optimallashtirish",
              },
              {
                Icon: KeyRound,
                title: "Ijarа Boshqaruvi",
                desc: "Ijara shartnomalari, tenantlar va shartlar boshqaruvi",
              },
              {
                Icon: FileBarChart,
                title: "Moliyaviy Hisobot",
                desc: "Batafsil analitika va moliyaviy hisobotlar tayyorlash",
              },
              {
                Icon: ShieldCheck,
                title: "Xavfsizlik Boshqaruvi",
                desc: "Qurilma xavfsizligi, monitoring va xavfsizlik tizimlari",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl bg-white shadow-md hover:shadow-lg transition p-6 text-center ring-1 ring-black/5"
              >
                <div
                  className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full
                          bg-indigo-50 text-[#1C3990] ring-1 ring-[#1C3990]/10"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asosiy Xususiyatlar */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900">
            Asosiy Xususiyatlar
          </h2>
          <div className="h-1 w-12 bg-[#1C3990] rounded mx-auto mt-3" />

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              {
                Icon: Clock,
                title: "24/7 Monitoring",
                desc: "Kundalik/kechki smenalarda uzluksiz nazorat",
              },
              {
                Icon: BadgeCheck,
                title: "Sifat Kafolati",
                desc: "Standartlar va inspeksiya orqali sifatni ta’minlash",
              },
              {
                Icon: Gauge,
                title: "Doimiy Optimallashtirish",
                desc: "Operatsiyalar samaradorligini uzluksiz yaxshilash",
              },
              {
                Icon: UserCheck,
                title: "Personal Xizmat",
                desc: "Talabga mos individual qo‘llab-quvvatlash",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl bg-white shadow-md hover:shadow-lg transition p-6 text-center ring-1 ring-black/5"
              >
                <div
                  className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full
                          bg-indigo-50 text-[#1C3990] ring-1 ring-[#1C3990]/10"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Afzalliklar */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900">
            Afzalliklar
          </h2>
          <div className="h-1 w-12 bg-[#1C3990] rounded mx-auto mt-3" />

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Wallet,
                title: "Xarajatlarni kamaytirish",
                desc: "Resurslarni to‘g‘ri boshqarish orqali OPEXni pasaytirish",
              },
              {
                Icon: TrendingUp,
                title: "Daromadni oshirish",
                desc: "Ijara daromadlari va to‘lovlarni optimallashtirish",
              },
              {
                Icon: Home,
                title: "Mulk qiymatini saqlash",
                desc: "Muntazam servis va modernizatsiya bilan aktivni asrash",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl bg-white shadow-md hover:shadow-lg transition p-6 ring-1 ring-black/5"
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-full
                          bg-indigo-50 text-[#1C3990] ring-1 ring-[#1C3990]/10"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
