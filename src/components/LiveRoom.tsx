// src/components/LiveRoom.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { Mic2, Headphones, Users, Share2, X, Volume2 } from 'lucide-react';
import { Button } from './ui/button';

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

    // Auto-scroll to new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

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
        <div className="flex h-screen bg-gradient-to-br from-purple-50 to-blue-50 font-comic">
            {/* Main Room Area */}
            <div className="flex flex-col w-full max-w-4xl mx-auto">
                {/* Room Header */}
                <div className="bg-white rounded-t-3xl shadow-lg p-6 flex justify-between items-center border-b-4 border-purple-300">
                    <div>
                        <h1 className="text-3xl font-bold text-purple-600">
                            Book Club Hangout
                        </h1>
                        <p className="flex items-center text-gray-600 mt-1">
                            <Users className="w-4 h-4 mr-1" />
                            {participants} readers chatting
                        </p>
                    </div>
                    <Button
                        variant="destructive"
                        onClick={() => setShowLeaveModal(true)}
                        className="px-4 py-2  bg-danger transition"
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
                                className={`flex gap-3 p-4 rounded-2xl ${message.user === 'You' ? 'bg-purple-100' : 'bg-gray-100'}`}
                            >
                                <div className="text-3xl">{message.avatar}</div>
                                <div>
                                    <p className="font-bold text-purple-700">
                                        {message.user}
                                    </p>
                                    <p className="text-gray-800">
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
                            className={`p-3 rounded-full ${isMuted ? 'bg-red-100 text-red-500' : 'bg-purple-100 text-purple-500'} hover:scale-110 transition`}
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
            <div className="hidden lg:block w-64 bg-white p-6 rounded-l-3xl shadow-lg ml-4 border-r-4 border-purple-300">
                <h2 className="text-xl font-bold text-purple-600 mb-4">
                    Active Speakers
                </h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl"
                        >
                            <div className="text-3xl">
                                {i === 1
                                    ? '🎤'
                                    : i === 2
                                      ? '📚'
                                      : i === 3
                                        ? '👓'
                                        : '☕'}
                            </div>
                            <div>
                                <p className="font-medium text-purple-700">
                                    {i === 1
                                        ? 'LisaBookLover'
                                        : i === 2
                                          ? 'PageTurner'
                                          : i === 3
                                            ? 'TheBookWorm'
                                            : 'CoffeeAndBooks'}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Now speaking
                                </p>
                            </div>
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
                        <p className="mb-6">
                            Are you sure you want to leave this awesome book
                            discussion?
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button
                                onClick={() => setShowLeaveModal(false)}
                                className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() =>
                                    console.log('Leave room logic here')
                                }
                                className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-danger transition"
                            >
                                <X className="inline w-4 h-4 mr-1" /> Leave
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
