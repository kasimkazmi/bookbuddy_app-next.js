import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselSlides } from "@/constants";
import { Button } from "./ui/button";
import Image from "next/legacy/image";
export const ProductCarousel = () => {
  return (
    <div className=" bg-current container flex justify-center items-center">
      <div className="flex lg:flex-col items-center justify-center gap-6">
        <h2 className="p-4  text-background text-3xl">Top Picks </h2>
        <Button>View All</Button>
      </div>
      <Carousel className=" carousel flex gap-4 overflow-x-auto sm:gap-5 md:gap-6 lg:gap-4 xl:gap-8 justify-between items-center">
        <CarouselContent className="-m-1 will-change-auto ">
          {carouselSlides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="py-14 md:basis-1/3 lg:basis-1/6 basis-1/2 sm:basis-1/2 sm:max-w-sm  "
            >
              <Card className="w-44">
                <CardContent className="flex flex-col aspect-square items-center justify-center">
                  <Image src="/logo.png" width={100} height={120} />
                  <span className="text-sm py-2">{slide.price}</span>
                  <Button size="sm">Add to cart</Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
