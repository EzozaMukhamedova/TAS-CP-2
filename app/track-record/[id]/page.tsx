"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [language] = useState("UZ")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const content = {
    UZ: {
      backToProjects: "Loyihalarga qaytish",
      projectDetails: "Loyiha Tafsilotlari",
      projectType: "Loyiha turi",
      location: "Joylashuv",
      completedYear: "Tugallangan yil",
      profitMargin: "Foyda ko'rsatkichi",
      description: "Tavsif",
      gallery: "Foto Galereya",
      results: "Natijalar",
      nextImage: "Keyingi",
      prevImage: "Oldingi",
    },
    RU: {
      backToProjects: "Вернуться к проектам",
      projectDetails: "Детали Проекта",
      projectType: "Тип проекта",
      location: "Местоположение",
      completedYear: "Год завершения",
      profitMargin: "Показатель прибыли",
      description: "Описание",
      gallery: "Фото Галерея",
      results: "Результаты",
      nextImage: "Следующий",
      prevImage: "Предыдущий",
    },
    EN: {
      backToProjects: "Back to Projects",
      projectDetails: "Project Details",
      projectType: "Project Type",
      location: "Location",
      completedYear: "Completed Year",
      profitMargin: "Profit Margin",
      description: "Description",
      gallery: "Photo Gallery",
      results: "Results",
      nextImage: "Next",
      prevImage: "Previous",
    },
  }

  // Mock data - in real app, this would come from API
  const projectData = {
    1: {
      titleUZ: "Azabudai Hills Majmuasi",
      titleRU: "Комплекс Азабудай Хиллс",
      titleEN: "Azabudai Hills Complex",
      locationUZ: "Tokyo, Minato tumani, Azabudai 1-2-3",
      locationRU: "Токио, район Минато, Азабудай 1-2-3",
      locationEN: "Tokyo, Minato-ku, Azabudai 1-2-3",
      year: "2023",
      typeUZ: "Qayta rivojlantirish",
      typeRU: "Реконструкция",
      typeEN: "Redevelopment",
      profit: "+25%",
      descriptionUZ:
        "Azabudai Hills majmuasi Tokyo'ning markazida joylashgan zamonaviy ko'p funksiyali rivojlantirish loyihasi hisoblanadi. Ushbu loyiha 330 metr balandlikdagi asosiy minora, turar joy binolari, ofis maydanlari, tijorat ob'ektlari va madaniy markazlarni o'z ichiga oladi. Loyiha barqaror rivojlanish tamoyillariga asoslanib qurilgan bo'lib, LEED Gold sertifikatiga ega. Binolar energiya tejamkor texnologiyalar, yashil tom sistemlari va qayta tiklanadigan energiya manbalaridan foydalanadi.",
      descriptionRU:
        "Комплекс Азабудай Хиллс представляет собой современный многофункциональный проект развития, расположенный в центре Токио. Этот проект включает в себя главную башню высотой 330 метров, жилые здания, офисные помещения, коммерческие объекты и культурные центры. Проект построен на принципах устойчивого развития и имеет сертификат LEED Gold. Здания используют энергоэффективные технологии, системы зеленых крыш и возобновляемые источники энергии.",
      descriptionEN:
        "Azabudai Hills complex is a modern mixed-use development project located in central Tokyo. This project includes a main tower of 330 meters height, residential buildings, office spaces, commercial facilities, and cultural centers. The project is built on sustainable development principles and has LEED Gold certification. Buildings use energy-efficient technologies, green roof systems, and renewable energy sources.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      resultsUZ: ["25% foyda o'sishi", "100% ijara to'ldirilishi", "LEED Gold sertifikati", "30% energiya tejash"],
      resultsRU: ["25% рост прибыли", "100% заполняемость аренды", "Сертификат LEED Gold", "30% экономия энергии"],
      resultsEN: ["25% profit growth", "100% rental occupancy", "LEED Gold certification", "30% energy savings"],
    },
    // Add more projects as needed
  }

  const project = projectData[params.id as keyof typeof projectData]

  if (!project) {
    return <div>Loyiha topilmadi</div>
  }

  const getTitle = () => {
    switch (language) {
      case "RU":
        return project.titleRU
      case "EN":
        return project.titleEN
      default:
        return project.titleUZ
    }
  }

  const getLocation = () => {
    switch (language) {
      case "RU":
        return project.locationRU
      case "EN":
        return project.locationEN
      default:
        return project.locationUZ
    }
  }

  const getType = () => {
    switch (language) {
      case "RU":
        return project.typeRU
      case "EN":
        return project.typeEN
      default:
        return project.typeUZ
    }
  }

  const getDescription = () => {
    switch (language) {
      case "RU":
        return project.descriptionRU
      case "EN":
        return project.descriptionEN
      default:
        return project.descriptionUZ
    }
  }

  const getResults = () => {
    switch (language) {
      case "RU":
        return project.resultsRU
      case "EN":
        return project.resultsEN
      default:
        return project.resultsUZ
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/track-record">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToProjects}
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{getTitle()}</h1>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-semibold text-gray-700">{content[language as keyof typeof content].location}:</span>
            <p className="text-gray-600">{getLocation()}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">
              {content[language as keyof typeof content].projectType}:
            </span>
            <p className="text-gray-600">{getType()}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">
              {content[language as keyof typeof content].completedYear}:
            </span>
            <p className="text-gray-600">{project.year}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">
              {content[language as keyof typeof content].profitMargin}:
            </span>
            <p className="text-green-600 font-bold">{project.profit}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{content[language as keyof typeof content].gallery}</h2>
          <Card>
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={getTitle()}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <Button onClick={prevImage} variant="outline" size="sm" className="bg-white/80 hover:bg-white">
                    {content[language as keyof typeof content].prevImage}
                  </Button>
                  <Button onClick={nextImage} variant="outline" size="sm" className="bg-white/80 hover:bg-white">
                    {content[language as keyof typeof content].nextImage}
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 p-4">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {content[language as keyof typeof content].description}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{getDescription()}</p>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {content[language as keyof typeof content].results}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {getResults().map((result, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
