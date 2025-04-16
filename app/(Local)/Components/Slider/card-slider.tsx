import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { villasSale } from "../../Context/context"
import Cards from "../card/card"

export function CardSlider({dataBase, realEstate, car, link}:{dataBase:any, realEstate:boolean, car:boolean, link:string}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full   m-auto  "
    >
      <CarouselContent   >

            { dataBase?.map((data:any) => 
                    <div className="p-1" key={data.id}>
            <CarouselItem  className="   min-w-[16rem] max-w-[16rem] sm:max-w-[20rem] sm:min-w-[20rem]  ">
                    <Cards data={data}  key={data.id}  link={`${link}/${data.id}`}  realEstate={realEstate} cars={car}  />
                      </CarouselItem>
                      </div>
                    )}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
