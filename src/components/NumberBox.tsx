import { cn } from "@/lib/utils";
import React from "react";

const NumberBox = ({ className , children }: { className?: string , children:React.ReactNode }) => {
  return (
    <div
      className={(cn("rounded-md w-8 h-8 text-white bg-leniant"), className)}
    >{children
    }</div>
  );
};

export default NumberBox;
