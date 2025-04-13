import SponsoredAd from '@/app/(Local)/Components/Advertisement/sponsored-ad';
import PageId from '@/app/(Local)/Components/Component/page-id';
import { houseRent, houseSale } from '@/app/(Local)/Context/context';
import Link from 'next/link';
import React from 'react'

export default function HouseRent({params} : {params : any}) {
    const houses = houseRent;
    const id = params.id;
    const house = houses.find((house) => house.id == id);
    return (
      <div className=" mt-64 flex flex-col gap-8 items-end text-end px-40">
        <span className=" text-[0.7rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
          <Link href={"/"}>الصفحة الرئيسية</Link>/ 
          <Link href={"/real-estate"}>عقارات </Link>/
          <Link href={"/real-estate/villas-rent"}>منازل للإيجار</Link>/
          <h1 className=' text-[#222222]'>({id}) منزل للإيجار</h1>
        </span>
        
        <div className=" w-[60%] ">
  
        <PageId data={house} or="شهرياً" realEstate={true} cars={false}/>
        </div>
  
      </div>
  )
}
