"use client"
import React, { useState } from "react";
import { Product } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { AnimatePresence , motion } from "motion/react";

interface Props {
  images: Product;
  isStock: number;
}

const ImageView = ({ images = [], isStock }: Props) => {
    const [active , setActive ] = useState(images[0])
  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
        <div className="cursor-pointer">
            <AnimatePresence mode="wait">
              <motion.div
              key={active?._key}
              initial={{ opacity : 0}}
              animate={{opacity : 1}}
              exit={{opacity : 0}}
              transition={{duration : 0.5}}
              className="w-full max-h-[550px] min-h-[450px] border border-black/10 rounded-md group overflow-hidden p-2">
                  <Image 
                  src={urlFor(active).url()}
                  alt="image"
                  width={700}
                  height={700}
                  priority
                  className={`w-full max-h-[550px] min-h-[450px]h-96 object-contain group-hover:scale-110 hovereffect rounded-md`} />
              </motion.div>
            </AnimatePresence>
        </div>
        <div className="grid grid-cols-6 gap-2 h-20 md:h-24 translate-x-4 ">
            {
                images?.map((i) => (
                    <button key={i?._key}
                    onClick={() => setActive(i)}
                    className={`border rounded-md overflow-hidden cursor-pointer ${active._key === images?._key ? "border-black opacity-100" : "opacity-80"}`}>
                        <Image src={urlFor(i).url()}
                        alt={`Thumbnail ${i._key}`}
                        width={100}
                        height={100}
                        className="w-full h-auto object-contain" />
                    </button>
                ))
            }
        </div>
    </div>
  );
};

export default ImageView;
