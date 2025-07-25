"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"

interface ApplicationPageProps {
  params: {
    id: string
  }
}

export default function ApplicationPage({ params }: ApplicationPageProps) {
  const [language] = useState("UZ")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    motivation: "",
    resume: null as File | null,
  })

  const content = {
    UZ: {
      backToJobs: "Vakansiyalarga qaytish",
      applicationForm: "Ariza Shakli",
      fullName: "To'liq ism",
      email: "Email manzil",
      phone: "Telefon raqam",
      position: "Lavozim",
      motivation: "Motivatsion xat",
      motivationPlaceholder: "Nima uchun bizning kompaniyamizda ishlashni xohlaysiz?",
      resume: "Rezyume yuklash",
      chooseFile: "Fayl tanlash",
      submit: "Ariza yuborish",
      lifeAtTAS: "TAS'da Hayot",
      professionalGrowth: "Kasbiy O'sish",
      teamEnvironment: "Jamoaviy Muhit",
      workLifeBalance: "Ish-Hayot Balansi",
      growthDesc: "Doimiy o'qish va rivojlanish imkoniyatlari",
      teamDesc: "Hamkorlik va o'zaro qo'llab-quvvatlash madaniyati",
      balanceDesc: "Moslashuvchan ish vaqti va dam olish imkoniyatlari",
      employeeTestimonials: "Xodimlar Fikrlari",
      officeGallery: "Ofis Galereyasi",
    },
    RU: {
      backToJobs: "Вернуться к вакансиям",
      applicationForm: "Форма Заявки",
      fullName: "Полное имя",
      email: "Email адрес",
      phone: "Номер телефона",
      position: "Должность",
      motivation: "Мотивационное письмо",
      motivationPlaceholder: "Почему вы хотите работать в нашей компании?",
      resume: "Загрузить резюме",
      chooseFile: "Выбрать файл",
      submit: "Отправить заявку",
      lifeAtTAS: "Жизнь в TAS",
      professionalGrowth: "Профессиональный Рост",
      teamEnvironment: "Командная Среда",
      workLifeBalance: "Баланс Работы и Жизни",
      growthDesc: "Постоянные возможности обучения и развития",
      teamDesc: "Культура сотрудничества и взаимной поддержки",
      balanceDesc: "Гибкий рабочий график и возможности отдыха",
      employeeTestimonials: "Отзывы Сотрудников",
      officeGallery: "Галерея Офиса",
    },
    EN: {
      backToJobs: "Back to Jobs",
      applicationForm: "Application Form",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      position: "Position",
      motivation: "Motivation Letter",
      motivationPlaceholder: "Why do you want to work at our company?",
      resume: "Upload Resume",
      chooseFile: "Choose File",
      submit: "Submit Application",
      lifeAtTAS: "Life at TAS",
      professionalGrowth: "Professional Growth",
      teamEnvironment: "Team Environment",
      workLifeBalance: "Work-Life Balance",
      growthDesc: "Continuous learning and development opportunities",
      teamDesc: "Culture of collaboration and mutual support",
      balanceDesc: "Flexible working hours and rest opportunities",
      employeeTestimonials: "Employee Testimonials",
      officeGallery: "Office Gallery",
    },
  }

  // Mock data for positions
  const positionData = {
    1: {
      titleUZ: "Ko'chmas Mulk Menejeri",
      titleRU: "Менеджер по недвижимости",
      titleEN: "Real Estate Manager",
    },
    2: {
      titleUZ: "Loyiha Koordinatori",
      titleRU: "Координатор проектов",
      titleEN: "Project Coordinator",
    },
    3: {
      titleUZ: "Marketing Mutaxassisi",
      titleRU: "Специалист по маркетингу",
      titleEN: "Marketing Specialist",
    },
  }

  const position = positionData[params.id as keyof typeof positionData]

  const getPositionTitle = () => {
    if (!position) return ""
    switch (language) {
      case "RU":
        return position.titleRU
      case "EN":
        return position.titleEN
      default:
        return position.titleUZ
    }
  }

  const testimonials = [
    {
      nameUZ: "Akira Tanaka",
      nameRU: "Акира Танака",
      nameEN: "Akira Tanaka",
      positionUZ: "Senior Loyiha Menejeri",
      positionRU: "Старший менеджер проектов",
      positionEN: "Senior Project Manager",
      textUZ: "TAS'da ishlash mening kareramda eng yaxshi qaror edi. Bu yerda har kuni yangi narsalarni o'rganaman.",
      textRU: "Работа в TAS была лучшим решением в моей карьере. Здесь я каждый день изучаю что-то новое.",
      textEN: "Working at TAS has been the best decision in my career. I learn something new every day here.",
    },
    {
      nameUZ: "Maria Rodriguez",
      nameRU: "Мария Родригес",
      nameEN: "Maria Rodriguez",
      positionUZ: "Marketing Direktori",
      positionRU: "Директор по маркетингу",
      positionEN: "Marketing Director",
      textUZ: "Kompaniya xodimlarning professional o'sishini qo'llab-quvvatlaydi va innovatsiyalarni rag'batlantiradi.",
      textRU: "Компания поддерживает профессиональный рост сотрудников и поощряет инновации.",
      textEN: "The company supports employee professional growth and encourages innovation.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/recruitment">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToJobs}
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Application Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {content[language as keyof typeof content].applicationForm}
              </CardTitle>
              <p className="text-gray-600">{getPositionTitle()}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">{content[language as keyof typeof content].fullName}</Label>
                  <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="email">{content[language as keyof typeof content].email}</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">{content[language as keyof typeof content].phone}</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="position">{content[language as keyof typeof content].position}</Label>
                  <Input id="position" name="position" value={getPositionTitle()} readOnly className="bg-gray-50" />
                </div>

                <div>
                  <Label htmlFor="motivation">{content[language as keyof typeof content].motivation}</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder={content[language as keyof typeof content].motivationPlaceholder}
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="resume">{content[language as keyof typeof content].resume}</Label>
                  <div className="mt-2">
                    <label className="flex items-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                      <Upload className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">
                        {formData.resume ? formData.resume.name : content[language as keyof typeof content].chooseFile}
                      </span>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {content[language as keyof typeof content].submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Life at TAS */}
        {/* Life at TAS - Enhanced */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {content[language as keyof typeof content].lifeAtTAS}
              </CardTitle>
              <CardDescription>
                {language === "UZ" && "Bizning kompaniyada ishlash tajribasi haqida batafsil ma'lumot"}
                {language === "RU" && "Подробная информация об опыте работы в нашей компании"}
                {language === "EN" && "Detailed information about the work experience at our company"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Work Environment */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === "UZ" && "Ish Muhiti"}
                    {language === "RU" && "Рабочая Среда"}
                    {language === "EN" && "Work Environment"}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl">📈</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {content[language as keyof typeof content].professionalGrowth}
                        </h3>
                        <p className="text-gray-600 text-sm">{content[language as keyof typeof content].growthDesc}</p>
                        <ul className="text-xs text-gray-500 mt-2 space-y-1">
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Mentorlik dasturlari"
                              : language === "RU"
                                ? "Программы наставничества"
                                : "Mentorship programs"}
                          </li>
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Xalqaro konferensiyalar"
                              : language === "RU"
                                ? "Международные конференции"
                                : "International conferences"}
                          </li>
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Sertifikatsiya qo'llab-quvvatlash"
                              : language === "RU"
                                ? "Поддержка сертификации"
                                : "Certification support"}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl">👥</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {content[language as keyof typeof content].teamEnvironment}
                        </h3>
                        <p className="text-gray-600 text-sm">{content[language as keyof typeof content].teamDesc}</p>
                        <ul className="text-xs text-gray-500 mt-2 space-y-1">
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Ochiq kommunikatsiya"
                              : language === "RU"
                                ? "Открытая коммуникация"
                                : "Open communication"}
                          </li>
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Jamoaviy loyihalar"
                              : language === "RU"
                                ? "Командные проекты"
                                : "Team projects"}
                          </li>
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Xilma-xillik va inklyuzivlik"
                              : language === "RU"
                                ? "Разнообразие и инклюзивность"
                                : "Diversity and inclusion"}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl">⚖️</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {content[language as keyof typeof content].workLifeBalance}
                        </h3>
                        <p className="text-gray-600 text-sm">{content[language as keyof typeof content].balanceDesc}</p>
                        <ul className="text-xs text-gray-500 mt-2 space-y-1">
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Uzoqdan ishlash imkoniyati"
                              : language === "RU"
                                ? "Возможность удаленной работы"
                                : "Remote work options"}
                          </li>
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Wellness dasturlari"
                              : language === "RU"
                                ? "Велнес программы"
                                : "Wellness programs"}
                          </li>
                          <li>
                            •{" "}
                            {language === "UZ"
                              ? "Oilaviy tadbirlar"
                              : language === "RU"
                                ? "Семейные мероприятия"
                                : "Family events"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Development */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {language === "UZ" && "Karyera Rivojlanishi"}
                    {language === "RU" && "Развитие Карьеры"}
                    {language === "EN" && "Career Development"}
                  </h4>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">
                          {language === "UZ" && "O'qitish va Rivojlanish"}
                          {language === "RU" && "Обучение и Развитие"}
                          {language === "EN" && "Training & Development"}
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            {language === "UZ"
                              ? "Yillik 40 soat professional o'qitish"
                              : language === "RU"
                                ? "40 часов профессионального обучения в год"
                                : "40 hours of professional training annually"}
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            {language === "UZ"
                              ? "Til o'rganish qo'llab-quvvatlash"
                              : language === "RU"
                                ? "Поддержка изучения языков"
                                : "Language learning support"}
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            {language === "UZ"
                              ? "Texnik sertifikatsiya"
                              : language === "RU"
                                ? "Техническая сертификация"
                                : "Technical certifications"}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">
                          {language === "UZ" && "Karyera Yo'llari"}
                          {language === "RU" && "Карьерные Пути"}
                          {language === "EN" && "Career Paths"}
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            {language === "UZ"
                              ? "Aniq karyera rejalashtirish"
                              : language === "RU"
                                ? "Четкое планирование карьеры"
                                : "Clear career planning"}
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            {language === "UZ"
                              ? "Ichki lavozim ko'tarilishi"
                              : language === "RU"
                                ? "Внутреннее продвижение"
                                : "Internal promotions"}
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            {language === "UZ"
                              ? "Xalqaro imkoniyatlar"
                              : language === "RU"
                                ? "Международные возможности"
                                : "International opportunities"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Employee Testimonials - Enhanced */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                {content[language as keyof typeof content].employeeTestimonials}
              </CardTitle>
            </CardHeader>
            <CardDescription>
              {language === "UZ" && "Xodimlarimizning haqiqiy fikrlari va tajribalari"}
              {language === "RU" && "Реальные мнения и опыт наших сотрудников"}
              {language === "EN" && "Real opinions and experiences of our employees"}
            </CardDescription>
            <CardContent>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">{testimonial.nameUZ.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 italic mb-3 text-base leading-relaxed">
                          "
                          {language === "RU"
                            ? testimonial.textRU
                            : language === "EN"
                              ? testimonial.textEN
                              : testimonial.textUZ}
                          "
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">
                              {language === "RU"
                                ? testimonial.nameRU
                                : language === "EN"
                                  ? testimonial.nameEN
                                  : testimonial.nameUZ}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {language === "RU"
                                ? testimonial.positionRU
                                : language === "EN"
                                  ? testimonial.positionEN
                                  : testimonial.positionUZ}
                            </p>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>⭐</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Office Gallery - Enhanced */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                {content[language as keyof typeof content].officeGallery}
              </CardTitle>
              <CardDescription>
                {language === "UZ" && "Zamonaviy ofisimiz va ish muhitimiz"}
                {language === "RU" && "Наш современный офис и рабочая среда"}
                {language === "EN" && "Our modern office and work environment"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Reception Area", nameUZ: "Qabulxona", nameRU: "Зона приема" },
                    { name: "Open Workspace", nameUZ: "Ochiq ish maydoni", nameRU: "Открытое рабочее пространство" },
                    { name: "Meeting Room", nameUZ: "Yig'ilish zali", nameRU: "Переговорная" },
                    { name: "Break Area", nameUZ: "Dam olish zonasi", nameRU: "Зона отдыха" },
                  ].map((area, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={`/placeholder.svg?height=150&width=200`}
                        alt={area.name}
                        className="w-full h-32 object-cover rounded-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <p className="text-white font-medium text-sm">
                          {language === "RU" ? area.nameRU : language === "EN" ? area.name : area.nameUZ}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Features */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-3">
                    {language === "UZ" && "Ofis Imkoniyatlari"}
                    {language === "RU" && "Возможности Офиса"}
                    {language === "EN" && "Office Facilities"}
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">🏢</span>
                      <span>
                        {language === "UZ"
                          ? "Toranomon Hills'da joylashgan"
                          : language === "RU"
                            ? "Расположен в Торанomon Hills"
                            : "Located in Toranomon Hills"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">☕</span>
                      <span>
                        {language === "UZ"
                          ? "Bepul kofe va choy"
                          : language === "RU"
                            ? "Бесплатный кофе и чай"
                            : "Free coffee and tea"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">🚇</span>
                      <span>
                        {language === "UZ"
                          ? "Metro bekatiga 2 daqiqa"
                          : language === "RU"
                            ? "2 минуты до метро"
                            : "2 minutes to subway"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">🍽️</span>
                      <span>
                        {language === "UZ"
                          ? "Restoran va kafeler yaqinida"
                          : language === "RU"
                            ? "Рестораны и кафе рядом"
                            : "Restaurants and cafes nearby"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">🏋️</span>
                      <span>
                        {language === "UZ"
                          ? "Fitness markaz kirish"
                          : language === "RU"
                            ? "Доступ в фитнес-центр"
                            : "Fitness center access"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">🌿</span>
                      <span>
                        {language === "UZ"
                          ? "Yashil ofis muhiti"
                          : language === "RU"
                            ? "Зеленая офисная среда"
                            : "Green office environment"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
