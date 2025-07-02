// components/authNavbar.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Bell, User as UserIcon, ChevronDown, LogOut } from 'lucide-react';
import { auth } from '@/src/firebase'; // Adjust the import path as necessary
import { signOut } from 'firebase/auth';
import { User } from 'firebase/auth';

interface NavbarProps {
    user: User;
    onLogout: () => void;
}

const AuthNavbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setDropdownOpen(false);
        }
    };

    // Add event listener for clicks outside the dropdown
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        onLogout(); // Call the onLogout function passed as a prop
    };

    return (
        <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg py-4 px-6  fixed w-screen top-0 ">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
                <div className="flex items-start space-x-3">
                    <h1 className="text-2xl font-bold text-white">BookBuddy</h1>
                    <span className="hidden md:block text-white/80 text-sm">
                        Hello, {user?.displayName || 'Reader'}
                    </span>
                </div>
                <div className="flex items-center  space-x-6" ref={dropdownRef}>
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
                            aria-label="User  menu"
                            aria-expanded={dropdownOpen}
                        >
                            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white border-2 border-white/30 group-hover:border-white/50 transition-all">
                                <UserIcon className="w-5 h-5" />
                            </div>
                            <ChevronDown
                                className={`w-4 h-4 text-white transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-xl origin-top-right transition-all duration-200 ease-out opacity-100 scale-100">
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
    );
};

export default AuthNavbar;
