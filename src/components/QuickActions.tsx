'use client';

import {
    BookOpen,
    Users,
    Search,
    MessageSquare,
    Star,
    BarChart3,
    RefreshCw,
    ShoppingCart,
    ListVideo,
    ClubIcon,
    AudioWaveform,
    AudioLines
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/src/components/ui/card';
import { useRouter } from 'next/navigation';

const Badge = ({
    count,
    color = 'red'
}: {
    count: number;
    color?: 'red' | 'blue' | 'green' | 'yellow' | 'purple';
}) => {
    const badgeColorMap = {
        red: 'bg-red-600',
        blue: 'bg-blue-600',
        green: 'bg-green-600',
        yellow: 'bg-yellow-600',
        purple: 'bg-purple-600'
    };

    const displayCount = count > 99 ? '99+' : count;
    if (displayCount === 0) return null; // Don't show badge if count is 0
    return (
        <span
            className={`absolute -top-2   -right-2 text-white text-xs font-bold px-2 py-0.5 rounded-full ${badgeColorMap[color]}`}
        >
            {displayCount}
        </span>
    );
};

export default function QuickActions() {
    const router = useRouter();

    return (
        <section>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Quick Actions
                </h2>
            </div>

            {/* Primary Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {/* Book Trading */}
                <Card className="hover:shadow-md transition-shadow border border-purple-100">
                    <CardHeader>
                        <div className="mb-3 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                            <RefreshCw className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-semibold text-lg">
                            Book Trading
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">
                            Trade your books effortlessly with nearby readers
                        </p>
                        <Button
                            onClick={() => router.push('/trade-books')}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                        >
                            Start Trading
                        </Button>
                    </CardContent>
                </Card>

                {/* Book Clubs */}
                <Card className="hover:shadow-md transition-shadow border border-blue-100">
                    <CardHeader>
                        <div className="mb-3 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                            <Users className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-semibold text-lg">
                            Book Clubs
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">
                            Join live audio discussions about your favorite
                            books
                        </p>
                        <Button
                            onClick={() => router.push('/audio-rooms')}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Join a Club
                        </Button>
                    </CardContent>
                </Card>

                {/* Book Discovery */}
                <Card className="hover:shadow-md transition-shadow border border-green-100">
                    <CardHeader>
                        <div className="mb-3 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                            <Search className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-semibold text-lg">
                            Book Discovery
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">
                            Get personalized recommendations based on your taste
                        </p>
                        <Button
                            onClick={() => router.push('/shop-books')}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                            Discover Books
                        </Button>
                    </CardContent>
                </Card>

                {/* Community */}
                <Card className="hover:shadow-md transition-shadow border border-yellow-100">
                    <CardHeader>
                        <div className="mb-3 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-semibold text-lg">
                            Community
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">
                            Connect with fellow readers and share reviews
                        </p>
                        <Button
                            onClick={() => router.push('/community')}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                        >
                            Explore Community
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* My Reviews */}
                <div className="relative">
                    <Button className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 w-full">
                        <span className="relative w-full flex items-center justify-center">
                            {/* Badge inside the button */}
                            <Badge count={10} color="purple" />
                            <Star className="h-5 w-5 text-purple-600 mr-2" />
                            My Reviews
                        </span>
                    </Button>
                </div>

                {/* Shopping Cart */}

                <div className="relative">
                    <Button className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 w-full">
                        <span className="relative w-full flex items-center justify-center">
                            {/* Badge inside the button */}
                            <Badge count={8} color="green" />
                            <ShoppingCart className="h-5 w-5 text-green-600" />
                            <span className="pl-2">Shopping Cart</span>
                        </span>
                    </Button>
                </div>

                {/* Active Rooms */}
                <div className="relative">
                    <Button className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 w-full">
                        <span className="relative w-full flex items-center justify-center">
                            {/* Badge inside the button */}
                            <Badge count={5} color="blue" />
                            <AudioLines className="h-5 w-5 text-blue-600" />
                            <span className="pl-2">Active Rooms</span>
                        </span>
                    </Button>
                </div>

                {/* Messages */}

                <div className="relative">
                    <Button className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 w-full">
                        <span className="relative w-full flex items-center justify-center">
                            {/* Badge inside the button */}
                            <Badge count={3} color="yellow" />
                            <MessageSquare className="h-5 w-5 text-yellow-600" />
                            <span className="pl-2">Messages</span>
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}
