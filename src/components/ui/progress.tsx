import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  indicatorColor?: string;
  height?: string;
}

export function Progress({
  value = 0,
  indicatorColor = "bg-[#D2FF00]",
  height = "h-3",
  className,
  ...props
}: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn(
        "w-full bg-slate-200/80 rounded-full overflow-hidden p-0.5",
        height,
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-700 ease-out",
          indicatorColor
        )}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
}
