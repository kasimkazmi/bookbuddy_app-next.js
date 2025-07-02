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
import { motion } from 'framer-motion';

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // State to manage loading
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false); // Stop loading once user is fetched
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
                {/* Skeleton Loading for Stats */}
                {loading ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="animate-pulse rounded-xl border shadow-md p-6"
                                >
                                    <div className="h-6 w-1/2 bg-gray-300 rounded-md mb-2"></div>
                                    <div className="h-12 w-3/4 bg-gray-300 rounded-md"></div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <StatsCard stats={stats} />
                )}

                {/* Skeleton Loading for Quick Actions */}
                {loading ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="animate-pulse rounded-xl border shadow-md p-6"
                                >
                                    <div className="h-6 w-1/2 bg-gray-300 rounded-md mb-2"></div>
                                    <div className="h-12 w-3/4 bg-gray-300 rounded-md"></div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <QuickActions />
                )}

                {/* Skeleton Loading for Book Recommendations */}
                {loading ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mt-6 grid gap-6">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="animate-pulse rounded-xl border shadow-md p-6"
                                >
                                    <div className="h-6 w-1/2 bg-gray-300 rounded-md mb-2"></div>
                                    <div className="h-12 w-3/4 bg-gray-300 rounded-md"></div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <BookRecommendations />
                )}

                {/* Skeleton Loading for Recent Activity */}
                {loading ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mt-8 bg-white rounded-lg shadow-sm p-4">
                            <div className="flex items-center p-3 animate-pulse">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3"></div>
                                <div className="flex-1">
                                    <div className="h-4 w-3/4 bg-gray-300 rounded-md mb-2"></div>
                                    <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
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
                                        -
                                        <span className="font-medium">
                                            Sarah
                                        </span>{' '}
                                        liked your review of
                                        <span className="font-medium">
                                            Dune
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        2 hours ago
                                    </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    </section>
                )}
            </section>
        </BlankPagesLayout>
    );
}
