"use client";
import { useState } from "react";

interface Car {
  id: number | null;
  price: string | null;
  description: string | null;
  date: number | null;
  speed: string | null;
  production: string | null;
  location: string | null;
  engine: string | null;
  fuel: string | null;
  transmission: string | null;
  img: string | null;
}
export default function AddCar() {
     const [cars, setCars] = useState<Car[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newCar: Car = {
      id: Number(formData.get("id")) || null,
      price: formData.get("price")?.toString() || null,
      description: formData.get("description")?.toString() || null,
      date: Number(formData.get("date")) || null,
      speed: formData.get("speed")?.toString() || null,
      production: formData.get("production")?.toString() || null,
      location: formData.get("location")?.toString() || null,
      engine: formData.get("engine")?.toString() || null,
      fuel: formData.get("fuel")?.toString() || null,
      transmission: formData.get("transmission")?.toString() || null,
      img: formData.get("img")?.toString() || null,
    };

    setCars((prev) => [...prev, newCar]);
    e.target.reset();
  };
  return (

      <form onSubmit={handleSubmit} className="space-y-3 grid grid-cols-1  w-1/2 ">
        <input name="description" type="text" placeholder="الوصف" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="price" type="text" placeholder="السعر" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="date" type="number" placeholder="عدد الأيام" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="speed" type="text" placeholder="الكيلومترات"className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="production" type="text" placeholder="سنة الإنتاج" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="location" type="text" placeholder="الموقع" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="engine" type="text" placeholder="المحرك" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="fuel" type="text" placeholder="نوع الوقود"className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="transmission" type="text" placeholder="ناقل الحركة" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input name="img" type="text" placeholder="رابط الصورة" className="input w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          إضافة السيارة
        </button>
      </form>
  )
}
