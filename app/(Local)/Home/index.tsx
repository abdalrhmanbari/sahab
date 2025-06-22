import React from "react";
import Image from "next/image";
import Categories from "../Components/Categories/categories";
import Link from "next/link";
import left from "../Assets/Images/left.png";

import {
  carRent,
  carSale,
  category,
  houseRent,
  houseSale,
  mobile,
  villasRent,
  villasSale,
} from "../Utils/Context/context";
import Card from "../Components/card/card";
import { CardSlider } from "../Components/Slider/card-slider";
import SponsoredAdsSlider from "../Components/Slider/sponsored-ads-slider";




export default function HomePage() {
  return (
    <div className="  sm:px-40 px-4  flex flex-col gap-10  text-end ">
      <SponsoredAdsSlider />
      <h1 className=" text-xl font-semibold">الفئات الشائعة</h1>
      <div className="  flex flex-wrap gap-8 justify-around items-end">
        {category?.map((el) => (
          <Categories el={el} key={el.id} image={el.img} />
        ))}
      </div>
      {/* Villas Sale */}
      <div className=" flex justify-between items-center mt-4">
        <Link
          href={"/real-estate/villas-sale"}
          className=" flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600"
        >
          <Image alt="icon" src={left} className=" w-3" />
          عرض المزيد
        </Link>
        <h1 className=" text-xl  font-semibold">فلل للبيع</h1>
      </div>
      <div className=" px-8">
        <CardSlider
          dataBase={villasSale}
          realEstate={true}
          car={false}
          link="/real-estate/villas-sale"
        />
      </div>
      {/* Villas Rent */}
      <div className=" flex justify-between items-center">
        <Link
          href={"/real-estate/villas-rent"}
          className=" flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600"
        >
          <Image alt="icon" src={left} className=" w-3" />
          عرض المزيد
        </Link>
        <h1 className=" text-xl  font-semibold ">فلل للإيجار</h1>
      </div>
      <div className=" px-8">
        <CardSlider
          dataBase={villasRent}
          realEstate={true}
          car={false}
          link="/real-estate/villas-rent"
        />
      </div>
      {/* Houses Sale */}
      <div className=" flex justify-between items-center">
        <Link
          href={"/real-estate/houses-sale"}
          className=" flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600"
        >
          <Image alt="icon" src={left} className=" w-3" />
          عرض المزيد
        </Link>
        <h1 className=" text-xl  font-semibold "> منازل للبيع</h1>
      </div>
      <div className=" px-8">
        <CardSlider
          dataBase={houseSale}
          car={false}
          realEstate={true}
          link="/real-estate/houses-sale"
        />
      </div>

      {/* Houses Rent */}
      <div className=" flex justify-between items-center">
        <Link
          href={"/real-estate/houses-rent"}
          className=" flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600"
        >
          <Image alt="icon" src={left} className=" w-3" />
          عرض المزيد
        </Link>
        <h1 className=" text-xl  font-semibold "> منازل للإيجار</h1>
      </div>
      <div className=" px-8">
        <CardSlider
          dataBase={houseRent}
          car={false}
          realEstate={true}
          link="/real-estate/houses-rent"
        />
      </div>
      {/* Cars Sale */}
      <div className=" flex justify-between items-center">
        <Link
          href={"/cars/cars-sale"}
          className=" flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600"
        >
          <Image alt="icon" src={left} className=" w-3" />
          عرض المزيد
        </Link>
        <h1 className=" text-xl  font-semibold "> سيارات للبيع</h1>
      </div>
      <div className=" px-8">
        <CardSlider
          dataBase={carSale.reverse()}
          car={true}
          realEstate={false}
          link="/cars/cars-sale"
        />
      </div>
      {/* Cars Rent */}
      <div className=" flex justify-between items-center">
        <Link
          href={"/cars/cars-rent"}
          className=" flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600"
        >
          <Image alt="icon" src={left} className=" w-3" />
          عرض المزيد
        </Link>
        <h1 className=" text-xl  font-semibold "> سيارات للإيجار</h1>
      </div>
      <div className=" px-8">
        <CardSlider
          dataBase={carRent.reverse()}
          car={true}
          realEstate={false}
          link="/cars/cars-rent"
        />
      </div>
      {/* mobile */}
      <div className=" flex justify-between items-center -mb-3">
        <Link
          href={"/cars/cars-rent"}
          className=" flex items-center justify-start gap-4 text-[0.9rem] font-semibold text-blue-600"
        >
          <Image alt="icon" src={left} className=" w-3" />
          عرض المزيد
        </Link>
        <h1 className=" text-xl  font-semibold "> هواتف محمولة</h1>
      </div>
      <div className=" px-8">
        <CardSlider
          dataBase={mobile}
          car={false}
          realEstate={false}
          link="/mobiles"
        />
      </div>
    </div>
  );
}
