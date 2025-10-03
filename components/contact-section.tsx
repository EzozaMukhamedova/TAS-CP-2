"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2C52] mb-4">
              {t("Contact.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("Contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Inquiries */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  {t("Contact.phoneInquiries")}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Image
                        src="/svg/phone.svg"
                        alt="Phone Icon"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {t("Contact.realEstateInfo")}
                      </h4>
                      <p className="text-2xl font-bold text-[#31519F]">
                        {t("Contact.phone")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    {t("Contact.businessHours")}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t("Contact.holidayNote")}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#31519F] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                  <Image
                    src="/svg/boglanish.svg"
                    alt="Contact Icon"
                    width={38}
                    height={38}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("Contact.contactForm")}
                </h3>
                <p className="text-gray-600 mb-8">
                  {t("Contact.contactFormNote")}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#31519F] hover:bg-blue-700 px-8 py-3 text-lg"
                >
                  <Link href="/contact">{t("Contact.inquiry")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
