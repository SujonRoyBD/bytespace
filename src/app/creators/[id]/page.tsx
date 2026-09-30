"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { creatorsData, coursesData } from "@/data/mock-data";
import { CreatorHero } from "@/components/creators/creator-hero";
import { CourseFilterBar } from "@/components/courses/course-filter-bar";
import { CourseCard } from "@/components/courses/course-card";

export default function CreatorProfilePage() {
  const params = useParams();
  const creatorId = (params?.id as string) || "purepearl-studio";

  const creator = creatorsData[creatorId] || creatorsData["purepearl-studio"];

  const [selectedCategory, setSelectedCategory] = React.useState("Featured");
  const [selectedLevel, setSelectedLevel] = React.useState("All Levels");
  const [sortBy, setSortBy] = React.useState("most-relevant");

  // Get courses associated with this creator
  const creatorCourses = React.useMemo(() => {
    let list = coursesData.filter(
      (c) => c.creatorId === creator.id || c.creator.id === creator.id
    );

    if (selectedLevel && selectedLevel !== "All Levels") {
      list = list.filter((c) => c.level === selectedLevel);
    }

    if (selectedCategory && selectedCategory !== "Featured" && selectedCategory !== "All") {
      list = list.filter(
        (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortBy === "highest-rated") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [creator.id, selectedLevel, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Blueprint Creator Hero */}
      {/* <CreatorHero creator={creator} /> */}

      {/* Creator Course Catalog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        {/* Filters Row */}
        <CourseFilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          sortBy={sortBy}
          onSelectSort={setSortBy}
          showCategoryPills={false}
        />

        {/* 6 Course Grid for this Creator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
