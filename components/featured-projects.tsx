import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Azabudai Development",
      location: "Azabudai, Tokyo",
      image: "/placeholder.svg?height=300&width=400",
      category: "Redevelopment",
    },
    {
      title: "Kyodo Residential Complex",
      location: "Kyodo, Tokyo",
      image: "/placeholder.svg?height=300&width=400",
      category: "Property Renovation",
    },
    {
      title: "Chitose Solar Station",
      location: "Chitose, Hokkaido",
      image: "/placeholder.svg?height=300&width=400",
      category: "Renewable Energy",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C3990] mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest successful projects that showcase our commitment to innovation and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1C3990] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1C3990] mb-2">{project.title}</h3>
                <p className="text-gray-600 flex items-center">
                  <span className="mr-2">📍</span>
                  {project.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
