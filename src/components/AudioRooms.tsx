'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from './ui/card';
import { Calendar, Headphones, Users } from 'lucide-react';
import { broadcastRooms, roomsCategories } from '../constants';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export const AudioRoomsSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredPosts = broadcastRooms.filter((post) => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'live') return post.isLive;
        if (activeFilter === 'upcoming') return post.isUpcoming;
        return post.category === activeFilter;
    });

    return (
        <section className="bg-S1BG py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl text-textColo sm:text-5xl  font-bold mb-2">
                        Book Lovers Audio Rooms
                    </h1>
                    <p className="text-zinc-500 font-medium">
                        Join live discussions, author interviews, and book clubs
                        with fellow bibliophiles
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {roomsCategories.map((category) => (
                        <Button
                            key={category.id}
                            variant={
                                activeFilter === category.id
                                    ? 'secondary'
                                    : 'outline'
                            }
                            className={`rounded-full text-sm px-4 py-2 ${
                                activeFilter === category.id
                                    ? 'bg-black text-white'
                                    : ''
                            }`}
                            onClick={() => setActiveFilter(category.id)}
                        >
                            {category.label}
                        </Button>
                    ))}
                </div>

                {/* Room Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence initial={false}>
                        {filteredPosts.map((room) => (
                            <motion.div
                                key={room.id}
                                layoutId={`card-${room.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="cursor-pointer"
                            >
                                <Link
                                    href={`/audio-rooms/${room.id}`}
                                    className="block"
                                >
                                    <Card
                                        key={room.id}
                                        className={`rounded-xl border shadow-md transition-all hover:shadow-lg ${
                                            room.isLive
                                                ? 'ring-2 ring-green-500 animate-glow'
                                                : ''
                                        }`}
                                    >
                                        <div className="relative">
                                            <img
                                                src={room.image}
                                                alt={room.title}
                                                className="w-full h-48 object-cover rounded-t-xl"
                                            />
                                            {room.isLive && (
                                                <div className="absolute top-2 left-2 outline-1 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                                                    <span className="relative flex h-2 w-2 mr-1">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 "></span>
                                                    </span>
                                                    LIVE
                                                </div>
                                            )}

                                            {room.badge && (
                                                <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                                                    {room.badge}
                                                </div>
                                            )}
                                        </div>

                                        <CardHeader className="px-6 pt-6 pb-4">
                                            <div className="flex justify-between items-start">
                                                <span className="text-sm   border-2 rounded-lg font-medium px-2 py-1rounded-md">
                                                    {room.category
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        room.category.slice(1)}
                                                </span>
                                                <div className="flex items-center text-sm ">
                                                    <Users className="w-4 h-4 mr-1" />
                                                    {room.participants}
                                                </div>
                                            </div>
                                            <CardTitle className="text-xl font-bold mt-2">
                                                {room.title}
                                            </CardTitle>
                                            <CardDescription className="mt-2">
                                                {room.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="flex items-center justify-between px-6 pb-6">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{room.date}</span>
                                                <span>•</span>
                                                <Headphones className="w-4 h-4" />
                                                <span>{room.time}</span>
                                            </div>
                                            <div className="text-sm font-medium">
                                                @{room.host}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
