"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";

type Slide = { title: string; subtitle: string };

export default function Hero() {
  const { t, i18n } = useTranslation();

  // JSON ichidagi massivni olish (slides):
  const slides = t("Hero.slides", { returnObjects: true }) as Slide[];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const INTERVAL_MS = 3000;

  // Avtoslayd
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused && slides.length > 0) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  useEffect(() => {
    setIndex(0);
  }, [i18n.language, slides.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-[200px] sm:pt-[220px] lg:pt-0 ">
        <img
          src="/nest_one.png"
          alt="Background"
          className="
      w-full 
      transition-all duration-700

      /* MOBILE & TABLET */
      h-[calc(100vh-200px)]
      sm:h-[calc(100vh-220px)]
      object-cover 
      object-top
      mt-[100px]
      relative 
      z-0

      /* DESKTOP */
       lg:mt-0
      lg:h-full
      lg:inset-0
      lg:object-contain
      lg:object-center
    "
        />

        <div
          className="
      absolute top-16
      left-1/2 -translate-x-1/2
      w-full max-w-[520px] px-4 mt-[100px]
      text-center
      md:left-0 md:translate-x-0 md:max-w-2xl md:px-4
    "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* viewport */}
          <div className="overflow-hidden mt-[-128px] sm:mt-[-80px]">
            {/* track */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="min-w-full">
                  <h1 className="text-3xl md:text-[40px] sm:text-[32px] lg:text-[40px] font-bold mb-6 leading-tight text-[#173758]">
                    {s.title}
                  </h1>
                  <p
                    className="
                text-base sm:text-lg md:text-[20px] mb-10 text-gray-600 leading-relaxed
                mx-auto md:ml-[80px] md:mx-0
                max-w-[463px]
              "
                  >
                    {s.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KOMPANIYA HAQIDA */}
      <section className="relative bg-center">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2C52] mt-[48px] md:mt-[82px] mb-[32px] md:mb-[82px] text-center">
            {t("Hero.aboutTitle")}
          </h2>

          <div className="flex flex-col items-center gap-8 lg:gap-[154px] lg:flex-row lg:items-start lg:justify-center">
            {/* Image */}
            <div className="rounded-[3%] overflow-hidden max-w-[320px] sm:max-w-[420px] lg:max-w-none">
              <img src="/svg/herorasm.svg" alt="Hero Image" />
            </div>

            {/* Text */}
            <div className="w-full px-4 sm:px-6 lg:px-0 lg:w-[644px] lg:mt-[84px] text-slate-700 text-base sm:text-lg leading-7 text-center lg:text-left">
              <Trans
                i18nKey="Hero.aboutBody"
                components={[<br key="br1" />, <span key="span1" />]}
              />
            </div>
          </div>

          <Link href="/company">
            <div className="mx-auto border-[3px] border-[#1C3990] text-[#1C3990] rounded-md text-center font-semibold w-[280px] sm:w-[330px] h-[44px] flex items-center justify-center mt-[32px] lg:mt-[90px] cursor-pointer">
              {t("Hero.more")}
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
