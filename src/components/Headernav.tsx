import { Heart, Search, ShoppingBag } from "lucide-react";
import React from "react";
import Login from "./Login";
import HeaderAuth from "./HeaderAuth";

const Headernav = () => {
  return (
    <div className="flex item-center justify-center gap-5">
      <Search size={25} className="hover:text-leniant text-black hovereffect cursor-pointer translate-y-1.5" />
      <div className="relative group translate-y-1.5">
        <ShoppingBag
          className="group-hover:text-leniant text-black hovereffect cursor-pointer"
          size={25}
        />
        <span className="px-1.5 bg-leniant text-white rounded-full text-sm -top-1 absolute -right-2">
          0
        </span>
      </div>
      <div className="relative group translate-y-1.5">
        <Heart
          className="group-hover:text-leniant text-black hovereffect cursor-pointer"
          size={25}
        />
        <span className="px-1.5 bg-leniant text-white rounded-full text-sm -top-1 absolute -right-2">
          0
        </span>
      </div>
      <div>
        <HeaderAuth />
      </div>
    </div>
  );
};

export default Headernav;
