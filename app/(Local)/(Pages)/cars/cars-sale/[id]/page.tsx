import PageId from '@/app/(Local)/Components/Component/page-id';
import { carSale } from '@/app/(Local)/Context/context';
import Link from 'next/link';
import React from 'react'

export default function CarsSaleID({params}: {params:any}) {
  const cars= carSale;
  const id = params.id;
  console.log(id);
  
  const car = cars.find((car) => car.id == id);
  return (
    <div className=" flex flex-col gap-8 items-end text-end 2xl:px-40 sm:px-16 px-4">
      <span className=" text-[0.7rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
        <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <Link href={"/real-estate"}>سيارات </Link>/
        <Link href={"/cars/cars-sale"}>سيارات للبيع</Link>/
        <h1 className=' text-[#222222]'>({id}) سيارة للبيع</h1>
      </span>
      <div className=" w-full ">

      <PageId data={car}  realEstate={false} cars={true}/>
      </div>

    </div>
  )
}
