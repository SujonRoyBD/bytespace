import * as React from "react";
import { BarChart3 } from "lucide-react";

export function GrowthSection() {
  return (
    <section className="w-full py-12 sm:py-20 lg:py-24 overflow-hidden relative bg-[#FAFAFA]">
      {/* Background Radial Gradient Glow at Top Left */}
      <div
        className="absolute -top-10 -left-10 w-[300px] sm:w-[550px] lg:w-[750px] h-[300px] sm:h-[550px] lg:h-[750px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 30%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Text Content & Stats */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-[44px] leading-[120%] tracking-[-1%] text-slate-900">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="font-satoshi font-normal text-xs sm:text-base md:text-[18px] leading-[160%] text-slate-600 max-w-lg">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex items-center gap-4 sm:gap-8 lg:gap-10 pt-2 sm:pt-4 flex-wrap sm:flex-nowrap">
              <div>
                <div className="font-bold text-xl sm:text-3xl lg:text-[36px] leading-tight text-[#003BE2] font-sans">
                  12K
                </div>
                <div className="font-satoshi text-xs sm:text-sm text-slate-500 font-medium mt-0.5 sm:mt-1">
                  Students
                </div>
              </div>

              <div className="w-px h-8 sm:h-10 bg-slate-200" />

              <div>
                <div className="font-bold text-xl sm:text-3xl lg:text-[36px] leading-tight text-[#003BE2] font-sans">
                  70+
                </div>
                <div className="font-satoshi text-xs sm:text-sm text-slate-500 font-medium mt-0.5 sm:mt-1">
                  Courses
                </div>
              </div>

              <div className="w-px h-8 sm:h-10 bg-slate-200" />

              <div>
                <div className="font-bold text-xl sm:text-3xl lg:text-[36px] leading-tight text-[#003BE2] font-sans">
                  16
                </div>
                <div className="font-satoshi text-xs sm:text-sm text-slate-500 font-medium mt-0.5 sm:mt-1">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Showcase (Card -> Student cutout -> Progress Card -> 3D Pitch) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] xs:min-h-[440px] sm:min-h-[500px] lg:min-h-[520px] pt-4 sm:pt-6 pb-6 sm:pb-10">
            {/* Layer 1: Course Card (Background Left) */}
            <div className="relative z-10 w-[230px] xs:w-[270px] sm:w-[310px] lg:w-[340px] bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-100 text-left transform -translate-x-4 xs:-translate-x-8 sm:-translate-x-12 -translate-y-2">
              {/* Course Thumbnail */}
              <div className="relative w-full h-28 xs:h-36 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 mb-2 sm:mb-3">
                <img
                  src="https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=600&auto=format&fit=crop&q=80"
                  alt="Learn Figma from Basic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 flex items-center justify-between text-[9px] sm:text-xs text-white">
                  <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium">
                    17 Lessons
                  </span>
                  <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium">
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 leading-snug">
                  Learn Figma from Basic
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  by{" "}
                  <span className="text-[#003BE2] font-semibold">
                    purepearl studio
                  </span>
                </p>

                <div className="flex items-center gap-2 pt-1 sm:pt-2">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                    <BarChart3 className="w-3 h-3 text-slate-500" />
                    Beginner
                  </span>

                  <div className="flex items-center -space-x-1.5 overflow-hidden">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
                    ].map((avatar, idx) => (
                      <img
                        key={idx}
                        src={avatar}
                        alt="Student"
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover ring-2 ring-white"
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-1 sm:pt-2">
                  <span className="font-extrabold text-base sm:text-lg lg:text-xl text-[#003BE2]">
                    $25
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Layer 2: Student Cutout (Popping out over Course Card) */}
            <div className="absolute right-0 xs:right-4 sm:right-8 lg:right-12 bottom-0 z-20 pointer-events-none select-none translate-x-2 xs:translate-x-6 sm:translate-x-12 lg:translate-x-20 translate-y-6 sm:translate-y-12 lg:translate-y-20 max-w-[75%] sm:max-w-none">
              <img
                src="/images/profetional-groth.png"
                alt="ByteSpace student"
                className="w-[280px] xs:w-[360px] sm:w-[460px] lg:w-[577px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Layer 3: Floating Learning Progress Card */}
            <div className="absolute right-0 sm:right-2 lg:right-4 top-2 sm:top-6 lg:top-10 z-30 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 shadow-2xl border border-slate-100 text-left w-32 xs:w-40 sm:w-48 lg:w-52">
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500">
                Learning Progress
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 my-0.5 sm:my-1 leading-none tracking-tight">
                55%
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden mt-1.5 sm:mt-2">
                <div className="h-full w-[55%] bg-[#D2FF00] rounded-full" />
              </div>
            </div>

            {/* Layer 4: 3D Lime Pitch / Spiral Squiggle (Floating top right of progress card) */}
            <div className="absolute -right-2 sm:-right-6 lg:-right-8 top-20 sm:top-24 lg:top-28 z-30 w-14 sm:w-20 lg:w-28 pointer-events-none select-none animate-float-slow">
              <img
                src="/images/2dpitch.png"
                alt="3D Lime Pitch"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

