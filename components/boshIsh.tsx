"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type NewsItem = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  year: number;
};

export default function NewsPreview() {
  const { t } = useTranslation();

  const title = t("News.title");
  const subtitle = t("News.subtitle");
  const readMore = t("News.readMore");
  const viewAll = t("News.viewAll");
  const addressLabel = t("News.addressLabel");
  const yearLabel = t("News.yearLabel");

  // JSONdan massivni to'g'ridan-to'g'ri olish
  const news = t("News.items", { returnObjects: true }) as NewsItem[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2C52] mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card
              key={item.id}
              className="shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#31519F] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="pt-4 px-6 pb-6 cursor-pointer">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-blue-600 mb-1">
                  <span className="font-medium text-[#7E9ACF]">
                    {addressLabel}
                  </span>{" "}
                  <span className="text-[#31519F]">{item.excerpt}</span>
                </p>

                <p className="text-sm text-[#7E9ACF] mb-4">
                  <span className="font-medium">{yearLabel}</span>{" "}
                  <span className="text-[#31519F]">{item.year}</span>
                </p>

                {/* Read More Button */}
                <Button
                  asChild
                  className="w-full bg-[#31519F] text-white text-sm font-semibold shadow-md 
                    hover:bg-[#233c7a] hover:shadow-lg 
                    transition-all duration-300 ease-in-out transform 
                    hover:-translate-y-[1px] hover:scale-[1.02] 
                    rounded-md"
                >
                  <Link href={`/news/${item.id}`}>{readMore}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#31519F] hover:bg-[#233c7a] text-white font-semibold shadow-md cursor-pointer
              hover:shadow-lg transition-all duration-300 ease-in-out 
              transform hover:scale-[1.02] rounded-md"
          >
            <Link href="/news">{viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
