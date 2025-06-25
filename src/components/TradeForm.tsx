import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/src/components/ui/select';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from '@/src/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Bookmark, Bell, BookX, Search } from 'lucide-react';
import { userTradeProfile } from '../constants';
import Loading from '../app/(blank-pages)/trade-books/loading';
import SearchResultsGrid from './SearchResultsGrid';

const emptyStateMessages = [
    {
        title: 'Oopsie Doodles!',
        subtitle: "No books found... but we'll bookmark it!",
        icon: <BookX className="w-16 h-16 text-purple-500" />,
        color: 'bg-purple-100'
    },
    {
        title: 'Book-nanza Fail!',
        subtitle: "This story hasn't been written yet...",
        icon: <BookOpen className="w-16 h-16 text-yellow-500" />,
        color: 'bg-yellow-100'
    },
    {
        title: 'Spine-tingling Disappointment!',
        subtitle: 'No page-turners found in your area',
        icon: <Bookmark className="w-16 h-16 text-blue-500" />,
        color: 'bg-blue-100'
    }
];

const TradeForm = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any[]>([]);
    const [showEmptyState, setShowEmptyState] = useState(false);
    const [randomEmptyState, setRandomEmptyState] = useState(
        emptyStateMessages[0]
    );
    const [showModal, setShowModal] = useState(false);

    const bookSchema: ZodType<any, any, any> = z.object({
        bookTitle: z.string().min(1, 'Book name is required'),
        author: z.string().min(1, 'Author name is required'),
        condition: z.string().min(1, 'Invalid condition selected'),
        radius: z.string().min(1, 'Invalid radius selected')
    });

    const form = useForm({
        resolver: zodResolver(bookSchema),
        defaultValues: {
            bookTitle: '',
            author: '',
            condition: '',
            radius: ''
        }
    });

    const onSubmit = async (data: any) => {
        try {
            const validatedData = bookSchema.parse(data);
            setLoading(true);
            setResults([]);
            setShowEmptyState(false);

            // Simulate API call
            setTimeout(() => {
                const filteredResults = userTradeProfile.filter(
                    (user) =>
                        user.hasBook &&
                        user.bookTitle
                            .toLowerCase()
                            .includes(validatedData.bookTitle.toLowerCase())
                );

                if (filteredResults.length === 0) {
                    setRandomEmptyState(
                        emptyStateMessages[
                            Math.floor(
                                Math.random() * emptyStateMessages.length
                            )
                        ]
                    );
                    setShowEmptyState(true);
                    setShowModal(true); // ✅ THIS IS MISSING
                } else {
                    setResults(filteredResults);
                }

                setLoading(false);
            }, 1500);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    const notifyMe = () => {
        alert(
            "We'll notify you when someone adds this book to our collection!"
        );
    };

    return (
        <div>
            {/* Search Form */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-12 border-4 inline-block hover:rotate-6 transition-transform border-purple-200"
            >
                <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    Search for Books to Trade
                </h2>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                name="bookTitle"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-purple-700">
                                            Book Title
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:ring-purple-300 transition"
                                                placeholder="Enter book title"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="author"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-purple-700">
                                            Author
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:ring-purple-300 transition"
                                                placeholder="Enter author name"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                                name="condition"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-purple-700">
                                            Condition
                                        </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:ring-purple-300 transition">
                                                <SelectValue placeholder="Book Condition" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="new">
                                                        New
                                                    </SelectItem>
                                                    <SelectItem value="like-new">
                                                        Like New
                                                    </SelectItem>
                                                    <SelectItem value="good">
                                                        Good
                                                    </SelectItem>
                                                    <SelectItem value="fair">
                                                        Fair
                                                    </SelectItem>
                                                    <SelectItem value="acceptable">
                                                        Acceptable
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="radius"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-purple-700">
                                            Search Radius
                                        </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:ring-purple-300 transition">
                                                <SelectValue placeholder="Trade Radius" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="mile5">
                                                        5 miles
                                                    </SelectItem>
                                                    <SelectItem value="mile10">
                                                        10 miles
                                                    </SelectItem>
                                                    <SelectItem value="mile20">
                                                        20 miles
                                                    </SelectItem>
                                                    <SelectItem value="mile50">
                                                        50 miles
                                                    </SelectItem>
                                                    <SelectItem value="mile100">
                                                        100 miles
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-center pt-4">
                            <Button
                                type="submit"
                                className="px-8 py-3 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center"
                            >
                                <Search className="h-5 w-5 mr-2" />
                                Search for Matches
                            </Button>
                        </div>
                    </form>
                </Form>
            </motion.div>

            {results.length > 0 && <SearchResultsGrid results={results} />}

            {/* Empty State */}
            {showModal && (
                <AnimatePresence>
                    {showModal && showEmptyState && !loading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className={`w-full max-w-md mx-auto ${randomEmptyState.color} rounded-2xl p-8 text-center shadow-lg`}
                            >
                                <motion.div
                                    animate={{
                                        y: [-5, 5, -5],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity
                                        }
                                    }}
                                    className="flex justify-center mb-4"
                                >
                                    {randomEmptyState.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {randomEmptyState.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {randomEmptyState.subtitle}
                                </p>
                                <div className="flex justify-center gap-4">
                                    <Button
                                        onClick={() => {
                                            form.reset();
                                            setShowModal(false);
                                            setShowEmptyState(false);
                                        }}
                                        variant="outline"
                                        className="border-purple-300 hover:bg-purple-50"
                                    >
                                        Try Another Book
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            notifyMe();
                                            setShowModal(false);
                                            setShowEmptyState(false);
                                        }}
                                        className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
                                    >
                                        <Bell className="w-4 h-4" />
                                        Notify Me
                                    </Button>
                                </div>
                                <Button
                                    onClick={() => setShowModal(false)}
                                    className="mt-4 text-red-500"
                                >
                                    Close
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

export default TradeForm;
