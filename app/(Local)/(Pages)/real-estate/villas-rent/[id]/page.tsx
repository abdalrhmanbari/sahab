import { villasRent } from "@/app/(Local)/Context/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import whatsapp from "../../../../Assets/Images/whatsapp.png"
import call from "../../../../Assets/Images/telephone.png"
import CardId from "@/app/(Local)/Components/card/card-id";
import FavoriteIcon from "@/app/(Local)/Assets/Icon/favorite-icon";
import location from "../../../../Assets/Images/location.png"
import PageId from "@/app/(Local)/Components/Component/page-id";
export default function VillasRentId({ params }: { params: any }) {
  const villas = villasRent;
  const id = params.id;
  const villa = villas.find((villa) => villa.id == id);
  return (
    <div className="  flex flex-col gap-8 items-end text-end 2xl:px-40 sm:px-16 px-4">
      <span className=" text-[0.7rem] text-[#23262AA3] flex flex-row-reverse items-center gap-2 ">
        <Link href={"/"}>الصفحة الرئيسية</Link>/ 
        <Link href={"/real-estate"}>عقارات </Link>/
        <Link href={"/real-estate/villas-rent"}>فلل للإيجار</Link>/
        <h1 className=" text-[#222222]">({id}) فيلا للإيجار</h1>
      </span>
      <div className=" w-full ">

      <PageId data={villa} or="شهرياً" realEstate={true} cars={false}/>
      </div>

    </div>
  );
}
