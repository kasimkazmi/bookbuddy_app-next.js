// src/app/BlankPagesLayout.tsx
'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/src/firebase'; // Adjust the import path as necessary
import Sidebar from '@/src/components/Sidebar'; // Adjust the import path as necessary
import Navbar from '@/src/components/Navbar'; // Adjust the import path as necessary
import AuthNavbar from '@/src/components/ui/authNavbar';
import { ThemeProvider } from 'next-themes';

export default function BlankPagesLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Set user state based on authentication status
        });

        return () => unsubscribe();
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {user && ( // Only show Sidebar and Navbar if user is logged in
                <>
                    <Sidebar
                        isOpen={isOpen}
                        onToggle={toggleSidebar}
                        isMobileMenuOpen={false}
                    />
                    <div className="flex-grow">
                        {/* <AuthNavbar
                            user={user}
                            onLogout={() => setUser(null)}
                        /> */}
                        <main className="max-w-7xl mx-auto  pt-24">
                            {children}
                        </main>
                    </div>
                </>
            )}
            {!user && ( // Optionally, you can render a different layout for non-logged-in users
                <main className="">{children}</main>
            )}
        </div>
    );
}
