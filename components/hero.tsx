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

  // Til o'zgarsa yoki slaydlar uzunligi o'zgarsa, boshidan boshlaymiz
  useEffect(() => {
    setIndex(0);
  }, [i18n.language, slides.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[1000px] bg-[url('/images/hero.png')] bg-contain bg-center bg-no-repeat overflow-hidden">
        {/* swiper container:
            - mobile/tablet: markazda
            - desktop: chap tomonda */}
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
          <div className="overflow-hidden">
            {/* track */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="min-w-full">
                  <h1 className="text-3xl md:text-[40px] font-bold mb-6 leading-tight text-[#173758]">
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

          {/* dots:
              - mobile/tablet: markazda
              - desktop: avvalgi joy (463px) */}
          <div
            className="
              mt-1 flex gap-2 justify-center mx-auto
              md:justify-start
              w-full md:w-[463px]
            "
          >
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  index === i ? "w-6 bg-[#173758]" : "w-2 bg-[#173758]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* KOMPANIYA HAQIDA */}
      <section className="relative bg-center">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2C52] mt-[48px] md:mt-[82px] mb-[32px] md:mb-[82px] text-center">
            {t("Hero.aboutTitle")}
          </h2>

          {/* mobile/tablet: column (rasm -> matn)
              desktop: ikki ustun */}
          <div className="flex flex-col items-center gap-8 md:gap-[154px] md:flex-row md:items-start md:justify-center">
            {/* Image */}
            <div className="rounded-[3%] overflow-hidden max-w-[320px] sm:max-w-[420px] md:max-w-none">
              <img src="/svg/herorasm.svg" alt="Hero Image" />
            </div>

            {/* Text (bu qismni ham xohlasangiz i18n ga ko'chirishingiz mumkin) */}
            <div className="w-full px-4 sm:px-6 md:px-0 md:w-[644px] md:mt-[84px] text-slate-700 text-base sm:text-lg leading-7 text-center md:text-left">
              {/* Tokyo Asset Solution 2009 yilda tashkil etilgan ko&apos;chmas mulk
              va investitsiya sohasida faoliyat yurituvchi kompaniya
              hisoblanadi. Biz qayta qurish, renovatsiya, uzoq muddatli egalik
              va yashil energiya loyihalarida ixtisoslashganmiz.
              <br />
              <br />
              <span>
                Bizning maqsadimiz barqaror rivojlanish tamoyillari asosida
                innovatsion yechimlar yaratish va mijozlarimiz uchun uzoq
                muddatli qiymat yaratishdir.
              </span> */}
              <Trans
                i18nKey="Hero.aboutBody"
                components={[<br key="br1" />, <span key="span1" />]}
              />
            </div>
          </div>

          <Link href="/company">
            <div className="mx-auto md:mx-0 border-[3px] border-[#1C3990] text-[#1C3990] rounded-md text-center font-semibold w-[280px] sm:w-[330px] h-[44px] flex items-center justify-center mt-[32px] md:mt-[90px] cursor-pointer md:mx-auto">
              {t("Hero.more")}
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
