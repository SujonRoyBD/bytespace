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
    <section className="w-full blueprint-grid text-white pt-10 sm:pt-14 pb-20 sm:pb-28 relative overflow-hidden">
      {/* ======================================================== */}
      {/* 3D FLOATING SHAPES (Small images with absolute positioning) */}
      {/* ======================================================== */}

      {/* 1. Yellow Pitch (Top-Left Lime Spiral) */}
      <div className="absolute top-4 sm:top-8 left-2 sm:left-6 lg:left-12 w-24 sm:w-36 lg:w-48 pointer-events-none select-none z-10 animate-float-slow">
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
      <div className="absolute top-[34%] sm:top-[38%] left-8 sm:left-16 lg:left-28 w-14 sm:w-20 lg:w-28 pointer-events-none select-none z-10 animate-float-reverse">
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
      <div className="absolute -bottom-4 sm:bottom-0 left-2 sm:left-8 lg:left-16 w-36 sm:w-52 lg:w-64 pointer-events-none select-none z-20 animate-float-slow">
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
      <div className="absolute top-2 sm:top-6 -right-4 sm:right-2 lg:right-6 w-28 sm:w-40 lg:w-52 pointer-events-none select-none z-10 animate-float-reverse">
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
      <div className="absolute top-[42%] sm:top-[44%] right-6 sm:right-16 lg:right-28 w-20 sm:w-28 lg:w-36 pointer-events-none select-none z-10 animate-float-slow">
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
      <div className="absolute -bottom-2 sm:bottom-4 right-4 sm:right-12 lg:right-20 w-24 sm:w-32 lg:w-44 pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/images/whitepitch.png"
          alt="3D White Pitch"
          width={180}
          height={180}
          priority
          className="w-full h-auto object-contain rotate-45 drop-shadow-xl"
        />
      </div>

      {/* ======================================================== */}
      {/* MAIN HERO CONTENT */}
      {/* ======================================================== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-6">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-[68px] font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto font-sans">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-[15px] text-white/85 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar Pill Container */}
        <div className="max-w-xl mx-auto pt-2 pb-2">
          <form
            onSubmit={handleSearch}
            className="relative flex items-center bg-white rounded-full p-1.5 pl-4 sm:pl-5 shadow-2xl transition-all focus-within:ring-2 focus-within:ring-[#D2FF00]/50"
          >
            <Search className="w-5 h-5 text-slate-400 mr-2.5 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-slate-900 text-xs sm:text-sm focus:outline-none placeholder:text-slate-400 font-normal py-2"
            />
            <button
              type="submit"
              className="bg-[#D2FF00] hover:bg-[#c2ee00] text-slate-950 font-bold text-xs sm:text-sm px-6 sm:px-7 py-2.5 rounded-full transition-all shrink-0 shadow-sm active:scale-95 cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        {/* ======================================================== */}
        {/* CENTERPIECE: Lime Circle + Student Cutout + 3 Float Cards */}
        {/* ======================================================== */}
        <div className="relative max-w-lg sm:max-w-xl mx-auto mt-6 sm:mt-10 flex items-center justify-center">
          {/* Giant Lime Green Circle */}
          <div className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#D2FF00] overflow-hidden flex items-end justify-center shadow-2xl">
            {/* Student Image */}
            <Image
              src="/images/student.jpg"
              alt="ByteSpace student learning online"
              width={540}
              height={540}
              priority
              className="w-full h-full object-cover object-top select-none pointer-events-none"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Left) */}
          <div className="absolute -left-2 sm:-left-12 lg:-left-20 top-[18%] sm:top-[20%] z-30 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl border border-slate-100 text-slate-900 text-left animate-in fade-in zoom-in duration-300">
            <div className="text-xs sm:text-sm font-bold text-slate-900">
              UI/UX Design
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </div>
          </div>

          {/* Floating Card 2: Learning Progress 55% (Right) */}
          <div className="absolute -right-2 sm:-right-10 lg:-right-16 top-[20%] sm:top-[22%] z-30 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 text-slate-900 text-left w-40 sm:w-48 animate-in fade-in zoom-in duration-500">
            <div className="text-[10px] sm:text-xs font-semibold text-slate-500">
              Learning Progress
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 my-1 leading-none tracking-tight">
              55%
            </div>
            <div className="w-full h-2 sm:h-2.5 bg-slate-100 rounded-full overflow-hidden mt-1.5">
              <div className="h-full w-[55%] bg-[#D2FF00] rounded-full" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom Left) */}
          <div className="absolute -left-2 sm:-left-10 lg:-left-16 bottom-[8%] sm:bottom-[10%] z-30 bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100 text-slate-900 text-left animate-in fade-in zoom-in duration-700">
            <div className="text-xs sm:text-sm font-bold text-slate-900">
              Happy Students
            </div>
            <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-slate-700 my-1">
              <span>4.5 (240)</span>
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FFB800] text-[#FFB800]" />
            </div>
            <div className="flex items-center -space-x-1.5 mt-1">
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
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-2 ring-white"
                />
              ))}
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D2FF00] text-[#0f172a] text-[9px] sm:text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
