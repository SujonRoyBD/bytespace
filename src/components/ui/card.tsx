import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  className,
  hoverable = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm transition-all duration-300",
        hoverable &&
          "hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
