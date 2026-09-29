import * as React from "react";
import { CheckCircle2 } from "lucide-react";

export function CreatorManageSection() {
  const checklist = [
    "Effortless Creation",
    "Seamless Monetization",
    "Flexibility and Autonomy",
    "Active Community",
  ];

  return (
    <section className="w-full bg-slate-50/60 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Instructor Image with Blue Stats Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative z-10 w-72 sm:w-88 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
                alt="Instructor teaching"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stat Pill: Enrolled now $100.00 */}
            <div className="absolute -left-4 top-10 z-20 bg-[#0047FF] text-white rounded-2xl px-4 py-2.5 shadow-xl space-y-0.5">
              <div className="text-[9px] text-blue-200">Enrolled now</div>
              <div className="text-sm font-extrabold">$100.00</div>
            </div>

            {/* Floating Stat Pill: Earned $15,110.85 */}
            <div className="absolute -left-2 top-28 z-20 bg-[#0047FF] text-white rounded-2xl px-4 py-2.5 shadow-xl space-y-0.5">
              <div className="text-[9px] text-blue-200">Earned</div>
              <div className="text-sm font-extrabold flex items-center gap-1.5">
                <span>$15,110.85</span>
                <span className="text-[10px] bg-[#D2FF00] text-[#0f172a] px-1.5 py-0.2 rounded font-bold">
                  75%
                </span>
              </div>
            </div>

            {/* Happy Students Widget */}
            <div className="absolute -right-2 bottom-6 z-20 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-100">
              <div className="text-[9px] font-bold text-slate-800">Happy Students</div>
              <div className="flex -space-x-1 pt-1">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full bg-slate-400 ring-1 ring-white inline-block"
                  />
                ))}
                <span className="w-4 h-4 rounded-full bg-[#D2FF00] text-[#0f172a] text-[7px] font-bold flex items-center justify-center ring-1 ring-white">
                  26+
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text Content & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              <strong>ByteSpace</strong> provides all the tools you need to create, publish, and monetize your educational content.
            </p>

            <div className="space-y-3 pt-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0047FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
