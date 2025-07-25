import { Card, CardContent } from "@/components/ui/card"

export default function CompanyStats() {
  const stats = [
    {
      icon: "📅",
      number: "2009",
      label: "Founded",
      description: "Established January 30",
    },
    {
      icon: "👥",
      number: "40+",
      label: "Employees",
      description: "Experienced professionals",
    },
    {
      icon: "💰",
      number: "¥200M",
      label: "Capital",
      description: "Strong financial foundation",
    },
    {
      icon: "🌏",
      number: "3",
      label: "Countries",
      description: "Japan, Philippines, Cambodia",
    },
  ]

  return (
    <section className="py-20 bg-[#1C3990] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Company</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Building trust and delivering results since 2009
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 text-center p-8 hover:bg-white/20 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
