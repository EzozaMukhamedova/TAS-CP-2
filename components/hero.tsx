// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Hero() {
//   const [language] = useState("UZ"); // Default to Uzbek

//   const content = {
//     UZ: {
//       title: "Odamlardan shaharlarga, jamiyatga va kelajakga",
//       subtitle:
//         "Ko'chmas mulk boshqaruvi va texnik xizmat sohasida professional yechimlar",
//     },
//     RU: {
//       title: "От людей к городам, обществу и будущему",
//       subtitle:
//         "Профессиональные решения в сфере управления недвижимостью и технического обслуживания",
//     },
//     EN: {
//       title: "From People to Cities, Society and the Future",
//       subtitle:
//         "Professional solutions in property management and technical services",
//     },
//   };

//   return (
//     <>
//       <section className="relative h-[1000px]  bg-[url('/images/hero.png')] bg-contain bg-center bg-no-repeat overflow-hidden">
//         <div className="absolute top-16  max-w-2xl text-left px-4 mt-[100px]">
//           <h1 className="text-4xl md:text-[40px] text-center font-bold mb-6 leading-tight text-[#173758]">
//             {content[language as keyof typeof content].title}
//           </h1>

//           <p className="text-xl md:text-[20px] mb-10  text-center text-gray-600 leading-relaxed w-[463px] ml-[70px] ">
//             {content[language as keyof typeof content].subtitle}
//           </p>
//         </div>
//       </section>

//       {/* Kompaniya haqida */}
//       <section className="relative  flex items-center justify-center bg-center ">
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0A2C52]  mt-[82px] mb-[82px] text-center">
//             {" "}
//             Kompaniya haqida qisqacha
//           </h2>

//           <div className="flex gap-[154px]">
//             <div className=" rounded-[3%] overflow-hidden">
//               <img src="/svg/herorasm.svg" alt="Hero Image" />
//             </div>

//             <div className="w-[644px] mt-[84px]">
//               Tokyo Asset Solution 2009 yilda tashkil etilgan ko'chmas mulk va
//               investitsiya sohasida faoliyat yurituvchi kompaniya hisoblanadi.
//               Biz qayta qurish, renovatsiya, uzoq muddatli egalik va yashil
//               energiya loyihalarida ixtisoslashganmiz. <br /> <br />
//               <span>
//                 Bizning maqsadimiz barqaror rivojlanish tamoyillari asosida
//                 innovatsion yechimlar yaratish va mijozlarimiz uchun uzoq
//                 muddatli qiymat yaratishdir.
//               </span>
//             </div>
//           </div>
//           <Link href="/company">
//             <div className="mx-auto border-[3px] border-[#1C3990] text-[#1C3990] rounded-md text-center font-semibold w-[330px] h-[44px] flex items-center justify-center mt-[90px] cursor-pointer">
//               Batafsil ma'lumot
//             </div>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // agar kerak bo‘lsa

export default function Hero() {
  const [language] = useState<"UZ" | "RU" | "EN">("UZ");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const INTERVAL_MS = 3000;

  const slidesByLang = {
    UZ: [
      {
        title: "Odamlardan shaharlarga, jamiyatga va kelajakga",
        subtitle:
          "Ko'chmas mulk boshqaruvi va texnik xizmat sohasida professional yechimlar",
      },
      {
        title: "Barqaror shaharlar uchun aqlli infratuzilma",
        subtitle:
          "Mulk qiymatini oshiradigan va xarajatlarni kamaytiradigan yechimlar",
      },
      {
        title: "Investitsiya, boshqaruv va texnik xizmat — barchasi bir joyda",
        subtitle: "Ishonchli boshqaruv va samarali operatsiyalar",
      },
    ],
    RU: [
      {
        title: "От людей к городам, обществу и будущему",
        subtitle:
          "Профессиональные решения в сфере управления недвижимостью и техобслуживания",
      },
      {
        title: "Умная инфраструктура для устойчивых городов",
        subtitle: "Решения, повышающие стоимость активов и снижающие расходы",
      },
      {
        title: "Инвестиции, управление и сервис — в одном месте",
        subtitle: "Надёжное управление и эффективные операции",
      },
    ],
    EN: [
      {
        title: "From People to Cities, Society and the Future",
        subtitle:
          "Professional solutions in property management and technical services",
      },
      {
        title: "Smart infrastructure for sustainable cities",
        subtitle: "Solutions that raise asset value and lower costs",
      },
      {
        title: "Investment, management & maintenance — all-in-one",
        subtitle: "Trusted management with efficient operations",
      },
    ],
  };

  const slides = useMemo(() => slidesByLang[language], [language]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused) setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  useEffect(() => {
    setIndex(0);
  }, [language]);

  return (
    <>
      <section className="relative h-[1000px] bg-[url('/images/hero.png')] bg-contain bg-center bg-no-repeat overflow-hidden">
        {/* MATN AVVALGI JOYLASHUVDA */}
        <div
          className="absolute top-16 left-0 max-w-2xl text-left px-4 mt-[100px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* viewport */}
          <div className="overflow-hidden">
            {/* track */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="min-w-full">
                  <h1 className="text-4xl md:text-[40px] text-center font-bold mb-6 leading-tight text-[#173758]">
                    {s.title}
                  </h1>
                  <p className="text-xl md:text-[20px] mb-10 text-center text-gray-600 leading-relaxed w-[463px] ml-[70px]">
                    {s.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* nuqtalar (matn ostida, avvalgi blok kengligida) */}
          <div className="mt-1 flex gap-2 justify-center w-[463px] ml-[70px]">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                // nuqtalar
                className={`h-2 rounded-full transition-all ${
                  index === i ? "w-6 bg-[#173758]" : "w-2 bg-[#173758]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kompaniya haqida */}
      <section className="relative  flex items-center justify-center bg-center ">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2C52]  mt-[82px] mb-[82px] text-center">
            Kompaniya haqida qisqacha
          </h2>

          <div className="flex gap-[154px]">
            <div className="rounded-[3%] overflow-hidden">
              <img src="/svg/herorasm.svg" alt="Hero Image" />
            </div>

            <div className="w-[644px] mt-[84px]">
              Tokyo Asset Solution 2009 yilda tashkil etilgan ko'chmas mulk va
              investitsiya sohasida faoliyat yurituvchi kompaniya hisoblanadi.
              Biz qayta qurish, renovatsiya, uzoq muddatli egalik va yashil
              energiya loyihalarida ixtisoslashganmiz.
              <br />
              <br />
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
