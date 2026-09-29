"use client";

import * as React from "react";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { coursesData } from "@/data/mock-data";
import { CourseFilterBar } from "@/components/courses/course-filter-bar";
import { CourseCard } from "@/components/courses/course-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("Featured");
  const [selectedLevel, setSelectedLevel] = React.useState("All Levels");
  const [sortBy, setSortBy] = React.useState("most-relevant");
  const [currentPage, setCurrentPage] = React.useState(1);

  // Filter and sort courses
  const filteredCourses = React.useMemo(() => {
    let list = [...coursesData];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.creator.name.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "Featured" && selectedCategory !== "All") {
      list = list.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Level filter
    if (selectedLevel && selectedLevel !== "All Levels") {
      list = list.filter((c) => c.level === selectedLevel);
    }

    // Sort
    if (sortBy === "highest-rated") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  // For a rich 12-card grid display, repeat / paginate smoothly
  const totalCards = filteredCourses.length >= 12 ? filteredCourses : [...filteredCourses, ...coursesData.slice(0, 12 - filteredCourses.length)];
  const displayCourses = totalCards.slice(0, 12);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Blueprint Header with Search Bar */}
      <section className="w-full blueprint-grid text-white py-14 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            Find Your Next Course
          </h1>

          {/* Pill Search Input with Lime Dropdown Pill */}
          <div className="max-w-2xl mx-auto relative flex items-center">
            <div className="relative w-full">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, instructors, topics..."
                className="w-full h-13 pl-12 pr-32 rounded-full border-none shadow-xl text-slate-800 text-sm focus:ring-4 focus:ring-white/30"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4.5 top-4" />
            </div>

            {/* Courses Dropdown Pill inside Search Box */}
            <div className="absolute right-1.5 top-1.5 bottom-1.5 flex items-center">
              <Button
                variant="lime"
                size="pill"
                className="h-10 px-4 text-xs font-bold gap-1 shadow-sm"
              >
                <span>Courses</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Filters and Category Pills */}
        <CourseFilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          sortBy={sortBy}
          onSelectSort={setSortBy}
        />

        {/* 12-Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCourses.map((course, idx) => (
            <CourseCard key={`${course.id}-${idx}`} course={course} />
          ))}
        </div>

        {/* Pagination Bar */}
        <div className="flex items-center justify-center gap-2 pt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                currentPage === page
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200 font-bold"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
