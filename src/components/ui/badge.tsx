import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "pill-white" | "lime" | "outline" | "subtle" | "dark";
}

export function Badge({
  className,
  variant = "pill-white",
  children,
  ...props
}: BadgeProps) {
  const variants: Record<string, string> = {
    "pill-white":
      "bg-white/95 text-slate-800 backdrop-blur-sm shadow-xs border border-white/40 font-medium",
    lime: "bg-[#D2FF00] text-[#0f172a] font-semibold shadow-xs",
    outline: "bg-transparent border border-slate-200 text-slate-700",
    subtle: "bg-slate-100 text-slate-700 font-medium",
    dark: "bg-[#0f172a] text-white font-medium",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs md:text-sm rounded-full transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
