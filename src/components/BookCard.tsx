// components/BookCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BookCardProps, StatusType } from '../lib/types';

const statusColors: Record<StatusType, string> = {
    'New Release': 'bg-green-100 text-green-800',
    Classic: 'bg-yellow-100 text-yellow-800',
    Bestseller: 'bg-blue-100 text-blue-800',
    "Reader's Choice": 'bg-purple-100 text-purple-800',
    Available: 'bg-gray-100 text-gray-800'
};

const BookCard: React.FC<BookCardProps> = ({
    title,
    author,
    price,
    status = 'Available',
    emoji = '📘',
    onBuy,
    onSave,
    showActions = true,
    className = ''
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-purple-100 ${className}`}
        >
            <div className="bg-blue-50 rounded-xl h-48 mb-3 flex items-center justify-center text-blue-300 text-6xl">
                {emoji}
            </div>

            <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">
                {title}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{author}</p>

            <div className="flex justify-between items-center mb-3">
                <span
                    className={`${statusColors[status as StatusType] ?? statusColors['Available']} text-xs px-2 py-1 rounded`}
                >
                    {status}
                </span>
                <span className="text-purple-600 font-semibold">
                    {typeof price === 'number' ? `$${price.toFixed(2)}` : price}
                </span>
            </div>

            {showActions && (
                <div className="flex space-x-2">
                    <button
                        onClick={onBuy}
                        className="flex-1 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                    >
                        Buy Now
                    </button>
                    <button
                        onClick={onSave}
                        className="flex-1 bg-white border border-purple-300 text-purple-600 py-2 rounded-md hover:bg-purple-50 transition"
                    >
                        Save
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default BookCard;
