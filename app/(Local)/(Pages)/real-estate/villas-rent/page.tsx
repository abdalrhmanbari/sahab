import Cart from '@/app/(Local)/Components/card/cart'
import { villasRent } from '@/app/(Local)/Context/context'
import Link from 'next/link'
import React from 'react'

export default function Villas() {
  return (
    <div className='mt-64 flex flex-col items-end gap-4 text-end px-40'>
            <p className=" text-[0.7rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
            <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <Link href={"/real-estate"}>عقارات </Link>/
        <Link href={"/real-estate/villas-rent"}>فلل للإيجار</Link>
      </p>
      <h1 className=' text-2xl font-semibold mb-2'>فلل للإيجار في سوريا</h1>
    <div className=' flex flex-row-reverse  gap-4 w-full '>
      <div className=' bg-blue-100 flex flex-col gap-2 ps-30 pe-4 py-8 text-end h-fit w-[20%] '>
        <h1 className=' text-[0.9rem] font-bold mb-2'>الفئات</h1>
        <p className=' text-[0.8rem] text-[#23262AA3]   hover:text-[#222222]'>جميع الفئات</p>
        <Link href={"/real-estate"} className=' text-[0.9rem] font-bold'>عقارات </Link>
        <Link href={"/"} className=' text-[0.8rem] text-[#23262AA3] hover:text-[#222222]'  >شقق للبيع</Link>
        <Link href={""} className=' text-[0.8rem] text-[#23262AA3]  hover:text-[#222222]'>شقق للإيجار</Link>
        <Link href={"/"} className=' text-[0.8rem] text-[#23262AA3]  hover:text-[#222222]'>فلل للبيع</Link>
        <Link href={"/real-estate/villas-rent"} className=' text-[0.8rem]  hover:text-[#23262AA3]'>فلل للإيجار</Link>
      </div>

      <div className=' w-[80%] flex flex-col gap-4'>
      {villasRent?.map((data) =>(
        <Cart data={data} key={data.id} link={`/real-estate/villas-rent/${data.id}`} />
      ))}
      </div>
      </div>
    </div>
  )
}
