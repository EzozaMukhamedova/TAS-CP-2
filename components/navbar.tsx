"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

type Locale = "uz" | "ru" | "en";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "uz", label: "O‘Z" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Navbar.tsx
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lang") as Locale | null;
    if (saved && i18n.language !== saved) {
      i18n.changeLanguage(saved);
    }
  }, [i18n]);

  // Language switch
  const setLang = (lng: Locale) => {
    i18n.changeLanguage(lng);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lng);
    }
  };

  const navItems = [
    { href: "/company", label: t("Nav.company") },
    { href: "/business", label: t("Nav.business") },
    { href: "/results", label: t("Nav.results") },
    { href: "/recruitment", label: t("Nav.jobs") },
    { href: "/contact", label: t("Nav.contact") },
  ];

  const phoneNumber = t("Nav.phone", { defaultValue: "+99890 480 18 48" });

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/svg/TASlogo.svg"
              alt="TAS logo"
              width={347}
              height={58}
              className="w-[180px] sm:w-[220px] lg:w-[347px] h-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[16px] font-medium transition-colors hover:text-[#1C3990] ${
                  pathname === item.href ? "text-[#1C3990]" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop socials + language */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              {LOCALES.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => setLang(lng.code)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                    (i18n.language as Locale) === lng.code
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600"
                  }`}
                >
                  {lng.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hamburger (only <lg) */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-[#1C3990] text-white h-screen overflow-y-auto flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 pt-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/svg/oq_logo.svg"
                  alt="logo"
                  className="h-12 w-auto opacity-90"
                />
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center"
              >
                <X className="h-12 w-12" />
              </button>
            </div>

            {/* Centered content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 text-center">
              {/* Pages */}
              <nav className="flex flex-col items-center gap-4 text-[26px]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`transition-opacity ${
                      pathname === item.href
                        ? "opacity-100"
                        : "opacity-90 hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Phone */}
              <a
                href={`tel:${String(phoneNumber).replace(/\s+/g, "")}`}
                className="mt-1 inline-flex items-center gap-2 opacity-95 hover:opacity-100"
              >
                <Phone className="h-5 w-5" />
                <span className="tracking-wide text-[24px]">{phoneNumber}</span>
              </a>

              {/* Language row */}
              <div className="flex items-center gap-5 text-[26px] mt-1">
                {(["ru", "uz", "en"] as Locale[]).map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`uppercase tracking-wide ${
                      (i18n.language as Locale) === code
                        ? "underline underline-offset-4"
                        : "opacity-90 hover:opacity-100"
                    }`}
                  >
                    {code === "uz" ? "UZ" : code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
