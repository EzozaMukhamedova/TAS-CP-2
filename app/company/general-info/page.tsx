"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Phone,
  VoicemailIcon as Fax,
  Calendar,
  Users,
  Building,
} from "lucide-react";

export default function GeneralInfoPage() {
  const [language] = useState("UZ");

  const content = {
    UZ: {
      backToCompany: "Kompaniyaga qaytish",
      title: "Kompaniya Haqidagi Umumiy Ma'lumot",
      companyProfile: "Kompaniya profili",
      executiveStructure: "Ijroiya tarkibi",
      access: "Kirish",
      otherSections: "Boshqa Bo'limlar",
    },
    RU: {
      backToCompany: "Вернуться к компании",
      title: "Общая Информация о Компании",
      companyProfile: "Профиль компании",
      executiveStructure: "Исполнительная структура",
      access: "Доступ",
      otherSections: "Другие Разделы",
    },
    EN: {
      backToCompany: "Back to Company",
      title: "General Company Information",
      companyProfile: "Company Profile",
      executiveStructure: "Executive Structure",
      access: "Access",
      otherSections: "Other Sections",
    },
  };

  const companyData = {
    UZ: {
      companyName: "Tokyo Asset Solution Co., Ltd.",
      location:
        "2-qavat, Urban Toranomon binosi, 1-16-4 Toranomon, Minato-ku, Tokio 105-0001",
      phone: "03-5510-8300 (Vakil)",
      fax: "03-5510-8305",
      establishedDate: "2009 yil 30 yanvar",
      businessStartDate: "2009 yil 1 may",
      capital: "200 000 ming yen",
      employees: "55 kishi (2020 yil iyul holatiga)",
      businessContent: [
        "Ko'chmas mulkni rivojlantirish va rekonstruksiya qilish biznesi",
        "Ko'chmas mulkni qayta tiklash biznesi",
        "Logistika ob'ekti biznesi",
        "M&A biznesi",
        "Fondni boshqarish biznesi",
        "Mulkni boshqarish biznesi",
        "Chet elda biznes",
        "Qayta tiklanadigan energiya biznesi",
      ],
      shareholders: "TAS HOLDINGS Co., Ltd.",
      subsidiaries: [
        "TAS Property Partners Inc. (100% egalik qiladi)",
        "Kansai Asset Solution Co., Ltd. (100% egalik qiladi)",
      ],
      fiscalYearEnd: "dekabr",
      licenses: [
        "Ko'chmas mulk bitimi biznesi Tokio gubernatori (4) 90385-son",
        "Ijaraga beriladigan uy-joy boshqaruvi kompaniyasi Yer, infratuzilma, transport va turizm vaziri (01) 005230-son",
        "Kanto mintaqaviy moliya byurosi (moliyaviy vositalar biznesi) № 2234 (II turdagi moliyaviy vositalar biznesi)",
        "Tokyo Asset Solutions First Class Architect Office Tokio Gubernator № 55907",
      ],
      qualifiedPersons: [
        { title: "Ko'chmas mulk agenti", count: "31 kishi" },
        {
          title: "Ijara mulkini boshqarish bo'yicha maslahatchi",
          count: "3 kishi",
        },
        { title: "Birinchi darajali arxitektor", count: "6 kishi" },
      ],
    },
    RU: {
      companyName: "Tokyo Asset Solution Co., Ltd.",
      location:
        "2-й этаж, здание Urban Toranomon, 1-16-4 Toranomon, Minato-ku, Tokyo 105-0001",
      phone: "03-5510-8300 (Представитель)",
      fax: "03-5510-8305",
      establishedDate: "30 января 2009 года",
      businessStartDate: "1 мая 2009 года",
      capital: "200 000 тысяч иен",
      employees: "55 человек (по состоянию на июль 2020 года)",
      businessContent: [
        "Бизнес по развитию и реконструкции недвижимости",
        "Бизнес по восстановлению недвижимости",
        "Бизнес логистических объектов",
        "M&A бизнес",
        "Бизнес по управлению фондами",
        "Бизнес по управлению недвижимостью",
        "Зарубежный бизнес",
        "Бизнес возобновляемой энергии",
      ],
      shareholders: "TAS HOLDINGS Co., Ltd.",
      subsidiaries: [
        "TAS Property Partners Inc. (100% владение)",
        "Kansai Asset Solution Co., Ltd. (100% владение)",
      ],
      fiscalYearEnd: "декабрь",
      licenses: [
        "Бизнес сделок с недвижимостью губернатор Токио (4) № 90385",
        "Компания по управлению арендным жильем министр земли, инфраструктуры, транспорта и туризма (01) № 005230",
        "Региональное финансовое бюро Канто (бизнес финансовых инструментов) № 2234 (бизнес финансовых инструментов типа II)",
        "Tokyo Asset Solutions First Class Architect Office губернатор Токио № 55907",
      ],
      qualifiedPersons: [
        { title: "Агент по недвижимости", count: "31 человек" },
        {
          title: "Консультант по управлению арендной недвижимостью",
          count: "3 человека",
        },
        { title: "Архитектор первого класса", count: "6 человек" },
      ],
    },
    EN: {
      companyName: "Tokyo Asset Solution Co., Ltd.",
      location:
        "2nd floor, Urban Toranomon Building, 1-16-4 Toranomon, Minato-ku, Tokyo 105-0001",
      phone: "03-5510-8300 (Representative)",
      fax: "03-5510-8305",
      establishedDate: "January 30, 2009",
      businessStartDate: "May 1, 2009",
      capital: "200,000 thousand yen",
      employees: "55 people (as of July 2020)",
      businessContent: [
        "Real estate development and reconstruction business",
        "Real estate restoration business",
        "Logistics facility business",
        "M&A business",
        "Fund management business",
        "Property management business",
        "Overseas business",
        "Renewable energy business",
      ],
      shareholders: "TAS HOLDINGS Co., Ltd.",
      subsidiaries: [
        "TAS Property Partners Inc. (100% ownership)",
        "Kansai Asset Solution Co., Ltd. (100% ownership)",
      ],
      fiscalYearEnd: "December",
      licenses: [
        "Real estate transaction business Tokyo Governor (4) No. 90385",
        "Rental housing management company Minister of Land, Infrastructure, Transport and Tourism (01) No. 005230",
        "Kanto Regional Finance Bureau (financial instruments business) No. 2234 (Type II financial instruments business)",
        "Tokyo Asset Solutions First Class Architect Office Tokyo Governor No. 55907",
      ],
      qualifiedPersons: [
        { title: "Real estate agent", count: "31 people" },
        { title: "Rental property management consultant", count: "3 people" },
        { title: "First-class architect", count: "6 people" },
      ],
    },
  };

  const executives = {
    UZ: [
      { position: "Prezident va bosh direktor", name: "Nobuaki Terashiki" },
      { position: "Boshqaruv raisi", name: "Shintaro Tanahara" },
      {
        position:
          "Ko'chmas mulk biznesi bo'limi direktori va ijrochi direktori, bosh menejeri",
        name: "Yuji Sakamu",
      },
      {
        position:
          "Ijrochi direktor, investitsiyalarni rejalashtirish bo'limi boshlig'i",
        name: "Takashi Numata",
      },
      {
        position:
          "Ijrochi direktor, rejalashtirish va boshqarish bo'limi boshlig'i",
        name: "Norio Yamada",
      },
      {
        position:
          "Korporativ rejalashtirish departamenti ijrochi direktori, bosh menejeri",
        name: "Tomoaki Xoriba",
      },
      { position: "Audit va Kuzatuv kengashi a'zosi", name: "Hideyuki Ogiya" },
    ],
    RU: [
      {
        position: "Президент и генеральный директор",
        name: "Нобуаки Терашики",
      },
      { position: "Председатель правления", name: "Шинтаро Танахара" },
      {
        position:
          "Директор отдела недвижимости и исполнительный директор, генеральный менеджер",
        name: "Юдзи Сакаму",
      },
      {
        position:
          "Исполнительный директор, руководитель отдела планирования инвестиций",
        name: "Такаши Нумата",
      },
      {
        position:
          "Исполнительный директор, руководитель отдела планирования и управления",
        name: "Норио Ямада",
      },
      {
        position:
          "Исполнительный директор отдела корпоративного планирования, генеральный менеджер",
        name: "Томоаки Хориба",
      },
      { position: "Член совета по аудиту и надзору", name: "Хидеюки Огия" },
    ],
    EN: [
      { position: "President and CEO", name: "Nobuaki Terashiki" },
      { position: "Chairman", name: "Shintaro Tanahara" },
      {
        position:
          "Real Estate Business Division Director and Executive Director, General Manager",
        name: "Yuji Sakamu",
      },
      {
        position: "Executive Director, Investment Planning Department Manager",
        name: "Takashi Numata",
      },
      {
        position:
          "Executive Director, Planning and Management Department Manager",
        name: "Norio Yamada",
      },
      {
        position:
          "Corporate Planning Department Executive Director, General Manager",
        name: "Tomoaki Horiba",
      },
      {
        position: "Audit and Supervisory Board Member",
        name: "Hideyuki Ogiya",
      },
    ],
  };

  const otherSections = [
    {
      id: "management-vision",
      titleUZ: "Boshqaruv Ko'rinishi",
      titleRU: "Видение Управления",
      titleEN: "Management Vision",
    },
    {
      id: "company-history",
      titleUZ: "Kompaniya Tarixi",
      titleRU: "История Компании",
      titleEN: "Company History",
    },
    {
      id: "organizational-structure",
      titleUZ: "Tashkiliy Tuzilma",
      titleRU: "Организационная Структура",
      titleEN: "Organizational Structure",
    },
    {
      id: "partners-banks",
      titleUZ: "Hamkor Tashkilotlar",
      titleRU: "Партнерские Организации",
      titleEN: "Partner Organizations",
    },
  ];

  const getCurrentData = () => {
    switch (language) {
      case "RU":
        return companyData.RU;
      case "EN":
        return companyData.EN;
      default:
        return companyData.UZ;
    }
  };

  const getCurrentExecutives = () => {
    switch (language) {
      case "RU":
        return executives.RU;
      case "EN":
        return executives.EN;
      default:
        return executives.UZ;
    }
  };

  const data = getCurrentData();
  const executiveData = getCurrentExecutives();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/company">
            <ArrowLeft className="h-4 w-4" />
            {content[language as keyof typeof content].backToCompany}
          </Link>
        </Button>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1C3990] mb-6">
          {content[language as keyof typeof content].title}
        </h1>
      </div>

      {/* Company Profile */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].companyProfile}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-[#1C3990] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "UZ" && "Shirkat nomi"}
                      {language === "RU" && "Название компании"}
                      {language === "EN" && "Company Name"}
                    </h3>
                    <p className="text-gray-700">{data.companyName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#1C3990] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "UZ" && "Joylashuvi"}
                      {language === "RU" && "Местоположение"}
                      {language === "EN" && "Location"}
                    </h3>
                    <p className="text-gray-700">{data.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#1C3990] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "UZ" && "Telefon"}
                      {language === "RU" && "Телефон"}
                      {language === "EN" && "Phone"}
                    </h3>
                    <p className="text-gray-700">{data.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Fax className="h-6 w-6 text-[#1C3990] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "UZ" && "FAKS"}
                      {language === "RU" && "ФАКС"}
                      {language === "EN" && "FAX"}
                    </h3>
                    <p className="text-gray-700">{data.fax}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-[#1C3990] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "UZ" && "Tashkil etilgan sana"}
                      {language === "RU" && "Дата основания"}
                      {language === "EN" && "Established Date"}
                    </h3>
                    <p className="text-gray-700">{data.establishedDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-[#1C3990] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "UZ" && "Biznes boshlanish sanasi"}
                      {language === "RU" && "Дата начала бизнеса"}
                      {language === "EN" && "Business Start Date"}
                    </h3>
                    <p className="text-gray-700">{data.businessStartDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Image
                    src="/svg/dollar.svg"
                    alt="Dollar"
                    width={24}
                    height={24}
                    className="mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "UZ" && "Kapital"}
                      {language === "RU" && "Капитал"}
                      {language === "EN" && "Capital"}
                    </h3>
                    <p className="text-gray-700">{data.capital}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-[#1C3990] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {language === "UZ" && "To'liq vaqtli xodimlar soni"}
                      {language === "RU" && "Количество штатных сотрудников"}
                      {language === "EN" && "Full-time Employees"}
                    </h3>
                    <p className="text-gray-700">{data.employees}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Business Content */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {language === "UZ" && "Biznes mazmuni"}
              {language === "RU" && "Содержание бизнеса"}
              {language === "EN" && "Business Content"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {data.businessContent.map((content, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
                >
                  <div className="w-6 h-6 bg-[#1C3990] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{content}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Executive Structure */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].executiveStructure}
            </CardTitle>
            <p className="text-gray-600 text-sm">
              {language === "UZ" && "(2020 yil iyul holatiga ko'ra)"}
              {language === "RU" && "(по состоянию на июль 2020 года)"}
              {language === "EN" && "(as of July 2020)"}
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {executiveData.map((executive, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-[#1C3990] text-white rounded-full flex items-center justify-center font-bold">
                    {executive.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {executive.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {executive.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Access Information */}
      <section className="mb-12">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].access}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="h-6 w-6 text-[#1C3990] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {data.location}
                  </h3>
                  <p className="text-gray-700">
                    {language === "UZ" &&
                      "Tokio Metro Ginza liniyasidagi Toranomon stantsiyasidan 3 daqiqalik piyoda, Tokio Metro Hibiya liniyasidagi Toranomon Hills stantsiyasidan 4 daqiqalik piyoda."}
                    {language === "RU" &&
                      "3 минуты пешком от станции Торанomon на линии Ginza Tokyo Metro, 4 минуты пешком от станции Toranomon Hills на линии Hibiya Tokyo Metro."}
                    {language === "EN" &&
                      "3 minutes walk from Toranomon Station on Tokyo Metro Ginza Line, 4 minutes walk from Toranomon Hills Station on Tokyo Metro Hibiya Line."}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Sections */}
      <section>
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1C3990]">
              {content[language as keyof typeof content].otherSections}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {otherSections.map((section) => (
                <Button
                  key={section.id}
                  asChild
                  variant="outline"
                  className="h-auto p-4 justify-start border-[#1C3990] text-[#1C3990] hover:bg-[#1C3990] hover:text-white"
                >
                  <Link href={`/company/${section.id}`}>
                    {language === "RU"
                      ? section.titleRU
                      : language === "EN"
                      ? section.titleEN
                      : section.titleUZ}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
