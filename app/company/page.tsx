"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Lang = "UZ" | "RU" | "EN";

export default function CompanyPage() {
  const [language] = useState<Lang>("UZ");
  const [isPresidentTextExpanded, setIsPresidentTextExpanded] = useState(false);

  const reasons = [
    {
      title: "Vaqtingizni tejang va stressni kamaytiring",
      text: "Bizning xizmatlarimiz orqali mulk egalari o‘z ustuvor yo‘nalishlariga e’tibor qaratishlari mumkin, chunki ijarachilar bilan ishlashdan tortib qonunchilik talablariga rioya etishgacha bo‘lgan barcha ishlar biz tomonidan samarali va professional tarzda bajariladi.",
    },
    {
      title: "Tejamkor yechimlar",
      text: "Yaponiyaning innovatsion yondashuvi va samaradorligi asosida biz sizga profilaktik texnik xizmat, energiya tejamkor yechimlar va optimizatsiyalangan xizmat ko‘rsatish orqali operatsion xarajatlarni kamaytirishga yordam beramiz.",
    },
    {
      title: "Ishonch va sadoqat",
      text: "Bizning yapon merosimiz ishonch, sadoqat va mijoz birinchi o‘rinda tamoyiliga asoslangan. Biz mulk egalari va ijarachilarning to‘liq qoniqishini kafolatlaymiz va har bir o‘zaro aloqada asosiy qadriyatlarimizni aks ettiramiz.",
    },
    {
      title: "Yaponcha aniqlik va ishonchlilik",
      text: "Biz sizning mulkingizni boshqarishda yapon menejmentiga xos, dunyo darajasidagi aniqlik va ishonchlilikni ta’minlaymiz. Mulk va obyektlarni boshqarishning barcha jihatlari ehtiyotkorlik bilan va tajribaga tayangan holda amalga oshiriladi.",
    },
    {
      title: "Ijara daromadini oshiring",
      text: "Bizning ekspert strategiyalarimiz yordamida siz sifatli ijarachilarni jalb qilasiz, barqaror ijara daromadiga ega bo‘lasiz va bo‘sh turgan mulklar sonini kamaytirasiz, natijada ijara to‘lovlari uzluksiz amalga oshiriladi.",
    },
    {
      title: "Sarmoyangizni himoya qiling",
      text: "Biz profilaktik texnik xizmat va ta’mirlash bo‘yicha faol yondashuvni qo‘llaymiz, bu esa qimmat ta’mir ishlari xavfini kamaytiradi va mulkingizning xizmat muddatini uzaytiradi.",
    },
  ];

  const content = {
    UZ: {
      title: "Kompaniya haqida qisqacha",
      // companyOverview: "Kompaniya haqida",
      presidentMessage: "Kompaniya Vakillari",
      presidentName:
        "O'ng tarafdagi: Aziz Normatov va chap tarafdagi: Koji Takashima",
      presidentTitle: "—",
      sections: "Kompaniya bo'limlari",
      viewDetails: "Batafsil ko'rish",
    },
    RU: {
      title: "О компании",
      companyOverview: "Краткая информация о компании",
      presidentMessage: "Сообщение президента",
      presidentName: "Нобуаки Терашики",
      presidentTitle: "Президент и генеральный директор",
      sections: "Разделы компании",
      viewDetails: "Подробнее",
    },
    EN: {
      title: "About Company",
      companyOverview: "Company Overview",
      presidentMessage: "President's Message",
      presidentName: "Nobuaki Terashiki",
      presidentTitle: "President & CEO",
      sections: "Company Sections",
      viewDetails: "View Details",
    },
  } satisfies Record<Lang, any>;

  const companySections = [
    {
      id: "management-vision",
      titleUZ: "Boshqaruv Ko'rinishi",
      titleRU: "Видение Управления",
      titleEN: "Management Vision",
      descriptionUZ: "Kompaniya missiyasi, boshqaruv falsafasi",
      descriptionRU:
        "Миссия компании, философия управления и этические принципы",
      descriptionEN:
        "Company mission, management philosophy and ethical principles",
      image: "/svg/boshqaruvKorinishi1.png",
    },
    {
      id: "company-history",
      titleUZ: "Kompaniya Tarixi",
      titleRU: "История Компании",
      titleEN: "Company History",
      descriptionUZ: "2009 yildan bugungi kungacha bo'lgan rivojlanish yo'li",
      descriptionRU: "Путь развития с 2009 года до сегодняшнего дня",
      descriptionEN: "Development path from 2009 to the present day",
      image: "/svg/kompaniyatarixi.svg",
    },
    {
      id: "organizational-structure",
      titleUZ: "Tashkiliy Tuzilma",
      titleRU: "Организационная Структура",
      titleEN: "Organizational Structure",
      descriptionUZ: "Kompaniya bo'limlari va boshqaruv ierarxiyasi",
      descriptionRU: "Отделы компании и управленческая иерархия",
      descriptionEN: "Company departments and management hierarchy",
      image: "/svg/tashkiliytuzilma.svg",
    },
    {
      id: "partners-banks",
      titleUZ: "Asosiy Bank va Hamkor Tashkilotlar",
      titleRU: "Основные Банки и Партнерские Организации",
      titleEN: "Main Banks and Partner Organizations",
      descriptionUZ: "Moliyaviy hamkorlar va strategik ittifoqchilar",
      descriptionRU: "Финансовые партнеры и стратегические союзники",
      descriptionEN: "Financial partners and strategic allies",
      image: "/svg/asosiyhamkor.svg",
    },
    {
      id: "general-info",
      titleUZ: "Kompaniya Haqidagi Umumiy Ma'lumot",
      titleRU: "Общая Информация о Компании",
      titleEN: "General Company Information",
      descriptionUZ: "Kompaniya profili va joylashuv xaritasi",
      descriptionRU: "Профиль компании и карта расположения",
      descriptionEN: "Company profile and location map",
      image: "/svg/kompaniyahaqida.svg",
    },
  ];

  const getTitle = (section: any) => {
    switch (language) {
      case "RU":
        return section.titleRU;
      case "EN":
        return section.titleEN;
      default:
        return section.titleUZ;
    }
  };

  const getDescription = (section: any) => {
    switch (language) {
      case "RU":
        return section.descriptionRU;
      case "EN":
        return section.descriptionEN;
      default:
        return section.descriptionUZ;
    }
  };
  // Tugma tekstlari (UZ / RU / EN)
  const getMoreLabel = (lang: Lang, expanded: boolean) => {
    if (lang === "RU") return expanded ? "Скрыть" : "Показать полностью";
    if (lang === "EN") return expanded ? "Show less" : "Show more";
    return expanded ? "Kamroq ko‘rsatish" : "Batafsil ko‘rish";
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Header */}
      <div className="text-center mb-10 md:mb-16 mt-[86px]">
        <h1 className="font-bold text-[#1C3990] text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight">
          {content[language].title}
        </h1>
      </div>

      {/* Company Overview */}
      <section className="mb-12 md:mb-20">
        <Card className="border-0">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-xl sm:text-2xl text-[#1C3990]">
              {content[language].companyOverview}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              {/* TEXT */}
              <div className="w-full lg:w-[516px]">
                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 md:ml-[50px]">
                  {language === "UZ" &&
                    `TAS Capital Partners — bu Tokyo Asset Solution kompaniyasining sho'ba korxonasi bo'lib, biz ko'p yillik tajriba, aniqlik va eng yuqori xizmat standartlarini mulkni boshqarish va obyektlarni boshqarish (facility management) sohalariga olib kiramiz.`}

                  {language === "RU" &&
                    "Tokyo Asset Solution — компания, основанная в 2009 году и работающая в сфере недвижимости и инвестиций. Мы специализируемся на редевелопменте, реновации, долгосрочном владении объектами и проектах зеленой энергетики."}

                  {language === "EN" &&
                    "Tokyo Asset Solution is a company established in 2009, operating in the real estate and investment sector. We specialize in redevelopment, renovation, long-term ownership, and green energy projects."}
                </p>
              </div>

              {/* IMAGE */}
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto">
                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[1/1]">
                  <Image
                    src="/svg/kompaniyaPageImg.svg"
                    alt="Company Building"
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    priority
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* President's Message */}
      <section className="mb-12 md:mb-16">
        <Card className="shadow-lg border-0">
          <CardHeader className="flex items-center justify-center gap-4">
      <CardTitle
  className="
    text-[#173758]
    font-bold
    text-2xl
    sm:text-3xl
    lg:text-4xl
    text-center
    leading-tight
  "
>
  {content[language].presidentMessage}
</CardTitle>

          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
              {/* Left – image & name */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative w-56 sm:w-64 md:w-full max-w-[345px] aspect-square">
                  <Image
                    src="/svg/boshdirektor2.png"
                    alt={content[language].presidentName}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 60vw, 345px"
                  />
                </div>
                <p
                  className="
  text-center mt-4 font-semibold px-4
  w-full             /* mobile */
  sm:w-[260px]       /* tablet */
  lg:w-[350px]       /* desktop */
"
                >
                  {content[language].presidentName}
                </p>

                {content[language].presidentTitle && (
                  <p className="text-center text-gray-600">
                    {content[language].presidentTitle}
                  </p>
                )}
              </div>

              {/* Right – text */}
              <div className="md:col-span-2">
                <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed max-w-none">
                  <p
                    className={`transition-all duration-300 
                    ${
                      isPresidentTextExpanded
                        ? "max-h-[2000px]"
                        : "max-h-[110px] overflow-hidden lg:max-h-none "
                    }`}
                  >
                    {language === "UZ" &&
                      "Bizning xizmatlarimiz sizning ko‘chmas mulk aktivlaringizning qiymatini, funksionalligini va uzoq muddatli barqarorligini maksimal darajada oshirish uchun puxta ishlab chiqilgan. Biz har bir loyiha va obyektga individual yondashamiz, shu orqali har bir tafsilotda mukammallikka erishamiz. TAS Capital Partners jamoasi yapon boshqaruv madaniyatiga xos aniqlik, mas’uliyat va yuqori standartlarga tayangan holda, sizning mulkingizni nafaqat samarali boshqaradi, balki uning bozordagi raqobatbardoshligini ham oshiradi. Bizning maqsadimiz — mulk egalari uchun tinchlik va ishonch muhitini yaratish, ijarachilar esa xavfsiz, qulay va tartibli yashash yoki ishlash imkoniyatidan bahramand bo‘lishlarini ta’minlashdir. Shu tarzda biz Yaponiyada e’tirof etilgan eng yaxshi boshqaruv amaliyotlarini O‘zbekiston bozorida muvaffaqiyatli tatbiq etamiz."}

                    {language === "RU" &&
                      "Наши услуги тщательно разработаны для того, чтобы максимально повысить стоимость, функциональность и долгосрочную устойчивость ваших объектов недвижимости. Мы применяем индивидуальный подход к каждому проекту и объекту, уделяя внимание каждой детали, чтобы обеспечить безупречный результат. Команда TAS Capital Partners, опираясь на присущие японской управленческой культуре точность, ответственность и высокие стандарты, не только эффективно управляет вашей недвижимостью, но и повышает её конкурентоспособность на рынке. Наша цель — создать атмосферу спокойствия и доверия для собственников, а также обеспечить арендаторам безопасные, удобные и организованные условия для жизни или работы. Именно таким образом мы успешно внедряем лучшие признанные в Японии практики управления на рынке Узбекистана."}

                    {language === "EN" &&
                      "Our services are carefully designed to maximize the value, functionality, and long-term sustainability of your real estate assets. We take an individual approach to every project and property, ensuring excellence in every detail. Relying on the precision, responsibility, and high standards inherent in Japanese management culture, the TAS Capital Partners team not only manages your property efficiently but also enhances its competitiveness in the market. Our mission is to create an atmosphere of peace and confidence for property owners while providing tenants with safe, comfortable, and well-organized living or working conditions. In this way, we successfully bring Japan’s most reputable management practices to the Uzbekistan market."}
                  </p>

                  {/* Learn more / show less – faqat mobile & tablet */}
                  <button
                    type="button"
                    onClick={() => setIsPresidentTextExpanded((prev) => !prev)}
                    className="mt-3 text-sm font-medium text-blue-600 hover:underline lg:hidden"
                  >
                    {getMoreLabel(language, isPresidentTextExpanded)}
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Nega ishonish? */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173758] mb-12">
            Nima uchun bizga ishonishingiz kerak
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-md px-6 py-7 lg:px-7 lg:py-8"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E5F0FF]">
                  {/* check icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#4F8DF9"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 6.71 9.29L9 11.586l6.296-6.296a1 1 0 0 1 1.408 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold text-lg mb-3 text-[#173758]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Obyect section */}
      <section className="w-full bg-[#F5F7FF] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* ========== 1 — FACILITY MANAGEMENT ========== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
            {/* Left content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#173758] mb-6 leading-snug">
                Obyektlarni boshqarish xizmatlari <br />
                <span className="text-gray-600 text-[22px] font-normal">
                  (Facility Management Services)
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 max-w-[600px]">
                Bizning obyektlarni boshqarish yechimlarimiz operatsion
                mukammallik, xarajatlarni kamaytirish, hamda eng yuqori
                xavfsizlik va barqarorlik standartlariga e’tibor qaratadi.
                Yaponiyaning innovatsiya va samaradorlik bo‘yicha tajribasidan
                foydalanib, biz sizning mulkingiz mukammal holatda saqlanishini
                ta’minlaymiz.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-[3px]">✓</span>
                  Texnik xizmat ko‘rsatish va ta’mirlash xizmatlari
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-[3px]">✓</span>
                  Energiya boshqaruvi va barqarorlik yechimlari
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-[3px]">✓</span>
                  Sog‘liq va xavfsizlik standartlariga rioya etish
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-[3px]">✓</span>
                  Bino infratuzilmasini saqlab turish
                </li>
              </ul>
            </div>

            {/* Right image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="/svg/management.svg" // o'zingning rasmi bilan almashtir
                  alt="Facility Management Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ========== 2 — PROPERTY MANAGEMENT ========== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left image */}
            <div className="flex justify-center order-1 lg:order-none">
              <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src="/svg/property_management.svg" // o'zingning rasmi bilan almashtir
                  alt="Property Management Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#173758] mb-6 leading-snug">
                Ko‘chmas mulkni boshqarish xizmatlari <br />
                <span className="text-gray-600 text-[22px] font-normal">
                  (Property Management Services)
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 max-w-[600px]">
                Biz sizning mulkingizning har bir jihatini professional tarzda
                boshqaramiz, bu jarayonda yapon bizneslariga xos bo‘lgan
                aniqlik, e’tibor va fidoyilikni qo‘llaymiz. Ijara jarayonidan
                tortib moliyaviy hisobot va qonuniy muvofiqlikkacha bo‘lgan
                barcha bosqichlarda ishonchli va halol xizmat ko‘rsatamiz.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-[3px]">✓</span>
                  Ijarachilar bilan munosabat va ijara boshqaruvi
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-[3px]">✓</span>
                  Moliyaviy hisobotlar va byudjetlashtirish
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-[3px]">✓</span>
                  Ijara to‘lovlarini yig‘ish va qonuniy talablarni bajarish
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-[3px]">✓</span>
                  Mulkni texnik xizmat bilan ta’minlashni muvofiqlashtirish
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
