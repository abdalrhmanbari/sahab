import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "../Context/context";


export default function Footer() {
  return (
    <footer className="     border-t border-gray-200 flex flex-col text-black-100 mt-14  sm-w-full bottom-0 ">
      <div className=" flex flex-wrap flex-row-reverse justify-between gap-5 2xl:px-40 sm:px-16  py-10 w-full ">
        <div className="flex flex-col  text-end  items-end gap-8 px-16 ">
          <h1 className="font-bold text-xl ">سحاب</h1>
          <div className=" text-[0.9rem] text-gray-700 flex flex-col gap-2 ">
            سحاب 2025
            <br />
            <span className=" ">تم بواسطة: عبد الرحمن البري</span>
            <br />
            &copy; جميع الحقوق محفوظة
          </div>
        </div>
        <div className="   flex items-start justify-start  sm:gap-20 gap-4 gap-y-4  text-center max-md:mt-10 ">
          {footerLinks?.map((link: any) => (
            <div
              key={link.title}
              className=" flex flex-col gap-6 text-base min-w-[10.625rem]"
            >
              <h3 className=" font-bold">{link.title}</h3>
              {link?.links?.map((item: any) => (
                <Link href={item.url} className=" text-gray-500" key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <div className="flex-1 flex  justify-center max-sm:mt-4 gap-10">
          <Link href={"/"} className=" text-gray-500">
            {" "}
            سياسة الخصوصية
          </Link>
          <Link href={"/"} className=" text-gray-500">
            شروط الاستخدام
          </Link>
        </div>
      </div>
    </footer>
  );
}
