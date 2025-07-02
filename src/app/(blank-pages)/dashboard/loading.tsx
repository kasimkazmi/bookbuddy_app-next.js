'use client';

import { motion } from 'framer-motion';

const loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <p className="text-lg text-gray-500">
                    Loading your dashboard...
                </p>
            </motion.div>
        </div>
    );
};

export default loading;
