"use client";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassname?: string;
  tooltipClassname?: string;
  arrowClassName?: string;
}

const SocialIcons = ({ className, iconClassname, tooltipClassname , arrowClassName }: Props) => {
  const SocialLinks = [
    {
      id: 1,
      icon: <Facebook />,
      href: "https://www.facebook.com/mahfujur.rahman.949195",
      title: "Facebook",
    },
    {
      id: 2,
      icon: <Instagram />,
      href: "https://www.instagram.com/gorib_mahfuj/",
      title: "Instagram",
    },
    {
      id: 3,
      icon: <Github />,
      href: "https://github.com/git-mahfuj",
      title: "Github",
    },
    {
      id: 4,
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/mahfujur-rahman-364233357/",
      title: "LinkedIn",
    },
  ];
  return (
    <div className={cn("mt-8 px-4 flex flex-col hovereffect gap-3" , className)}>
      <p className="text-[1.2rem] font-medium hovereffect hover:translate-x-0.5 text-white cursor-pointer">
        Socials
      </p>
      <div className="flex items-center gap-3 hovereffect">
        {SocialLinks?.map((i) => (
          <Tooltip key={i?.id}>
            <TooltipTrigger asChild className="">
              <Link
                href={i?.href}
                rel="noopener noreferrer"
                className={cn(
                  "px-3 py-3 text-white hovereffect hover:-translate-y-1",
                  iconClassname
                )}
              >
                {i?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-leniant font-bold ",
                tooltipClassname
              )}
              arrowClassName="bg-white fill-white"
            >
              <p>{i.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
