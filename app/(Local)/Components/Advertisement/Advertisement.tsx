"use client"
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import slider1 from "../../Assets/Images/95028257-800x600.jpeg"
import slider2 from "../../Assets/Images/87814455-800x600.jpeg"
import slider from "../../Assets/Images/sale.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default function Advertisement() {
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
        <div className=' rounded-[0.4375rem]'>
        <Image src={slider2} alt="Advertisement"  className=' rounded-[0.4375rem] w-full h-auto object-cover'  quality={100}  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='  rounded-[0.4375rem]'>
        <Image src={slider1} alt="Advertisement" className=' rounded-[0.4375rem] w-full h-auto object-cover' quality={100} />
           </div>  
          </SwiperSlide>
    
          </Swiper>

    </div>
  )
}
