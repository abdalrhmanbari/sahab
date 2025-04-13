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
            <span  className=' flex justify-center items-center gap-2 '>
            <h1 className=' text-[1rem] font-bold text-[#23262A] '>{el.title}</h1>

            <img alt='..' src={`${image}`} className=' w-6' loading='lazy'/>
            </span>
            <Link href={el.Link1} className=' text-[0.8rem] text-[#222222] hover:text-red-500'>{el.link1}</Link>
            <Link href={el.Link2} className=' text-[0.8rem] text-[#222222] hover:text-red-500'> {el.link2}</Link>
            <Link href={el.Link3} className=' flex items-center justify-center gap-2 '>
            <Image alt='icon' src={left} className=' w-3 '/>
            <span  className=' text-[0.9rem] text-blue-600 font-bold'>{el.link3}</span>
            </Link>
        </div>

  )
}
