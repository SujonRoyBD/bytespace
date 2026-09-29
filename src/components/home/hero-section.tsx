"use client";

import * as React from "react";
import { Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="w-full blueprint-grid text-white pt-16 pb-24 sm:pb-32 relative overflow-hidden">
      {/* 3D Shapes & Squiggles Backdrop */}
      <div className="absolute top-12 left-8 sm:left-16 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[10px] sm:border-[14px] border-[#D2FF00] rotate-45 pointer-events-none opacity-90 shadow-2xl animate-pulse-subtle" />
      <div className="absolute top-16 right-10 sm:right-24 w-12 h-16 sm:w-16 sm:h-20 bg-[#D2FF00] rounded-2xl rotate-12 pointer-events-none opacity-90 shadow-xl" />

      {/* White squiggles (SVG) */}
      <svg
        className="absolute top-36 left-12 sm:left-28 w-16 h-12 text-white/80 pointer-events-none"
        viewBox="0 0 100 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <path d="M10 20 Q 25 5, 40 20 T 70 20 T 90 20" />
      </svg>

      <svg
        className="absolute top-32 right-12 sm:right-32 w-16 h-12 text-white/80 pointer-events-none"
        viewBox="0 0 100 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <path d="M10 20 Q 25 5, 40 20 T 70 20 T 90 20" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto font-sans">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        <p className="text-xs sm:text-sm text-blue-100/90 max-w-2xl mx-auto font-normal">
          Unlock your potential with expert-led education and take your career to the next level today.
        </p>

        {/* Pill Search Input */}
        <div className="max-w-xl mx-auto pt-2 pb-6">
          <form
            onSubmit={handleSearch}
            className="relative flex items-center bg-white rounded-full p-1.5 shadow-2xl border border-white/20"
          >
            <Search className="w-5 h-5 text-slate-400 ml-4 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything..."
              className="w-full bg-transparent text-slate-900 text-xs sm:text-sm focus:outline-none placeholder:text-slate-400 py-2"
            />
            <Button
              type="submit"
              variant="lime"
              size="pill"
              className="px-6 py-2.5 text-xs font-bold shrink-0 shadow-md"
            >
              Search
            </Button>
          </form>
        </div>

        {/* Hero Person Visual Centerpiece with Lime Backdrop & Floating Widgets */}
        <div className="relative max-w-xl mx-auto mt-6 flex items-center justify-center">
          {/* Bright Lime Circle Backdrop */}
          <div className="w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#D2FF00] absolute -bottom-10 z-0 shadow-2xl shadow-lime-500/20" />

          {/* Person Image */}
          <div className="relative z-10 w-64 sm:w-80 overflow-hidden pt-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
              alt="Student learner with laptop"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Floating Widget 1: Top-Left (100+ Design Courses) */}
          <div className="absolute -left-4 sm:-left-12 top-6 z-20 bg-white rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-slate-100 text-slate-900 text-left animate-in fade-in zoom-in duration-300">
            <div className="text-[11px] font-bold">100+ Design Courses</div>
            <div className="flex items-center gap-1 text-[10px] text-slate-600 font-semibold mt-0.5">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.9 (12k+)</span>
            </div>
          </div>

          {/* Floating Widget 2: Top-Right (Learning Progress 55%) */}
          <div className="absolute -right-4 sm:-right-12 top-10 z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100 text-slate-900 text-left w-36 sm:w-44 animate-in fade-in zoom-in duration-500">
            <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500">
              <span>Learning Progress</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5 mb-1.5">
              55%
            </div>
            <Progress value={55} indicatorColor="bg-[#D2FF00]" height="h-2" />
          </div>

          {/* Floating Widget 3: Bottom-Left (Happy Students 4.5 240) */}
          <div className="absolute -left-2 sm:-left-8 -bottom-4 z-20 bg-white rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-slate-100 text-slate-900 text-left">
            <div className="text-[10px] font-bold">Happy Students</div>
            <div className="flex items-center gap-1 text-[9px] text-slate-600 font-semibold mb-1">
              <span>4.5 (240)</span>
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            </div>
            <div className="flex -space-x-1.5">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Student"
                  className="w-5 h-5 rounded-full object-cover ring-2 ring-white"
                />
              ))}
              <span className="w-5 h-5 rounded-full bg-[#D2FF00] text-[#0f172a] text-[8px] font-bold flex items-center justify-center ring-2 ring-white">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
