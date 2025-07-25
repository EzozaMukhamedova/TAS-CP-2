"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CompanyHistoryPage() {
  const [language] = useState("UZ")

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
  }

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
      eventUZ: "Birinchi yangi qurilgan ijara kvartirasining qurilishi tugallandi",
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
      eventUZ: "Xokkaydo shamol energiyasini ishlab chiqarish loyihasi boshlanadi",
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
      eventUZ: "100% qayta tiklanadigan energiyani e'lon qiladi va RE Actionda ishtirok etadi",
      eventRU: "Объявляет о 100% возобновляемой энергии и участвует в RE Action",
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
  ]

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
    { id: "general-info", titleUZ: "Umumiy Ma'lumot", titleRU: "Общая Информация", titleEN: "General Information" },
  ]

  const getEvent = (event: any) => {
    switch (language) {
      case "RU":
        return event.eventRU
      case "EN":
        return event.eventEN
      default:
        return event.eventUZ
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/company">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToCompany}
          </Link>
        </Button>
      </div>

      {/* Page Header with Image */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="lg:col-span-1">
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Company History"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#1C3990] mb-6">{content[language as keyof typeof content].title}</h1>
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

      {/* Timeline Section */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990] text-center">
              {content[language as keyof typeof content].timeline}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {historyEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== historyEvents.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-[#1C3990] opacity-30"></div>
                  )}

                  <div className="flex gap-6">
                    {/* Date Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1C3990] text-white rounded-full flex flex-col items-center justify-center font-bold">
                        <span className="text-xs">{event.year}</span>
                        <span className="text-xs">{event.month}月</span>
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed">{getEvent(event)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Sections */}
      <section>
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].otherSections}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {otherSections.map((section) => (
                <Button
                  key={section.id}
                  asChild
                  variant="outline"
                  className="h-auto p-4 justify-start border-[#1C3990] text-[#1C3990] hover:bg-[#1C3990] hover:text-white"
                >
                  <Link href={`/company/${section.id}`}>
                    {language === "RU" ? section.titleRU : language === "EN" ? section.titleEN : section.titleUZ}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
