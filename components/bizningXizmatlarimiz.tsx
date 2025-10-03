"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ServiceItem = {
  iconImage: string;
  title: string;
  description: string;
};

export default function ServicesOverview() {
  const { t } = useTranslation();

  const title = t("Services.title");
  const subtitle = t("Services.subtitle");
  const viewAll = t("Services.viewAll");

  // JSON'dan massivni to'g'ridan-to'g'ri olamiz
  const services = t("Services.items", {
    returnObjects: true,
  }) as ServiceItem[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#173758] mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={service.iconImage}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-base text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#31519F] hover:bg-[#233c7a] text-white font-semibold shadow-md cursor-pointer
              hover:shadow-lg transition-all duration-300 ease-in-out 
              transform hover:scale-[1.02] rounded-md w-[246px]"
          >
            <Link href="/business">{viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
