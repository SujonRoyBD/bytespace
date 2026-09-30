"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const cartCount = 1;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators/purepearl-studio" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full blueprint-grid text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <div className="w-9 h-9 rounded-xl bg-[#D2FF00] flex items-center justify-center shadow-md shadow-[#D2FF00]/20 group-hover:rotate-6 transition-transform">
              <div className="w-4 h-4 bg-[#0047FF] rounded-md rotate-45 transform" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white font-sans flex items-center">
              Byte<span className="text-[#D2FF00]">Space</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#D2FF00] relative py-1",
                    isActive ? "text-[#D2FF00] font-semibold" : "text-white/90"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D2FF00] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Direct Page Links to /login and /register */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-white/90 hover:text-[#D2FF00] transition-colors px-3 py-2"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="text-sm font-medium text-white/90 hover:text-[#D2FF00] transition-colors px-3 py-2"
            >
              Join Us
            </Link>

            {/* Shopping Cart Icon */}
            <Link
              href="/courses/build-digital-asset"
              className="relative p-2 text-white hover:text-[#D2FF00] transition-colors rounded-full hover:bg-white/10"
              title="Your Enrolled Courses"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D2FF00] text-[#0f172a] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/courses/build-digital-asset"
              className="relative p-2 text-white hover:text-[#D2FF00]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D2FF00] text-[#0f172a] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D2FF00] rounded-lg hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden blueprint-grid border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-white hover:text-[#D2FF00]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full text-slate-900 border-none justify-center"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="lime"
                className="w-full justify-center font-bold"
              >
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
