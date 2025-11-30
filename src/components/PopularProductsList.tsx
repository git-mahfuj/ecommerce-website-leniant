"use client";
import React, { useEffect, useState } from "react";
import { Category, Product } from "../../sanity.types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { Divide } from "lucide-react";
import ProductsCard from "./ProductsCard";
import NoProductsAvailable from "./NoProductsAvailable";
import {motion} from "motion/react"
import { AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";

const PopularProductsList = ({
  popularcategory,
  slug,
}: {
  popularcategory: Category[];
  slug?: string | undefined;
}) => {
  // console.log(CurrentSlug);
  const router = useRouter();
  const [currentslug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchedProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `*[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc){
      ...,"categories":categories[]->title
      }`;

      const data = await client.fetch(query, { categorySlug });
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log("Error while fetching Data", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  if (currentslug) {
    fetchedProducts(currentslug);
  }
}, [currentslug, router]);

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentslug) return;
    setCurrentSlug(newSlug);
    router.push(`/popular-category/${newSlug}`, { scroll: false });
  };

  return (
    <div className="px-4">
      <div className="flex flex-wrap px-4 mt-5 lg:justify-center pb-3">
        {popularcategory?.map((item) => (
          <div key={item?._id}>
            <Button
              className={`bg-white text-black border rounded-none hovereffect hover:bg-white cursor-pointer ${currentslug === item?.slug?.current ? "bg-leniant text-white border-leniant hover:bg-leniant " : ""}`}
              onClick={() =>
                handleCategoryChange(item?.slug?.current as string)
              }
            >
              {item?.name}
            </Button>
          </div>
        ))}
      </div>
      <div className="lg:w-[90%] mx-auto">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
            <div className="space-x-2 flex items-center font-medium text-leniant">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            {products?.length > 0 ? (
              <div className="grid grid-cols-2 gap-6 mt-3 md:grid-cols-3 lg:grid-cols-5">
                {
                  products?.map((i:Product) => (
                    <AnimatePresence key={i._id}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProductsCard products={i} />
                  </motion.div>
                </AnimatePresence>
                  ))
                }
              </div>
            ) : (
              <div className="">
                <NoProductsAvailable selectedTab={currentslug} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularProductsList;
