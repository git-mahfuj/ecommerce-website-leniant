import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className , spanClassName , logoClassName }: { className?: string , spanClassName?: string , logoClassName?: string}) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-2 group cursor-pointer",
        className
      )}
    >
      <Link href={"/"}>
        <h2 className={cn("text-4xl font-semibold hovereffect group-hover:text-leniant tracking-wide" , logoClassName)}>
          LENIAN
          <span className={cn("text-leniant group-hover:text-black hovereffect", spanClassName)}>
            T
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
