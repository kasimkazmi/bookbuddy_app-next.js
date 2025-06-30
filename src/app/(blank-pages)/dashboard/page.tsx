// src/app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/src/firebase';
import QuickActions from '@/src/components/QuickActions';
import StatsCard from '@/src/components/StatsCard';
import { BookRecommendations } from '@/src/components/BookRecommendations';
import { Book, Bookmark, Users, Clock } from 'lucide-react';
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
                router.push('/signup');
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
            <StatsCard stats={stats} />
            <QuickActions />
            <BookRecommendations />
        </BlankPagesLayout>
    );
}
