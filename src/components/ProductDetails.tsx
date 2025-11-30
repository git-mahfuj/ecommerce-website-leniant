import React from "react";
import { Product } from "../../sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ProductDetails = ({ products }: { products: Product }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="px-5">
        <AccordionTrigger>{products?.name}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="w-full justify-between flex ">
            Collection : <span>{currentYear}</span>
          </p>
          <p>
           
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductDetails;
