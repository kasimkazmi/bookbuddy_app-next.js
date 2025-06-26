'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
    Bell,
    User as UserIcon,
    ChevronDown,
    LogOut,
    MoreHorizontal,
    ChevronRight,
    Sparkles
} from 'lucide-react';
import { auth } from '@/src/firebase';
import { useUserStore } from '@/src/store/useStore';

export default function CommunityPage() {
    const router = useRouter();
    const { user, setUser, clearUser } = useUserStore();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
    }, [router, setUser]);

    const handleLogout = async () => {
        await signOut(auth);
        clearUser();
        router.push('/signup');
    };

    return (
        <div className="min-h-screen bg-gray-50">
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
                        <button className="p-2 relative text-white hover:text-purple-200">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yellow-400"></span>
                        </button>
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center space-x-2 group"
                            >
                                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white border-2 border-white/30 group-hover:border-white/50">
                                    <UserIcon className="w-5 h-5" />
                                </div>
                                <ChevronDown
                                    className={`w-4 h-4 text-white transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-xl">
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
                                            className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                        >
                                            <LogOut className="w-4 h-4 mr-3" />{' '}
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6 pt-24 lg:flex lg:space-x-6">
                <div className="lg:w-3/4">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                        <div className="p-4 flex space-x-4">
                            <img
                                src="https://placehold.co/48x48"
                                className="rounded-full w-12 h-12"
                                alt="User Avatar"
                            />
                            <div className="flex-1">
                                <textarea
                                    placeholder="What are you reading or thinking?"
                                    className="w-full border-b border-gray-200 pb-2 focus:outline-none focus:border-purple-500 resize-none"
                                    rows={2}
                                ></textarea>
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

                    <div className="space-y-4">
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-4">
                                <div className="flex items-center justify-between">
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
                        </div>
                    </div>
                </div>

                <aside className="lg:w-1/4 space-y-6">
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="p-4 border-b border-gray-100">
                            <h3 className="font-medium">Trending Topics</h3>
                        </div>
                        <div className="p-4 space-y-2">
                            <p className="text-purple-600">#ReadingChallenge</p>
                            <p className="text-purple-600">
                                #BookRecommendations
                            </p>
                            <p className="text-purple-600">
                                #LiteraryDiscussions
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md">
                        <div className="p-4 border-b border-gray-100">
                            <h3 className="font-medium">Members</h3>
                        </div>
                        <div className="p-4 space-y-4">
                            <div className="flex items-center space-x-3">
                                <img
                                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4e213c72-0723-4099-9c95-8f92ce11eb70.png"
                                    className="rounded-full w-10 h-10"
                                    alt="Sophie L."
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
                                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f9415a2-480f-4008-84b5-2adeb67c1756.png"
                                    className="rounded-full w-10 h-10"
                                    alt="Richard G."
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
                        <div className="p-4 border-t border-gray-100">
                            <a
                                href="#"
                                className="text-sm text-purple-600 font-medium hover:text-purple-800 flex items-center"
                            >
                                View all members
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md text-white text-center p-6">
                        <Sparkles className="w-8 h-8 mx-auto mb-3" />
                        <h3 className="font-bold mb-1">Start a Discussion</h3>
                        <p className="text-sm opacity-90 mb-4">
                            Engage with fellow book lovers on your favorite
                            reads
                        </p>
                        <button className="bg-white text-purple-600 hover:bg-gray-100 font-medium px-4 py-2 rounded-full text-sm">
                            Create Post
                        </button>
                    </div>
                </aside>
            </main>
        </div>
    );
}
