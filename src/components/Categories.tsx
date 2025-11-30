"use client";
import React, { useEffect } from "react";
import CategoriesTop from "./CategoriesTop";
import { useState } from "react";
import { CategoryType } from "@/constants/data";
import { Divide } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import NoProductsAvailable from "./NoProductsAvailable";
import { AnimatePresence, motion } from "motion/react";
import ProductsCard from "./ProductsCard";
import { Product } from "../../sanity.types";

const Categories = () => {
  const [isTabClicked, setIsTabClicked] = useState(
    CategoryType?.[0].title || ""
  );
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const query = `*[_type == "product" && variant == $variant] | order(name desc) {
    ..., "categories" : categories[]->Title
  }`;
  const params = { variant: isTabClicked.toLowerCase() };

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        setLoading(true);

        const response = await client.fetch(query, params);
        console.log(response);
        setProducts(response);
      };
      fetchProducts();
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [isTabClicked]);

  return (
    <div className="mt-8 px-4 mb-8">
      <CategoriesTop selectedTab={isTabClicked} onTabSelect={setIsTabClicked} />
      <div>
        {loading ? (
          <div className="flex flex-col justify-center items-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
            <div className="space-x-2 flex items-center font-medium text-leniant">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            {products?.length ? (
              <div className="grid grid-cols-2 gap-6 mt-3 md:grid-cols-3 lg:grid-cols-5">
                {
                  products?.map((i) => (
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
                <NoProductsAvailable selectedTab={isTabClicked} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
