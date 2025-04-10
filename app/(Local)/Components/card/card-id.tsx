import Image from 'next/image'
import React from 'react'
import whatsapp from "../../Assets/Images/whatsapp.png"
import call from "../../Assets/Images/telephone.png"
export default function CardId() {
  return (
    <div className=" w-full  border border-gray-100 p-4 flex flex-col  justify-around rounded-md">
    <div className=" flex flex-col gap-4">
    <button className=" px-40 py-4 bg-emerald-100 hover:bg-emerald-200 rounded-md font-black text-[1rem] flex items-center  gap-2 h-fit">واتساب
            <Image alt="icon" src={whatsapp} className="w-4"/>
          </button>
          <button className="px-40 py-4 bg-blue-100 hover:bg-blue-200  rounded-md font-black text-[1rem] flex items-center gap-2 h-fit">مكالمة
            <Image alt="icon"  src={call} className=" w-4"/>
          </button>
    </div>
    <div className=" flex flex-col gap-3">
      <h1 className=" text-xl font-bold">سلامتك تهمنا</h1>
      <p className=" text-[#222222] text-[0.9rem]">قابل البايع في مكان عام متل المترو أو المولات أو محطات البنزين -</p>
      <p className=" text-[0.9rem] text-[#222222]"> لا تذهب وحدك لمقابلة البايع أو المشتري -</p>
      <p className=" text-[0.9rem] text-[#222222]">عاين المنتج بشكل جيد قبل أن تشتري وتأكد ان سعره مناسب -</p>
      <p className=" text-[0.9rem] text-[#222222]"> لا تدفع او تحول مصاري الا لما تعاين المنتج بشكل جيد -</p>
    </div>
    </div>
  )
}
