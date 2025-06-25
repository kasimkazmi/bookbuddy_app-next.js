'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { onAuthStateChanged, getAuth, User, signOut } from 'firebase/auth';
import {
    Book,
    Bookmark,
    Users,
    Clock,
    Bell,
    User as UserIcon,
    ArrowRight,
    ChevronDown,
    LogOut
} from 'lucide-react';
import QuickActions from '@/src/components/QuickActions';
import StatsCard from '@/src/components/StatsCard';
import { BookRecommendations } from '@/src/components/BookRecommendations';
import { auth } from '@/src/firebase';

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else router.push('/signup');
        });

        return () => unsubscribe();
    }, [router]);

    const stats = [
        { title: 'Books Read', value: 24, icon: Book, color: 'bg-purple-200' },
        { title: 'Saved', value: 12, icon: Bookmark, color: 'bg-blue-200' },
        { title: 'Community', value: 42, icon: Users, color: 'bg-green-200' },
        { title: 'Hours', value: 156, icon: Clock, color: 'bg-yellow-200' }
    ];

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/signup');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Enhanced Header */}
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg py-4 px-6 fixed w-full top-0 z-50">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center space-x-3">
                        <h1 className="text-2xl font-bold text-white">
                            BookBuddy
                        </h1>
                        <span className="hidden md:block text-white/80 text-sm">
                            Hello, {user?.displayName || 'Reader'}
                        </span>
                    </div>

                    <div
                        className="flex items-center space-x-6"
                        ref={dropdownRef}
                    >
                        <button
                            className="p-2 relative text-white hover:text-purple-200 transition-colors"
                            aria-label="Notifications"
                        >
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yellow-400"></span>
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center space-x-2 group"
                                aria-label="User menu"
                            >
                                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white border-2 border-white/30 group-hover:border-white/50 transition-all">
                                    <UserIcon className="w-5 h-5" />
                                </div>
                                <ChevronDown
                                    className={`w-4 h-4 text-white transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-xl origin-top-right transition-all duration-200 ease-out opacity-0 scale-95 animate-fade-in">
                                    <div className="p-2">
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-sm font-medium">
                                                Signed in as
                                            </p>
                                            <p className="text-sm truncate">
                                                {user?.email}
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                                        >
                                            <LogOut className="w-4 h-4 mr-3" />
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6 pt-24">
                {/* Added pt-24 to account for fixed header */}
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
                                    <span className="font-medium">Sarah</span>
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
            </main>
        </div>
    );
}
