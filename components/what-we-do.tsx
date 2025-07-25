import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhatWeDo() {
  const services = [
    {
      icon: "🏢",
      title: "収益不動産再生事業",
      titleEN: "Property Renovation",
      description: "既存建物の耐震改修と機能向上により、持続可能な収益性を実現します。",
      descriptionEN: "Earthquake-resistant renovation of existing buildings with enhanced functionality.",
    },
    {
      icon: "🏗️",
      title: "再開発事業",
      titleEN: "Redevelopment",
      description: "地域の価値向上を目指した総合的な再開発プロジェクトを推進します。",
      descriptionEN: "Comprehensive redevelopment projects aimed at enhancing regional value.",
    },
    {
      icon: "📈",
      title: "アセットマネジメント",
      titleEN: "Asset Management",
      description: "不動産ポートフォリオの最適化により、安定した収益を創出します。",
      descriptionEN: "Optimizing real estate portfolios for stable and sustainable returns.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">事業内容</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            持続可能な価値創造を通じて、社会に貢献する不動産ソリューションを提供します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-gray-900 font-bold mb-2">{service.title}</CardTitle>
                <p className="text-sm text-blue-600 font-medium">{service.titleEN}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed text-center mb-2">
                  {service.description}
                </CardDescription>
                <p className="text-sm text-gray-500 text-center">{service.descriptionEN}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/business">すべての事業を見る</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
