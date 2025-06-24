'use client';

import { AudioRoomsSection } from '@/src/components/AudioRooms';
import IMAGES from '@/src/constants/images';
import React from 'react';

const page = () => {
    return (
        <section className="flex justify-center py-24 bg-S4BG items-center">
            <AudioRoomsSection />
        </section>
    );
};

export default page;
