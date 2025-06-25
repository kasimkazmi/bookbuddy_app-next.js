'use client';

import React from 'react';
import { Card, CardContent } from '@/src/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from '@/src/components/ui/carousel';
import { Button } from './ui/button';
import Image from 'next/legacy/image';
import Link from 'next/link';
import IMAGES from '../constants/images';

const bookRecommendations = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: '$10.99',
        image: IMAGES.logo
    },
    {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        price: '$8.99',
        image: IMAGES.logo
    },
    {
        id: 3,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: '$12.99',
        image: IMAGES.logo
    },
    {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: '$9.99',
        image: IMAGES.logo
    },
    {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: '$9.99',
        image: IMAGES.logo
    },
    {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: '$9.99',
        image: IMAGES.logo
    }
];

export const BookRecommendations = () => {
    return (
        <div className="flex flex-col items-center overflow-hidden w-full">
            <div className="flex flex-col lg:flex-row items-center w-full p-4">
                <h2 className="text-gray-800 font-bold text-3xl mb-4 lg:mb-0">
                    Book Recommendations
                </h2>
                <div className="lg:ml-auto">
                    <Link href="/recommendations">
                        <Button className="w-full lg:w-auto">View All</Button>
                    </Link>
                </div>
            </div>

            <div className="w-full px-4">
                <Carousel>
                    <CarouselContent className="flex gap-4">
                        {bookRecommendations.map((book) => (
                            <CarouselItem
                                key={book.id}
                                className="!basis-[calc(100%/2-0.5rem)] sm:!basis-[calc(100%/3-0.67rem)] md:!basis-[calc(100%/4-0.75rem)] lg:!basis-[calc(100%/5-0.8rem)] transition-transform"
                            >
                                <Card className="w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
                                        <Image
                                            src={book.image}
                                            width={100}
                                            height={120}
                                            alt={book.title}
                                            className="object-cover rounded-md"
                                        />
                                        <span className="text-sm font-semibold text-center">
                                            {book.title}
                                        </span>
                                        <span className="text-xs text-gray-500 text-center">
                                            {book.author}
                                        </span>
                                        <span className="text-sm font-bold text-center">
                                            {book.price}
                                        </span>
                                        <Button size="sm" className="mt-2">
                                            Add to cart
                                        </Button>
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
