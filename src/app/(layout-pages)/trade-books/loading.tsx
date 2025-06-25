'use client';
import { BookOpen } from 'lucide-react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            {/* Loader Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center mb-16"
            >
                <motion.div
                    animate={{
                        rotate: 360,
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear'
                        }
                    }}
                >
                    <BookOpen className="w-20 h-20 text-purple-500" />
                </motion.div>
                <p className="mt-4 text-purple-600 font-medium">
                    Scanning our bookshelves...
                </p>
            </motion.div>
        </div>
    );
};

export default Loading;
