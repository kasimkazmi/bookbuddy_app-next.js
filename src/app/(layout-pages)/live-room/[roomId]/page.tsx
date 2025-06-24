'use client';

import LiveRoom from '@/src/components/LiveRoom';
import { useParams } from 'next/navigation';

export default function LiveRoomPage() {
    const params = useParams();
    const roomId = params?.roomId as string;

    return (
        <section className=" mx-auto py-12 px-4  justify-center  items-center bg-S4BG  sm:px-6">
            <LiveRoom roomId={roomId} />
        </section>
    );
}
