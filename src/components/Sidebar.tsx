'use client';

import clsx from 'clsx';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Settings,
    Moon,
    Sun,
    ArrowLeftRight, // Trade
    Bookmark, // Alternative for Book Clubs
    BookUp2, // Another book-related icon
    GanttChart, // Alternative for Dashboard
    ShoppingCart, // Alternative for Books/shop
    Users2, // Alternative community icon
    Gem, // Alternative for premium features
    Library, // Book collection
    Handshake, // For trading
    BookHeadphones // Perfect for audio rooms/book clubs
} from 'lucide-react';
import SidebarIcon from './SidebarIcon';
// import { useThemeStore } from '../store/themeStore';
import { Button } from './ui/button';
import { useRouter, usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';
import { useTheme } from 'next-themes';

interface SidebarProps {
    isOpen: boolean;
    onToggle: () => void;
    isMobileMenuOpen: boolean;
}

export default function Sidebar({
    isOpen,
    onToggle,
    isMobileMenuOpen
}: SidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const darkMode = theme === 'dark';

    const toggleTheme = () => {
        setTheme(darkMode ? 'light' : 'dark');
    };
    const isActive = pathname === '/dashboard'; // Example for Dashboard

    return (
        <aside
            className={clsx(
                'fixed top-0 left-0 h-full  bg-gradient-to-r z-50 from-purple-600 to-blue-600 shadow-lg text-white p-4 flex flex-col  transition-[width,transform] duration-300 ease-in-out',
                {
                    'w-56': isOpen,
                    'w-20': !isOpen,
                    '-translate-x-full sm:translate-x-0':
                        !isMobileMenuOpen && !isOpen
                }
            )}
        >
            {/* <div className="flex items-center justify-between mb-6">
                <h1
                    className={clsx(
                        'text-lg font-bold transition-all origin-left',
                        {
                            'opacity-100 scale-100': isOpen,
                            'opacity-0 scale-90': !isOpen
                        }
                    )}
                >
                    BookBuddy
                </h1>
            </div> */}

            <nav className="flex flex-col gap-4">
                <Button
                    onClick={onToggle}
                    className="text-foreground hover:text-foreground transition-colors rounded p-2 mb-4"
                >
                    <ArrowLeftRight className="w-5 h-5" />
                </Button>
                <SidebarIcon
                    icon={LayoutDashboard}
                    label="Dashboard"
                    href="/dashboard"
                    isOpen={isOpen}
                    className={isActive ? 'bg-gray-700' : ''} // Add active class
                />
                <SidebarIcon
                    icon={Library}
                    label="Books"
                    href="/shop-books"
                    isOpen={isOpen}
                />
                <SidebarIcon
                    icon={Users}
                    label="Community"
                    href="/community"
                    isOpen={isOpen}
                />
                <SidebarIcon
                    icon={Handshake}
                    label="Trade"
                    href="/trade-books"
                    isOpen={isOpen}
                />
                <SidebarIcon
                    icon={BookHeadphones}
                    label="Book Clubs"
                    href="/audio-rooms"
                    isOpen={isOpen}
                />
                {/* <SidebarIcon
                    icon={Settings}
                    label="Settings"
                    href="/settings"
                    isOpen={isOpen}
                /> */}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-700">
                <Button
                    onClick={toggleTheme}
                    className="w-full flex items-center px-3 py-2 rounded text-sm transition-colors"
                >
                    {darkMode ? (
                        <Sun className="w-4 h-4" />
                    ) : (
                        <Moon className="w-4 h-4" />
                    )}
                    <span
                        className={clsx(
                            'transition-all duration-300 origin-left overflow-hidden',
                            isOpen
                                ? 'opacity-100 scale-100 ml-2'
                                : 'opacity-0 scale-90 ml-0 w-0'
                        )}
                    >
                        {darkMode ? 'Light' : 'Dark'} Mode
                    </span>
                </Button>
            </div>
        </aside>
    );
}
