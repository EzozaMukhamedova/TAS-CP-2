import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ESGPage() {
  const esgInitiatives = [
    {
      category: "Environment",
      icon: "🌱",
      title: "環境への取り組み",
      titleEN: "Environmental Initiatives",
      items: [
        "再生可能エネルギー事業の推進",
        "建物のエネルギー効率向上",
        "カーボンニュートラルの実現",
        "持続可能な建材の使用",
      ],
    },
    {
      category: "Social",
      icon: "👥",
      title: "社会への取り組み",
      titleEN: "Social Initiatives",
      items: ["地域コミュニティとの連携", "働きやすい職場環境の整備", "ダイバーシティの推進", "社会貢献活動の実施"],
    },
    {
      category: "Governance",
      icon: "⚖️",
      title: "ガバナンスへの取り組み",
      titleEN: "Governance Initiatives",
      items: ["透明性の高い経営", "コンプライアンスの徹底", "リスク管理体制の強化", "ステークホルダーとの対話"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ESG</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          持続可能な社会の実現に向けて、環境・社会・ガバナンスの観点から責任ある経営を推進しています
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {esgInitiatives.map((initiative, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">{initiative.icon}</div>
              <CardTitle className="text-2xl text-gray-900">{initiative.title}</CardTitle>
              <CardDescription className="text-blue-600 font-medium">{initiative.titleEN}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {initiative.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 text-center">2030年目標</CardTitle>
          <CardDescription className="text-center">Our 2030 Goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">再生可能エネルギー利用率</p>
              <p className="text-sm text-gray-500">Renewable Energy Usage</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-gray-700">CO2排出量削減</p>
              <p className="text-sm text-gray-500">CO2 Emission Reduction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
              <p className="text-gray-700">女性管理職比率</p>
              <p className="text-sm text-gray-500">Female Management Ratio</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
