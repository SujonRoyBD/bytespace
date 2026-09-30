"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const cartCount = 1;

  // Do not render Header on login or register/signup pages
  if (pathname === "/login" || pathname === "/register" || pathname === "/signup") {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators/purepearl-studio" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0047FF] blueprint-grid text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group transition-transform active:scale-95 shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="ByteSpace"
              width={140}
              height={36}
              priority
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-normal tracking-wide transition-opacity hover:opacity-100",
                    isActive
                      ? "text-white font-medium opacity-100"
                      : "text-white/85 opacity-85",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Links: Sign In, Join Us & Shopping Bag */}
          <div className="hidden md:flex items-center gap-7 shrink-0">
            <Link
              href="/login"
              className="text-sm font-normal text-white/90 hover:text-white transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="text-sm font-normal text-white/90 hover:text-white transition-colors"
            >
              Join Us
            </Link>

            {/* Shopping Cart Icon */}
            <Link
              href="/courses/build-digital-asset"
              className="relative p-1 text-white hover:text-white/80 transition-colors"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#D2FF00] rounded-full ring-2 ring-[#0047FF]" />
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/courses/build-digital-asset"
              className="relative p-1 text-white hover:text-white/80"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#D2FF00] rounded-full ring-2 ring-[#0047FF]" />
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-white/80 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
