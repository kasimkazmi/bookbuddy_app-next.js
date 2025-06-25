import { notFound } from 'next/navigation';
import UserProfilePage from '@/src/components/ViewProfile';
import { UserViewType } from '@/src/constants';

async function getUserData(userId: string): Promise<UserViewType | null> {
    const mockUsers: Record<string, UserViewType> = {
        '1': {
            id: 1,
            name: 'Sarah Wilson',
            location: 'Ottawa, ON',
            distance: '2.8 km away',
            genres: ['Science Fiction', 'Space Opera', 'Classic Reader'],
            stats: {
                booksOwned: 127,
                successfulTrades: 42,
                rating: 4.9
            },
            availableBooks: [
                {
                    title: 'Project Hail Mary',
                    author: 'Andy Weir',
                    condition: 'New'
                },
                {
                    title: 'Dune',
                    author: 'Frank Herbert',
                    condition: 'Good'
                }
            ]
        },
        '2': {
            id: 2,
            name: 'Alex Johnson',
            location: 'Toronto, ON',
            distance: '5.2 km away',
            genres: ['Fantasy', 'Mystery'],
            stats: {
                booksOwned: 89,
                successfulTrades: 23,
                rating: 4.7
            },
            availableBooks: [
                {
                    title: 'The Name of the Wind',
                    author: 'Patrick Rothfuss',
                    condition: 'Excellent'
                }
            ]
        }
    };

    return mockUsers[userId] || null;
}

export default async function ProfilePage({
    params
}: {
    params: { userId: string };
}) {
    const user = await getUserData(params.userId);

    if (!user) {
        notFound();
    }

    return (
        <section className="flex justify-center py-24 bg-S4BG items-center">
            <div className="bg-S1BG rounded-3xl py-16 px-4 sm:px-6 w-full max-w-6xl">
                <UserProfilePage user={user} />
            </div>
        </section>
    );
}
