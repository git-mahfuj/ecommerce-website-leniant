"use client";
import { cn } from "@/lib/utils";
import { Delete, Heart, Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import useStore from "../../store";
import { Product } from "../../sanity.types";
import toast from "react-hot-toast";

const DeleteFromCart = ({
  className,
  products,
}: {
  className?: string;
  products: Product;
}) => {
  const { removeItem, items } = useStore();
  const [itemsData, setItemsData] = useState<Product>(products);
  console.log(itemsData);
  const isFavourite = items.some((item) => item.product._id === products._id);
  const handleProductsData = () => {
    if (isFavourite) {
      removeItem(products._id);
      toast.success("Removed From Cart");
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
      <Trash />
    </button>
  );
};

export default DeleteFromCart;
