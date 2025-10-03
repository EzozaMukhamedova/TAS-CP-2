"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import ContactSection from "./contact-section";
import Image from "next/image";

// Ixtiyoriy: label'larni i18n qilib, qiymatlarni konstantada saqlaymiz
const COMPANY = {
  postal: "100102",
  address: "Modera Towers, 4F, Shota Rustaveli street 19, Tashkent",
  phone: "03-5510-8300",
  email: "info@to-as.com",
};

function CompanyInfo() {
  const { t } = useTranslation();
  return (
    <div className="text-gray-400 space-y-1 text-sm">
      <p>
        <span className="font-medium">{t("Footer.company.postalLabel")}</span>{" "}
        {COMPANY.postal}
      </p>
      <p>
        <span className="font-medium">{t("Footer.company.addressLabel")}</span>{" "}
        {COMPANY.address}
      </p>
      <p>
        <span className="font-medium">{t("Footer.company.phoneLabel")}</span>{" "}
        {COMPANY.phone}
      </p>
      <p>
        <span className="font-medium">{t("Footer.company.emailLabel")}</span>{" "}
        {COMPANY.email}
      </p>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const servicesTitle = t("Footer.services");
  const sitemapTitle = t("Footer.sitemap");
  const socialsTitle = t("Footer.socials");
  const rights = t("Footer.rights");

  const services = t("Footer.servicesList", {
    returnObjects: true,
  }) as string[];
  const navCompany = t("Footer.nav.company");
  const navBusiness = t("Footer.nav.business");
  const navRecruitment = t("Footer.nav.recruitment");

  const year = new Date().getFullYear();

  return (
    <>
      {/* Contact Section (i18n) */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#05284B] text-white py-12">
        <div className="container mx-auto px-6 flex lg:flex-row justify-between items-start gap-12 w-[1536px]">
          {/* Chap: kompaniya ma'lumotlari + xizmatlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full lg:w-[60%]">
            <div className="flex flex-col gap-[72px]">
              {/* Kompaniya ma'lumotlari */}
              <div className="space-y-4">
                <Image
                  src="/svg/logo_white.svg"
                  alt="Logo"
                  width={318}
                  height={50}
                />
                <CompanyInfo />
              </div>

              {/* Xizmatlar */}
              <div>
                <h3 className="font-semibold mb-4">{servicesTitle}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {services.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sayt xaritasi + Ijtimoiy */}
            <div>
              <h3 className="font-semibold mb-4 mt-[50px]">{sitemapTitle}</h3>
              <ul className="space-y-2 text-gray-400 text-sm mb-6">
                <li>
                  <Link href="/company">{navCompany}</Link>
                </li>
                <li>
                  <Link href="/business">{navBusiness}</Link>
                </li>
                <li>
                  <Link href="/recruitment">{navRecruitment}</Link>
                </li>
              </ul>

              <h3 className="font-semibold mb-4 mt-[100px]">{socialsTitle}</h3>
              <div className="flex flex-col gap-[30px]">
                <Image
                  src="/svg/logos_telegram.svg"
                  alt="Telegram"
                  width={27}
                  height={27}
                />
                <Image
                  src="/svg/instagram.svg"
                  alt="Instagram"
                  width={27}
                  height={27}
                />
                <Image
                  src="/svg/logos_facebook.svg"
                  alt="Facebook"
                  width={27}
                  height={27}
                />
              </div>
            </div>
          </div>

          {/* Xarita o‘ng tomonda */}
          <div className="w-full lg:w-[40%] flex justify-center items-center mx-auto text-center mt-[40px]">
            <Image
              src="/svg/xarita.svg"
              alt="Map"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Pastki qism */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          &copy; {year}{" "}
          <span className="font-semibold text-white">
            TAS Capital Partners.
          </span>{" "}
          {rights}
        </div>
      </footer>
    </>
  );
}
