import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function News() {
  const newsItems = [
    {
      date: "2024.01.15",
      category: "プレスリリース",
      title: "新規太陽光発電事業の開始について",
      titleEN: "Launch of New Solar Power Generation Business",
    },
    {
      date: "2024.01.10",
      category: "お知らせ",
      title: "東京都内における大型再開発プロジェクト着工",
      titleEN: "Commencement of Large-scale Redevelopment Project in Tokyo",
    },
    {
      date: "2023.12.20",
      category: "実績",
      title: "年間売上高200億円を達成",
      titleEN: "Annual Sales of 20 Billion Yen Achieved",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ニュース</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            最新の企業情報やプロジェクトの進捗をお知らせします
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-lg text-gray-900 leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">{item.titleEN}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600">
            <Link href="/news">すべてのニュースを見る</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
