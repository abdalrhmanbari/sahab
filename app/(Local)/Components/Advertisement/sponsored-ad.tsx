import React from 'react'

export default function SponsoredAd() {
  return (
    <div className=' w-full bg-blue-100 text-center  sm:h-[12rem] py-4 px-4  flex justify-center items-center flex-col gap-3 rounded-md'>
        <h1 className=' font-bold text-[1rem]'>هل تريد أن ترى أغراضك هنا؟</h1>
        <p className='  sm:text-[0.9rem] text-[0.7rem]'>إكسب بعض المال الإضافي عن طريق بيع الأشياء في موقعك. أضف إعلانك الآن، إنه سريع وسهل</p>
        <span className=' mt-6 font-bold underline underline-offset-8'>ابدأ البيع</span>
    </div>
  )
}
