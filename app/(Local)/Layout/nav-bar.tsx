import React from 'react'
import SearchIcon from '../Assets/Icon/search-icon'
import Link from 'next/link'



export default function NavBar() {
  return (
    <div className='     fixed w-full bg-white py-8  px-40 flex flex-col gap-4  border border-b-gray-200 z-10  top-0 '>
    <div className='  flex items-center justify-end gap-6 '>
          <Link href={"/real-estate"} className=' text-[0.9rem] font-bold  text-[#222222]  flex justify-center items-center gap-3 cursor-pointer hover:underline  underline-offset-2    '>
         عقارات
      <img alt='icon' src={"https://cdn-icons-png.flaticon.com/128/8743/8743467.png"} className=' w-6  '/>
          </Link>

      
          <Link href={"/cars"} className=' text-[0.9rem] font-bold  text-[#222222]  flex justify-center items-center gap-3 cursor-pointer hover:underline  underline-offset-2'>
          السيارات
          <img alt='icon' src={"https://cdn-icons-png.flaticon.com/128/2962/2962303.png"} className=' w-6'/>
          </Link>
      

      <Link href={"/"} className=' font-semibold text-2xl italic cursor-pointer'>SAHAB</Link>
    </div>
    <div className=' flex flex-col sm:flex-row  justify-between  items-center    '>
      <button className=' bg-blue-600 hover:bg-blue-700 px-4 py-4 rounded-md text-white'>انشر إعلانك</button>
    <h1 className=' text-[1rem] font-semibold underline decoration-blue-600 underline-offset-8 hover:no-underline '>تسجيل دخول</h1>
    <button className='  text-black font-bold text-[1.1rem]   hover:text-blue-600'>English</button>
    <div className=' relative w-[60%] flex items-center rounded-md bg-white  outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2  '>
    
    <input
          id="search"
          name="search"
          type="text"
          placeholder="...أبحث عن السيارات , الهواتف و أكثر "
          className="block min-w-0 grow py-3.5 px-4 text-[0.8rem] sm:text-[0.9rem]  text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/ placeholder:text-[0.6rem] sm:placeholder:text-[0.8rem] text-end "/>      
    <div className=' absolute  flex justify-center   px-3 py-3.5 bg-blue-600 hover:bg-blue-700   rounded-s-md'>
    <SearchIcon/>
    </div>
    </div>

          </div>
                  <div className=' flex justify-between items-center'>
                  <h2 className=' font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222] cursor-pointer '>الموضة و الجمال</h2>
                  <h2 className=' font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222] cursor-pointer '>موبايلات و تابلت</h2>
                    <Link href={"/real-estate"} className=' font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222] cursor-pointer '>عقارات</Link>
                    <Link href={"/cars"} className=' font-black text-[1rem] hover:underline  underline-offset-3  text-[#222222] cursor-pointer '>سيارات</Link>
                  </div>
  </div>
  )
}
