import React from 'react';
import { auth } from '@/src/firebase';

interface Stat {
    title: string;
    value: number;
    icon: React.ElementType;
    color: string;
}

interface StatsCardProps {
    stats: Stat[];
    userName: string; // Add userName prop
}

const StatsCard: React.FC<StatsCardProps> = ({ stats, userName }) => {
    // Ensure user is authenticated

    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white mb-8">
            <h2 className="text-2xl font-bold mb-2">
                Welcome back, {userName}!
            </h2>
            <p className="mb-6">
                Explore new books, trade with friends, and discover personalized
                recommendations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`${stat.color} p-2 rounded-lg`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm text-white/80">
                                    {stat.title}
                                </p>
                                <p className="text-xl font-bold">
                                    {stat.value}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsCard;
