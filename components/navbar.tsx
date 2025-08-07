"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("UZ"); // Default to Uzbek
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "/business",
      labelUZ: "Biznes",
      labelRU: "Бизнес",
      labelEN: "Business",
    },
    // {
    //   href: "/track-record",
    //   labelUZ: "Natijalar",
    //   labelRU: "Результаты",
    //   labelEN: "Track Record",
    // },
    {
      href: "/company",
      labelUZ: "Kompaniya",
      labelRU: "Компания",
      labelEN: "Company",
    },
    // { href: "/tenant", labelUZ: "Ijara", labelRU: "Аренда", labelEN: "Tenant" },
    {
      href: "/recruitment",
      labelUZ: "Ish",
      labelRU: "Работа",
      labelEN: "Jobs",
    },
    {
      href: "/contact",
      labelUZ: "Aloqa",
      labelRU: "Контакты",
      labelEN: "Contact",
    },
    // {
    //   href: "/news",
    //   labelUZ: "Yangiliklar",
    //   labelRU: "Новости",
    //   labelEN: "News",
    // },
  ];

  const getLabel = (item: any) => {
    switch (language) {
      case "RU":
        return item.labelRU;
      case "EN":
        return item.labelEN;
      default:
        return item.labelUZ;
    }
  };

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
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/svg/logoTokio.svg"
              alt="Tokio logo"
              width={347}
              height={58}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {getLabel(item)}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage("UZ")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === "UZ"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage("RU")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === "RU"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage("EN")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === "EN"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600"
                }`}
              >
                EN
              </button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {getLabel(item)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
