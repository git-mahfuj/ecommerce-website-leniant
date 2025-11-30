"use client";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import useStore from "../../store";
import { Product } from "../../sanity.types";
import toast from "react-hot-toast";

const AddToFavourite = ({
  className,
  products,
}: {
  className?: string | undefined;
  products: Product;
}) => {
  const { favoriteProduct, addToFavorite, removeFromFavorite } = useStore();
  const [itemsData, setItemsData] = useState<Product>(products);
  console.log(itemsData);
  const isFavourite = favoriteProduct.some((item) => item._id === products._id);
  const handleProductsData = () => {
    if (isFavourite) {
      removeFromFavorite(products._id);
      toast.success("Removed From Favourite");
    } else {
      addToFavorite(products);
      toast.success("Added to Favourite");
    }
  };

  return (
    <button
      className={cn(
        "absolute top-2 right-1 text-leniant bg-white p-2 rounded-full hovereffect hover:bg-leniant hover:text-white cursor-pointer",
        className
      )}
      onClick={handleProductsData}
    >
      <Heart />
    </button>
  );
};

export default AddToFavourite;
