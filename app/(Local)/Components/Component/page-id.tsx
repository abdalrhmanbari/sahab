import Image from 'next/image'
import React from 'react'
import FavoriteIcon from '../../Assets/Icon/favorite-icon'
import CardId from '../card/card-id'
import location from "../../Assets/Images/location.png"
export default function PageId({data, or} :{data:any, or?:string}) {
  return (
    <div className="flex flex-col gap-6">


    <div className="   flex flex-row-reverse  gap-16 ">
      <img alt="real-estate" src={data?.img} className=" min-w-[50rem] max-w-[50rem] h-[30rem] object-cover rounded-md"/>
      <CardId/>
    </div>
    <div className=" w-full border border-gray-100 p-4 flex flex-col gap-4 rounded-md">
        <div className="    flex justify-between">

          <FavoriteIcon />
          
          <h1 className="text-blue-600 font-bold flex gap-1 text-[2.2rem]">
            <span className="  flex items-end text-[0.7rem]">ل.س</span>
            {data?.price}
          </h1>
        </div>
          <span className=" text-[#222222] font-medium mb-2">{or? or : ""}</span>
          <h1 className="  font-semibold">{data?.description}</h1>
          <div className=" flex justify-between flex-row-reverse">
          <span className=' text-[1rem] text-[#23262AA3] flex items-center '>{data?.location|| "لم يتم تحديد الموقع"}
            <Image alt="icon" src={location} className=" w-5 h-5"/>
          </span>
          <span  className=' text-[0.9rem]'>منذ {data.date >= "7" ? "اسبوع" :  data.date + "يوم" } </span>
          </div>
    </div>
    </div>
  )
}
