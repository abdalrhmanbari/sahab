import PageId from '@/app/(Local)/Components/Component/page-id';
import { carSale } from '@/app/(Local)/Context/context';
import Link from 'next/link'
import React from 'react'

export default function CarsRentId({params} :{params :any}) {
  const cars= carSale;
  const id = params.id;
  console.log(id);
  
  const car = cars.find((car) => car.id == id);
  return (
    <div className=" mt-64 flex flex-col gap-8 items-end text-end px-40">
      <span className=" text-[0.7rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
        <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <Link href={"/real-estate"}>سيارات </Link>/
        <Link href={"/cars/cars-rent"}>سيارات للإيجار</Link>/
        <h1 className=' text-[#222222]'>({id}) سيارة للإيجار</h1>
      </span>
      <div className=" w-[60%] ">

      <PageId data={car}  realEstate={false} or='شهرياً' cars={true}/>
      </div>

    </div>
  )
}
