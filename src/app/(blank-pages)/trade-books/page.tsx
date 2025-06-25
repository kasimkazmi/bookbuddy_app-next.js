'use client';
import TradeForm from '@/src/components/TradeForm';
import React from 'react';
import { motion } from 'framer-motion';

const tradePage = () => {
    return (
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
            {/* TODO use background image instead of bg-S4BG */}

            <header className="bg-white shadow-md p-6 text-center">
                <h1 className="text-4xl font-bold text-purple-600 mb-2">
                    BookBuddy Trade Center
                </h1>
                <p className="text-gray-600">
                    Swap stories, make friends - one book at a time!
                </p>
            </header>
            <main className="container mx-auto px-4 py-8">
                <div className="bg-S1BG rounded-3xl py-16 px-4 sm:px-6 flex items-center justify-center min-h-[400px]">
                    <TradeForm />
                </div>
            </main>
        </section>
    );
};

export default tradePage;
