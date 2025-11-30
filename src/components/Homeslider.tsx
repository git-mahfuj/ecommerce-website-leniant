"use client";
import React from "react";
import { HomeBannerSlider } from "@/constants/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import homeslideone from "@/images/1746950572Copy of Eid Collection (1).png";
import homeslidetwo from "@/images/1746950236Eid Collection (2).png";

import Image from "next/image";
const Homeslider = () => {
  const HomeBannerSlider = [
    {
      id: 1,
      img: homeslideone,
    },
    {
      id: 2,
      img: homeslidetwo,
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
    >
      {HomeBannerSlider.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[226px] md:h-[470px] rounded-md">
            <Image
              src={slide.img}
              alt={`slider-${slide.id}`}
              fill
              className=" rounded-md"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Homeslider;
