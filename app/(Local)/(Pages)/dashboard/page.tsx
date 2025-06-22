"use client";

import Image from "next/image";
import { useState } from "react";
import mobile from "../../Assets/Images/mobile-phone.png";
import building from "../../Assets/Images/building.png";
import car from "../../Assets/Images/electric-car.png";
import AddCar from "../../Components/Form/add-car";
import AddMobile from "../../Components/Form/add-mobile";
import AddRealEstate from "../../Components/Form/add-real-estate";
export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      {!selectedCategory ? (
        <CategorySelection onSelect={setSelectedCategory} />
      ) : (
        <AddProduct
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      )}
    </>
  );
}

function CategorySelection({ onSelect }: { onSelect: (cat: string) => void }) {
  const categories = [
    { id: "cars", label: "سيارات", icon: "🚗" },
    { id: "real-estate", label: "عقارات", icon: "🏠" },
    { id: "mobile", label: "موبايل وتابلت", icon: "📱" },
  ];

  return (
    <div
      className="flex flex-col items-center gap-4 text-end 2xl:px-40 sm:px-16 px-4    justify-center bg-gray-100 py-20"
      dir="rtl"
    >
      <h1 className="text-3xl mb-8 font-bold">اختر الفئة</h1>
      <div className=" flex gap-8">
        <div
          onClick={() => onSelect("cars")}
          className="cursor-pointer bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition"
        >
          <Image alt={`${car}`} src={car} className=" w-20" />
          <span className="text-xl font-semibold">سيارات</span>
        </div>
        <div
          onClick={() => onSelect("real-estate")}
          className="cursor-pointer bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition"
        >
          <Image alt={`${building}`} src={building} className=" w-20" />
          <span className="text-xl font-semibold">عقارات</span>
        </div>
        <div
          onClick={() => onSelect("mobile")}
          className="cursor-pointer bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition"
        >
          <Image alt={`${mobile}`} src={mobile} className=" w-20" />
          <span className="text-xl font-semibold">موبايل  وتابلت </span>
        </div>
      </div>
    </div>
  );
}

function AddProduct({
  category,
  onBack,
}: {
  category: string;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:px-40  px-10" dir="rtl">
      <button onClick={onBack} className="mb-4 text-blue-600 underline">
        ← العودة لاختيار الفئة
      </button>

      <h2 className="text-2xl font-bold mb-6">
        إضافة منتج -{" "}
        {category === "cars"? "سيارات"
          : category === "real-estate"
          ? "عقارات"
          : "موبايل وتابلت"}
      </h2>
      <div>
        {
        category === "cars" ? <AddCar/>
        : category === "real-estate" ? <AddRealEstate/>
        : category === "mobile" && <AddMobile/>
        }
      </div>
          
    </div>
  );
}
