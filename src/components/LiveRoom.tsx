// src/components/LiveRoom.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { Mic2, Headphones, Users, Share2, X, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { activeSpeakers } from '../constants';
import Link from 'next/link';

interface LiveRoomProps {
    roomId: string; // Accept roomId as a prop
}

export default function LiveRoom({ roomId }: LiveRoomProps) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            user: 'BookWorm42',
            text: 'Just finished this book - it was amazing!',
            avatar: '🐛'
        },
        {
            id: 2,
            user: 'PageTurner',
            text: 'Has anyone read the new sequel yet?',
            avatar: '📚'
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isMuted, setIsMuted] = useState(false);
    const [participants, setParticipants] = useState(12);
    const [showLeaveModal, setShowLeaveModal] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // // Auto-scroll to new messages
    // useEffect(() => {
    //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    // }, [messages]);

    const handleSendMessage = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        setMessages([
            ...messages,
            {
                id: messages.length + 1,
                user: 'You',
                text: inputText,
                avatar: '😊'
            }
        ]);
        setInputText('');
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        // Add actual mic mute logic here
    };

    return (
        <div className="flex h-screen rounded-2xl py-20 bg-gradient-to-br from-S4BG to-S5BG shadow-lg overflow-hidden">
            {/* Main Room Area */}
            <div className="flex flex-col w-full max-w-4xl mx-auto">
                {/* Room Header */}
                <div className="bg-white rounded-t-3xl shadow-lg p-6 flex justify-between items-center border-b-4 border-purple-300">
                    <div>
                        <h1 className="text-3xl font-bold font-sans text-textColo">
                            Book Club Hangout
                        </h1>
                        <p className="flex items-center font-comic italic text-textColo mt-1">
                            <Users className="w-4 h-4 mr-1" />
                            {participants} readers chatting
                        </p>
                    </div>
                    <Button
                        variant="destructive"
                        onClick={() => setShowLeaveModal(true)}
                        className="px-4 py-2 bg-danger transition"
                    >
                        <X className="w-4 h-4 mr-1" /> Leave
                    </Button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 bg-white">
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex gap-3 p-4 rounded-2xl ${
                                    message.user === 'You'
                                        ? 'bg-purple-100'
                                        : 'bg-gray-100'
                                }`}
                            >
                                <div className="text-3xl">{message.avatar}</div>
                                <div>
                                    <p className="font-bold text-purple-700">
                                        {message.user}
                                    </p>
                                    <p className="text-gray-800 font-sans">
                                        {message.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input Area */}
                <form
                    onSubmit={handleSendMessage}
                    className="bg-white p-4 rounded-b-3xl shadow-lg border-t-4 border-purple-300"
                >
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-3 rounded-full border-2 border-purple-200 focus:border-purple-400 outline-none"
                        />
                        <Button
                            type="submit"
                            className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition shadow-md"
                        >
                            Send
                        </Button>
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                        <Button
                            type="reset"
                            onClick={toggleMute}
                            className={`p-3 rounded-full ${
                                isMuted
                                    ? 'bg-red-100 text-red-500'
                                    : 'bg-purple-100 text-purple-500'
                            } hover:scale-110 transition`}
                        >
                            <Mic2 className="w-6 h-6" />
                        </Button>
                        <Button className="p-3 rounded-full bg-purple-100 text-purple-500 hover:scale-110 transition">
                            <Headphones className="w-6 h-6" />
                        </Button>
                        <Button className="p-3 rounded-full bg-purple-100 text-purple-500 hover:scale-110 transition">
                            <Volume2 className="w-6 h-6" />
                        </Button>
                        <Button className="p-3 rounded-full bg-purple-100 text-purple-500 hover:scale-110 transition">
                            <Share2 className="w-6 h-6" />
                        </Button>
                    </div>
                </form>
            </div>

            {/* Speaker Display (Right Sidebar) */}
            <div className="hidden lg:flex w-80 bg-white p-6 rounded-l-3xl shadow-lg ml-4 border-r-4 border-purple-300 max-h-[calc(100vh-2rem)] flex-col">
                <h2 className="text-xl font-bold text-purple-600 mb-4 sticky top-0 bg-white z-10 py-2">
                    Active Speakers
                </h2>
                <div className="space-y-4 overflow-y-auto flex-1 scrollbar-hide">
                    {activeSpeakers.map((user) => (
                        <div
                            key={user.id}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                                user.isTalking
                                    ? 'bg-purple-100 border-l-4 border-purple-500 animate-pulse'
                                    : 'bg-purple-50 hover:bg-purple-100'
                            }`}
                        >
                            <div className="text-3xl">{user.avatar}</div>
                            <div className="min-w-0">
                                <p className="font-medium text-purple-700 truncate">
                                    {user.name}
                                </p>
                                <p
                                    className={`text-xs ${
                                        user.isTalking
                                            ? 'text-purple-600 font-medium'
                                            : 'text-gray-500'
                                    }`}
                                >
                                    {user.status}
                                </p>
                            </div>
                            {user.isTalking && (
                                <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Leave Room Modal */}
            {showLeaveModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-3xl max-w-md w-full text-center border-4 border-purple-300 animate-bounce">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">
                            Leave Room?
                        </h3>
                        <p className="mb-6 text-textColo">
                            Are you sure you want to leave this awesome book
                            discussion?
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button
                                variant="outline"
                                onClick={() => setShowLeaveModal(false)}
                                className="px-6 py-2 bg-gray-200 rounded-full text-textColo transition"
                            >
                                Cancel
                            </Button>
                            <Link
                                href="/audio-rooms"
                                className="px-6 py-2  bg-red-400 text-white rounded-full hover:bg-danger transition"
                            >
                                <X className="inline w-4 h-4 mr-1" /> Leave
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
