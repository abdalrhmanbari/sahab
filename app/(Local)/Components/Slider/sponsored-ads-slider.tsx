"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import slider1 from "../../Assets/Images/WhatsApp Image 2025-04-15 at 13.26.35_b0065851.jpg";
import slider2 from "../../Assets/Images/slider1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function SponsoredAdsSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <div className=" rounded-[0.4375rem]">
            <Image
              src={slider1}
              alt="Advertisement"
              className=" rounded-[0.4375rem] sm:w-full w-[40rem] h-auto object-cover"
              quality={100}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  rounded-[0.4375rem]">
            <Image
              src={slider2}
              alt="Advertisement"
              className=" rounded-[0.4375rem] w-full h-auto object-cover"
              quality={100}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
