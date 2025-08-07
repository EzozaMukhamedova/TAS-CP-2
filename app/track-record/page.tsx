// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import Link from "next/link"

// export default function TrackRecordPage() {
//   const [language] = useState("UZ")
//   const [selectedCategory, setSelectedCategory] = useState("all")

//   const content = {
//     UZ: {
//       title: "Loyiha Natijalari",
//       subtitle: "Muvaffaqiyatli amalga oshirilgan barcha loyihalarimiz",
//       viewDetails: "Batafsil ko'rish",
//       allProjects: "Barcha loyihalar",
//       filterBy: "Kategoriya bo'yicha filtrlash",
//       year: "Yil",
//       profit: "Foyda",
//       location: "Joylashuv",
//     },
//     RU: {
//       title: "Результаты Проектов",
//       subtitle: "Все наши успешно реализованные проекты",
//       viewDetails: "Подробнее",
//       allProjects: "Все проекты",
//       filterBy: "Фильтр по категории",
//       year: "Год",
//       profit: "Прибыль",
//       location: "Местоположение",
//     },
//     EN: {
//       title: "Project Results",
//       subtitle: "All our successfully completed projects",
//       viewDetails: "View Details",
//       allProjects: "All Projects",
//       filterBy: "Filter by Category",
//       year: "Year",
//       profit: "Profit",
//       location: "Location",
//     },
//   }

//   const categories = [
//     { id: "all", labelUZ: "Barchasi", labelRU: "Все", labelEN: "All" },
//     { id: "redevelopment", labelUZ: "Qayta rivojlantirish", labelRU: "Реконструкция", labelEN: "Redevelopment" },
//     { id: "renovation", labelUZ: "Ta'mirlash", labelRU: "Реновация", labelEN: "Renovation" },
//     { id: "energy", labelUZ: "Energiya", labelRU: "Энергетика", labelEN: "Energy" },
//     { id: "commercial", labelUZ: "Tijorat", labelRU: "Коммерческий", labelEN: "Commercial" },
//   ]

//   const projects = [
//     {
//       id: 1,
//       titleUZ: "Azabudai Hills Majmuasi",
//       titleRU: "Комплекс Азабудай Хиллс",
//       titleEN: "Azabudai Hills Complex",
//       locationUZ: "Tokyo, Minato tumani",
//       locationRU: "Токио, район Минато",
//       locationEN: "Minato-ku, Tokyo",
//       year: "2023",
//       categoryUZ: "Qayta rivojlantirish",
//       categoryRU: "Реконструкция",
//       categoryEN: "Redevelopment",
//       category: "redevelopment",
//       image: "/placeholder.svg?height=300&width=400",
//       profit: "+25%",
//       investment: "¥30B",
//       descriptionUZ: "Tokyo'ning markazida zamonaviy ko'p funksiyali rivojlantirish loyihasi",
//       descriptionRU: "Современный многофункциональный проект развития в центре Токио",
//       descriptionEN: "Modern mixed-use development project in central Tokyo",
//     },
//     {
//       id: 2,
//       titleUZ: "Kyoto An'anaviy Binolar",
//       titleRU: "Традиционные здания Киото",
//       titleEN: "Kyoto Traditional Buildings",
//       locationUZ: "Kyoto shahri",
//       locationRU: "Город Киото",
//       locationEN: "Kyoto City",
//       year: "2023",
//       categoryUZ: "Ta'mirlash",
//       categoryRU: "Реновация",
//       categoryEN: "Renovation",
//       category: "renovation",
//       image: "/placeholder.svg?height=300&width=400",
//       profit: "+18%",
//       investment: "¥5B",
//       descriptionUZ: "Tarixiy binolarni zamonaviy standartlarga moslash",
//       descriptionRU: "Адаптация исторических зданий к современным стандартам",
//       descriptionEN: "Adapting historical buildings to modern standards",
//     },
//     {
//       id: 3,
//       titleUZ: "Chitose Quyosh Stansiyasi",
//       titleRU: "Солнечная станция Читосе",
//       titleEN: "Chitose Solar Station",
//       locationUZ: "Hokkaido",
//       locationRU: "Хоккайдо",
//       locationEN: "Hokkaido",
//       year: "2022",
//       categoryUZ: "Energiya",
//       categoryRU: "Энергетика",
//       categoryEN: "Energy",
//       category: "energy",
//       image: "/placeholder.svg?height=300&width=400",
//       profit: "+30%",
//       investment: "¥8B",
//       descriptionUZ: "50MW quvvatli quyosh elektr stansiyasi",
//       descriptionRU: "Солнечная электростанция мощностью 50МВт",
//       descriptionEN: "50MW solar power station",
//     },
//     {
//       id: 4,
//       titleUZ: "Osaka Biznes Markazi",
//       titleRU: "Бизнес-центр Осака",
//       titleEN: "Osaka Business Center",
//       locationUZ: "Osaka shahri",
//       locationRU: "Город Осака",
//       locationEN: "Osaka City",
//       year: "2022",
//       categoryUZ: "Tijorat",
//       categoryRU: "Коммерческий",
//       categoryEN: "Commercial",
//       category: "commercial",
//       image: "/placeholder.svg?height=300&width=400",
//       profit: "+22%",
//       investment: "¥12B",
//       descriptionUZ: "Zamonaviy A-sinf ofis majmuasi",
//       descriptionRU: "Современный офисный комплекс класса А",
//       descriptionEN: "Modern Class A office complex",
//     },
//     {
//       id: 5,
//       titleUZ: "Yokohama Suv Bo'yi",
//       titleRU: "Набережная Йокогама",
//       titleEN: "Yokohama Waterfront",
//       locationUZ: "Kanagava, Yokohama",
//       locationRU: "Канагава, Йокогама",
//       locationEN: "Kanagawa, Yokohama",
//       year: "2021",
//       categoryUZ: "Qayta rivojlantirish",
//       categoryRU: "Реконструкция",
//       categoryEN: "Redevelopment",
//       category: "redevelopment",
//       image: "/placeholder.svg?height=300&width=400",
//       profit: "+20%",
//       investment: "¥15B",
//       descriptionUZ: "Suv bo'yidagi aralash rivojlantirish loyihasi",
//       descriptionRU: "Проект смешанной застройки на набережной",
//       descriptionEN: "Waterfront mixed-use development project",
//     },
//     {
//       id: 6,
//       titleUZ: "Fukushima Energiya Parki",
//       titleRU: "Энергетический парк Фукусима",
//       titleEN: "Fukushima Energy Park",
//       locationUZ: "Fukushima viloyati",
//       locationRU: "Префектура Фукусима",
//       locationEN: "Fukushima Prefecture",
//       year: "2021",
//       categoryUZ: "Energiya",
//       categoryRU: "Энергетика",
//       categoryEN: "Energy",
//       category: "energy",
//       image: "/placeholder.svg?height=300&width=400",
//       profit: "+28%",
//       investment: "¥10B",
//       descriptionUZ: "Qayta tiklanadigan energiya majmuasi",
//       descriptionRU: "Комплекс возобновляемой энергии",
//       descriptionEN: "Renewable energy complex",
//     },
//   ]

