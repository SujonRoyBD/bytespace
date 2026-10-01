import * as React from "react";
import { Check, Star } from "lucide-react";

export function CreatorManageSection() {
  const checklist = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <section className="w-full  overflow-hidden relative bg-[#FAFAFA]">
      <div
        className="absolute -bottom-10 -left-10 w-[300px] sm:w-[550px] lg:w-[750px] h-[300px] sm:h-[550px] lg:h-[750px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 30% 70%, rgba(203, 252, 1, 0.35) 0%, rgba(203, 252, 1, 0.08) 53%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      <div
        className="absolute -bottom-10 -right-10 w-[300px] sm:w-[550px] lg:w-[750px] h-[300px] sm:h-[550px] lg:h-[750px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 70% 70%, rgba(0, 59, 226, 0.12) 0%, rgba(0, 59, 226, 0.03) 50%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] xs:min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] pt-4 sm:pt-6 pb-6 sm:pb-10">
            <div className="absolute left-1 sm:left-4 md:left-6 top-2 sm:top-6 lg:top-10 z-10 space-y-2 sm:space-y-3.5">
              {/* Card 1:  */}
              <div className="w-[145px] xs:w-[170px] sm:w-[200px] lg:w-[220px] bg-[#003BE2] text-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 lg:p-4 shadow-2xl space-y-0.5 sm:space-y-1 border border-blue-400/20">
                <div className="text-[10px] sm:text-[11px] font-medium text-blue-100">
                  Total Revenue
                </div>
                <div className="text-[8px] sm:text-[9px] text-blue-200 font-medium">
                  July 1-28
                </div>
                <div className="text-base sm:text-xl lg:text-2xl font-bold text-white tracking-tight font-sans mt-0.5">
                  $120.29
                </div>
                <div className="w-full h-1 sm:h-1.5 bg-blue-900/50 rounded-full overflow-hidden mt-1 sm:mt-2">
                  <div className="h-full w-[65%] bg-[#D2FF00] rounded-full" />
                </div>
              </div>

              {/* Card 2: Year to Date */}
              <div className="w-[145px] xs:w-[170px] sm:w-[200px] lg:w-[220px] bg-[#003BE2] text-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 lg:p-4 shadow-2xl space-y-0.5 sm:space-y-1 border border-blue-400/20">
                <div className="text-[10px] sm:text-[11px] font-medium text-blue-100">
                  Year to Date
                </div>
                <div className="text-[8px] sm:text-[9px] text-blue-200 font-medium">
                  2023
                </div>
                <div className="flex items-center justify-between pt-0.5">
                  <span className="text-base sm:text-xl lg:text-2xl font-bold text-white tracking-tight font-sans">
                    $1,200.38
                  </span>
                  <span className="text-[9px] sm:text-[10px] bg-[#D2FF00] text-slate-950 font-bold px-1.5 sm:px-2 py-0.5 rounded-md">
                    +12$
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute right-4 sm:right-32 lg:right-60 top-6 sm:top-16 lg:top-24 rotate-20 z-10 w-16 sm:w-24 lg:w-32 pointer-events-none select-none animate-float-slow">
              <img
                src="/images/2dpitch.png"
                alt="3D Lime Pitch"
                className="w-full h-auto object-contain drop-shadow-xl rotate-12"
              />
            </div>

            {/* Layer 3: Instructor / Creator Image */}
            <div className="relative z-20 w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[540px] h-[340px] xs:h-[400px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden mt-0 sm:-mt-5 transform translate-x-4 xs:translate-x-6 sm:-translate-x-6 lg:-translate-x-11 flex items-center justify-center">
              <img
                src="/images/Image.png"
                alt="ByteSpace Creator"
                className="w-full h-full object-contain object-top max-w-full"
              />
            </div>

            {/* Layer 4: Floating Happy Students Card (Bottom Right Overlay) */}
            <div className="absolute right-1 sm:right-4 md:right-8 lg:right-22 top-[40%] sm:top-[45%] z-30 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-4.5 shadow-2xl border border-slate-100 text-left w-36 xs:w-44 sm:w-52 lg:w-60">
              <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-slate-900">
                Happy Students
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-slate-600 font-medium my-0.5 sm:my-1">
                <span className="font-bold text-slate-900">4.5</span>

                <span className="text-slate-400 text-[10px] sm:text-[11px]">
                  (240)
                </span>

                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FFB800] text-[#FFB800]" />
              </div>

              <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-1 sm:mt-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
                ].map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt="Student"
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full object-cover ring-2 ring-white"
                  />
                ))}

                <span className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-[#D2FF00] text-[#0f172a] text-[8px] sm:text-[9px] lg:text-[10px] font-extrabold flex items-center justify-center ring-2 ring-white shrink-0">
                  2K+
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text Content & Checklist */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-[44px] leading-[120%] tracking-[-1%] text-slate-900">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>

            <p className="font-satoshi font-normal text-xs sm:text-base md:text-[18px] leading-[160%] text-slate-600 max-w-lg">
              <strong className="text-slate-900 font-semibold">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#003BE2] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-satoshi text-xs sm:text-base font-semibold text-slate-800">
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
