import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import { getSingleProducts } from "@/sanity/query";
import React from "react";
import { Product } from "../../../../../sanity.types";
import Addtocart from "@/components/Addtocart";
import Addtowhislist from "@/components/AddToFavourite";
import ProductDetails from "@/components/ProductDetails";
import AddToFavourite from "@/components/AddToFavourite";

const SingleProductpage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const singleProducts = await getSingleProducts(slug);
  console.log(singleProducts);
  return (
    <Container className="flex flex-col md:flex-row gap-10 pb-10">
      {singleProducts?.images && (
        <ImageView
          images={singleProducts?.images}
          isStock={singleProducts?.stock as number}
        />
      )}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="border-b pb-4 px-4">
          {" "}
          <p className="text-2xl font-medium">{singleProducts?.name}</p>
          <p>{singleProducts?.desc}</p>
          <p className="mt-2 font-medium ">
            Available Items <span>{singleProducts?.stock as number}</span>
          </p>
        </div>
        <div className=" border-b pb-4 px-4">
          <p className="flex gap-3 text-leniant font-medium">
            {" "}
            BDT {singleProducts?.discount as number}{" "}
            <del className="text-gray-400">BDT {singleProducts?.price as number}</del>
          </p>
          <div className={`mt-4 px-3 py-1 rounded-md w-fit font-medium ${singleProducts?.stock as number === 0 ? "bg-red-300 text-red-500" : "bg-green-500/30 text-green-600"}`}>{singleProducts?.stock as number === 0 ? "Out Of Stock" : "In Stock"}</div>
        </div>
        <div className="flex items-center justify-around">
          <AddToFavourite products={singleProducts} className="bg-leniant text-white" />
          <Addtocart className="w-[80%] rounded-md hover:translate-x-0 " product={singleProducts} />
        </div>
        <div>
          <ProductDetails products={singleProducts} />
        </div>
      </div>
    </Container>
  );
};

export default SingleProductpage;
