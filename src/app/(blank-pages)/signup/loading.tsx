'use client';
import React from 'react';

const loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-4 text-purple-600 font-semibold text-lg">
                {metadata.title}
            </span>
            <p className="text-gray-500 mt-2">{metadata.description}</p>
        </div>
    );
};

export default loading;
export const metadata = {
    title: 'Loading',
    description: 'Loading page for signup'
};
