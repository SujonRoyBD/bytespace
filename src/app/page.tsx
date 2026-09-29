"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Star,
  BarChart3,
  CheckCircle2,
  PenTool,
  Code2,
  Layout,
  Briefcase,
  Megaphone,
  Camera,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Play,
  Users,
} from "lucide-react";
import { coursesData } from "@/data/mock-data";
import { CourseCard } from "@/components/courses/course-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState("");
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

  const learningPaths = [
    { title: "Design", icon: PenTool, count: "24 Courses" },
    { title: "Development", icon: Code2, count: "38 Courses" },
    { title: "UI/UX Design", icon: Layout, count: "19 Courses" },
    { title: "Business", icon: Briefcase, count: "15 Courses" },
    { title: "Marketing", icon: Megaphone, count: "22 Courses" },
    { title: "Photography", icon: Camera, count: "12 Courses" },
  ];

  const testimonials = [
    {
      name: "Janelle M.",
      role: "3D Artist | Learner",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content:
        "The 3D Asset Creation course completely exceeded my expectations. The hands-on project workflow gave me the confidence to transition into freelance 3D design full time. I cannot recommend ByteSpace enough!",
      rating: 5,
    },
    {
      name: "James L.",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content:
        "From foundational principles to advanced prototyping, every module provided practical insights that I use daily at work. The community and instructor feedback were game changers for my career.",
      rating: 5,
    },
    {
      name: "Alex D.",
      role: "Frontend Learner",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content:
        "The structure of the courses is unmatched. Clear milestones, top-tier asset downloads, and responsive instructors make ByteSpace my go-to learning platform for technical skills.",
      rating: 5,
    },
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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* 1. HERO SECTION (Matching Figma Frame Exactly) */}
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
              onSubmit={(e) => {
                e.preventDefault();
                if (typeof window !== "undefined") {
                  window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
                }
              }}
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

      {/* 2. PARTNER / CLIENT LOGOS STRIP */}
      <section className="w-full bg-slate-50 border-b border-slate-200/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                <div className="w-5 h-5 rounded-full bg-slate-400 flex items-center justify-center text-white text-[10px]">
                  ⬡
                </div>
                <span>Logoipsum</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS */}
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

      {/* 4. EXPLORE DIVERSE LEARNING PATHS AT BYTESPACE */}
      <section className="w-full bg-slate-50/70 border-t border-b border-slate-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              At ByteSpace, you have access to a diverse spectrum of courses, each carefully crafted to empower you on your path to success. Explore among these according to interest, unlock your potential and embark on a transformative learning journey.
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
                  className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#D2FF00] text-[#0f172a] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#0047FF] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{item.count}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. YOUR PATH TO PROFESSIONAL GROWTH STARTS HERE */}
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

      {/* 6. CREATE & MANAGE COURSES EASILY */}
      <section className="w-full bg-slate-50/60 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Instructor Image with Blue Stats Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative z-10 w-72 sm:w-88 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
                  alt="Instructor teaching"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Stat Pill: Enrolled now $100.00 */}
              <div className="absolute -left-4 top-10 z-20 bg-[#0047FF] text-white rounded-2xl px-4 py-2.5 shadow-xl space-y-0.5">
                <div className="text-[9px] text-blue-200">Enrolled now</div>
                <div className="text-sm font-extrabold">$100.00</div>
              </div>

              {/* Floating Stat Pill: Earned $15,110.85 */}
              <div className="absolute -left-2 top-28 z-20 bg-[#0047FF] text-white rounded-2xl px-4 py-2.5 shadow-xl space-y-0.5">
                <div className="text-[9px] text-blue-200">Earned</div>
                <div className="text-sm font-extrabold flex items-center gap-1.5">
                  <span>$15,110.85</span>
                  <span className="text-[10px] bg-[#D2FF00] text-[#0f172a] px-1.5 py-0.2 rounded font-bold">
                    75%
                  </span>
                </div>
              </div>

              {/* Happy Students Widget */}
              <div className="absolute -right-2 bottom-6 z-20 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-100">
                <div className="text-[9px] font-bold text-slate-800">Happy Students</div>
                <div className="flex -space-x-1 pt-1">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full bg-slate-400 ring-1 ring-white inline-block"
                    />
                  ))}
                  <span className="w-4 h-4 rounded-full bg-[#D2FF00] text-[#0f172a] text-[7px] font-bold flex items-center justify-center ring-1 ring-white">
                    26+
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Text Content & Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                Create & Manage <br />
                Courses Easily.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                <strong>ByteSpace</strong> provides all the tools you need to create, publish, and monetize your educational content.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Effortless Creation",
                  "Seamless Monetization",
                  "Flexibility and Autonomy",
                  "Active Community",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0047FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UNLOCK YOUR POTENTIAL AS A CREATOR BANNER */}
      <section className="w-full blueprint-grid text-white py-16 sm:py-20 relative overflow-hidden">
        {/* 3D Shapes & Squiggles */}
        <div className="absolute top-8 left-8 w-14 h-14 rounded-full border-8 border-[#D2FF00] pointer-events-none opacity-80" />
        <div className="absolute bottom-8 right-12 w-16 h-16 bg-[#D2FF00] rounded-2xl rotate-45 pointer-events-none opacity-80" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Unlock Your Potential as a <br />
            Creator with ByteSpace
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Join our growing community of innovative creators and share your knowledge across various disciplines. Inspire, educate and connect with thousands of learners worldwide while monetizing your expertise and building your digital future.
          </p>

          <div className="pt-2">
            <Link href="/creators/purepearl-studio">
              <Button
                variant="lime"
                size="lg"
                className="px-8 py-3.5 text-xs sm:text-sm font-bold shadow-xl shadow-[#D2FF00]/30 hover:scale-105 transition-transform rounded-full"
              >
                Join as Creator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. DISCOVER WHAT OUR COMMUNITY IS SAYING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#D2FF00]/15 border border-[#D2FF00]/60 rounded-3xl p-6 sm:p-8 text-xs sm:text-sm text-slate-800 leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of everything we do. Dive into these testimonials to discover the impact our courses have had on individuals from various walks of life. Their experiences, successes, and insights reflect the power of our platform and the dedication of our instructors.
            </div>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm space-y-4 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
