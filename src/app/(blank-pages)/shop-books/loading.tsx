'use client';
import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="space-y-4">
                {/* Skeleton Header */}
                <div className="h-8 w-48 bg-gray-300 rounded-md animate-pulse"></div>

                {/* Skeleton Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="bg-gray-300 h-48 rounded-md"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md"></div>
                            <div className="mt-2 h-4 bg-gray-300 rounded-md"></div>
                            <div className="mt-4 h-8 bg-gray-300 rounded-md"></div>
                        </div>
                    ))}
                </div>

                {/* Skeleton Footer (Pagination) */}
                <div className="flex justify-center mt-10 space-x-4">
                    <div className="w-24 h-8 bg-gray-300 rounded-md animate-pulse"></div>
                    <div className="w-24 h-8 bg-gray-300 rounded-md animate-pulse"></div>
                    <div className="w-24 h-8 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
