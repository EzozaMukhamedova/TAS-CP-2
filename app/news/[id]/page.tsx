"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

interface NewsDetailPageProps {
  params: {
    id: string
  }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const [language] = useState("UZ")

  const content = {
    UZ: {
      backToNews: "Yangiliklarga qaytish",
      publishedOn: "Chop etilgan",
      author: "Muallif",
      source: "Manba",
      similarNews: "Shunga O'xshash Yangiliklar",
      readMore: "Batafsil",
    },
    RU: {
      backToNews: "Вернуться к новостям",
      publishedOn: "Опубликовано",
      author: "Автор",
      source: "Источник",
      similarNews: "Похожие Новости",
      readMore: "Подробнее",
    },
    EN: {
      backToNews: "Back to News",
      publishedOn: "Published on",
      author: "Author",
      source: "Source",
      similarNews: "Similar News",
      readMore: "Read More",
    },
  }

  // Mock data
  const newsData = {
    1: {
      titleUZ: "Yangi Quyosh Elektr Stansiyasi Loyihasi Boshlandi",
      titleRU: "Начался новый проект солнечной электростанции",
      titleEN: "New Solar Power Station Project Started",
      date: "2024.01.15",
      author: "Tokyo Asset Solution",
      categoryUZ: "Loyiha",
      categoryRU: "Проект",
      categoryEN: "Project",
      contentUZ: `Hokkaido viloyatida 50MW quvvatli yangi quyosh elektr stansiyasi qurilishi boshlandi. Bu loyiha kompaniyamizning barqaror energiya sohasidagi eng katta investitsiyalaridan biri hisoblanadi.

Loyiha haqida batafsil ma'lumot:

Quyosh elektr stansiyasi Hokkaido viloyatining shimoliy qismida, 200 gektar maydonni egallaydi. Stansiya yiliga 75,000 MWh elektr energiya ishlab chiqarishi kutilmoqda, bu taxminan 25,000 uy-joyning yillik elektr ehtiyojini qoplash uchun yetarli.

Loyihaning asosiy xususiyatlari:
- Umumiy quvvat: 50MW
- Yillik ishlab chiqarish: 75,000 MWh
- Maydon: 200 gektar
- Investitsiya hajmi: 8 milliard yen
- Qurilish muddati: 18 oy

Texnologik jihatdan, loyihada eng zamonaviy quyosh panellari va inverterlar qo'llaniladi. Panellar qor va shamol yuklamasiga chidamli bo'lib, Hokkaido'ning qattiq iqlim sharoitlariga moslashtirilgan.

Loyiha mahalliy iqtisodiyotga ham ijobiy ta'sir ko'rsatadi. Qurilish jarayonida 200 dan ortiq vaqtinchalik ish o'rni yaratiladi, operatsion bosqichda esa 15 ta doimiy ish o'rni ta'minlanadi.

Ekologik jihatdan, stansiya yiliga 37,500 tonna CO2 chiqindilarini kamaytiradi, bu 8,000 ta avtomobilning yillik chiqindilariga teng.`,
      contentRU: `В префектуре Хоккайдо началось строительство новой солнечной электростанции мощностью 50МВт. Этот проект является одной из крупнейших инвестиций нашей компании в области устойчивой энергетики.

Подробная информация о проекте:

Солнечная электростанция расположена в северной части префектуры Хоккайдо и занимает площадь 200 гектаров. Ожидается, что станция будет производить 75,000 МВтч электроэнергии в год, что достаточно для покрытия годовых потребностей в электричестве примерно 25,000 домохозяйств.

Основные характеристики проекта:
- Общая мощность: 50МВт
- Годовое производство: 75,000 МВтч
- Площадь: 200 гектаров
- Объем инвестиций: 8 миллиардов йен
- Срок строительства: 18 месяцев

С технологической точки зрения, в проекте используются самые современные солнечные панели и инверторы. Панели устойчивы к снеговым и ветровым нагрузкам и адаптированы к суровым климатическим условиям Хоккайдо.

Проект также положительно влияет на местную экономику. Во время строительства создается более 200 временных рабочих мест, а на операционном этапе обеспечивается 15 постоянных рабочих мест.

С экологической точки зрения, станция сократит выбросы CO2 на 37,500 тонн в год, что эквивалентно годовым выбросам 8,000 автомобилей.`,
      contentEN: `Construction of a new 50MW solar power station has begun in Hokkaido Prefecture. This project represents one of our company's largest investments in sustainable energy.

Detailed project information:

The solar power station is located in the northern part of Hokkaido Prefecture and covers an area of 200 hectares. The station is expected to generate 75,000 MWh of electricity annually, sufficient to cover the annual electricity needs of approximately 25,000 households.

Key project features:
- Total capacity: 50MW
- Annual production: 75,000 MWh
- Area: 200 hectares
- Investment amount: 8 billion yen
- Construction period: 18 months

Technologically, the project uses the most advanced solar panels and inverters. The panels are resistant to snow and wind loads and are adapted to Hokkaido's harsh climate conditions.

The project also positively impacts the local economy. During construction, over 200 temporary jobs are created, and 15 permanent jobs are provided during the operational phase.

Environmentally, the station will reduce CO2 emissions by 37,500 tons per year, equivalent to the annual emissions of 8,000 cars.`,
      image: "/placeholder.svg?height=400&width=800",
    },
  }

  const similarNews = [
    {
      id: 2,
      titleUZ: "Tokyo'da Yangi Ofis Majmuasi Ochildi",
      titleRU: "В Токио открылся новый офисный комплекс",
      titleEN: "New Office Complex Opened in Tokyo",
      date: "2024.01.10",
    },
    {
      id: 3,
      titleUZ: "Kompaniya Yilning Eng Yaxshi Ko'chmas Mulk Kompaniyasi Deb Tan Olindi",
      titleRU: "Компания признана лучшей компанией недвижимости года",
      titleEN: "Company Recognized as Best Real Estate Company of the Year",
      date: "2024.01.05",
    },
  ]

  const article = newsData[params.id as keyof typeof newsData]

  if (!article) {
    return <div>Yangilik topilmadi</div>
  }

  const getTitle = () => {
    switch (language) {
      case "RU":
        return article.titleRU
      case "EN":
        return article.titleEN
      default:
        return article.titleUZ
    }
  }

  const getContent = () => {
    switch (language) {
      case "RU":
        return article.contentRU
      case "EN":
        return article.contentEN
      default:
        return article.contentUZ
    }
  }

  const getCategory = () => {
    switch (language) {
      case "RU":
        return article.categoryRU
      case "EN":
        return article.categoryEN
      default:
        return article.categoryUZ
    }
  }

  const getSimilarTitle = (item: any) => {
    switch (language) {
      case "RU":
        return item.titleRU
      case "EN":
        return item.titleEN
      default:
        return item.titleUZ
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/news">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToNews}
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{getCategory()}</span>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar className="h-4 w-4" />
              {content[language as keyof typeof content].publishedOn}: {article.date}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{getTitle()}</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <User className="h-4 w-4" />
            {content[language as keyof typeof content].author}: {article.author}
          </div>
        </div>

        {/* Article Image */}
        <div className="mb-8">
          <img
            src={article.image || "/placeholder.svg"}
            alt={getTitle()}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="prose max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">{getContent()}</div>
            </div>
          </CardContent>
        </Card>

        {/* Similar News */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              {content[language as keyof typeof content].similarNews}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {similarNews.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{getSimilarTitle(item)}</h3>
                  <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/news/${item.id}`}>{content[language as keyof typeof content].readMore}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
