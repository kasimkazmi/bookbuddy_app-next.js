import React from 'react';
import { Card, CardContent } from '@/src/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from '@/src/components/ui/carousel';
import { carouselSlides } from '@/src/constants';
import { Button } from './ui/button';
import Image from 'next/legacy/image';
import Link from 'next/link';

export const ProductCarousel = () => {
    return (
        <div className="bg-current container flex flex-col items-center overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center w-full p-4">
                <h2 className="text-background  font-serif text-3xl mb-4 lg:mb-0">
                    Top Picks
                </h2>
                <div className="lg:ml-auto sm:ml-0 flex">
                    <Link href="/shop-books">
                        <Button className="w-full lg:w-auto">View All</Button>
                    </Link>
                </div>
            </div>
            <div className="w-full overflow-x-auto">
                <Carousel className="carousel flex gap-4 justify-center items-center">
                    <CarouselContent className="-m-1 will-change-auto">
                        {carouselSlides.map((slide, index) => (
                            <CarouselItem
                                key={index}
                                className="py-4 md:py-6 lg:py-8 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                            >
                                <Card className="w-44 mx-auto">
                                    <CardContent className="flex flex-col aspect-square items-center justify-center">
                                        <Image
                                            src="/logo.png"
                                            width={100}
                                            height={120}
                                            alt="Product Image"
                                        />
                                        <span className="text-sm py-2">
                                            {slide.price}
                                        </span>
                                        <Button size="sm">Add to cart</Button>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};
