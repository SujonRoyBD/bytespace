import * as React from "react";

export function PartnersStrip() {
  return (
    <section className="w-full bg-slate-50 border-b border-slate-200/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2 text-slate-500 font-bold text-sm">
              <div className="w-5 h-5 rounded-full bg-slate-400 flex items-center justify-center text-white text-[10px]">
                ⬡
              </div>
              <span>Logoipsum</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
