"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthVisualCollage } from "@/components/auth/auth-visual-collage";

export default function RegisterPage() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen w-full blueprint-grid flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        {/* Left Side: Brand Logo, Text & Visual 3D Course Collage */}
        <div className="lg:col-span-6">
          <AuthVisualCollage
            title="Sign up and come in"
            description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          />
        </div>

        {/* Right Side: Auth Form Card */}
        <div className="lg:col-span-6 max-w-lg w-full mx-auto">
          <div className="bg-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 md:p-14 shadow-2xl border border-slate-100 relative">
            {/* Tag & Heading */}
            <div className="mb-7">
              <span className="text-xs sm:text-sm font-semibold text-[#0047FF]">
                Create an Account
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5 font-sans">
                Welcome to ByteSpace
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Jamie Davis"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF] text-slate-900 placeholder:text-slate-400 transition-all bg-white"
                />
              </div>

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
                  Continue
                </Button>
              </div>
            </form>

            {/* Footer link */}
            <div className="mt-12 text-center text-xs sm:text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#0047FF] font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
