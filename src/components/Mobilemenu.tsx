"use client";
import { AlignLeft } from "lucide-react";
import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Mobilemenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="hoverEffect cursor-pointer hover:text-leniant md:hidden"
      >
        <AlignLeft className="font-medium translate-y-1" size={27}  />
      </button>
      <div>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </div>
  );
};

export default Mobilemenu;
