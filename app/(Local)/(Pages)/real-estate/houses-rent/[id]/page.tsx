import SponsoredAd from '@/app/(Local)/Components/Advertisement/sponsored-ad';
import PageId from '@/app/(Local)/Components/Component/page-id';
import { houseRent, houseSale } from '@/app/(Local)/Utils/Context/context';
import Link from 'next/link';
import React from 'react'

export default function HouseRent({params} : {params : any}) {
    const houses = houseRent;
    const id = params.id;
    const house = houses.find((house) => house.id == id);
    return (
      <div className="  top-0 flex flex-col gap-8 items-end text-end 2xl:px-40 sm:px-16 px-4">
        <span className=" text-[0.7rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
          <Link href={"/"}>الصفحة الرئيسية</Link>/ 
          <Link href={"/real-estate"}>عقارات </Link>/
          <Link href={"/real-estate/villas-rent"}>منازل للإيجار</Link>/
          <h1 className=' text-[#222222]'>({id}) منزل للإيجار</h1>
        </span>
        
        <div className=" ">
  
        <PageId data={house} or="شهرياً" realEstate={true} cars={false}/>
        </div>
  
      </div>
  )
}
