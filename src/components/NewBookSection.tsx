import Link from 'next/link';
import { FeaturesCardView } from './featuresCardView';
import { ProductCarousel } from './ProductCarousel';
import { Button } from './ui/button';

export const NewBookSection = () => {
    return (
        <section
            id="shop"
            className="bg-S2BG flex flex-col items-center gap-8 pt-12 pb-20"
        >
            <h1 className="text-2xl  font-serif sm:text-3xl md:text-4xl font-bold text-center">
                Welcome to your Happy Place
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl">
                BookBuddy is your gateway to a world of literary wonders.
                Discover new authors, join lively discussions, and connect with
                like-minded book lovers. Immerse yourself in the joy of reading
                and explore the boundless possibilities of the written word{' '}
            </p>

            <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 justify-center sm:w-fit max-w-4xl">
                <Link href="/signup">
                    <Button variant={'secondary'} className=" sm:w-auto">
                        Learn more
                    </Button>
                </Link>
                <Link href="/signup">
                    <Button className=" sm:w-auto">Shop now</Button>
                </Link>
            </section>
            <ProductCarousel />
        </section>
    );
};
