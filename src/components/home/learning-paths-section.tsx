import * as React from "react";
import Link from "next/link";
import {
  PenTool,
  Code2,
  Layout,
  Briefcase,
  Megaphone,
  Camera,
} from "lucide-react";

export function LearningPathsSection() {
  const learningPaths = [
    { title: "Design", icon: PenTool, count: "24 Courses" },
    { title: "Development", icon: Code2, count: "38 Courses" },
    { title: "UI/UX Design", icon: Layout, count: "19 Courses" },
    { title: "Business", icon: Briefcase, count: "15 Courses" },
    { title: "Marketing", icon: Megaphone, count: "22 Courses" },
    { title: "Photography", icon: Camera, count: "12 Courses" },
  ];

  return (
    <section className="w-full  py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className=" font-semibold text-[36px] leading-[120%] tracking-[-1%] text-center">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-satoshi font-normal text-[18px] leading-[160%] text-center">
            At ByteSpace, you have access to a diverse spectrum of courses, each
            carefully crafted to empower you on your path to success. Explore
            among these according to interest, unlock your potential and embark
            on a transformative learning journey.
          </p>
        </div>

        {/* 6 Category Rounded Icon Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {learningPaths.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={`/courses?category=${encodeURIComponent(item.title)}`}
                className="group bg-white rounded-3xl py-9 px-13 border border-[#CED0D3] shadow-xs hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D4FB20] text-[#0f172a] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-satoshi font-medium text-[20px] leading-[120%] whitespace-nowrap">
                    {item.title}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
