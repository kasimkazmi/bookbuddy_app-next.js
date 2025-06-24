import React from 'react';
import { motion } from 'framer-motion';
import { BellRing, UserRound } from 'lucide-react';
import { Button } from './ui/button'; // Adjust import path as per your setup

interface User {
    id: number;
    name: string;
    distance: string;
    bookTitle: string;
    bookCondition: string;
    lookingFor: string[];
}

const UserCard = ({ user }: { user: User }) => {
    const handlePing = () => {
        alert(`Trade request sent to ${user.name}!`);
    };

    const handleViewProfile = () => {
        alert(`Viewing profile of ${user.name}`);
        // You can navigate or open a modal here
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-purple-100 transition-all duration-300"
        >
            <div className="p-6">
                <div className="flex items-start mb-4">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16  text-textColo  bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                            {user.name.charAt(0)}
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-800">
                            {user.name}
                        </h3>
                        <p className="text-purple-600 text-sm">
                            📍 {user.distance}
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <h4 className="text-lg  text-textColo font-semibold">
                        Available Book:
                    </h4>
                    <p className="text-gray-700">
                        {user.bookTitle} - {user.bookCondition}
                    </p>

                    <h4 className="text-lg font-semibold   text-textColo mt-2">
                        Looking For:
                    </h4>
                    {Array.isArray(user.lookingFor) &&
                    user.lookingFor.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-600">
                            {user.lookingFor.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm italic text-gray-500">
                            No preferences listed.
                        </p>
                    )}
                </div>

                <div className="mt-6 flex justify-between gap-4">
                    <Button
                        onClick={handlePing}
                        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                        <BellRing className="w-4 h-4" />
                        Ping
                    </Button>
                    <Button
                        onClick={handleViewProfile}
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 border-purple-300"
                    >
                        <UserRound className="w-4 h-4" />
                        View Profile
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default UserCard;
