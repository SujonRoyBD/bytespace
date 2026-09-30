import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  BarChart3,
  MessageSquare,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group flex flex-col bg-white rounded-3xl p-4 border border-[#CED0D3] shadow-xs hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Thumbnail with overlay tags */}
      <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-slate-100">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Bottom floating metadata pills on thumbnail */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 text-[10px] text-white font-medium">
          <div className="flex items-center gap-1.5 w-full justify-between">
            <span className="font-satoshi font-medium text-[12px] leading-[120%] text-center align-middle px-2.5 py-1 rounded-full bg-[#F6F6F699] text-[#4F4F4F] border border-white/10">
              {course.lessonsCount} Lessons
            </span>
            <span className="font-satoshi font-medium text-[12px] leading-[120%] text-center align-middle px-2.5 py-1 rounded-full bg-[#F6F6F699] text-[#4F4F4F] border border-white/10">
              {course.totalDuration}
            </span>
            <span className="font-satoshi font-medium text-[12px] leading-[120%] text-center align-middle px-2.5 py-1 rounded-full bg-[#F6F6F699] text-[#4F4F4F] border border-white/10">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1 justify-between gap-3">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-[Poppins] font-semibold text-[20px] leading-[120%] tracking-[-1%] align-middle">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 shrink-0">
              <span className="font-satoshi font-normal text-[18px] leading-[160%]">
                {course.rating.toFixed(1)}
              </span>
              <Star className="w-3.5 h-3.5 fill-[#CED0D3] text-[#CED0D3]" />
            </div>
          </div>

          <p className="font-satoshi font-normal text-[12px] leading-[160%] align-middle mt-0.5">
            by{" "}
            <span className="font-satoshi font-normal text-[12px] leading-[160%] align-middle text-[#003BE2]">
              {course.creator.name.toLowerCase()}
            </span>
          </p>
        </div>

        {/* Level, Avatars & Pricing Row */}
        <div className="pt-2 border-t border-slate-50 ">
          <div className="flex items-center gap-2">
            {/* Level Pill */}
            <span className="inline-flex items-center gap-1 font-satoshi font-medium text-[12px] leading-[120%] text-center align-middle bg-slate-100 px-2.5  rounded-full py-3">
              <ChartNoAxesColumnIncreasing className="w-3 h-3  " />
              {course.level}
            </span>

            {/* Overlapping Student Avatars */}
            <div className="flex items-center -space-x-1.5 overflow-hidden">
              {(
                course.studentAvatars || [
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
                ]
              ).map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Student"
                  className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                />
              ))}
              <span className="inline-flex items-center justify-center h-5 px-1.5 rounded-full text-[10px] font-bold bg-[#D2FF00] text-[#0f172a] ring-2 ring-white">
                26+
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className=" font-semibold text-[20px] leading-[120%] tracking-[-1%] align-middle text-[#0047FF]">
              ${course.price}
            </span>
            <span className="font-satoshi font-normal text-[12px] leading-[160%] align-middle">
              /lifetime
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
