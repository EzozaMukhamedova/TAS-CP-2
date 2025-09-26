// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [language, setLanguage] = useState("UZ"); // Default to Uzbek
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     {
//       href: "/business",
//       labelUZ: "Biznes",
//       labelRU: "Бизнес",
//       labelEN: "Business",
//     },
//     // {
//     //   href: "/track-record",
//     //   labelUZ: "Natijalar",
//     //   labelRU: "Результаты",
//     //   labelEN: "Track Record",
//     // },
//     {
//       href: "/company",
//       labelUZ: "Kompaniya",
//       labelRU: "Компания",
//       labelEN: "Company",
//     },
//     // { href: "/tenant", labelUZ: "Ijara", labelRU: "Аренда", labelEN: "Tenant" },
//     {
//       href: "/recruitment",
//       labelUZ: "Ish",
//       labelRU: "Работа",
//       labelEN: "Jobs",
//     },
//     {
//       href: "/contact",
//       labelUZ: "Aloqa",
//       labelRU: "Контакты",
//       labelEN: "Contact",
//     },
//     // {
//     //   href: "/news",
//     //   labelUZ: "Yangiliklar",
//     //   labelRU: "Новости",
//     //   labelEN: "News",
//     // },
//   ];

//   const getLabel = (item: any) => {
//     switch (language) {
//       case "RU":
//         return item.labelRU;
//       case "EN":
//         return item.labelEN;
//       default:
//         return item.labelUZ;
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white shadow-md py-3"
//           : "bg-white/95 backdrop-blur-sm py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3">
//             <img
//               src="/svg/TASlogo.svg"
//               alt="Tokio logo"
//               width={347}
//               height={58}
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`text-[16px] font-medium transition-colors hover:text-[#1C3990] ${
//                   pathname === item.href ? "text-[#1C3990]" : "text-gray-700"
//                 }`}
//               >
//                 {getLabel(item)}
//               </Link>
//             ))}
//           </div>
//           {/* Social Media */}
//           <div className="flex items-center space-x-3 gap-[30px]">
//             <Link href="/">
//               <img
//                 src="/svg/telegram.svg"
//                 alt="Instagram"
//                 width={27}
//                 height={27}
//               />
//             </Link>
//             <Link href="/">
//               <img
//                 src="/svg/instagramm.svg"
//                 alt="Telegram"
//                 width={27}
//                 height={27}
//               />
//             </Link>
//             <Link href="/">
//               <img
//                 src="/svg/facebook.svg"
//                 alt="Facebook"
//                 width={27}
//                 height={27}
//               />
//             </Link>
//           </div>

//           {/* Language Toggle & Mobile Menu */}
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center bg-gray-100 rounded-full p-1">
//               <button
//                 onClick={() => setLanguage("UZ")}
//                 className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
//                   language === "UZ"
//                     ? "bg-white text-blue-600 shadow-sm"
//                     : "text-gray-600"
//                 }`}
//               >
//                 UZ
//               </button>
//               <button
//                 onClick={() => setLanguage("RU")}
//                 className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
//                   language === "RU"
//                     ? "bg-white text-blue-600 shadow-sm"
//                     : "text-gray-600"
//                 }`}
//               >
//                 RU
//               </button>
//               <button
//                 onClick={() => setLanguage("EN")}
//                 className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
//                   language === "EN"
//                     ? "bg-white text-blue-600 shadow-sm"
//                     : "text-gray-600"
//                 }`}
//               >
//                 EN
//               </button>
//             </div>

//             <Button
//               variant="ghost"
//               size="sm"
//               className="lg:hidden"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-5 w-5" />
//               ) : (
//                 <Menu className="h-5 w-5" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 pb-4 border-t">
//             <div className="flex flex-col space-y-4 pt-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`font-medium transition-colors hover:text-[#1C3990] ${
//                     pathname === item.href ? "text-[#1C3990]" : "text-gray-700"
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {getLabel(item)}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

type Lang = "UZ" | "RU" | "EN";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Lang>("UZ");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    {
      href: "/company",
      labelUZ: "Kompaniya",
      labelRU: "Компания",
      labelEN: "Company",
    },
    {
      href: "/business",
      labelUZ: "Biznes",
      labelRU: "Бизнес",
      labelEN: "Business",
    },
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
  ];

  const getLabel = (item: any) =>
    language === "RU"
      ? item.labelRU
      : language === "EN"
      ? item.labelEN
      : item.labelUZ;

  const phoneNumber = "+998 71 777 50 66";

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

          {/* Desktop nav (unchanged) */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[16px] font-medium transition-colors hover:text-[#1C3990] ${
                  pathname === item.href ? "text-[#1C3990]" : "text-gray-700"
                }`}
              >
                {getLabel(item)}
              </Link>
            ))}
          </div>

          {/* Desktop socials + language (unchanged) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-[18px]">
              <Link href="/">
                <img
                  src="/svg/telegram.svg"
                  alt="Telegram"
                  width={27}
                  height={27}
                />
              </Link>
              <Link href="/">
                <img
                  src="/svg/instagramm.svg"
                  alt="Instagram"
                  width={27}
                  height={27}
                />
              </Link>
              <Link href="/">
                <img
                  src="/svg/facebook.svg"
                  alt="Facebook"
                  width={27}
                  height={27}
                />
              </Link>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              {(["UZ", "RU", "EN"] as const).map((lng) => (
                <button
                  key={lng}
                  onClick={() => setLanguage(lng)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                    language === lng
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600"
                  }`}
                >
                  {lng}
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

      {/* Mobile/Tablet fullscreen menu (h-screen to show fully on open) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-[#1C3990] text-white h-screen overflow-y-auto flex flex-col">
            {/* top bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 pt-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/svg/TASlogo.svg"
                  alt="logo"
                  className="h-8 w-auto opacity-90"
                />
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* centered content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 text-center">
              {/* pages */}
              <nav className="flex flex-col items-center gap-4 text-[18px]">
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
                    {getLabel(item)}
                  </Link>
                ))}
              </nav>

              {/* phone */}
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="mt-1 inline-flex items-center gap-2 opacity-95 hover:opacity-100"
              >
                <Phone className="h-5 w-5" />
                <span className="tracking-wide">{phoneNumber}</span>
              </a>

              {/* language row */}
              <div className="flex items-center gap-5 text-sm mt-1">
                {(["RU", "UZ", "EN"] as const).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => setLanguage(lng)}
                    className={`uppercase tracking-wide ${
                      language === lng
                        ? "underline underline-offset-4"
                        : "opacity-90 hover:opacity-100"
                    }`}
                  >
                    {lng === "UZ" ? "O‘Z" : lng}
                  </button>
                ))}
              </div>

              {/* socials */}
              <div className="flex items-center gap-6 mt-2">
                {/* Agar oq ikonkalaringiz yo‘q bo‘lsa, invert bilan oq qilib ko‘rsatamiz */}
                <Link
                  href="/"
                  aria-label="Telegram"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img
                    src="/svg/telegram.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="brightness-0 invert"
                  />
                </Link>
                <Link
                  href="/"
                  aria-label="Instagram"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img
                    src="/svg/instagramm.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="brightness-0 invert"
                  />
                </Link>
                <Link
                  href="/"
                  aria-label="Facebook"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img
                    src="/svg/facebook.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="brightness-0 invert"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
