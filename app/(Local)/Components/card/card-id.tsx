import Image from 'next/image'
import React from 'react'
import whatsapp from "../../Assets/Images/whatsapp.png"
import call from "../../Assets/Images/telephone.png"
import Link from 'next/link'
export default function CardId() {
  return (
    <div className=" w-full  border border-gray-100 p-4 flex flex-col  justify-around rounded-md">
    <div className=" flex flex-col gap-4">
      
    <Link href={"/log-in"} className=" px-40 py-4 bg-emerald-100 hover:bg-emerald-200 rounded-md font-black text-[1rem] flex items-center  gap-2 h-fit">واتساب
            <Image alt="icon" src={whatsapp} className="w-4"/>
          </Link>
     
          <Link href={"/log-in"} className="px-40 py-4 bg-blue-100 hover:bg-blue-200  rounded-md font-black text-[1rem] flex items-center gap-2 h-fit">مكالمة
            <Image alt="icon"  src={call} className=" w-4"/>
          </Link>
    </div>
    <div className=" flex flex-col gap-3">
      <h1 className=" text-xl font-bold">سلامتك تهمنا</h1>
      <ul>

      <li className=" text-[#222222] text-[0.9rem] list-disc" dir='rtl'>قابل البايع أو المشتري في مكان عام متل المترو أو المولات أو محطات البنزين </li>
      <li className=" text-[0.9rem] text-[#222222] list-disc" dir='rtl'> لا تذهب وحدك لمقابلة البايع أو المشتري </li>
      <li className=" text-[0.9rem] text-[#222222] list-disc" dir='rtl'>عاين المنتج بشكل جيد قبل أن تشتري وتأكد ان سعره مناسب</li>
      <li className=" text-[0.9rem] text-[#222222] list-disc" dir='rtl'> لا تدفع او تحول مصاري الا لما تعاين المنتج بشكل جيد</li>
      </ul>
    </div>
    </div>
  )
}
