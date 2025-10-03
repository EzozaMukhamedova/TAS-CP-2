import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import I18nProvider from "./i18n-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tokyo Asset Solution",
  description:
    "Professional real estate services including property renovation, redevelopment, asset management, renewable energy, consulting, and overseas business development since 2009.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={inter.className}>
        <I18nProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
