import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  const stats = [
    {
      icon: "👥",
      number: "40+",
      label: "Employees",
      description: "Experienced professionals",
    },
    {
      icon: "💰",
      number: "200M",
      label: "Yen Capital",
      description: "Strong financial foundation",
    },
    {
      icon: "📅",
      number: "12+",
      label: "Years Experience",
      description: "Since 2009",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-6">About TO-AS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Established in 2009, TO-AS Co., Ltd. has been at the forefront of real estate innovation, specializing in
            property renovation, redevelopment, and strategic asset management. Our comprehensive approach creates
            sustainable value for investors and communities alike.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#1a365d] mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
