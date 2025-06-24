'use client';
import TradeForm from '@/src/components/TradeForm';
import React from 'react';
import { motion } from 'framer-motion';

const tradePage = () => {
    return (
        <section className="flex justify-center py-24 bg-S4BG items-center">
            {/* TODO use backgrud imgae insted of bg-S4BG */}
            <div className="bg-S1BG rounded-3xl py-16 px-4 sm:px-6">
                {/* Header with fun animation */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-purple-600 mb-4">
                        <span className="">📚</span>
                        BookBuddy Trade Center
                    </h1>
                    <p className="text-xl text-gray-600">
                        Swap stories, make friends - one book at a time!
                    </p>
                </div>

                <TradeForm />
            </div>
        </section>
    );
};

export default tradePage;
