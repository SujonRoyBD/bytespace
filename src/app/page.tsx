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
} catch {}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <HeroSection />

      <PartnersStrip />

      <FeaturedCoursesSection />

      <LearningPathsSection />

      <GrowthSection />

      <CreatorManageSection />

      <CreatorBannerSection />

      <TestimonialsSection />
    </div>
  );
}
