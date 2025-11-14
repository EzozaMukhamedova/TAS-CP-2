"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2C52] mb-3 sm:mb-4">
              {t("Contacts.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t("Contacts.subtitle")}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Phone Inquiries */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-2">
                  {t("Contacts.phoneInquiries")}
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  {/* phone */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/svg/phone.svg"
                        alt="Phone Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {t("Contacts.realEstateInfo")}
                      </h4>
                      <p className="text-xl sm:text-2xl font-bold text-[#31519F]">
                        {t("Contacts.phone")}
                      </p>
                    </div>
                  </div>

                  {/* QR code */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/svg/qr_code.svg"
                        alt="QR Code"
                        width={90}
                        height={90}
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {t("Contacts.realEstateInfo")}
                      </h4>
                      <p className="text-lg sm:text-2xl font-bold text-[#31519F] break-all">
                        @TASCApitalPartners
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 p-4 sm:p-5 bg-gray-100 rounded-lg text-center lg:text-left">
                  <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    {t("Contacts.businessHours")}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {t("Contacts.holidayNote")}
                  </p>
                </div>
              </div>
            </div>

            {/* Contacts Form CTA */}
            <div className="text-center">
              <div className="bg-white px-6 py-7 sm:px-8 sm:py-9 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto lg:mx-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#31519F] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-5 sm:mb-6">
                  <Image
                    src="/svg/boglanish.svg"
                    alt="Contacts Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {t("Contacts.contactForm")}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  {t("Contacts.contactFormNote")}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#31519F] hover:bg-blue-700 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                >
                  <Link href="/Contacts">{t("Contacts.inquiry")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
