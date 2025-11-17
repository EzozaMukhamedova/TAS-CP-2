"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactClientPage() {
  const searchParams = useSearchParams();
  const { t } = useTranslation(); // default namespace ("Contact" ham shu yerda)

  const [formData, setFormData] = useState({
    inquiryType: "",
    companyName: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || cooldown > 0) return;
    setSubmitting(true);
    setNotice(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const retryAfter = Number(res.headers.get("Retry-After") || 0);
      if (retryAfter > 0) setCooldown(retryAfter);

      const body = await res.json().catch(() => ({}));
      if (res.status === 201) {
        setNotice(t("Contact.notice.sent"));
        setFormData({
          inquiryType: "",
          companyName: "",
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else if (res.status === 429) {
        setNotice(body?.error || t("Contact.notice.rateLimit"));
      } else if (res.status === 501) {
        setNotice(t("Contact.notice.configError"));
      } else {
        setNotice(t("Contact.notice.error"));
      }
    } catch (err) {
      setNotice(t("Contact.notice.error"));
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const sent = searchParams.get("sent");
    const err = searchParams.get("error");
    const wait = Number(searchParams.get("wait") || "0");
    const cd = Number(searchParams.get("cooldown") || "0");

    if (cd > 0) setCooldown(cd);

    if (sent === "1") {
      setNotice(t("Contact.notice.sent"));
      if (typeof window !== "undefined") {
        const u = new URL(window.location.href);
        u.search = "";
        window.history.replaceState({}, "", u.toString());
      }
    } else if (err) {
      const msg =
        err === "rate"
          ? t("Contact.notice.rateWait", {
              seconds: wait || t("Contact.notice.fewSeconds"),
            })
          : err === "config"
          ? t("Contact.notice.configError")
          : err === "validation"
          ? t("Contact.notice.validationError")
          : t("Contact.notice.error");

      setNotice(msg);
      if (typeof window !== "undefined") {
        const u = new URL(window.location.href);
        u.search = "";
        window.history.replaceState({}, "", u.toString());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => setCooldown((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-[40px] sm:text-[48px] md:text-[60px] mt-[86px] font-bold text-[#1C3990] mb-4 leading-tight">
          {t("Contact.title")}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t("Contact.subtitle")}
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1100px]">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1C3990]">
                  {t("Contact.formTitle")}
                </CardTitle>
                <CardDescription>{t("Contact.required")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  action="/api/contact"
                  method="post"
                  acceptCharset="UTF-8"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Inquiry type */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">
                      {t("Contact.inquiryContent")} *
                    </Label>

                    <input
                      type="text"
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      placeholder={t("Contact.inquiryPlaceholder")}
                      className="w-full p-3 border border-gray-300 rounded-md text-[14px]"
                      required
                    />
                  </div>

                  {/* Company name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName">
                      {t("Contact.companyName")}
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder={t("Contact.companyExample")}
                      className="h-12"
                    />
                  </div>

                  {/* Full name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("Contact.name")} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("Contact.nameExample")}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("Contact.phoneNumber")} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("Contact.phoneExample")}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t("Contact.emailAddress")} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("Contact.emailExample")}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {t("Contact.inquiryMessage")} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-700">
                      {t("Contact.privacyAgreement")}
                    </label>
                  </div>

                  {/* Notice */}
                  {notice && (
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {notice}
                    </p>
                  )}

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={submitting || cooldown > 0}
                    className="w-full bg-[#1C3990] hover:bg-[#2d4a9b] h-12 text-base font-semibold disabled:opacity-60"
                  >
                    {cooldown > 0
                      ? `${t("Contact.submit")} (${cooldown}s)`
                      : t("Contact.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
