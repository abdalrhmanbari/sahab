"use client";
import { useState } from "react";

interface Car {
  id: number | null;
  price: string | null;
  description: string | null;
  layout: string | null;
  location: string | null;
  bed: string | null;
  bathroom: string | null;

  img: string | null;
}
export default function AddRealEstate() {
     const [cars, setCars] = useState<Car[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newCar: Car = {
      id: Number(formData.get("id")) || null,
      price: formData.get("price")?.toString() || null,
      description: formData.get("description")?.toString() || null,
      layout: formData.get("layout")?.toString() || null,
      location: formData.get("location")?.toString() || null,
      bed: formData.get("bed")?.toString() || null,
      bathroom: formData.get("bathroom")?.toString() || null,
      img: formData.get("img")?.toString() || null,
    };
    setCars((prev) => [...prev, newCar]);
    e.target.reset();
  };
  return (
        <form onSubmit={handleSubmit} className="space-y-3 grid grid-cols-1  w-1/2 ">
        <input name="description" type="text" placeholder="الوصف"className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="price" type="text" placeholder="السعر" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="layout" type="text" placeholder="مساحة" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="location" type="text" placeholder="الموقع" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="bed" type="text" placeholder="سرير" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="bathroom" type="text" placeholder="حمام" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="img" type="text" placeholder="رابط الصورة" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            إضافة عقار
        </button>
      </form>
  )
}
