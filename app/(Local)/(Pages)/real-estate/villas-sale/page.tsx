import Cart from '@/app/(Local)/Components/card/cart'
import { villasSale } from '@/app/(Local)/Context/context'
import Link from 'next/link'
import React from 'react'

export default function VillasSale() {
  return (
    <div className=' flex flex-col items-end gap-4 text-end 2xl:px-40 sm:px-16 px-4' >
            <span className=" text-[0.7rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
            <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <Link href={"/real-estate"}>عقارات </Link>/
        <h1 className=' text-[#222222]'>فلل للبيع</h1>
      </span>
      <h1 className='sm:text-2xl text-lg font-semibold mb-2'>فلل للبيع في سوريا</h1>
    <div className=' flex flex-row-reverse  gap-4 w-full '>
    <div className=' hidden sm:block'>

      <div className=' bg-blue-100 flex flex-col gap-2 w-[10rem] md:w-[12rem] pe-10  py-8  text-end h-fit '>
        <h1 className=' text-[0.9rem] font-bold mb-2'>الفئات</h1>
        <p className=' text-[0.8rem] text-[#23262AA3]   hover:text-[#222222]'>جميع الفئات</p>
        <Link href={"/real-estate"} className=' text-[0.9rem] font-bold'>عقارات </Link>
        <Link href={"/real-estate/houses-sale"} className=' text-[0.8rem] text-[#23262AA3] hover:text-[#222222]'  >منازل للبيع</Link>
        <Link href={"/real-estate/houses-rent"} className=' text-[0.8rem] text-[#23262AA3]  hover:text-[#222222]'>منازل للإيجار</Link>
        <Link href={"/real-estate/villas-sale"} className=' text-[0.8rem] hover:text-[#23262AA3]'>فلل للبيع</Link>
        <Link href={"/real-estate/villas-rent"} className=' text-[0.8rem]  text-[#23262AA3]  hover:text-[#222222]'>فلل للإيجار</Link>
    </div>
      </div>

      <div className='sm:w-[80%] w-full flex flex-col gap-4'>
      {villasSale?.map((data) =>(
        <Cart data={data} key={data.id} link={`/real-estate/villas-sale/${data.id}`} cars={false} realEstate={true} />
      ))}
      </div>
      </div>
    </div>
  )
}
