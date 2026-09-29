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
    "Project & Products",
    "Web Front-End",
    "Health",
    "Personal & Career Development",
    "Financial Concept",
    "Photography",
    "Free Availability",
    "Data Development",
    "Basic Python",
    "Cooking",
    "+ More",
  ];

  // Filter 6 courses based on selected category pill
  const filteredCourses = React.useMemo(() => {
    if (activeCategory === "Featured" || activeCategory === "+ More") {
      return coursesData.slice(0, 6);
    }
    const matches = coursesData.filter(
      (c) => c.category.toLowerCase() === activeCategory.toLowerCase()
    );
    return matches.length > 0 ? matches : coursesData.slice(0, 6);
  }, [activeCategory]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
          Discover Your Passion, <br />
          Build Your Skills
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Explore our 10+ categories and courses. Choose your path and enhance your skills.
        </p>
      </div>

      {/* Category Pills List */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {categoryPillsList.map((cat) => {
          const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                isSelected
                  ? "bg-[#D2FF00] text-[#0f172a] shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
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
