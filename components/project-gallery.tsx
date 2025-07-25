import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ProjectGallery() {
  const projects = [
    // Row 1
    {
      title: "Tokyo Metropolitan Tower",
      location: "Shibuya, Tokyo",
      image: "/placeholder.svg?height=300&width=400",
      category: "Redevelopment",
    },
    {
      title: "Sustainable Housing Complex",
      location: "Yokohama, Kanagawa",
      image: "/placeholder.svg?height=300&width=400",
      category: "Renewable Energy",
    },
    {
      title: "Heritage Building Renovation",
      location: "Kyoto, Kyoto",
      image: "/placeholder.svg?height=300&width=400",
      category: "Renovation",
    },
    // Row 2
    {
      title: "Modern Office Complex",
      location: "Osaka, Osaka",
      image: "/placeholder.svg?height=300&width=400",
      category: "Holdings",
    },
    {
      title: "Luxury Residential Tower",
      location: "Roppongi, Tokyo",
      image: "/placeholder.svg?height=300&width=400",
      category: "Redevelopment",
    },
    {
      title: "Green Energy Campus",
      location: "Nagoya, Aichi",
      image: "/placeholder.svg?height=300&width=400",
      category: "Renewable Energy",
    },
    // Row 3
    {
      title: "International Business Hub",
      location: "Manila, Philippines",
      image: "/placeholder.svg?height=300&width=400",
      category: "Overseas",
    },
    {
      title: "Smart City Development",
      location: "Fukuoka, Fukuoka",
      image: "/placeholder.svg?height=300&width=400",
      category: "Consulting",
    },
    {
      title: "Waterfront Mixed-Use",
      location: "Kobe, Hyogo",
      image: "/placeholder.svg?height=300&width=400",
      category: "Holdings",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of successful projects that showcase our commitment to innovation, quality, and
            sustainable development across diverse markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <span className="bg-[#1e3a8a] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{project.title}</h3>
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
