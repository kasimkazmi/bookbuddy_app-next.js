'use client';

import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <div className="animate-pulse mb-4">
                    {/* Skeleton for Dashboard Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="animate-pulse rounded-xl border shadow-md p-6"
                            >
                                <div className="h-6 w-1/2 bg-gray-300 rounded-md mb-2"></div>
                                <div className="h-12 w-3/4 bg-gray-300 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-lg text-gray-500">
                    Loading your dashboard...
                </p>
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
