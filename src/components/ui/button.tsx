import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "lime"
    | "primary"
    | "outline"
    | "ghost"
    | "pill-dark"
    | "pill-light"
    | "tab"
    | "tab-active";
  size?: "sm" | "md" | "lg" | "icon" | "pill";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "lime", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer";

    const variants: Record<string, string> = {
      lime: "bg-[#D2FF00] hover:bg-[#c2ee00] text-[#0f172a] font-semibold shadow-sm hover:shadow-md hover:shadow-[#d2ff00]/20 active:bg-[#b5de00]",
      primary:
        "bg-[#0047FF] hover:bg-[#003be0] text-white font-medium shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:bg-[#0030b8]",
      outline:
        "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 active:bg-slate-100",
      ghost: "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900",
      "pill-dark":
        "bg-[#0f172a] hover:bg-slate-800 text-white rounded-full font-medium shadow-sm",
      "pill-light":
        "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-full shadow-sm hover:border-slate-300",
      tab: "bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-medium text-sm transition-colors",
      "tab-active":
        "bg-[#D2FF00] text-[#0f172a] font-semibold rounded-full text-sm shadow-sm",
    };

    const sizes: Record<string, string> = {
      sm: "h-8 px-3 text-xs rounded-lg",
      md: "h-10 px-5 text-sm rounded-xl",
      lg: "h-12 px-7 text-base rounded-2xl font-semibold",
      pill: "h-9 px-4 text-xs md:text-sm rounded-full",
      icon: "h-9 w-9 rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
