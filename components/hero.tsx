"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const [language] = useState("UZ"); // Default to Uzbek

  const content = {
    UZ: {
      title: "Odamlardan shaharlarga, jamiyatga va kelajakga",
      subtitle:
        "Ko'chmas mulk boshqaruvi va texnik xizmat sohasida professional yechimlar",
    },
    RU: {
      title: "От людей к городам, обществу и будущему",
      subtitle:
        "Профессиональные решения в сфере управления недвижимостью и технического обслуживания",
    },
    EN: {
      title: "From People to Cities, Society and the Future",
      subtitle:
        "Professional solutions in property management and technical services",
    },
  };

  return (
    <>
      <section className="relative min-h-screen mt-[100px] bg-[url('/images/hero.png')] bg-cover bg-center overflow-hidden">
        <div className="absolute top-16 left-[86px] max-w-2xl text-left px-4 mt-[150px]">
          <h1 className="text-4xl md:text-[45px] text-center font-bold mb-6 leading-tight text-gray-900">
            {content[language as keyof typeof content].title}
          </h1>

          <p className="text-xl md:text-[22px] mb-10  text-center text-gray-600 leading-relaxed w-[463px] ml-[70px]">
            {content[language as keyof typeof content].subtitle}
          </p>
        </div>
      </section>

      {/* Kompaniya haqida */}
      <section className="relative  flex items-center justify-center bg-center border-red-400 border-2">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2C52]  mt-[82px] mb-[82px] text-center">
            {" "}
            Kompaniya haqida qisqacha
          </h2>

          <div className="flex gap-[154px]">
            <div className="border-2 border-blue-400 rounded-[3%] overflow-hidden">
              <img src="/svg/herorasm.svg" alt="Hero Image" />
            </div>

            <div className="w-[644px] mt-[84px]">
              Tokyo Asset Solution 2009 yilda tashkil etilgan ko'chmas mulk va
              investitsiya sohasida faoliyat yurituvchi kompaniya hisoblanadi.
              Biz qayta qurish, renovatsiya, uzoq muddatli egalik va yashil
              energiya loyihalarida ixtisoslashganmiz. <br /> <br />
              <span>
                Bizning maqsadimiz barqaror rivojlanish tamoyillari asosida
                innovatsion yechimlar yaratish va mijozlarimiz uchun uzoq
                muddatli qiymat yaratishdir.
              </span>
            </div>
          </div>
          <Link href="/company">
            <div className="mx-auto border-[3px] border-[#1C3990] text-[#1C3990] rounded-md text-center font-semibold w-[330px] h-[44px] flex items-center justify-center mt-[90px] cursor-pointer">
              Batafsil ma'lumot
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
