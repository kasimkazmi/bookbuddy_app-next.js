// StatsCard.tsx
import React from 'react';

interface Stat {
    title: string;
    value: number;
    icon: React.ElementType;
    color: string;
}

interface StatsCardProps {
    stats: Stat[];
}

const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
            <p className="mb-6">
              Explore new books, trade with friends, and discover personalized recommendations.
            </p>


   {/* <p className="text-gray-600 mb-4">  Your personal book dashboard</p>
            <p className="text-gray-500 mb-8">  Track your reading journey, manage your library, and connect with fellow book lovers.</p>
            <p className="text-gray-500 mb-8">  Explore new books, trade with friends, and discover personalized recommendations.</p>
            <p className="text-gray-500 mb-8">  Join our community of avid readers and share your passion for literature.</p>
            <p className="text-gray-500 mb-8">  P.S. Don't forget to check out our latest book recommendations and community events!</p>
            <p className="text-gray-500 mb-8">  Thank you for being a part of our book-loving community!</p>
            <p className="text-gray-500 mb-8">  Let's embark on this literary journey together!</p>
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
