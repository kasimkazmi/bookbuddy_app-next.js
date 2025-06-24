'use client';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getRoomById } from '@/src/lib/rooms';
import BackButton from '@/src/components/ui/backButton';

export default async function RoomPage({
    params
}: {
    params: { roomId: string };
}) {
    const room = await getRoomById(params.roomId);

    if (!room) {
        return notFound();
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
                    {/* Add more room details here */}
                </motion.div>
            </div>
        </motion.div>
    );
}
