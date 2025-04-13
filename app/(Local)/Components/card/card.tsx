import Image from 'next/image'
import React from 'react'
import img from "../../Assets/Images/139661654-800x600.webp"
import Link from 'next/link'
import bed from "../../Assets/Images/single-bed.png"
import bathroom from "../../Assets/Images/bathroom.png"
import layout from "../../Assets/Images/layout-design.png"
import FavoriteIcon from '../../Assets/Icon/favorite-icon'
import speed from "../../Assets/Images/speedmeter.png"


export default function Card({data, link, realEstate, cars} : {data:any, link:any, realEstate:boolean, cars:boolean}) {

    return (
      <Link href={link} className=' max-w-[18rem] min-w-[18rem] h-[24rem]  border border-zinc-200  w-fi  rounded-t-md pb-4 ' key={data.id} >
        <img alt='' src={data.img} className=' w-full h-[50%] object-cover bg-black rounded-t-md ' loading='lazy'/>
     <div className=' p-4 text-end flex flex-col gap-3'>
     <div className=' flex justify-between items-center'>
            <FavoriteIcon/>
            <h1 className='text-blue-600 font-bold flex gap-1' >
              <span className=' text-[0.7rem] flex items-end'>ل.س</span>
              {data.price}
            </h1>
        </div>
        <p className=' text-[0.9rem]'>{data.description }</p>
        {realEstate == true ? 
        <div className=' flex justify-end items-center gap-3  text-[#222222]'>
          <span className=' flex items-center gap-2 '>
            <span className='text-[#222222]  text-[0.8rem] font-semibold'>{data.layout}sqm</span>
            <Image alt='icon' src={layout} className='w-4'/>
          </span>
          <span className=' flex items-center gap-2 '>
            <span className='text-[#222222]  text-[0.8rem] font-semibold'>{data.bed}</span>
            <Image alt='icon' src={bathroom} className='w-4'/>
          </span>
          <span className=' flex items-center gap-2 '>
            <span className='text-[#222222]  text-[0.8rem] font-semibold'>{data.bathroom}</span>
            <Image alt='icon' src={bed} className='w-5'/>
          </span>
          </div>
        :null}
        {
          cars == true ? 
          <div className=' flex justify-end gap-2 items-center text-[#222222] '>
          <span className='  text-[0.7rem] font-semibold'>{data.production} .</span>
      <span className='flex text-[0.7rem] font-semibold'>
          <span>كم</span>
          {data.speed}
          </span>  
      <Image alt='icon' src={speed}  className=' w-4'/>
  </div>
          :null
        }
  
          <span className=' text-[0.7rem] text-[#222222]'>{data.location|| "لم يتم تحديد الموقع"}</span>
          <span  className=' text-[0.7rem]'>منذ {data.date >= "7" ? "اسبوع" :  data.date + "يوم" } </span>
        
     </div>
    </Link>
  )

}
