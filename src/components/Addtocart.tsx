"use client";
import React from "react";
import { Product } from "../../sanity.types";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import useStore from "../../store";
import toast from "react-hot-toast";
import Priceformator from "./PriceFormattor";
import QuantityButton from "./QuantityButton";

interface Props {
  product: Product;
  className?: string;
}
const Addtocart = ({ product, className }: Props) => {
  const isDisabled = product?.stock === 0;
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product._id);
  const onclick = () => {
    if ((product.stock as number) > itemCount) {
      addItem(product);
      toast.success("Product added SucessFully");
    } else {
      toast.error("Could not added item out of Stock");
    }
  };
  return (
    <div>
      {itemCount ? <div>
        <div className="flex justify-between ">
          <span>Quantity</span>
          <QuantityButton products={product}  />
        </div>
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <Priceformator amount={product.price ? product.price * itemCount : 0} />
        </div>
      </div> : <div></div>}
      <Button
        className={cn(
          "rounded-full bg-leniant mt-3 hovereffect hover:bg-leniant hover:translate-x-1 cursor-pointer",
          className
        )}
        disabled={isDisabled}
        onClick={onclick}
      >
        <ShoppingBag />
        {product?.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default Addtocart;
