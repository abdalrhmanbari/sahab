import Image from "next/image";
import React from "react";
import FavoriteIcon from "../../Assets/Icon/favorite-icon";
import CardId from "../card/card-id";
import location from "../../Assets/Images/location.png";
import bed from "../../Assets/Images/single-bed.png";
import bathroom from "../../Assets/Images/bathroom.png";
import layout from "../../Assets/Images/layout-design.png";
import transmission from "../../Assets/Images/gearbox.png";
import fuel from "../../Assets/Images/fuel.png";
import road from "../../Assets/Images/road.png";
import engine from "../../Assets/Images/car.png";
export default function PageId({
  data,
  or,
  realEstate,
  cars,
}: {
  data: any;
  or?: string;
  realEstate: boolean;
  cars: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="   flex flex-row-reverse  gap-16 ">
        <img
          alt="real-estate"
          src={data?.img}
          className=" min-w-[45rem] max-w-[45rem]  max-h-[30rem] object-contain rounded-xl bg-blue-50"
          loading="lazy"
        />
        <CardId />
      </div>
      <div className=" w-full border border-gray-100 p-4 flex flex-col gap-4 rounded-md">
        <div className="    flex justify-between">
          <FavoriteIcon />
          <h1 className="text-blue-600 font-bold flex gap-1 text-[2.2rem]">
            <span className="  flex items-end text-[0.7rem]">ل.س</span>
            {data?.price}
          </h1>
        </div>
        <span className=" text-[#222222] font-medium mb-2">
          {or ? or : null}
        </span>
        <h1 className="  font-semibold">{data?.description}</h1>
        <div className=" flex justify-between flex-row-reverse">
          <span className=" text-[1rem] text-[#23262AA3] flex items-center ">
            {data?.location || "لم يتم تحديد الموقع"}
            <Image alt="icon" src={location} className=" w-5 h-5" />
          </span>
          <span className=" text-[0.9rem]">
            منذ {data.date >= "7" ? "اسبوع" : data.date + "يوم"}{" "}
          </span>
        </div>
      </div>
      {realEstate == true ? (
        <div className=" w-full border border-gray-100 p-4 flex flex-col gap-8 rounded-md">
          <h1 className=" text-xl font-semibold text-[#23262A]">
            المواصفات البارزة
          </h1>
          <div className=" grid grid-cols-3">
            <div className=" flex flex-col items-center justify-center">
              <Image alt="icon" src={bed} className=" w-6" />
              <p className=" text-[#23262A] text-sm font-medium mb-2">
                غرف نوم
              </p>
              <span className=" font-semibold">{data.bed}</span>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <Image alt="icon" src={layout} className=" w-6" />
              <p className=" text-[#23262A] text-sm font-medium mb-2">
                المساحة (م٢)
              </p>
              <span className=" font-semibold">{data.bed}</span>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <Image alt="icon" src={bathroom} className=" w-6" />
              <p className=" text-[#23262A] text-sm font-medium mb-2">
                حمامات
              </p>
              <span className=" font-semibold">{data.bathroom}</span>
            </div>
          </div>
        </div>
      ) : null}
      {cars == true ? (
        <div className=" w-full border border-gray-100 p-4 flex flex-col gap-8 rounded-md">
          <h1 className=" text-xl font-semibold text-[#23262A]">
            المواصفات البارزة
          </h1>
          <div className=" grid grid-cols-4 items-center">
            <div className=" flex flex-col items-center justify-center gap-1">
              <Image alt="icon" src={engine} className=" w-6" />
              <p className=" text-[#23262A] text-sm font-medium mb-2">
                المحرك (سي سي){" "}
              </p>
              <span className=" font-semibold">{data.engine}</span>
            </div>
            <div className=" flex flex-col items-center justify-center gap-1">
              <Image alt="icon" src={transmission} className=" w-6" />
              <p className=" text-[#23262A] text-sm font-medium mb-2">
                ناقل الحركة
              </p>
              <span className=" font-semibold">{data.transmission}</span>
            </div>
            <div className=" flex flex-col items-center justify-center gap-1">
              <Image alt="icon" src={fuel} className=" w-6" />
              <p className=" text-[#23262A] text-sm font-medium mb-2">
                {" "}
                نوع الوقود
              </p>
              <span className=" font-semibold">{data.fuel}</span>
            </div>
            <div className=" flex flex-col items-center justify-center gap-1">
              <Image alt="icon" src={road} className=" w-6" />
              <p className=" text-[#23262A] text-sm font-medium mb-2">
                {" "}
                كيلومترات
              </p>
              <span className=" font-semibold">{data.speed ? data.speed :"-"}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
