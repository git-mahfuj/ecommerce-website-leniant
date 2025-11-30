"use client";
import { CategoryType } from "@/constants/data";
import Link from "next/link";
import React from "react";
import { useState } from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const CategoriesTop = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-5">
      <div className="flex items-center flex-wrap gap-5">
        {CategoryType?.map((i) => (
          <button key={i.value} onClick={() => onTabSelect(i?.title)}
          className={`cursor-pointer px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-leniant hover:border-leniant font-medium  hovereffect hover:text-white ${selectedTab === i?.title ? "bg-leniant text-white border border-leniant" : "bg-leniant/20"}`}>
            {i.title}
          </button>
        ))}
      </div>
      <Link href={"/shop"} className="bg-leniant/20 px-5 py-1.5 rounded-full hover:border hover:text-white hover:border-leniant hover:bg-leniant hovereffect font-medium cursor-pointer">See All</Link>
    </div>
  );
};

export default CategoriesTop;
