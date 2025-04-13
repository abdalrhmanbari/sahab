import React from 'react'
import { carRent, carSale } from '../../Context/context'

import Link from 'next/link'
import SponsoredAd from '../../Components/Advertisement/sponsored-ad'
import Cart from '../../Components/card/cart'

export default function Cars() {
  return (
    <div className='mt-64 flex flex-col items-end gap-4 text-end px-40'> 
     <span className=" text-[0.8rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
        <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <h1 className=' text-[#222222]'>سيارات </h1>
      </span>
      <h1 className=' text-2xl font-semibold mb-2'>سيارات للبيع والإيجار في سوريا</h1>
      <div className=' flex flex-row-reverse  gap-4 w-full '>
      <div className=' bg-blue-100 flex flex-col gap-2 ps-30 pe-4 py-8 text-end h-fit w-[20%] '>
        <h1 className=' text-[0.9rem] font-bold mb-2'>الفئات</h1>
        <p className=' text-[0.8rem] text-[#23262AA3]   hover:text-[#222222]'>جميع الفئات</p>
        <Link href={"/cars"} className=' text-[0.9rem] font-bold'>سيارات </Link>
        <Link href={"/cars/cars-sale"} className=' text-[0.8rem] text-[#23262AA3] hover:text-[#222222]'  >سيارات للبيع</Link>
        <Link href={"/cars/cars-rent"} className=' text-[0.8rem] text-[#23262AA3]  hover:text-[#222222]'>سيارات للإيجار</Link>
      </div>
       <div className=' w-[80%] flex flex-col gap-4'>
       {carSale?.map((data) =>(
        <Cart data={data} link={`/cars/cars-sale/${data.id}`} key={data.id} cars={true} realEstate={false}/>
       ))}
             <SponsoredAd/>
       {carRent?.map((data) =>(
        <Cart data={data} link={`/cars/cars-rent/${data.id}`} key={data.id} cars={true} realEstate={false}/>
       ))}
       </div>
       </div>
         
    </div>
  )
}
