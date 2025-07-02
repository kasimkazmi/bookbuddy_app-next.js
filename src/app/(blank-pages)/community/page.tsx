'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
    Bell,
    User as UserIcon,
    MoreHorizontal,
    ChevronRight,
    Sparkles
} from 'lucide-react';
import { auth } from '@/src/firebase';
import { useUserStore } from '@/src/store/useStore';

export default function CommunityPage() {
    const router = useRouter();
    const { setUser, clearUser } = useUserStore();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Auth state check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            if (u) setUser(u);
            else router.push('/signup');
        });
        return () => unsubscribe();
    }, [router, setUser]);

    // Simulate data load
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Log out handler
    const handleLogout = async () => {
        await signOut(auth);
        clearUser();
        router.push('/signup');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-md p-6 text-center">
                <h1 className="text-4xl font-bold text-purple-600 mb-2">
                 📚 Bazam Book Community Page
                </h1>
          
                <p className="text-gray-600">
                    Connect with fellow book lovers and share your thoughts!
                </p>
            </header>
            <main className="max-w-7xl mx-auto p-6 pt-24 lg:flex lg:space-x-6">
                {/* Main feed */}
                <div className="lg:w-3/4 space-y-6">
                    {loading ? (
                        // Skeleton for text area and one post
                        <>
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
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg shadow-md p-4 animate-pulse"
                                >
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
                                            <div
                                                key={i}
                                                className="h-4 bg-gray-200 rounded w-20"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {/* Post Input */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 p-4">
                                <div className="flex space-x-4">
                                    <img
                                        src="https://placehold.co/48x48"
                                        className="rounded-full w-12 h-12"
                                        alt="User Avatar"
                                    />
                                    <div className="flex-1">
                                        <textarea
                                            placeholder="What are you reading or thinking?"
                                            className="w-full border-b pb-2 focus:outline-none focus:border-purple-500 resize-none"
                                            rows={2}
                                        />
                                        <div className="mt-2 flex justify-between">
                                            <div className="flex space-x-2">
                                                <button className="p-2 text-gray-500 hover:text-purple-600">
                                                    📷
                                                </button>
                                                <button className="p-2 text-gray-500 hover:text-purple-600">
                                                    🔗
                                                </button>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="px-4 py-2 rounded-full border text-gray-700 hover:bg-gray-100">
                                                    Cancel
                                                </button>
                                                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Example post */}
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="https://placehold.co/40x40"
                                            className="rounded-full"
                                            alt="Avatar"
                                        />
                                        <div>
                                            <h3 className="font-medium text-gray-900">
                                                John Doe
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                2 hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <MoreHorizontal className="text-gray-400" />
                                </div>
                                <p className="mt-2">
                                    Just finished reading{' '}
                                    <span className="text-purple-600 font-medium">
                                        #TheGreatGatsby
                                    </span>
                                    ! What a classic!
                                </p>
                                <div className="mt-2 flex space-x-2">
                                    <button className="text-gray-500 hover:text-pink-500">
                                        ❤️ Like
                                    </button>
                                    <button className="text-gray-500 hover:text-blue-500">
                                        💬 Comment
                                    </button>
                                    <button className="text-gray-500 hover:text-green-500">
                                        🔖 Save
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="lg:w-1/4 space-y-6">
                    {loading ? (
                        <>
                            {[...Array(2)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-lg shadow-md p-4 animate-pulse"
                                >
                                    <div className="h-5 bg-gray-200 rounded w-1/2 mb-2" />
                                    {[...Array(3)].map((__, j) => (
                                        <div
                                            key={j}
                                            className="h-4 bg-gray-200 rounded w-full mb-1"
                                        />
                                    ))}
                                </div>
                            ))}
                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md text-white p-6 animate-pulse">
                                <div className="h-8 bg-white rounded w-8 mb-3 mx-auto" />
                                <div className="h-4 bg-white rounded w-3/4 mb-1 mx-auto" />
                                <div className="h-3 bg-white rounded w-1/2 mb-4 mx-auto" />
                                <div className="h-8 bg-white rounded w-20 mx-auto" />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Topics */}
                            <div className="bg-white rounded-lg shadow-md">
                                <div className="p-4 border-b">
                                    {' '}
                                    <h3 className="font-medium">
                                        Trending Topics
                                    </h3>{' '}
                                </div>
                                <div className="p-4 space-y-2">
                                    <p className="text-purple-600">
                                        #ReadingChallenge
                                    </p>
                                    <p className="text-purple-600">
                                        #BookRecommendations
                                    </p>
                                    <p className="text-purple-600">
                                        #LiteraryDiscussions
                                    </p>
                                </div>
                            </div>

                            {/* Members */}
                            <div className="bg-white rounded-lg shadow-md">
                                <div className="p-4 border-b">
                                    <h3 className="font-medium">Members</h3>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="https://storage.googleapis.com/.../image1.png"
                                            className="rounded-full w-10 h-10"
                                            alt="Sophie"
                                        />
                                        <div>
                                            <h4 className="font-medium text-sm">
                                                Sophie L.
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                Last active: 30m ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="https://storage.googleapis.com/.../image2.png"
                                            className="rounded-full w-10 h-10"
                                            alt="Richard"
                                        />
                                        <div>
                                            <h4 className="font-medium text-sm">
                                                Richard G.
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                Last active: 1h ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-t">
                                    <a
                                        href="#"
                                        className="text-sm text-purple-600 flex items-center"
                                    >
                                        View all members{' '}
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md text-white text-center p-6">
                                <Sparkles className="w-8 h-8 mx-auto mb-3" />
                                <h3 className="font-bold mb-1">
                                    Start a Discussion
                                </h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Engage with fellow book lovers on your
                                    favorite reads
                                </p>
                                <button className="bg-white text-purple-600 hover:bg-gray-100 font-medium px-4 py-2 rounded-full text-sm">
                                    Create Post
                                </button>
                            </div>
                        </>
                    )}
                </aside>
            </main>
        </div>
    );
}
