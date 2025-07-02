'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/src/firebase';
import Sidebar from '@/src/components/Sidebar';
import AuthNavbar from '@/src/components/ui/authNavbar';
import { ThemeProvider } from 'next-themes';

export default function BlankPagesLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility
console.log(isOpen, 'isOpen state in BlankPagesLayout');

    // Sync store with ThemeProvider
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Set user state based on authentication status
        });

        return () => unsubscribe();
    }, []);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            {user && ( // Only show Sidebar and Navbar if user is logged in
                <ThemeProvider attribute="class" defaultTheme="system">
                    <Sidebar
                        key={user.uid} // Ensure unique key for sidebar
                        isOpen={isOpen}
                        onToggle={toggleSidebar}
                        isMobileMenuOpen={false}
                    />
                    <AuthNavbar user={user} onLogout={() => setUser(null)} />
                    <main className="w-full bg-S1BG mx-auto pt-16 ">
                        {children}
                    </main>
                </ThemeProvider>
            )}
            {!user && ( // Optionally, you can render a different layout for non-logged-in users
                <main className="">{children}</main>
            )}
        </div>
    );
}
