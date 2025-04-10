import React from 'react'

export default function SponsoredAd() {
  return (
    <div className=' w-full bg-blue-100 text-center  h-[12rem]  flex justify-center items-center flex-col gap-3 rounded-md'>
        <h1 className=' font-bold text-[1rem]'>هل تريد أن ترى أغراضك هنا؟</h1>
        <p className='  text-[0.9rem]'>إكسب بعض المال الإضافي عن طريق بيع الأشياء في موقعك. أضف إعلانك الآن، إنه سريع وسهل</p>
        <span className=' mt-6 font-bold underline underline-offset-8'>ابدأ البيع</span>
    </div>
  )
}