//   const filteredProjects =
//     selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

//   const getTitle = (project: any) => {
//     switch (language) {
//       case "RU":
//         return project.titleRU
//       case "EN":
//         return project.titleEN
//       default:
//         return project.titleUZ
//     }
//   }

//   const getLocation = (project: any) => {
//     switch (language) {
//       case "RU":
//         return project.locationRU
//       case "EN":
//         return project.locationEN
//       default:
//         return project.locationUZ
//     }
//   }

//   const getCategory = (project: any) => {
//     switch (language) {
//       case "RU":
//         return project.categoryRU
//       case "EN":
//         return project.categoryEN
//       default:
//         return project.categoryUZ
//     }
//   }

//   const getDescription = (project: any) => {
//     switch (language) {
//       case "RU":
//         return project.descriptionRU
//       case "EN":
//         return project.descriptionEN
//       default:
//         return project.descriptionUZ
//     }
//   }

//   const getCategoryLabel = (category: any) => {
//     switch (language) {
//       case "RU":
//         return category.labelRU
//       case "EN":
//         return category.labelEN
//       default:
//         return category.labelUZ
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">{content[language as keyof typeof content].title}</h1>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content[language as keyof typeof content].subtitle}</p>
//       </div>

//       {/* Filter Buttons */}
//       <div className="mb-8">
//         <p className="text-sm font-medium text-gray-700 mb-4">{content[language as keyof typeof content].filterBy}:</p>
//         <div className="flex flex-wrap gap-2">
//           {categories.map((category) => (
//             <Button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               variant={selectedCategory === category.id ? "default" : "outline"}
//               className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
//             >
//               {getCategoryLabel(category)}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProjects.map((project) => (
//           <Card
//             key={project.id}
//             className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg cursor-pointer"
//           >
//             <Link href={`/track-record/${project.id}`}>
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={project.image || "/placeholder.svg"}
//                   alt={getTitle(project)}
//                   fill
//                   className="object-cover transition-transform duration-300 hover:scale-110"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {getCategory(project)}
//                   </span>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">{project.profit}</span>
//                 </div>
//                 <div className="absolute bottom-4 right-4">
//                   <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">{project.investment}</span>
//                 </div>
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{getTitle(project)}</h3>
//                 <p className="text-gray-600 flex items-center mb-2">
//                   <span className="mr-2">📍</span>
//                   {getLocation(project)}
//                 </p>
//                 <p className="text-gray-500 text-sm mb-3">
//                   {content[language as keyof typeof content].year}: {project.year}
//                 </p>
//                 <p className="text-gray-700 text-sm mb-4 line-clamp-2">{getDescription(project)}</p>
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700">
//                   {content[language as keyof typeof content].viewDetails}
//                 </Button>
//               </CardContent>
//             </Link>
//           </Card>
//         ))}
//       </div>

//       {filteredProjects.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-gray-500 text-lg">Bu kategoriyada loyihalar topilmadi.</p>
//         </div>
//       )}
//     </div>
//   )
// }
