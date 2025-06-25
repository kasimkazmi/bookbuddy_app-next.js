'use client';

import { Button } from '@/src/components/ui/button';
import { Construction } from 'lucide-react'; // Import a construction icon from lucide-react

export default function Page() {
    return (
        <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="bg-white rounded-3xl shadow-lg py-16 px-4 sm:px-6 w-full max-w-6xl">
                <div className="flex flex-col items-center">
                    <Construction className="w-16 h-16 text-yellow-500 mb-4 animate-bounce" />
                    <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
                        Dashboard Under Construction
                    </h1>
                    <p className="text-lg text-center text-gray-600 mb-8">
                        We're working hard to bring you new features. Stay
                        tuned!
                    </p>
                    <div className="flex justify-center">
                        <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Go Back to Home
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
