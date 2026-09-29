import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function GrowthSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text Content & Stats */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Your Path to Professional <br />
            Growth Starts Here!
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
            Explore our comprehensive curriculum designed to equip you with the skills demanded by today&apos;s job market. Whether you&apos;re a beginner or an experienced professional looking to advance your career, we have the courses to help you succeed.
          </p>

          <div className="flex items-center gap-8 pt-4 border-t border-slate-100">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0047FF]">12K</div>
              <div className="text-xs text-slate-500 mt-0.5">Students</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0047FF]">70+</div>
              <div className="text-xs text-slate-500 mt-0.5">Courses</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0047FF]">16</div>
              <div className="text-xs text-slate-500 mt-0.5">Mentors</div>
            </div>
          </div>
        </div>

        {/* Right: Visual Showcase with Person & Floating Cards */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Person Image */}
          <div className="relative z-10 w-72 sm:w-88 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
              alt="Student studying"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Card: Top Left (Learn Figma from Basic) */}
          <div className="absolute -left-4 top-6 z-20 bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-100 w-44">
            <div className="h-16 rounded-lg overflow-hidden bg-slate-200 mb-1.5">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&auto=format&fit=crop&q=80"
                alt="Figma"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-[10px] text-slate-900 truncate">Learn Figma from Basic</p>
            <p className="text-[9px] text-[#0047FF] font-bold">$25 /lifetime</p>
          </div>

          {/* Floating Card: Bottom Right (Learning Progress 55%) */}
          <div className="absolute -right-4 bottom-8 z-20 bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 w-40 text-left">
            <span className="text-[9px] font-semibold text-slate-500">Learning Progress</span>
            <div className="text-xl font-extrabold text-slate-900 my-0.5">55%</div>
            <Progress value={55} indicatorColor="bg-[#D2FF00]" height="h-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
