"use client";

import { useState } from "react";

export default function RecruitmentPage() {
  const [language] = useState("UZ");

  return (
    <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      {/* Hero */}

      <section className="w-full py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-center sm:text-3xl lg:text-4xl text-3xl font-bold text-[#31519F] mb-4">
            Karyera Imkoniyatlari
          </h2>
          <p className="mt-3 text-center text-sm sm:text-base text-gray-500">
            Professional rivojlanish va muvaffaqiyat yo‘li
          </p>

          {/* Card */}
          <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="px-6 sm:px-10 py-8 text-center space-y-2">
              <p className="text-sm sm:text-base text-gray-600">
                Yangi ish o‘rinlari va kasbiy imkoniyatlar tez orada qo‘shiladi.
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#1C3990]">
                Bizning jamoamizga qo‘shilish uchun kuzatib turing!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
