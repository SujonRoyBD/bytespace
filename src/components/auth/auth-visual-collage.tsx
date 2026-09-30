import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";

interface AuthVisualCollageProps {
  title: string;
  description: string;
}

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
];

export function AuthVisualCollage({ title, description }: AuthVisualCollageProps) {
  return (
    <div className="w-full text-white space-y-6 lg:space-y-8">
      {/* Hidden SVG defs for color filter (tints white 3D images to vibrant brand lime #D2FF00) */}
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="lime-tint-auth" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                0.824 0 0 0 0
                1.000 0 0 0 0
                0.000 0 0 0 0
                0     0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Top Logo (Lime 'b' icon) */}
      <div>
        <Link
          href="/"
          className="inline-block hover:opacity-90 transition-opacity"
          aria-label="ByteSpace Home"
        >
          <div className="w-9 h-9 overflow-hidden flex items-center">
            <Image
              src="/images/logo.png"
              alt="ByteSpace"
              width={140}
              height={36}
              priority
              className="h-8 w-auto max-w-none object-cover object-left"
            />
          </div>
        </Link>
      </div>

      {/* Heading & Subtitle */}
      <div className="space-y-2.5 max-w-md">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-satoshi">
          {description}
        </p>
      </div>

      {/* 3D Course Cards & Floating Elements Collage */}
      <div className="relative pt-6 pb-12 max-w-[460px] select-none">
        {/* 1. Back Course Card (Build Digital Asset) */}
        <div className="absolute top-10 sm:top-12 left-0 sm:left-2 z-10 w-[240px] sm:w-[270px] bg-white rounded-3xl p-3 shadow-xl -rotate-6 border border-slate-100/70 pointer-events-none">
          <div className="relative h-24 sm:h-28 rounded-2xl overflow-hidden mb-2 bg-slate-900">
            <Image
              src="/images/course2.jpg"
              alt="Build Digital Asset"
              width={300}
              height={180}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-full font-medium">
              17 Lessons
            </span>
          </div>

          <div className="space-y-0.5">
            <h5 className="font-bold text-xs sm:text-sm text-slate-900">
              Build Digital Asset
            </h5>
            <p className="text-[10px] text-slate-400 font-satoshi">
              by purepearl studio
            </p>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center gap-1 text-[9px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                <BarChart2 className="w-2.5 h-2.5" /> Beginner
              </span>
              <div className="flex -space-x-1.5 ml-0.5">
                {studentAvatars.slice(0, 3).map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="Student"
                    className="w-4 h-4 rounded-full ring-1 ring-white object-cover"
                  />
                ))}
                <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[7px] font-bold flex items-center justify-center ring-1 ring-white">
                  26+
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#0047FF]">
              $25<span className="text-[9px] text-slate-400 font-normal">/lifetime</span>
            </span>
          </div>
        </div>

        {/* 2. Foreground Main Card (the Power of Big Data) */}
        <div className="relative z-20 ml-12 sm:ml-20 w-[270px] sm:w-[310px] bg-white rounded-3xl p-3.5 sm:p-4 shadow-2xl border border-slate-100">
          <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-2.5 bg-slate-950">
            <Image
              src="/images/course3.jpg"
              alt="the Power of Big Data"
              width={400}
              height={250}
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[8px] sm:text-[9px] text-white">
              <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-full font-medium">
                17 Lessons
              </span>
              <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-full font-medium">
                2 hours 16 mins
              </span>
              <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-full font-medium">
                59 Comments
              </span>
            </div>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                the Power of Big Data
              </h4>
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                <span>4.5</span>
                <Star className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
              </div>
            </div>
            <p className="text-[10px] text-slate-400 font-satoshi">
              by purepearl studio
            </p>
          </div>

          <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 text-[9px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                <BarChart2 className="w-2.5 h-2.5" /> Beginner
              </span>
              <div className="flex -space-x-1.5">
                {studentAvatars.slice(0, 3).map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="Student"
                    className="w-4 h-4 rounded-full ring-1 ring-white object-cover"
                  />
                ))}
                <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[7px] font-bold flex items-center justify-center ring-1 ring-white">
                  26+
                </span>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#0047FF]">
              $25<span className="text-[9px] text-slate-400 font-normal">/lifetime</span>
            </span>
          </div>
        </div>

        {/* 3. Floating 3D Lime Torus (Top-Left of Front Card) */}
        <div className="absolute top-2 sm:top-0 left-4 sm:left-8 z-30 w-16 sm:w-20 lg:w-24 pointer-events-none animate-float-slow">
          <Image
            src="/images/rounded.png"
            alt="3D Lime Torus"
            width={120}
            height={120}
            style={{ filter: "url(#lime-tint-auth)" }}
            className="w-full h-auto object-contain -rotate-12 drop-shadow-xl"
          />
        </div>

        {/* 4. Floating 3D Lime Pyramid (Bottom-Left) */}
        <div className="absolute bottom-2 sm:bottom-4 -left-4 sm:left-0 z-30 w-16 sm:w-20 lg:w-24 pointer-events-none animate-float-slow">
          <Image
            src="/images/trivuj.png"
            alt="3D Lime Pyramid"
            width={120}
            height={120}
            style={{ filter: "url(#lime-tint-auth)" }}
            className="w-full h-auto object-contain rotate-12 drop-shadow-xl"
          />
        </div>

        {/* 5. Floating 3D White Squiggle (Bottom-Right behind Happy Students badge) */}
        <div className="absolute bottom-6 sm:bottom-8 right-0 sm:right-2 z-10 w-16 sm:w-22 pointer-events-none animate-float-reverse">
          <Image
            src="/images/whitepitch.png"
            alt="3D White Squiggle"
            width={120}
            height={120}
            className="w-full h-auto object-contain rotate-45 drop-shadow-lg"
          />
        </div>

        {/* 6. Happy Students Lime Widget (Bottom-Right) */}
        <div className="absolute -bottom-6 sm:-bottom-4 left-20 sm:left-28 z-30 bg-[#D2FF00] rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 shadow-xl text-slate-950 space-y-1 min-w-[190px]">
          <div className="text-[11px] sm:text-xs font-bold leading-tight">
            Happy Students
          </div>
          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold">
            <span>4.5 (240)</span>
            <Star className="w-2.5 h-2.5 fill-[#0047FF] text-[#0047FF]" />
          </div>
          <div className="flex items-center -space-x-1.5 pt-1">
            {studentAvatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Student"
                className="w-5 h-5 rounded-full ring-2 ring-white object-cover"
              />
            ))}
            <span className="w-5 h-5 rounded-full bg-slate-950 text-white text-[8px] font-bold flex items-center justify-center ring-2 ring-white">
              2K+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
