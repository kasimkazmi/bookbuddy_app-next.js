// src/app/(layout-pages)/audio-rooms/page.tsx
'use client';

import { AudioRoomsSection } from '@/src/components/AudioRooms';

export default function AudioRoomsPage() {
    return (
        <section className="flex justify-center py-24 bg-S4BG items-center">
            <AudioRoomsSection />
        </section>
    );
}
