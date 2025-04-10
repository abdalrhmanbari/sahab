import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import speed from "../../Assets/Images/speedmeter.png"
import FavoriteIcon from '../../Assets/Icon/favorite-icon'

export default function CardCar({data}:{data:any}) {
  return (
    <Link href={"/"} className=' max-w-[18rem] min-w-[18rem] h-[20rem]  border border-zinc-200  w-fi  rounded-t-md ' >
        
        {/* <Image alt='..' src={data.img} className=' w-full h-[50%] object-cover bg-black'/> */}
        <img alt='' src={data.img} className=' w-full h-[50%] object-cover bg-black rounded-t-md'/>
     <div className=' p-4 text-end flex flex-col gap-2'>
        <div className=' flex justify-between items-center'>
            <FavoriteIcon/>
            <h1 className='text-blue-600 font-bold flex gap-1' >
              <span className=' text-[0.7rem] flex items-end'>ل.س</span>
              {data.price}
            </h1>
        </div>
        <p className=' text-[0.9rem]'>{data.title}</p>
        <div className=' flex justify-end gap-2 items-center text-[#222222] '>
                <span className='  text-[0.7rem] font-semibold'>{data.production} .</span>
            <span className='flex text-[0.7rem] font-semibold'>
                <span>كم</span>
                {data.speed}
                </span>  
            <Image alt='icon' src={speed}  className=' w-4'/>
        </div>
        <span className=' text-[0.7rem] text-[#222222]'>{data.location|| "لم يتم تحديد الموقع"}</span>
        <span  className=' text-[0.7rem]'>منذ {data.date >= "7" ? "اسبوع" :  data.date + "يوم" } </span>
     </div>
    </Link>
  )
}
