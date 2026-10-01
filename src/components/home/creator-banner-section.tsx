import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CreatorBannerSection() {
  return (
    <section className="w-full blueprint-grid text-white py-16 sm:py-24 md:py-28 relative overflow-hidden">
      {/* Hidden SVG defs for color filter (tints white 3D images to vibrant brand lime #D2FF00) */}
      <svg
        className="absolute w-0 h-0 pointer-events-none opacity-0"
        aria-hidden="true"
      >
        <defs>
          <filter id="lime-tint-banner" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                0.824 0 0 0 0
                1.000 0 0 0 0
                0.000 0 0 0 0
                0     0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      {/* --- 3D FLOATING ASSETS --- */}

      {/* 1. Top-Left Lime Spring */}
      <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-6 md:-top-10 md:-left-8 lg:-top-12 lg:-left-6 w-24 sm:w-36 md:w-48 lg:w-60 pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/yellowpitch.png"
          alt="3D Lime Spiral"
          width={240}
          height={240}
          className="w-full h-auto object-contain -rotate-45 drop-shadow-2xl"
        />
      </div>

      {/* 2. Top-Left White Squiggle */}
      <div className="absolute top-3 sm:top-5 md:top-7 left-[15%] sm:left-[17%] md:left-[19%] w-12 sm:w-16 md:w-24 lg:w-28 pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/images/whitepitch.png"
          alt="3D White Squiggle"
          width={140}
          height={140}
          className="w-full h-auto object-contain -rotate-12 drop-shadow-xl"
        />
      </div>

      {/* 3. Bottom-Left White Cone */}
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 -left-2 sm:left-4 md:left-6 w-14 sm:w-20 md:w-28 lg:w-32 pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/trivuj.png"
          alt="3D White Cone"
          width={160}
          height={160}
          className="w-full h-auto object-contain -rotate-6 drop-shadow-xl"
        />
      </div>

      {/* 4. Bottom-Left Lime Torus Ring */}
      <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-14 left-[9%] sm:left-[12%] md:left-[14%] w-24 sm:w-36 md:w-48 lg:w-56 pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/images/rounded.png"
          alt="3D Lime Torus"
          width={260}
          height={260}
          style={{ filter: "url(#lime-tint-banner)" }}
          className="w-full h-auto object-contain -rotate-12 drop-shadow-2xl"
        />
      </div>

      {/* 5. Top-Right Lime Pyramid */}
      <div className="absolute top-3 sm:top-5 md:top-7 right-[17%] sm:right-[19%] md:right-[22%] w-14 sm:w-20 md:w-28 lg:w-32 pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/trivuj.png"
          alt="3D Lime Pyramid"
          width={160}
          height={160}
          style={{ filter: "url(#lime-tint-banner)" }}
          className="w-full h-auto object-contain rotate-[30deg] drop-shadow-xl"
        />
      </div>

      {/* 6. Top-Right White Cylinder */}
      <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-8 md:-top-12 md:-right-6 lg:-top-14 lg:-right-8 w-28 sm:w-44 md:w-56 lg:w-68 pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/images/rightSite.png"
          alt="3D White Cylinder"
          width={180}
          height={220}
          style={{ filter: "grayscale(100%) brightness(1.75) contrast(1.15)" }}
          className="w-full pl-13 mt-6 h-70 object-contain -rotate-1 drop-shadow-2xl"
        />
      </div>

      {/* 7. Bottom-Right Lime Spring */}
      <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-0 md:-bottom-10 md:right-4 lg:-bottom-12 lg:right-8 w-24 sm:w-36 md:w-48 lg:w-56 pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/yellowpitch.png"
          alt="3D Lime Spring"
          width={240}
          height={240}
          className="w-full h-auto object-contain rotate-[140deg] drop-shadow-2xl"
        />
      </div>

      {/* --- BANNER CONTENT --- */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6 sm:space-y-7 relative z-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[115%]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="font-satoshi text-xs sm:text-sm md:text-[15px] text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="pt-2 sm:pt-4">
          <Link href="/creators/purepearl-studio">
            <Button
              variant="lime"
              size="lg"
              className="px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-bold shadow-xl shadow-[#D2FF00]/25 hover:scale-105 transition-all duration-300 rounded-full cursor-pointer"
            >
              Join as Creator
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
