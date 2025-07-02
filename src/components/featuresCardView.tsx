'use client';

import Image from 'next/legacy/image';
import { Card } from './ui/card';
import IMAGES from '../constants/images';

export const FeaturesCardView = () => {
    return (
        <section
            id="features"
            className="flex justify-center bg-S5BG items-center py-10 px-6 sm:px-20"
        >
            <div className="bg-S1BG text-center text-textColo p-10 max-w-6xl w-full rounded-lg">
                <h4 className="uppercase text-sm tracking-widest text-textColo">
                    Our Vision
                </h4>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                    Building Connections Through the Love of Books
                </h2>
                <p className="mt-4 text-textColo text-base sm:text-lg max-w-2xl mx-auto">
                    We believe in fostering a community where readers connect,
                    share their passion for literature, and discover new
                    stories. With trust and open collaboration, we aim to create
                    a platform that brings book lovers together like never
                    before.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    <FeatureCard
                        icon={IMAGES.BookTrading}
                        title="Seamless Book Trading"
                        description="Trade your books effortlessly with nearby users who share your love for reading."
                    />
                    <FeatureCard
                        icon={IMAGES.BookClubs}
                        title="Interactive Book Clubs"
                        description="Engage in audio or text-based discussions and reading sessions."
                    />
                    <FeatureCard
                        icon={IMAGES.NewBook}
                        title="Discover New Books"
                        description="Explore trending books and get personalized recommendations."
                    />
                    <FeatureCard
                        icon={IMAGES.Community}
                        title="Build a Community"
                        description="Connect with fellow readers, share reviews, and grow your circle."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({
    icon,
    title,
    description
}: {
    icon: string;
    title: string;
    description: string;
}) => (
    <Card className="bg-background flex flex-col items-center justify-between p-6 min-h-[280px] h-full text-center transition duration-300 shadow-sm">
        <div className="flex flex-col items-center">
            {/* Bigger image wrapper */}
            <div className="w-20 h-20 flex justify-center items-center rounded-full border-8 bg-background mb-4">
                <Image
                    src={icon}
                    alt={title}
                    width={60}
                    height={60}
                    objectFit="contain"
                />
            </div>
            <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <p className="mt-4 text-sm font-sans">{description}</p>
    </Card>
);
