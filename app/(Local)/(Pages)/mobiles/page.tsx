import Link from 'next/link'
import React from 'react'
import { mobile } from '../../Context/context'
import Cart from '../../Components/card/cart'

export default function Mobiles() {
  return (
    <div className='mt-64 flex flex-col items-end gap-4 text-end px-40'>
        
        <span className=" text-[0.8rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
        <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <h1 className=' text-[#222222]'>هواتف محمولة </h1>
      </span>
      <h1 className=' text-2xl font-semibold mb-2'>هواتف محمولة للبيع في سوريا</h1>
      <div className=' flex flex-row-reverse  gap-4 w-full '>

      <div className=' bg-blue-100 flex flex-col gap-2 ps-30 pe-4 py-8  h-fit w-[20%]' dir='ltr' >
        <h1 className=' text-[0.9rem] font-bold mb-2'>الفئات</h1>
        <p className=' text-[0.8rem] text-[#23262AA3]   hover:text-[#222222]'>جميع الفئات</p>
        <Link href={"/mobiles"} className=' text-[0.9rem] font-bold'>هواتف محمولة </Link>
        <Link href={"/mobiles"} className=' text-[0.8rem] text-[#23262AA3] hover:text-[#222222]'  > هواتف محمولة</Link>
        <Link href={"/mobiles"} className=' text-[0.8rem] text-[#23262AA3]  hover:text-[#222222]'>تابلت </Link>
      </div>
      <div className=' w-[80%] flex flex-col gap-4'>
        {mobile.reverse().map((data) =>(
            <Cart data={data} key={data.id} cars={false} realEstate={false} link={`/mobiles/${data.id}`}/>
        ))}
        </div>
      </div>
        </div>
  )
}
