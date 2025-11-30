"use client";
import React, { useEffect, useState } from "react";
import { Category, Product } from "../../sanity.types";
import Container from "./Container";
import { Title } from "./ui/text";
import Categorylist from "./shop/Categorylist";
import Pricelist from "./shop/Pricelist";
import { client } from "@/sanity/lib/client";
import next from "next";
import { Divide , Loader2 } from "lucide-react";
import NoProductsAvailable from "./NoProductsAvailable";
import ProductsCard from "./ProductsCard";
import {motion , AnimatePresence} from "motion/react"
import { useSearchParams } from "next/navigation";

const Shop = ({ categories }: { categories: Category[] }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  // data feching after creating the category price reset segment
  const fetchProducts = async () => {
  setLoading(true);
  try {
    let minPrice = 0;
    let maxPrice = 10000;
    if (selectedPrice) {
      const [min, max] = selectedPrice.split(" ").map(Number);
      minPrice = isNaN(min) ? 0 : min;
      maxPrice = isNaN(max) ? 10000 : max;
    }
    console.log({ selectedCategory, minPrice, maxPrice });

    const query = `
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory][0]._id))
        && price >= $minPrice && price <= $maxPrice
      ] | order(name asc) {
        ...,
        "categories": categories[]->title
      }
    `;

    const data = await client.fetch(query, {
      selectedCategory,
      minPrice,
      maxPrice,
    });
    setProducts(data);
    console.log("Fetched Data: ", data);
  } catch (error) {
    console.error("Error while fetching data:", error);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, [selectedCategory]);

  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 w-full z-10 mb-5 px-5 lg:w-[80%] mx-auto">
          <div className="flex items-center justify-between">
            <Title className="text-[1.1rem] uppercase translate-y-1 tracking-wide">
              Get the products as your need
            </Title>
            {(selectedCategory !== null || selectedPrice !== null) && (
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedPrice(null);
              }}
              className="text-white bg-leniant text-sm mt-2 font-medium px-4 py-1.5 rounded-md cursor-pointer"
            >
              Reset filter
            </button>
             )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 border-t border-leniant">
          <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-hidden md:min-w-64 pb-5 md:border-r">
            <Categorylist
              categories={categories}
              selectedCategories={selectedCategory}
              setSelectedCategories={setSelectedCategory}
            />
            <Pricelist
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
          <div className="px-3 w-full">
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
                <NoProductsAvailable selectedTab={selectedCategory} />
              </div>
            )}
          </div>
        )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
