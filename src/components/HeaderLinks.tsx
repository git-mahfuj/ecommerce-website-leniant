"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLinks = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  return (
    <div className="items-center gap-5 hidden md:flex ">
      {headerData?.map((i) => (
        <Link href={i.path} key={i.id} className={cn("hover:text-leniant hovereffect relative group font-medium ", pathName === i?.path && "text-leniant", className)}>
          <p className="font-medium relative">{i.title}</p>
          <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-leniant group-hover:w-1/2 transition-all duration-300  group-hover:left-0 ${pathName === i?.path && "w-1/2"}`} />
          <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-leniant group-hover:w-1/2  transition-all duration-300 group-hover:right-0 ${pathName === i?.path && "w-1/2"}`} />
        </Link>
      ))}
    </div>
  );
};

export default HeaderLinks;
