import PageId from '@/app/(Local)/Components/Component/page-id';
import { mobile } from '@/app/(Local)/Context/context';
import Link from 'next/link';
import React from 'react'

export default function MobilesId({params}:{params:any}) {
      const mobiles = mobile;
      const id = params.id;
      const mobil = mobiles.find((mobil) => mobil.id == id);
  return (
    <div className=" mt-64 flex flex-col gap-8 items-end text-end px-40">
      <span className=" text-[0.7rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
        <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <Link href={"/mobiles"}>هواتف محمولة </Link>/
        <h1 className=" text-[#222222]">({id}) هاتف محمول </h1>
      </span>
      <div className=" w-[60%] ">

      <PageId data={mobil}  realEstate={false} cars={false}/>
      </div>

    </div>
  )
}
