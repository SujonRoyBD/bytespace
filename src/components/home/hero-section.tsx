"use client";

import * as React from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="w-full min-h-[780px] sm:min-h-[880px] lg:min-h-[960px] h-auto blueprint-grid text-white pt-10 sm:pt-16 pb-0 relative overflow-hidden flex flex-col justify-between">
      {/* 1. Yellow Pitch (Top-Left Lime Spiral) */}
      <div className="absolute top-4 sm:top-10 left-2 sm:left-6 lg:left-12 w-20 sm:w-36 lg:w-48 pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/yellowpitch.png"
          alt="3D Yellow Pitch"
          width={220}
          height={220}
          priority
          className="w-full h-auto object-contain -rotate-12 drop-shadow-xl"
        />
      </div>

      {/* 2. White Pitch (Mid-Left White Squiggle) */}
      <div className="absolute top-[36%] sm:top-[38%] left-3 sm:left-12 lg:left-24 w-12 sm:w-20 lg:w-28 pointer-events-none select-none z-10 animate-float-reverse opacity-90 sm:opacity-100">
        <Image
          src="/images/whitepitch.png"
          alt="3D White Squiggle"
          width={140}
          height={140}
          priority
          className="w-full h-auto object-contain -rotate-12 drop-shadow-lg"
        />
      </div>

      {/* 3. Rounded Torus Ring (Bottom-Left Donut) */}
      <div className="absolute bottom-4 sm:bottom-8 left-2 sm:left-6 lg:left-12 w-24 sm:w-44 lg:w-64 pointer-events-none select-none z-20 animate-float-slow">
        <Image
          src="/images/rounded.png"
          alt="3D Rounded Torus"
          width={280}
          height={280}
          priority
          className="w-full h-auto object-contain -rotate-6 drop-shadow-2xl"
        />
      </div>

      {/* 4. Right Site (Top-Right Lime 3D Cylinder) */}
      <div className="absolute top-4 sm:top-8 -right-2 sm:right-4 lg:right-10 w-24 sm:w-40 lg:w-60 pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/images/rightSite.png"
          alt="3D Lime Cylinder"
          width={260}
          height={320}
          priority
          className="w-full h-auto object-contain rotate-[-6deg] drop-shadow-2xl"
        />
      </div>

      {/* 5. Trivuj (Mid-Right White Pyramid/Triangle) */}
      <div className="absolute top-[40%] sm:top-[42%] right-4 sm:right-16 lg:right-28 w-14 sm:w-24 lg:w-36 pointer-events-none select-none z-10 animate-float-slow opacity-90 sm:opacity-100">
        <Image
          src="/images/trivuj.png"
          alt="3D White Triangle"
          width={180}
          height={180}
          priority
          className="w-full h-auto object-contain rotate-12 drop-shadow-xl"
        />
      </div>

      {/* 6. White Pitch (Bottom-Right White Squiggle) */}
      <div className="absolute bottom-6 sm:bottom-12 right-2 sm:right-8 lg:right-16 w-16 sm:w-28 lg:w-40 pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/images/whitepitch.png"
          alt="3D White Pitch"
          width={180}
          height={180}
          priority
          className="w-full h-auto object-contain rotate-45 drop-shadow-xl"
        />
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-6 pt-2">
        {/* Main Headline */}
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[115%] sm:leading-[118%] tracking-tight text-center max-w-5xl mx-auto px-2 text-white">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="font-satoshi font-normal text-xs sm:text-base md:text-[18px] leading-[160%] text-center max-w-2xl mx-auto px-2 text-slate-100 mt-3 sm:mt-5">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar Container */}
        <div className="max-w-xl mx-auto mt-4 sm:mt-8 px-2 w-full">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full"
          >
            <div className="relative flex items-center bg-white rounded-full px-4 py-2 sm:py-3 shadow-2xl flex-1 min-w-0 border border-white/20">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mr-2.5 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-slate-900 text-xs sm:text-sm focus:outline-none placeholder:text-slate-400 font-normal min-w-0"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D2FF00] hover:bg-[#c2ee00] text-slate-950 font-bold text-xs sm:text-sm px-5 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all shrink-0 shadow-lg active:scale-95 cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* CENTERPIECE SHOWCASE (Lime Circle + Student Image + Floating Cards) */}
      <div className="relative w-full max-w-5xl mx-auto mt-8 sm:mt-12 flex items-end justify-center z-10 min-h-[340px] xs:min-h-[400px] sm:min-h-[500px] lg:min-h-[580px] overflow-visible">
        {/* Giant Lime Green Circle Background */}
        <div className="absolute bottom-0 w-[280px] h-[280px] xs:w-[340px] xs:h-[340px] sm:w-[540px] sm:h-[540px] md:w-[680px] md:h-[680px] lg:w-[840px] lg:h-[840px] rounded-full bg-[#D2FF00] z-0 translate-y-[35%] sm:translate-y-[50%]" />

        {/* Student Image Cutout */}
        <div className="relative z-10 w-[260px] xs:w-[320px] sm:w-[460px] md:w-[540px] lg:w-[620px] h-auto flex items-end justify-center pointer-events-none select-none translate-y-8 sm:translate-y-16 lg:translate-y-33">
          <Image
            src="/images/profetional-groth.png"
            alt="ByteSpace Student"
            width={640}
            height={640}
            priority
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Floating Card 1: UI/UX Design (Left) */}
        <div className="absolute left-1 xs:left-4 sm:left-10 lg:left-16 top-[20%] sm:top-[28%] lg:top-[32%] z-20 bg-white rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3.5 shadow-2xl border border-slate-100 text-slate-900 text-left animate-in fade-in zoom-in duration-300">
          <div className="font-satoshi font-semibold text-xs sm:text-sm lg:text-[16px] leading-tight text-slate-900">
            UI/UX Design
          </div>
          <div className="font-satoshi font-normal text-[10px] sm:text-xs lg:text-[12px] text-slate-500 mt-0.5 whitespace-nowrap">
            200 Courses &nbsp;•&nbsp; 1000+ Students
          </div>
        </div>

        {/* Floating Card 2: Learning Progress 55% (Right) */}
        <div className="absolute right-1 xs:right-4 sm:right-10 lg:right-16 top-[25%] sm:top-[30%] lg:top-[34%] z-20 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 shadow-2xl border border-slate-100 text-slate-900 text-left w-32 xs:w-40 sm:w-48 lg:w-56 animate-in fade-in zoom-in duration-500">
          <div className="font-satoshi font-medium text-[10px] sm:text-xs lg:text-sm text-slate-500">
            Learning Progress
          </div>
          <div className="font-bold text-xl sm:text-3xl lg:text-4xl text-slate-900 my-0.5 sm:my-1 font-sans">
            55%
          </div>
          <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden mt-1 sm:mt-1.5">
            <div className="h-full w-[55%] bg-[#D2FF00] rounded-full" />
          </div>
        </div>

        {/* Floating Card 3: Happy Students (Bottom Left) */}
        <div className="absolute left-2 xs:left-6 sm:left-14 lg:left-24 bottom-[10%] sm:bottom-[14%] lg:bottom-[18%] z-20 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 lg:p-4 shadow-2xl border border-slate-100 text-slate-900 text-left animate-in fade-in zoom-in duration-700">
          <div className="font-satoshi font-semibold text-xs sm:text-sm lg:text-[16px] leading-tight text-slate-900">
            Happy Students
          </div>
          <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-slate-700 my-0.5 sm:my-1">
            <span className="font-satoshi font-normal text-[10px] sm:text-xs text-slate-600">
              4.5 (240)
            </span>
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FFB800] text-[#FFB800]" />
          </div>
          <div className="flex items-center -space-x-1 sm:-space-x-1.5 mt-1">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Happy student"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full object-cover ring-2 ring-white"
              />
            ))}
            <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#D2FF00] text-slate-950 text-[8px] sm:text-[9px] md:text-[10px] font-bold flex items-center justify-center ring-2 ring-white shrink-0">
              2K+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
