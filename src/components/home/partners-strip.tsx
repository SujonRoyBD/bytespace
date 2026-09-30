import * as React from "react";

const PARTNERS = [
  "/images/logopsum1.png",
  "/images/logopsum2.png",
  "/images/logopsum3.png",
  "/images/logopsum4.png",
  "/images/logopsum5.png",
];

export function PartnersStrip() {
  const logos = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="w-full bg-[#F5F5F6] border-y border-slate-200/80 py-10 overflow-hidden select-none">
      <div className="w-full overflow-hidden flex relative items-center">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {logos.map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 opacity-75 hover:opacity-100 transition-all cursor-pointer h-8 sm:h-10"
            >
              <img
                src={src}
                alt={`Partner logo ${index + 1}`}
                className="h-full w-auto object-contain max-w-[130px] sm:max-w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
