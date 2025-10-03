"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import ContactSection from "./contact-section";
import Image from "next/image";

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
      <ContactSection />

      <footer className="bg-[#05284B] text-white py-12">
        {/* container: fluid + max width, fixed 1536px olib tashlandi */}
        <div className="container mx-auto max-w-screen-xl px-6 flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Chap blok */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full lg:w-[60%]">
            <div className="flex flex-col gap-[72px]">
              <div className="space-y-4">
                <Image
                  src="/svg/logo_white.svg"
                  alt="Logo"
                  width={318}
                  height={50}
                />
                <CompanyInfo />
              </div>

              <div>
                <h3 className="font-semibold mb-4">{servicesTitle}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {services.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

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
              <div className="flex items-center gap-6">
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

          {/* Xarita: breakpointlarga mos max-width — tablet > desktop */}
          <div className="w-full lg:w-[40%] flex justify-center items-center mx-auto text-center mt-[40px] cursor-pointer">
            {/* Link bilan o‘rab qo‘yildi */}
            <a
              href="https://yandex.uz/maps/org/62402965592/?ll=69.271775%2C41.292319&z=15"
              target="_blank"
              rel="noopener noreferrer"
              className="
      relative w-full
      max-w-[360px]      /* mobile default */
      sm:max-w-[460px]   /* small phones / small tablets */
      md:max-w-[880px]   /* TABLET: kattaroq */
      lg:max-w-[720px]   /* DESKTOP: tabletga nisbatan biroz kichikroq */
      xl:max-w-[820px]   /* katta ekranlarda biroz kengroq */
      aspect-[4/3]
      block
    "
            >
              <Image
                src="/svg/xarita.svg"
                alt="Map"
                fill
                className="rounded-lg object-contain cursor-pointer hover:opacity-90 transition"
                sizes="
        (max-width: 640px)  90vw,
        (max-width: 768px)  80vw,
        (max-width: 1024px) 85vw,
        (max-width: 1280px) 40vw,
        35vw
      "
                priority={false}
              />
            </a>
          </div>
        </div>

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
