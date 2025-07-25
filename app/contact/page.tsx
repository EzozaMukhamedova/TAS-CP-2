"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [language] = useState("UZ")
  const [formData, setFormData] = useState({
    inquiryType: "",
    companyName: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const content = {
    UZ: {
      title: "So'rov",
      subtitle: "So'rovlar uchun, iltimos, telefon orqali yoki so'rov formamiz orqali biz bilan bog'laning.",
      phone: "+998 71 123-45-67 (asosiy raqam)",
      formTitle: "Kerakli ma'lumotlarni kiriting va yuboring",
      required: "Majburiy maydonlarni to'ldirganingizga ishonch hosil qiling.",
      inquiryContent: "So'rov mazmuni",
      selectOption: "tanlang",
      companyName: "Tashkilot nomi",
      companyExample: "Misol: O'zbekiston Asset Solutions",
      name: "Ism Familiya",
      nameExample: "Misol: Alisher Navoiy",
      phoneNumber: "Telefon raqami",
      phoneExample: "Misol: +998 90 123-45-67",
      emailAddress: "Elektron pochta manzili",
      emailExample: "Misol: email@example.uz",
      inquiryMessage: "So'rov mazmuni",
      privacyAgreement: "Iltimos, ma'lumotingizni yuborishdan oldin maxfiylik siyosatimizga rozilik bildiring.",
      submit: "So'rov yuborish",
      phoneInquiries: "Telefon so'rovlari",
      phoneInquiriesDesc: "Savollar uchun telefon orqali yoki aloqa formamiz orqali biz bilan bog'laning.",
      businessHours: "Ish vaqti",
      mondayFriday: "Dushanba - Juma: 9:00 - 18:00",
      saturday: "Shanba: 9:00 - 14:00",
      address: "Manzil",
      addressText: "Tokyo, Minato-ku, Toranomon 1-16-4, Urban Toranomon Building 2F",
    },
    RU: {
      title: "Запрос",
      subtitle: "Для запросов, пожалуйста, свяжитесь с нами по телефону или через нашу форму запроса.",
      phone: "03-5510-8300 (основной номер)",
      formTitle: "Введите необходимую информацию и отправьте",
      required: "Убедитесь, что заполнили обязательные поля.",
      inquiryContent: "Содержание запроса",
      selectOption: "выберите",
      companyName: "Название организации",
      companyExample: "Пример: Tokyo Asset Solution",
      name: "Имя Фамилия",
      nameExample: "Пример: Токио Таро",
      phoneNumber: "Номер телефона",
      phoneExample: "Пример: 03-1234-5678",
      emailAddress: "Адрес электронной почты",
      emailExample: "Пример: email@example.jp",
      inquiryMessage: "Содержание запроса",
      privacyAgreement: "Пожалуйста, дайте согласие на нашу политику конфиденциальности перед отправкой информации.",
      submit: "Отправить запрос",
      phoneInquiries: "Телефонные запросы",
      phoneInquiriesDesc: "Для вопросов обращайтесь по телефону или через нашу контактную форму.",
      businessHours: "Рабочие часы",
      mondayFriday: "Понедельник - Пятница: 9:00 - 17:30",
      saturday: "Суббота: закрыто",
      address: "Адрес",
      addressText: "Tokyo, Minato-ku, Toranomon 1-16-4, Urban Toranomon Building 2F",
    },
    EN: {
      title: "Inquiry",
      subtitle: "For inquiries, please contact us by phone or through our inquiry form.",
      phone: "03-5510-8300 (main number)",
      formTitle: "Please enter the required information and send",
      required: "Make sure you have filled in the mandatory fields.",
      inquiryContent: "Inquiry content",
      selectOption: "select",
      companyName: "Organization name",
      companyExample: "Example: Tokyo Asset Solution",
      name: "Full Name",
      nameExample: "Example: Tokyo Taro",
      phoneNumber: "Phone number",
      phoneExample: "Example: 03-1234-5678",
      emailAddress: "Email address",
      emailExample: "Example: email@example.jp",
      inquiryMessage: "Inquiry content",
      privacyAgreement: "Please agree to our privacy policy before sending your information.",
      submit: "Send Inquiry",
      phoneInquiries: "Phone Inquiries",
      phoneInquiriesDesc: "For questions, contact us by phone or through our contact form.",
      businessHours: "Business Hours",
      mondayFriday: "Monday - Friday: 9:00 AM - 5:30 PM",
      saturday: "Saturday: Closed",
      address: "Address",
      addressText: "Tokyo, Minato-ku, Toranomon 1-16-4, Urban Toranomon Building 2F",
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      inquiryType: "",
      companyName: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1C3990] mb-4">{content[language as keyof typeof content].title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content[language as keyof typeof content].subtitle}</p>
        <p className="text-xl font-semibold text-gray-900 mt-4">{content[language as keyof typeof content].phone}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1C3990]">
                {content[language as keyof typeof content].formTitle}
              </CardTitle>
              <CardDescription>{content[language as keyof typeof content].required}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="inquiryType">{content[language as keyof typeof content].inquiryContent} *</Label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="">{content[language as keyof typeof content].selectOption}</option>
                    <option value="general">
                      {language === "UZ" && "Umumiy so'rov"}
                      {language === "RU" && "Общий запрос"}
                      {language === "EN" && "General Inquiry"}
                    </option>
                    <option value="business">
                      {language === "UZ" && "Biznes hamkorligi"}
                      {language === "RU" && "Деловое партнерство"}
                      {language === "EN" && "Business Partnership"}
                    </option>
                    <option value="investment">
                      {language === "UZ" && "Investitsiya"}
                      {language === "RU" && "Инвестиции"}
                      {language === "EN" && "Investment"}
                    </option>
                    <option value="rental">
                      {language === "UZ" && "Ijara"}
                      {language === "RU" && "Аренда"}
                      {language === "EN" && "Rental"}
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">{content[language as keyof typeof content].companyName}</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder={content[language as keyof typeof content].companyExample}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">{content[language as keyof typeof content].name} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content[language as keyof typeof content].nameExample}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{content[language as keyof typeof content].phoneNumber} *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={content[language as keyof typeof content].phoneExample}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{content[language as keyof typeof content].emailAddress} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content[language as keyof typeof content].emailExample}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{content[language as keyof typeof content].inquiryMessage} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] resize-none"
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="privacy" className="mt-1" required />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    {content[language as keyof typeof content].privacyAgreement}
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[#1C3990] hover:bg-[#2d4a9b] h-12 text-base font-semibold">
                  {content[language as keyof typeof content].submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information - Tokyo Company Info */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-[#1C3990]">
                {content[language as keyof typeof content].phoneInquiries}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">{content[language as keyof typeof content].phoneInquiriesDesc}</p>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1C3990] text-white rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {language === "UZ" && "Asosiy raqam"}
                      {language === "RU" && "Основной номер"}
                      {language === "EN" && "Main Number"}
                    </p>
                    <p className="text-gray-600">03-5510-8300</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                    🏠
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {language === "UZ" && "Ko'chmas mulk bo'yicha"}
                      {language === "RU" && "По недвижимости"}
                      {language === "EN" && "Real Estate"}
                    </p>
                    <p className="text-gray-600">03-5510-8301</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">📍</div>
                  <div>
                    <p className="font-semibold text-gray-900">{content[language as keyof typeof content].address}</p>
                    <p className="text-gray-600 text-sm">{content[language as keyof typeof content].addressText}</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-semibold mb-2">
                    {content[language as keyof typeof content].businessHours}:
                  </p>
                  <p className="text-sm text-gray-600">{content[language as keyof typeof content].mondayFriday}</p>
                  <p className="text-sm text-gray-600">{content[language as keyof typeof content].saturday}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {language === "UZ" && "*Yakshanba va bayram kunlari dam olish"}
                    {language === "RU" && "*Воскресенье и праздничные дни - выходные"}
                    {language === "EN" && "*Sunday and holidays - closed"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
