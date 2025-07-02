'use client';
import TradeForm from '@/src/components/TradeForm';
import React from 'react';
import { motion } from 'framer-motion';

const tradePage = () => {
    return (
        <section className="  bg-S4BG  min-h-screen">
            {/* TODO use background image instead of bg-S4BG */}

            <header className="bg-gradient-to-br from-purple-50 to-blue-50 shadow-md p-6 text-center">
                <h1 className="text-4xl font-bold text-purple-600 mb-2">
                   📚 Bazam Book Trade Center
                </h1>
                <p className="text-gray-600">
                    Swap stories, make friends - one book at a time!
                </p>
            </header>
            <main className="container mx-auto px-4 py-8">
                <div className=" bg-S1BG rounded-2xl min-w-full p-24 flex justify-center items-center shadow-lg mx-auto">
                    <TradeForm />
                </div>
            </main>
        </section>
    );
};

export default tradePage;
