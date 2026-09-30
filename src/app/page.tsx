import fs from "fs";
import path from "path";
import {
  HeroSection,
  PartnersStrip,
  FeaturedCoursesSection,
  LearningPathsSection,
  GrowthSection,
  CreatorManageSection,
  CreatorBannerSection,
  TestimonialsSection,
} from "@/components/home";

// Ensure hero student asset is synchronized to public/images
try {
  const source =
    "C:\\Users\\sujon\\.gemini\\antigravity-ide\\brain\\afac674e-2929-45b4-9da0-c0a034e8e438\\hero_student_lime_1790697502448.jpg";
  const destDir = path.join(process.cwd(), "public", "images");
  const dest = path.join(destDir, "student.jpg");
  if (fs.existsSync(source) && !fs.existsSync(dest)) {
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(source, dest);
  }
} catch {
  // Ignore in environments where artifact path is not available
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* 1. Hero Section with Search & 3D Centerpiece */}
      <HeroSection />

      {/* 2. Partner / Client Logos Strip */}
      <PartnersStrip />

      {/* 3. Discover Your Passion, Build Your Skills (Category Pills & 6 Courses) */}
      <FeaturedCoursesSection />

      {/* 4. Explore Diverse Learning Paths (6 Category Icon Cards) */}
      <LearningPathsSection />

      {/* 5. Your Path to Professional Growth Starts Here! (Stats & Student Collage) */}
      <GrowthSection />

      {/* 6. Create & Manage Courses Easily. (Instructor Tools & Earnings) */}
      <CreatorManageSection />

      {/* 7. Unlock Your Potential as a Creator Banner */}
      <CreatorBannerSection />

      {/* 8. Discover What Our Community Is Saying (Quote & Testimonials) */}
      <TestimonialsSection />
    </div>
  );
}
