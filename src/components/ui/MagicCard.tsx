import React from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-200 border border-tech-navy-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-tech-blue-200 dark:hover:border-slate-700",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
