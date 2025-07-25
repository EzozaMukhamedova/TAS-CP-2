"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Search } from "lucide-react"

export default function NewsPage() {
  const [language] = useState("UZ")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const content = {
    UZ: {
      title: "Yangiliklar va E'lonlar",
      subtitle: "Kompaniya faoliyati va loyihalar haqida eng so'nggi ma'lumotlar",
      search: "Qidirish",
      searchPlaceholder: "Yangiliklar bo'yicha qidiring...",
      filterBy: "Kategoriya bo'yicha filtrlash",
      readMore: "Batafsil o'qish",
      publishedOn: "Chop etilgan",
      allCategories: "Barcha kategoriyalar",
      noResults: "Qidiruv bo'yicha natija topilmadi",
    },
    RU: {
      title: "Новости и Объявления",
      subtitle: "Самая свежая информация о деятельности компании и проектах",
      search: "Поиск",
      searchPlaceholder: "Поиск по новостям...",
      filterBy: "Фильтр по категории",
      readMore: "Читать далее",
      publishedOn: "Опубликовано",
      allCategories: "Все категории",
      noResults: "По запросу ничего не найдено",
    },
    EN: {
      title: "News & Announcements",
      subtitle: "Latest information about company activities and projects",
      search: "Search",
      searchPlaceholder: "Search news...",
      filterBy: "Filter by Category",
      readMore: "Read More",
      publishedOn: "Published on",
      allCategories: "All Categories",
      noResults: "No results found for your search",
    },
  }

  const categories = [
    { id: "all", labelUZ: "Barchasi", labelRU: "Все", labelEN: "All" },
    { id: "project", labelUZ: "Loyihalar", labelRU: "Проекты", labelEN: "Projects" },
    { id: "announcement", labelUZ: "E'lonlar", labelRU: "Объявления", labelEN: "Announcements" },
    { id: "award", labelUZ: "Mukofotlar", labelRU: "Награды", labelEN: "Awards" },
    { id: "esg", labelUZ: "ESG", labelRU: "ESG", labelEN: "ESG" },
    { id: "recruitment", labelUZ: "Ishga qabul", labelRU: "Трудоустройство", labelEN: "Recruitment" },
  ]

  const news = [
    {
      id: 1,
      date: "2024.01.15",
      categoryUZ: "Loyihalar",
      categoryRU: "Проекты",
      categoryEN: "Projects",
      category: "project",
      titleUZ: "Yangi Quyosh Elektr Stansiyasi Loyihasi Boshlandi",
      titleRU: "Начался новый проект солнечной электростанции",
      titleEN: "New Solar Power Station Project Started",
      excerptUZ:
        "Hokkaido viloyatida 50MW quvvatli yangi quyosh elektr stansiyasi qurilishi boshlandi. Bu loyiha kompaniyamizning barqaror energiya sohasidagi eng katta investitsiyalaridan biri hisoblanadi.",
      excerptRU:
        "В префектуре Хоккайдо началось строительство новой солнечной электростанции мощностью 50МВт. Этот проект является одной из крупнейших инвестиций нашей компании в области устойчивой энергетики.",
      excerptEN:
        "Construction of a new 50MW solar power station has begun in Hokkaido Prefecture. This project represents one of our company's largest investments in sustainable energy.",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 2,
      date: "2024.01.10",
      categoryUZ: "E'lonlar",
      categoryRU: "Объявления",
      categoryEN: "Announcements",
      category: "announcement",
      titleUZ: "Tokyo'da Yangi Ofis Majmuasi Ochildi",
      titleRU: "В Токио открылся новый офисный комплекс",
      titleEN: "New Office Complex Opened in Tokyo",
      excerptUZ:
        "Minato tumanida zamonaviy A-sinf ofis binosi mijozlarga taqdim etildi. Bino LEED Gold sertifikatiga ega va eng zamonaviy texnologiyalar bilan jihozlangan.",
      excerptRU:
        "В районе Минато представлено современное офисное здание класса А для клиентов. Здание имеет сертификат LEED Gold и оснащено самыми современными технологиями.",
      excerptEN:
        "A modern Class A office building has been presented to clients in Minato district. The building has LEED Gold certification and is equipped with the latest technologies.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 3,
      date: "2024.01.05",
      categoryUZ: "Mukofotlar",
      categoryRU: "Награды",
      categoryEN: "Awards",
      category: "award",
      titleUZ: "Kompaniya Yilning Eng Yaxshi Ko'chmas Mulk Kompaniyasi Deb Tan Olindi",
      titleRU: "Компания признана лучшей компанией недвижимости года",
      titleEN: "Company Recognized as Best Real Estate Company of the Year",
      excerptUZ:
        "Tokyo Asset Solution Yaponiya Ko'chmas Mulk Assotsiatsiyasi tomonidan mukofotlandi. Bu mukofot bizning innovatsion yondashuvimiz va mijozlarga bo'lgan sodiqligimizni tan olishdir.",
      excerptRU:
        "Tokyo Asset Solution награждена Японской ассоциацией недвижимости. Эта награда является признанием нашего инновационного подхода и преданности клиентам.",
      excerptEN:
        "Tokyo Asset Solution was awarded by the Japan Real Estate Association. This award recognizes our innovative approach and dedication to clients.",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 4,
      date: "2023.12.01",
      categoryUZ: "ESG",
      categoryRU: "ESG",
      categoryEN: "ESG",
      category: "esg",
      titleUZ: "ESG Boshqaruvini Rivojlantirish Haqida",
      titleRU: "О продвижении ESG-менеджмента",
      titleEN: "Promotion of ESG Management",
      excerptUZ:
        "Kompaniyamiz atrof-muhit, jamiyat va boshqaruv (ESG) nuqtai nazaridan barqaror boshqaruvni rivojlantirmoqda va 2030 yilgacha uglerod neytralligini amalga oshirishni maqsad qilgan.",
      excerptRU:
        "Наша компания продвигает устойчивое управление с точки зрения окружающей среды, общества и управления (ESG) и стремится к достижению углеродной нейтральности к 2030 году.",
      excerptEN:
        "Our company is promoting sustainable management from the perspective of environment, society, and governance (ESG) and aims to achieve carbon neutrality by 2030.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 5,
      date: "2023.11.15",
      categoryUZ: "Ishga qabul",
      categoryRU: "Трудоустройство",
      categoryEN: "Recruitment",
      category: "recruitment",
      titleUZ: "Yangi Bitiruvchilarni Ishga Qabul Qilish Tushuntirish Yig'ini",
      titleRU: "Информационная сессия по трудоустройству новых выпускников",
      titleEN: "New Graduate Recruitment Information Session",
      excerptUZ:
        "2025-yil yangi bitiruvchilarni ishga qabul qilish uchun tushuntirish yig'ini o'tkazamiz. Ko'chmas mulk sohasida martaba qilishni istagan talabalarning ishtirokini kutamiz.",
      excerptRU:
        "Проводим информационную сессию для трудоустройства новых выпускников 2025 года. Ждем участия студентов, желающих сделать карьеру в сфере недвижимости.",
      excerptEN:
        "We are holding an information session for 2025 new graduate recruitment. We look forward to the participation of students who wish to pursue careers in the real estate industry.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 6,
      date: "2023.10.20",
      categoryUZ: "Loyihalar",
      categoryRU: "Проекты",
      categoryEN: "Projects",
      category: "project",
      titleUZ: "Kyoto An'anaviy Binolar Qayta Tiklash Loyihasi Yakunlandi",
      titleRU: "Завершен проект реставрации традиционных зданий Киото",
      titleEN: "Kyoto Traditional Buildings Restoration Project Completed",
      excerptUZ:
        "Kyoto shahridagi tarixiy binolarni zamonaviy standartlarga moslash loyihasi muvaffaqiyatli yakunlandi. Loyiha an'anaviy me'morchilik va zamonaviy texnologiyalarni birlashtirdi.",
      excerptRU:
        "Успешно завершен проект адаптации исторических зданий в городе Киото к современным стандартам. Проект объединил традиционную архитектуру и современные технологии.",
      excerptEN:
        "The project to adapt historical buildings in Kyoto city to modern standards has been successfully completed. The project combined traditional architecture with modern technologies.",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ]

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      getTitle(item).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getExcerpt(item).toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredNews = filteredNews.filter((item) => item.featured)
  const regularNews = filteredNews.filter((item) => !item.featured)

  const getTitle = (item: any) => {
    switch (language) {
      case "RU":
        return item.titleRU
      case "EN":
        return item.titleEN
      default:
        return item.titleUZ
    }
  }

  const getExcerpt = (item: any) => {
    switch (language) {
      case "RU":
        return item.excerptRU
      case "EN":
        return item.excerptEN
      default:
        return item.excerptUZ
    }
  }

  const getCategory = (item: any) => {
    switch (language) {
      case "RU":
        return item.categoryRU
      case "EN":
        return item.categoryEN
      default:
        return item.categoryUZ
    }
  }

  const getCategoryLabel = (category: any) => {
    switch (language) {
      case "RU":
        return category.labelRU
      case "EN":
        return category.labelEN
      default:
        return category.labelUZ
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content[language as keyof typeof content].title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content[language as keyof typeof content].subtitle}</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-6">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder={content[language as keyof typeof content].searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-4">
            {content[language as keyof typeof content].filterBy}:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {getCategoryLabel(category)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === "UZ" && "Asosiy Yangiliklar"}
            {language === "RU" && "Главные Новости"}
            {language === "EN" && "Featured News"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={getTitle(item)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">
                      {language === "UZ" && "Asosiy"}
                      {language === "RU" && "Главное"}
                      {language === "EN" && "Featured"}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {getCategory(item)}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    {content[language as keyof typeof content].publishedOn}: {item.date}
                  </div>
                  <CardTitle className="text-xl text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/news/${item.id}`}>{getTitle(item)}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {getExcerpt(item)}
                  </CardDescription>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href={`/news/${item.id}`}>{content[language as keyof typeof content].readMore}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Regular News */}
      {regularNews.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === "UZ" && "Barcha Yangiliklar"}
            {language === "RU" && "Все Новости"}
            {language === "EN" && "All News"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow bg-white">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={getTitle(item)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {getCategory(item)}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <CardTitle className="text-lg text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/news/${item.id}`}>{getTitle(item)}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {getExcerpt(item)}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600">
                    <Link href={`/news/${item.id}`}>{content[language as keyof typeof content].readMore}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📰</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {content[language as keyof typeof content].noResults}
          </h3>
          <p className="text-gray-600">
            {language === "UZ" && "Boshqa kalit so'zlar bilan qidirib ko'ring yoki filtrlarni o'zgartiring."}
            {language === "RU" && "Попробуйте другие ключевые слова или измените фильтры."}
            {language === "EN" && "Try different keywords or change the filters."}
          </p>
        </div>
      )}
    </div>
  )
}
