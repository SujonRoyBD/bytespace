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
