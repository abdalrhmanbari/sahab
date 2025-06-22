"use client";
import { useState } from "react";

interface mobile {
  id: number | null;
  price: string | null;
  description: string | null;
  location: string | null;
  img: string | null;
}
export default function AddMobile() {
     const [mobile, setMobile] = useState<mobile[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newMobile: mobile = {
      id: Number(formData.get("id")) || null,
      price: formData.get("price")?.toString() || null,
      description: formData.get("description")?.toString() || null,
      location: formData.get("location")?.toString() || null,

      img: formData.get("img")?.toString() || null,
    };

    setMobile((prev) => [...prev, newMobile]);
    e.target.reset();
  };
  return (

      <form onSubmit={handleSubmit} className="space-y-3 grid grid-cols-1  w-1/2 ">

        <input name="price" type="text" placeholder="السعر"className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="description" type="text" placeholder="الوصف" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="production" type="text" placeholder="سنة الإنتاج"className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="location" type="text" placeholder="الموقع" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="img" type="text" placeholder="رابط الصورة" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          إضافة  موبايل وتابلت 
        </button>
      </form>
  )
}
