// src/app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/src/firebase';
import QuickActions from '@/src/components/QuickActions';
import StatsCard from '@/src/components/StatsCard';
import { BookRecommendations } from '@/src/components/BookRecommendations';
import {
    Book,
    Bookmark,
    Users,
    Clock,
    UserIcon,
    ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import BlankPagesLayout from '../layout';

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // Redirect to signup or login page if not logged in
                router.push('/home');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const stats = [
        { title: 'Books Read', value: 24, icon: Book, color: 'bg-purple-200' },
        { title: 'Saved', value: 12, icon: Bookmark, color: 'bg-blue-200' },
        { title: 'Community', value: 42, icon: Users, color: 'bg-green-200' },
        { title: 'Hours', value: 156, icon: Clock, color: 'bg-yellow-200' }
    ];

    return (
        <BlankPagesLayout>
            <section className="container mx-auto p-4 max-w-6xl">
                <StatsCard stats={stats} />
                <QuickActions />
                <BookRecommendations />
                <section className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Recent Activity
                    </h2>
                    <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                <UserIcon className="w-4 h-4 text-gray-500" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm">
                                    -<span className="font-medium">Sarah</span>{' '}
                                    liked your review of
                                    <span className="font-medium">Dune</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                    2 hours ago
                                </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </section>
            </section>
        </BlankPagesLayout>
    );
}
