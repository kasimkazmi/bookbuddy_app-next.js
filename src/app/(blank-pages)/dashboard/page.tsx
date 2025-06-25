'use client';
import { useRouter } from 'next/navigation';
import {
    Book,
    Bookmark,
    Users,
    MessageSquare,
    ArrowRight,
    Clock,
    Bell,
    Search,
    User,
    ChevronRight
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';

import QuickActions from '@/src/components/QuickActions';
import StatsCard from '@/src/components/StatsCard';
import { ProductCarousel } from '@/src/components/ProductCarousel';
import { BookRecommendations } from '@/src/components/BookRecommendations';

export default function DashboardPage() {
    const router = useRouter();

    // Mock stats data
    const stats = [
        { title: 'Books Read', value: 24, icon: Book, color: 'bg-purple-200' },
        { title: 'Saved', value: 12, icon: Bookmark, color: 'bg-blue-200' },
        { title: 'Community', value: 42, icon: Users, color: 'bg-green-200' },
        { title: 'Hours', value: 156, icon: Clock, color: 'bg-yellow-200' }
    ];

    // Quick action features
    const features = [
        {
            title: 'Book Trading',
            description: 'Trade your books effortlessly with nearby readers',
            icon: Book,
            buttonText: 'Start Trading',
            action: () => router.push('/trading'),
            color: 'bg-purple-100 text-purple-600'
        },
        {
            title: 'Audio Rooms',
            description: 'Join live discussions about your favorite books',
            icon: MessageSquare,
            buttonText: 'Join Rooms',
            action: () => router.push('/rooms'),
            color: 'bg-blue-100 text-blue-600'
        },
        {
            title: 'Book Discovery',
            description: 'Get personalized recommendations based on your taste',
            icon: Search,
            buttonText: 'Discover Books',
            action: () => router.push('/discover'),
            color: 'bg-green-100 text-green-600'
        },
        {
            title: 'Book Clubs',
            description: 'Connect with fellow readers who share your interests',
            icon: Users,
            buttonText: 'Find Clubs',
            action: () => router.push('/clubs'),
            color: 'bg-yellow-100 text-yellow-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm py-4 px-6">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold text-purple-600">
                            BookBuddy
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <User className="w-4 h-4" />
                            </div>
                            <span className="hidden md:inline font-medium">
                                Welcome back!
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto p-6">
                {/* Welcome Banner */}
                <StatsCard stats={stats} />

                <QuickActions />

                {/* Book Recommendations */}
                <BookRecommendations />
                {/* Recent Activity */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">
                        Recent Activity
                    </h2>
                    <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                <User className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm">
                                    <span className="font-medium">Sarah</span>{' '}
                                    liked your review of{' '}
                                    <span className="font-medium">Dune</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                    2 hours ago
                                </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                        {/* More activity items can be added here */}
                    </div>
                </section>
            </main>
        </div>
    );
}
