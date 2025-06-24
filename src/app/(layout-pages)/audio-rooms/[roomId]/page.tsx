'use client';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getRoomById } from '@/src/lib/rooms';
import BackButton from '@/src/components/ui/backButton';
import { Button } from '@/src/components/ui/button';
import { useRouter } from 'next/navigation'; // Import useRouter
import { Room } from '@/src/lib/types';
import Loading from './loading';

export default function RoomPage({ params }: { params: { roomId: string } }) {
    const [room, setRoom] = useState<Room | null>(null);
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        const fetchRoom = async () => {
            const fetchedRoom = await getRoomById(params.roomId);
            if (!fetchedRoom) {
                notFound();
            } else {
                setRoom(fetchedRoom);
            }
        };

        fetchRoom();
    }, [params.roomId]);

    const handleJoinRoom = () => {
        // Navigate to the live room with the current room ID
        if (room) {
            router.push(`/live-room/${room.id}`);
        }
    };

    if (!room) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto py-12 px-4 sm:px-6"
        >
            <BackButton className="mb-6" />

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <motion.div
                        layoutId={`room-image-${room.id}`}
                        className="aspect-video bg-gray-100 rounded-xl overflow-hidden"
                    >
                        <img
                            src={room.image}
                            alt={room.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <motion.div
                    layoutId={`room-content-${room.id}`}
                    className="flex-1"
                >
                    <h1 className="text-3xl font-bold">{room.title}</h1>
                    <p className="mt-4 text-gray-700">{room.description}</p>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Details</h2>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Host: {room.host}</li>
                            <li>Category: {room.category}</li>
                            <li>Participants: {room.participants}</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Join Room</h2>
                        <p className="mt-2 text-gray-600">
                            Click the button below to join the room.
                        </p>
                        <Button
                            className="mt-4 px-4 py-2"
                            onClick={handleJoinRoom}
                        >
                            Join Now
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
