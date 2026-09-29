"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { coursesData } from "@/data/mock-data";
import { CourseHero } from "@/components/courses/course-hero";
import { CourseAboutTab } from "@/components/courses/course-about-tab";
import { CourseLessonsTab } from "@/components/courses/course-lessons-tab";
import { CourseReviewsTab } from "@/components/courses/course-reviews-tab";
import { Button } from "@/components/ui/button";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = (params?.id as string) || "build-digital-asset";

  // Find course or default to primary build-digital-asset course
  const course =
    coursesData.find((c) => c.id === courseId) || coursesData[0];

  const [activeTab, setActiveTab] = React.useState<"about" | "lesson" | "reviews">("about");

  const tabs: { id: "about" | "lesson" | "reviews"; label: string }[] = [
    { id: "about", label: "About" },
    { id: "lesson", label: "Lesson" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Electric Blue Blueprint Grid Hero */}
      <CourseHero course={course} />

      {/* Tabs & Tab Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Main Column: Tabs + Tab Panels */}
          <div className="lg:col-span-8">
            {/* Pill Tab Switcher */}
            <div className="flex items-center gap-2 mb-4">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    variant={isActive ? "lime" : "tab"}
                    size="pill"
                    className={`font-semibold px-6 py-2 text-xs md:text-sm transition-all ${
                      isActive
                        ? "shadow-sm scale-105"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </Button>
                );
              })}
            </div>

            {/* Tab Panels */}
            <div>
              {activeTab === "about" && <CourseAboutTab course={course} />}
              {activeTab === "lesson" && <CourseLessonsTab course={course} />}
              {activeTab === "reviews" && <CourseReviewsTab course={course} />}
            </div>
          </div>

          {/* Right Column: Empty spacer to match hero grid layout alignment */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>
    </div>
  );
}
