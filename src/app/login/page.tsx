"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthVisualCollage } from "@/components/auth/auth-visual-collage";

export default function LoginPage() {
  const [email, setEmail] = React.useState("designer@example.com");
  const [password, setPassword] = React.useState("password123");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Successfully signed in!");
  };

  return (
    <div className="min-h-screen w-full blueprint-grid flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        {/* Left Side: Brand Logo, Text & Visual 3D Course Collage */}
        <div className="lg:col-span-6">
          <AuthVisualCollage
            title="Sign in with ease"
            description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          />
        </div>

        {/* Right Side: Auth Form Card */}
        <div className="lg:col-span-6 max-w-lg w-full mx-auto">
          <div className="bg-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 md:p-14 shadow-2xl border border-slate-100 relative">
            {/* Tag & Heading */}
            <div className="mb-7">
              <span className="text-xs sm:text-sm font-semibold text-[#0047FF]">
                Sign In
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5 font-sans">
                Welcome Back
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="designer@example.com"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF] text-slate-900 placeholder:text-slate-400 transition-all bg-white"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="********"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF] text-slate-900 placeholder:text-slate-400 transition-all bg-white"
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  variant="lime"
                  className="px-8 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  Sign In
                </Button>
              </div>
            </form>

            {/* OR separator */}
            <div className="relative my-9 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <span className="relative px-4 bg-white text-xs text-slate-400 font-medium">
                or
              </span>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => alert("Sign in with Facebook")}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer shadow-sm active:scale-95"
                aria-label="Sign in with Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => alert("Sign in with Google")}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer shadow-sm active:scale-95"
                aria-label="Sign in with Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </button>
            </div>

            {/* Footer link */}
            <div className="mt-8 text-center text-xs sm:text-sm text-slate-600">
              New user?{" "}
              <Link
                href="/register"
                className="text-[#0047FF] font-semibold hover:underline"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
