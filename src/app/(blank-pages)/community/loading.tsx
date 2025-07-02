'use client';

import React from 'react';

const loading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-6 pt-24 lg:flex lg:space-x-6">
        {/* Feed Skeleton */}
        <div className="lg:w-3/4 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <div className="flex space-x-4">
              <div className="rounded-full bg-gray-200 w-12 h-12" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-6 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-gray-200 w-10 h-10" />
                  <div className="space-y-1">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-3 bg-gray-200 rounded w-16" />
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-6" />
              </div>
              <div className="h-12 bg-gray-200 rounded w-full mb-2" />
              <div className="flex space-x-2">
                {[...Array(3)].map((_b, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-20" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Skeleton */}
        <aside className="lg:w-1/4 space-y-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/2 mb-2" />
              {[...Array(3)].map((__, j) => (
                <div key={j} className="h-4 bg-gray-200 rounded w-full mb-1" />
              ))}
            </div>
          ))}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md text-white p-6 animate-pulse">
            <div className="h-8 bg-white rounded w-8 mb-3 mx-auto" />
            <div className="h-4 bg-white rounded w-3/4 mb-1 mx-auto" />
            <div className="h-3 bg-white rounded w-1/2 mb-4 mx-auto" />
            <div className="h-8 bg-white rounded w-20 mx-auto" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default loading;
