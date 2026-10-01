"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  // Do not render Footer on login or register/signup pages
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/signup"
  ) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="flex items-center group transition-transform active:scale-95 shrink-0"
            >
              <Image
                src="/images/logo2.png"
                alt="ByteSpace"
                width={140}
                height={36}
                priority
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>

            <p className="font-satoshi text-sm font-normal leading-[160%] tracking-normal">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center max-w-md gap-2 pt-2"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-11 px-5 rounded-full border border-slate-300 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0047FF] focus:border-transparent transition-all"
                />
              </div>
              <Button
                type="submit"
                variant="lime"
                className="h-11 px-6 rounded-full text-xs font-semibold shadow-xs"
              >
                Search
              </Button>
            </form>

            {subscribed && (
              <p className="text-xs font-medium text-emerald-600 animate-in fade-in">
                ✓ Thank you for subscribing to ByteSpace updates!
              </p>
            )}

            <p className="text-[11px] text-slate-400 max-w-sm leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div className="space-y-3">
              <Link
                href="/courses"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Featured Courses
              </Link>
              <Link
                href="/courses"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Featured Categories
              </Link>
              <Link
                href="/courses?category=Business"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Business
              </Link>
              <Link
                href="/courses?category=IT"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                IT
              </Link>
              <Link
                href="/courses?category=UI%2FUX+Design"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Design
              </Link>
            </div>

            <div className="space-y-3">
              <Link
                href="/courses?category=Development"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Development
              </Link>
              <Link
                href="/courses?category=Marketing"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Marketing
              </Link>
              <Link
                href="/courses?category=Photography"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Photography
              </Link>
              <Link
                href="/courses?category=Finance"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Finance
              </Link>
              <Link
                href="/courses?category=Sport"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Sport
              </Link>
            </div>

            <div className="space-y-3">
              <Link
                href="/creators/purepearl-studio"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Become a Creator
              </Link>
              <Link
                href="#"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Affiliate Program
              </Link>
              <Link
                href="#"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="block font-satoshi text-sm font-normal leading-[160%] tracking-normal hover:text-[#0047FF] transition-colors"
              >
                Help
              </Link>
              <Link
                href="#"
                className="block text-slate-600 hover:text-[#0047FF] transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>© 2026 ByteSpace. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
