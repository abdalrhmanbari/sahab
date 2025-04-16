import Link from 'next/link'
import React from 'react'
import { mobile } from '../../Context/context'
import Cart from '../../Components/card/cart'

export default function Mobiles() {
  return (
    <div className=' flex flex-col items-end gap-4 text-end 2xl:px-40 sm:px-16 px-4'>
        
        <span className=" text-[0.8rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
        <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <h1 className=' text-[#222222]'>هواتف محمولة </h1>
      </span>
      <h1 className=' sm:text-2xl text-lg font-semibold mb-2'>هواتف محمولة للبيع في سوريا</h1>
      <div className=' flex flex-row-reverse  gap-4 w-full '>
    <div className=' hidden sm:block'>
      <div className=' bg-blue-100 flex flex-col gap-2 w-[10rem] md:w-[12rem] pe-10  py-8  h-fit ' dir='ltr' >
        <h1 className=' text-[0.9rem] font-bold mb-2'>الفئات</h1>
        <p className=' text-[0.8rem] text-[#23262AA3]   hover:text-[#222222]'>جميع الفئات</p>
        <Link href={"/mobiles"} className=' text-[0.9rem] font-bold'>هواتف محمولة </Link>
        <Link href={"/mobiles"} className=' text-[0.8rem] text-[#23262AA3] hover:text-[#222222]'  > هواتف محمولة</Link>
        <Link href={"/mobiles"} className=' text-[0.8rem] text-[#23262AA3]  hover:text-[#222222]'>تابلت </Link>
      </div>
    </div>
      <div className=' sm:w-[80%] w-full flex flex-col gap-4'>
        {mobile.reverse().map((data) =>(
            <Cart data={data} key={data.id} cars={false} realEstate={false} link={`/mobiles/${data.id}`}/>
        ))}
        </div>
      </div>
        </div>
  )
}
