import React from "react";
import { Title } from "./ui/text";
import { getProductsCategory } from "@/sanity/query";
import { Category } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

const PopularCategoryItems = async ({
  productCategory,
}: {
  productCategory: Category[];
}) => {
  return (
    <div className="w-full h-[400px] md:h-[500px] flex flex-col gap-5 mb-7 justify-center">
      <Title className="px-4 border-b-2 pb-3 mx-auto lg:text-left lg:mx-0 w-fit border-leniant hovereffect hover:text-leniant hover:-translate-y-1 md:hover:translate-y-0 md:hover:translate-x-1">
        Popular Categories
      </Title>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-3 mt-3 md:grid md:gap-7">
    {
      productCategory?.map((i) => (
        <Link key={i?._id} href={`popular-category/${i?.slug?.current}`}>
        <div  className="flex items-center gap-4 px-3 py-4 bg-gray-100">
          <Image src={urlFor(i?.image).url()} alt={i?.name} width={40} height={40} />
          <div className="flex flex-col font-medium text-sm md:text-lg">
            <span className="font-medium">{i?.name}</span>
            <span className="text-leniant flex gap-1">{`(${i?.productCount})`}<span>items available</span></span>
          </div>
        </div></Link>
      ))
    }
      </div>
    </div>
  );
};

export default PopularCategoryItems;
