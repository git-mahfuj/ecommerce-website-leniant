import React from "react";
import { EmptyAnimation } from "./EmptyCartAnimation";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto px-3">
      <div className="flex flex-col justify-center items-center mb-3 pb-6">
        <div className="z-10">
          <EmptyAnimation />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center mx-auto w-[80%]">
          <p className="font-bold text-3xl">Your Cart is feeling lonely</p>
          <p className="text-center font-medium mx-auto lg:w-[50%]">
            It looks like you haven't added anything to your cart yet. Let's
            change that and find some amazing products for you!
          </p>
          <Link href={"/popular-category/sharee-collection"}>
            <button className="w-full bg-leniant px-3 py-2 rounded-md text-white font-medium cursor-pointer">
              Discover Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
