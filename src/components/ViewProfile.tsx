import React from 'react';
import { UserViewType } from '../constants';

interface UserProfilePageProps {
    user: UserViewType;
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ user }) => {
    return (
        <div className="bg-gradient-to-br from-purple-50 rounded-3xl to-blue-50 min-h-screen font-sans px-4 py-12">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-purple-200 animate-[scaleIn_0.5s_ease-in-out]">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative group">
                        <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center text-5xl font-bold text-purple-600 shadow-inner border-4 border-white animate-bounce-alt hover:shadow-lg transition-transform duration-300">
                            S
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-md">
                            <span className="relative flex h-3 w-3 mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Active
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-800 mb-1">
                            Sarah Wilson
                        </h1>
                        <p className="text-purple-600 flex items-center justify-center md:justify-start gap-2 mb-3">
                            <span>📍 Ottawa, ON · 2.8 km away</span>
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-md">
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                Science Fiction
                            </span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                Space Opera
                            </span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                Classic Reader
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    {
                        title: 'Books Owned',
                        count: '127',
                        color: 'purple',
                        icon: '📘'
                    },
                    {
                        title: 'Successful Trades',
                        count: '42',
                        color: 'green',
                        icon: '🔄'
                    },
                    {
                        title: 'Community Rating',
                        count: '4.9 ⭐',
                        color: 'yellow',
                        icon: '🌟'
                    }
                ].map((stat, idx) => (
                    <div
                        key={idx}
                        className={`bg-white p-6 rounded-2xl shadow-md border-l-4 border-${stat.color}-400 hover:shadow-lg transition-transform duration-300`}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`p-3 bg-${stat.color}-100 rounded-lg text-${stat.color}-600 text-xl`}
                            >
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">
                                    {stat.title}
                                </p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {stat.count}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Books Section */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Available for Trade
                    </h2>
                    <button className="text-purple-600 hover:text-purple-800 transition-colors font-medium flex items-center gap-1">
                        View All →
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2].map((book, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="bg-blue-50 rounded-xl h-40 mb-3 flex items-center justify-center text-blue-300 text-4xl">
                                📘
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1">
                                Project Hail Mary
                            </h3>
                            <p className="text-gray-500 text-sm mb-2">
                                Andy Weir
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                    New
                                </span>
                                <button className="text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors">
                                    Request Trade
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
