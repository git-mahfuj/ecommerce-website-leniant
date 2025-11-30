"use client";
import Container from "@/components/Container";
import NoAccess from "@/components/NoAccessToCart";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Divide, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import useStore from "../../../../store";
import EmptyCart from "@/components/EmptyCart";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToFavourite from "@/components/AddToFavourite";
import QuantityButton from "@/components/QuantityButton";
import Link from "next/link";
import DeleteFromCart from "@/components/DeleteFromCart";
import ResetCart from "@/components/ResetCart";
import Priceformator from "@/components/PriceFormattor";

const CartPage = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useStore();
  const groupedItems = useStore((state) => state.getGroupedItems());
  console.log(groupedItems)
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {isSignedIn ? (
        <Container>
          {groupedItems.length ? (
            <div className="flex flex-col gap-5 md:w-[70%] lg:flex lg:flex-row lg:justify-between lg:w-[70%] mx-auto pt-10 pb-10">
              <div className="flex flex-col gap-3 bg-white lg:w-[60%] px-7">
                <div className="px-4 mt-4">
                  <span className="flex items-center gap-2 font-medium text-2xl">
                    {" "}
                    <ShoppingBag className="translate-y-0.5" /> Shopping Cart
                  </span>
                </div>
                <div>
                  {groupedItems.map(({ product }) => {
                    const itemCount = getItemCount(product._id);
                    return (
                      <div
                        key={product._id}
                        className="flex gap-4 justify-between bg-white p-3"
                      >
                        <div className="p-3 border rounded-md">
                          {product.images && (
                            <Link href={`/products/${product?.slug?.current}`}>
                              <Image
                                src={urlFor(product.images[0]).url()}
                                alt="product"
                                width={110}
                                height={110}
                              />
                            </Link>
                          )}
                        </div>
                        <div className="relative flex flex-col justify-between">
                          <div className="flex flex-col ">
                            <p className="line-clamp-1 font-medium">
                              {product.name}
                            </p>
                            <p>
                              Variant :{" "}
                              <span className="font-medium">
                                {product.variant}
                              </span>
                            </p>
                            <p>
                              Status :{" "}
                              <span className="font-medium">
                                {product.status}
                              </span>
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <AddToFavourite
                              className="relative"
                              products={product}
                            />
                            <DeleteFromCart
                              className="relative"
                              products={product}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-between">
                          <div className="font-medium"><Priceformator amount={product.price as number * itemCount} className="text-lg" /></div>
                          <div>
                            <QuantityButton products={product} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="px-3 mb-5">
                  <ResetCart />
                </div>
              </div>
              <div className="px-3 lg:w-[40%]">
                 <div className="flex flex-col gap-2 p-5 border border-leniant rounded-md shadow-2xl bg-white">
                  <p className="text-xl font-medium">Order Summary</p>
                  <div className="flex w-full justify-between px-5">
                    <p>Subtotal</p>
                    <p>{}</p>
                  </div>
                  <div className="flex justify-between w-full px-5 border-b border-gray-200 pb-3">
                    <p>Discount</p>
                    <p>665</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between px-5">
                      <p>Total</p>
                      <p>666</p>
                    </div>
                    <button className="px-3 py-1.5 bg-leniant w-full text-white font-medium rounded-md ">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <EmptyCart />
            </div>
          )}
        </Container>
      ) : (
        <Container>
          <NoAccess />
        </Container>
      )}
    </div>
  );
};

export default CartPage;
