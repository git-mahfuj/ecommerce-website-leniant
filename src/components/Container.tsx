import React from "react";
import { cn } from "@/lib/utils";
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-w-8xl mx-auto px-1", className)}>
      {children}
    </div>
  );
};

export default Container;
