"use client";

import * as React from "react";
import { coursesData } from "@/data/mock-data";
import { CourseCard } from "@/components/courses/course-card";
import { cn } from "@/lib/utils";

export function FeaturedCoursesSection() {
  const [activeCategory, setActiveCategory] = React.useState("Featured");

  const categoryPillsList = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ];

  // Filter 6 courses based on selected category pill
  const filteredCourses = React.useMemo(() => {
    if (activeCategory === "Featured" || activeCategory === "+ More") {
      return coursesData.slice(0, 6);
    }
    const matches = coursesData.filter(
      (c) => c.category.toLowerCase() === activeCategory.toLowerCase(),
    );
    return matches.length > 0 ? matches : coursesData.slice(0, 6);
  }, [activeCategory]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-[44px] leading-[120%] tracking-tight text-slate-900 text-center">
          Discover Your Passion, <br />
          Build Your Skills
        </h2>
        <p className="font-satoshi font-normal text-sm sm:text-base md:text-[18px] leading-[160%] text-slate-600 text-center max-w-2xl mx-auto">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Category Pills List */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto px-2">
        {categoryPillsList.map((cat) => {
          const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();

          if (cat === "+ More") {
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-3.5 py-2 text-xs sm:text-sm font-bold text-[#0047FF] hover:underline transition-all cursor-pointer font-satoshi"
              >
                + More
              </button>
            );
          }

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm transition-all cursor-pointer font-satoshi whitespace-nowrap",
                isSelected
                  ? "bg-[#D4FB20] text-slate-950 font-bold shadow-xs"
                  : "bg-[#F3F4F6] hover:bg-slate-200/80 text-slate-700 font-medium",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 6 Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
