"use client";
import React, { useState } from "react";
import useStore from "../../store";
import ProductsCard from "./ProductsCard";
import { Loader2 } from "lucide-react";
import NoProductsAvailable from "./NoProductsAvailable";
import { motion, AnimatePresence } from "motion/react";

const FavouritePage = () => {
  const { favoriteProduct } = useStore();
  console.log(favoriteProduct);
  return (
    <div className="w-full lg:w-[80%] mx-auto pb-10">
      <div className="px-4">
        {favoriteProduct?.length ? (
          <div className="grid grid-cols-2 gap-6 mt-3 md:grid-cols-3 lg:grid-cols-5">
            {favoriteProduct?.map((i) => (
              <AnimatePresence key={i._id}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductsCard products={i} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <div className="">
            <NoProductsAvailable />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouritePage;
