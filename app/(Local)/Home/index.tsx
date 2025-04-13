import React from 'react'
import Image from 'next/image'
import Categories from '../Components/Categories/categories'
import Link from 'next/link'
import left from "../Assets/Images/left.png"
import Advertisement from '../Components/Advertisement/Advertisement'
import { carRent, carSale, category, houseRent, houseSale, mobile, villasRent, villasSale } from '../Context/context'
import Card from '../Components/card/card'

export default function HomePage() {
   return (
  <div className=' px-8 md:px-40  mt-64 flex flex-col gap-10  text-end '>


        <Advertisement/>

        <h1 className=' text-xl font-semibold'>الفئات الشائعة</h1>
        <div className=' grid grid-cols-3 gap-4'>
        {category?.map((el)=>(  
          <Categories el={el} key={el.id} image={el.img} />
        ))}
        </div>
                  {/* Villas Sale */}
        <div className=' flex justify-between items-center mt-4'>
          <Link href={"/real-estate/villas-sale"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold'>فلل للبيع</h1>
        </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { villasSale?.map((data) => 
        <Card data={data}  key={data.id}  link={`/real-estate/villas-sale/${data.id}`}  realEstate={true} cars={false} />
          )}
          </div>
                    {/* Villas Rent */}
              <div className=' flex justify-between items-center'>
          <Link href={"/real-estate/villas-rent"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '>فلل للإيجار</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { villasRent?.map((data) => 
        <Card data={data}  key={data.id} link={`/real-estate/villas-rent/${data.id}`}  realEstate={true} cars={false} />
          )}
          </div>
                    {/* Houses Sale */}
              <div className=' flex justify-between items-center'>
          <Link href={"/real-estate/houses-sale"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '> منازل للبيع</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { houseSale?.map((data) => 
        <Card data={data}  key={data.id} link={`/real-estate/houses-sale/${data.id}`}  realEstate={true} cars={false} />
          )}
          </div>
                    {/* Houses Rent */}
              <div className=' flex justify-between items-center'>
          <Link href={"/real-estate/houses-rent"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '> منازل للإيجار</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { houseRent.reverse()?.map((data) => 
        <Card data={data}  key={data.id} link={`/real-estate/houses-rent/${data.id}`} realEstate={true} cars={false} />
          )}
          </div>
                      {/* Cars Sale */}
              <div className=' flex justify-between items-center'>
          <Link href={"/cars/cars-sale"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '> سيارات للبيع</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { carSale?.map((data) => 
        <Card data={data}  key={data.id}  link={`cars/cars-sale/${data.id}`} realEstate={false} cars={true} />
          )}
          </div>
                      {/* Cars Rent */}
              <div className=' flex justify-between items-center'>
          <Link href={"/cars/cars-rent"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '> سيارات للإيجار</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { carRent.reverse()?.map((data) => 
        <Card data={data}  key={data.id}  link={`cars/cars-rent/${data.id}`} realEstate={false} cars={true }  />
          )}
          </div>
                      {/* mobile */}
              <div className=' flex justify-between items-center'>
          <Link href={"/cars/cars-rent"} className=' flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600'>
          <Image alt='icon' src={left} className=' w-3'/>
          عرض المزيد</Link>
          <h1 className=' text-xl  font-semibold '>  هواتف محمولة</h1>
              </div>
          <div className=' grid grid-cols-4 gap-4 '>
          { mobile.reverse()?.map((data) => 
        <Card data={data}  key={data.id}  link={`mobiles/${data.id}`} realEstate={false} cars={false}  />
          )}
          </div>
            </div>

  )
}
