import Cart from '@/app/(Local)/Components/card/cart'
import { carSale } from '@/app/(Local)/Context/context'
import Link from 'next/link'
import React from 'react'


export default function CarsRent() {
    
  return (
  

        <div className='flex flex-col items-end gap-4 text-end 2xl:px-40 sm:px-16 px-4'>
             <span className=" text-[0.8rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
            <Link href={"/"}>الصفحة الرئيسية</Link>/ 
            <Link href={"/cars"}>سيارات </Link>/
            <h1 className=' text-[#222222]'>سيارات للإيجار </h1>
          </span>
          <h1 className=' sm:text-2xl text-lg font-semibold mb-2'>سيارات للإيجار في سوريا</h1>
          <div className=' flex flex-row-reverse  gap-4 w-full '>
            <div className=' hidden sm:block'>
          <div className=' bg-blue-100 flex flex-col gap-2  w-[10rem] md:w-[12rem] pe-10  py-8 text-end h-fit '>
            <h1 className=' text-[0.9rem] font-bold mb-2'>الفئات</h1>
            <p className=' text-[0.8rem] text-[#23262AA3]   hover:text-[#222222]'>جميع الفئات</p>
            <Link href={"/cars"} className=' text-[0.9rem] font-bold'>سيارات </Link>
            <Link href={"/cars/cars-sale"} className=' text-[0.8rem] text-[#23262AA3]   hover:text-[#222222]'  >سيارات للبيع</Link>
            <Link href={"/cars/cars-rent"} className=' text-[0.8rem] hover:text-[#23262AA3]'>سيارات للإيجار</Link>
          </div>
            </div>
           <div className=' sm:w-[80%] w-full flex flex-col gap-4'>
           {carSale.reverse()?.map((data) =>(
            <Cart data={data} link={`/cars/cars-rent/${data.id}`} key={data.id} cars={true} realEstate={false}/>
           ))}
           </div>
           </div>
        </div>
    
  )
}
