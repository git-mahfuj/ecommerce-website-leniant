"use client";
import React from "react";
import { Product } from "../../sanity.types";
import useStore from "../../store";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  products: Product;
  className?: string;
}

const QuantityButton = ({ products, className }: Props) => {
  const { addItem, removeItem, getItemCount } = useStore();
  const ItemCount = getItemCount(products?._id);
  const handleAddItems = () => {
    if ((products?.stock as number) > ItemCount) {
      addItem(products);
      toast.success("Items added Successfully");
    } else {
      toast.error("Items Could't added");
    }
  };
  const handleRemoveItems = () => {
    if(ItemCount> 1) {
      removeItem(products._id)
      toast.success("Items Removed Sucessfully")
    }
  }
  const isOutOfStock = products.stock === 0;
  return (
    <div className="flex items-center justify-between gap-1">
      <Button
      onClick={handleRemoveItems}
        className="bg-leniant w-7 h-7 hover:text-white hover:bg-leniant cursor-pointer"
        disabled={ItemCount === 0 || isOutOfStock}
      >
        <Minus />
      </Button>
      <span>{ItemCount}</span>
      <Button
      onClick={handleAddItems}
        className="bg-leniant w-7 h-7 hover:text-white hover:bg-leniant cursor-pointer"
        disabled={isOutOfStock}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButton;
