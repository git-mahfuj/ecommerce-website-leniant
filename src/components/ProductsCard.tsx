import React from "react";
import { Product } from "../../sanity.types";
import Image from "next/image";
import { url } from "inspector";
import { urlFor } from "@/sanity/lib/image";
import { Title } from "./ui/text";
import Priceview from "./Priceview";
import Addtocart from "./Addtocart";
import Addtowhislist from "./Addtowhislist";
import Link from "next/link";
import AddToFavourite from "./AddToFavourite";

interface Props {
  products: Product;
}

const ProductsCard = ({ products }: Props) => {
  return (
    <div>
      <div className="p-4 border border-leniant rounded-sm flex flex-col justify-start group cursor-pointer relative">
        <div className="hovereffect group-hover:scale-105 md:flex md:justify-center">
          {products?.images && (
            <Link href={`/products/${products?.slug?.current}`}>
              <Image
                src={urlFor(products?.images[0]).url()}
                alt={products?.name}
                width={200}
                height={200}
                className="rounded-sm"
              />
            </Link>
          )}
        </div>
        <div>
          <AddToFavourite products={products} />
        </div>

        <Title className="text-sm mt-3 line-clamp-1 text-gray-600">
          {products?.name}
        </Title>
        <div className="flex gap-3">
          <p className="font-normal">In Stock</p>
          <p
            className={` font-medium ${products?.stock === 0 ? "text-red-600" : "text-leniant"} `}
          >
            {(products?.stock as number) === 0
              ? "Out of Stock"
              : products?.stock}
          </p>
        </div>
        <div>
          <Priceview amount={products?.price} discount={products?.discount} />
        </div>
        <div>
          <Addtocart product={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
