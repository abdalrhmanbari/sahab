import React from 'react'
import Image from 'next/image'
import Categories from '../Components/Categories/categories'
import Link from 'next/link'
import left from "../Assets/Images/left.png"
import Advertisement from '../Components/Advertisement/Advertisement'
import { carSale, category, houseSale, villasRent, villasSale } from '../Context/context'
import Card from '../Components/card/card'
import CardCar from '../Components/card/card_car'
export default function HomePage() {
   return (
  <div className=' px-8 md:px-40  mt-64 flex flex-col gap-10  text-end '>


        <Advertisement/>

        <h1 className=' text-xl font-semibold'>الفئات الشائعة</h1>
        <div className=' grid grid-cols-3 gap-4'>
        {category?.map((el)=>(  
          <Categories el={el} key={el.id} image={el.img}/>
        ))}
        </div>
        <div className=' flex justify-between items-center mt-4'>
          <Link href={"/real-estate/villas-sale"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold'>فلل للبيع</h1>
        </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { villasSale?.map((data) => 
        <Card data={data}  key={data.id}  link={``}/>
          )}
          </div>
            
              <div className=' flex justify-between items-center'>
          <Link href={"/real-estate/villas-rent"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '>فلل للإيجار</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { villasRent?.map((data) => 
        <Card data={data}  key={data.id} link={`/real-estate/villas-rent/${data.id}`} />
          )}
          </div>

              <div className=' flex justify-between items-center'>
          <Link href={"/"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '> منازل للبيع</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { houseSale?.map((data) => 
        <Card data={data}  key={data.id} link={``} />
          )}
          </div>

              <div className=' flex justify-between items-center'>
          <Link href={"/"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '> سيارات للبيع</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { carSale?.map((data) => 
        <CardCar data={data}  key={data.id} />
          )}
          </div>
            
            </div>

  )
}
