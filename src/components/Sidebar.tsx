"use client";
import React from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SocialIcons from "./SocialIcons";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const Sidebar = ({
  isOpen,
  onClose,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) => {
  const pathName = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-50 w-full bg-black/10 shadow-lg transform transition-transform ease-in-out duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={onClose}
    >
      <div className="w-2/3 bg-leniant h-screen">
        <div className="flex justify-between items-center p-5">
          <Logo
            className="text-white hover:text-white hovereffect cursor-pointer"
            logoClassName="hover:text-white"
            spanClassName="text-white"
          />
          <X
            className="hovereffect hover:transform-3d hover:rotate-90 cursor-pointer text-white"
            size={35}
            onClick={onClose}
          />
        </div>
        <div className="px-7 flex flex-col gap-4">
          {headerData?.map((i) => (
            <Link
              href={i.path}
              key={i.id}
              className={cn(
                "text-white hovereffect relative group font-medium text-xl w-fit",
                pathName === i?.path && "text-white",
                className
              )}
            >
              <p className="font-medium relative">{i.title}</p>
              <span
                className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 transition-all duration-300  group-hover:left-0 ${
                  pathName === i?.path && "w-1/2"
                }`}
              />
              <span
                className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2  transition-all duration-300 group-hover:right-0 ${
                  pathName === i?.path && "w-1/2"
                }`}
              />
            </Link>
          ))}
        </div>
        <div>
            <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
