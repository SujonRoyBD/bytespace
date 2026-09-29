import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] w-full blueprint-grid flex items-center justify-center text-white px-4 py-20 relative overflow-hidden">
      {/* Decorative 3D-style shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-8 border-[#D2FF00]/40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#D2FF00]/20 rotate-45 rounded-2xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10 blur-sm pointer-events-none" />

      <div className="max-w-xl mx-auto text-center space-y-6 relative z-10">
        <div className="text-8xl sm:text-9xl font-black tracking-tighter text-[#D2FF00] font-sans drop-shadow-2xl">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          The page you are looking for doesn&apos;t exist
        </h1>
        <p className="text-sm sm:text-base text-blue-100 max-w-md mx-auto">
          The link you followed may be broken, or the page may have been removed. Let&apos;s get you back on track!
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link href="/">
            <Button
              variant="lime"
              size="lg"
              className="gap-2 font-bold px-8 shadow-xl shadow-[#D2FF00]/25 hover:scale-105 transition-transform"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link href="/courses">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold"
            >
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
