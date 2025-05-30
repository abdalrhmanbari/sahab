import React from "react";
import image from "../../Assets/Images/137349332-400x300.webp";
import FavoriteIcon from "../../Assets/Icon/favorite-icon";
import layout from "../../Assets/Images/layout-design.png";
import bathroom from "../../Assets/Images/bathroom.png";
import call from "../../Assets/Images/telephone.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import speed from "../../Assets/Images/speedmeter.png"
import bed from "../../Assets/Images/single-bed.png";
import Image from "next/image";
import Link from "next/link";
export default function Cart({
  data,
  link,
  realEstate,
  cars,
}: {
  data: any;
  link: any;
  realEstate: boolean;
  cars: boolean;
}) {
  return (
    <Link
      href={link}
      className="   sm:h-[18rem]  flex flex-row-reverse border border-gray-200 rounded-md "
    >
      <img
        src={data?.img}
        className=" rounded-e-md min-w-[40%] max-w-[40%] h-full bg-blue-100 object-cover"
        alt={data?.description}
        loading="lazy"
      />

      <div className="  w-full py-4 px-4 flex flex-col gap-2">
        <div className="    flex justify-between">
          <FavoriteIcon />
          <h1 className="text-blue-600 font-bold flex gap-1 sm:text-[1.5rem] text-[1.1rem]">
            <span className="  flex items-end text-[0.7rem]">ل.س</span>
            {data?.price}
          </h1>
        </div>
        <p className=" text-[#222222] sm:text-[1rem] text-sm"  dir="ltr">{data?.description}</p>
        {/* realEstate */}
        {realEstate == true ? (
          <>
            <span className=" sm:text-[1rem] text-[0.8rem]" dir="ltr">
              مساحة المباني {data?.layout} متر مربع {data?.bed} غرف نوم{" "}
              {data?.bathroom} حمام
            </span>
            <div className=" flex justify-end items-center gap-3  text-[#222222]">
              <span className=" flex items-center gap-2 ">
                <span className="text-[#222222]  sm:text-[0.8rem] text-[0.7rem] font-semibold">
                  {data?.layout}
                </span>
                <Image alt="icon" src={layout} className="w-4" />
              </span>
              <span className=" flex items-center gap-2 ">
                <span className="text-[#222222]  sm:text-[0.8rem] text-[0.7rem] font-semibold">
                  {data?.bed}
                </span>
                <Image alt="icon" src={bathroom} className="w-4" />
              </span>
              <span className=" flex items-center gap-2 ">
                <span className="text-[#222222]  sm:text-[0.8rem] text-[0.7rem] font-semibold">
                  {data?.bathroom}
                </span>
                <Image alt="icon" src={bed} className="w-5" />
              </span>
            </div>
          </>
        ) : null}
        {/* Cars */}
        {cars == true ? (
          <div className=" flex justify-end gap-2 items-center text-[#222222] ">
            <span className="  text-[0.7rem] font-semibold">
              {data?.production} .
            </span>
            <span className="flex text-[0.7rem] font-semibold">
              <span>كم</span>
              {data?.speed}
            </span>
            <Image alt="icon" src={speed} className=" w-4" />
          </div>
        ) : null}

        <span className=" text-[0.8rem] text-[#23262AA3]">
          {data?.location || "لم يتم تحديد الموقع"}
        </span>
        <span className=" text-[0.7rem]">
          منذ {data.date >= "7" ? "اسبوع" : data?.date + "يوم"}{" "}
        </span>
        <div className=" flex  gap-2 items-center justify-end ">
          <button className=" px-6 py-4 bg-emerald-100 rounded-md font-black sm:text-[0.9rem] text-[0.8rem] flex items-center w-fit gap-2">
            واتساب
            <Image alt="icon" src={whatsapp} className="w-4" />
          </button>
          <button className=" px-6 py-4 bg-blue-100  rounded-md font-black sm:text-[0.9rem] text-[0.8rem] flex items-center w-fit gap-2">
            مكالمة
            <Image alt="icon" src={call} className=" w-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
