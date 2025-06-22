"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    // تحقق وهمي للتجريب فقط
    if (email === "sahab@gmail.com" && password === "123456" ) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
      
    } else {
      setError("البريد الإلكتروني أو كلمة المرور خاطئة");
      
    }
  };

  return (
    <div className=" flex flex-col items-center gap-4 text-center 2xl:px-40 sm:px-16 px-6   flex-1  justify-center   lg:px-8 -mt-14 sm:m-0" dir="rtl">
      <form
        onSubmit={handleLogin}
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
      >
        <h1 className="m-auto mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 " >
          تسجيل دخول ل سحاب
        </h1>

     
        <input
          type="text"
          name="name"
          placeholder=" الأسم"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded  transition"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}
