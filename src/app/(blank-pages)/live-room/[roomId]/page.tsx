'use client';

import LiveRoom from '@/src/components/LiveRoom';
import { useParams } from 'next/navigation';

export default function LiveRoomPage() {
    const params = useParams();
    const roomId = params?.roomId as string;

    return (
        <section className=" mx-auto  justify-center  items-center ">
            <LiveRoom roomId={roomId} />
        </section>
    );
}
