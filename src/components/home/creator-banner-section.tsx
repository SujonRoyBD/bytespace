import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CreatorBannerSection() {
  return (
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
  );
}
