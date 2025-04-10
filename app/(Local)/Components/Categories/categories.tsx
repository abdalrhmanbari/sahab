import Image from 'next/image'
import React from 'react'
import car from "../../Assets/Images/electric-car.png"
import left from "../../Assets/Images/left.png"
import build from "../../Assets/Images/building.png"
import mobile from "../../Assets/Images/mobile-phone.png"
import dress from "../../Assets/Images/dress.png"

import Link from 'next/link'
export default function Categories({el, image}:{el:any, image:string}) {
  return (

        <div className=' flex flex-col items-end gap-4'>
            <Link href={"/"} className=' flex justify-center items-center gap-2 '>
            <h1 className=' text-[1rem] font-bold text-[#23262A] '>{el.title}</h1>
            {/* <Image alt='icon' src={el.img} className=' w-6'          width={300} height={300} priority/> */}
            <img alt='..' src={`${image}`} className=' w-6'/>
            </Link>
            <Link href={"/"} className=' text-[0.8rem] text-[#222222] hover:text-red-500'>{el.link1}</Link>
            <Link href={"/"} className=' text-[0.8rem] text-[#222222] hover:text-red-500'> {el.link2}</Link>
            <Link href={"/"} className=' flex items-center justify-center gap-2 '>
            <Image alt='icon' src={left} className=' w-3 '/>
            <h1 className=' text-[0.9rem] text-blue-600 font-bold'>{el.link}</h1>
            </Link>
        </div>

  )
}
