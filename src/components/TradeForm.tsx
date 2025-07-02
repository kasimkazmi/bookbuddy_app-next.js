'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Bookmark, Bell, BookX, Search } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from './ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Loading from '../app/(blank-pages)/trade-books/loading';
import SearchResultsGrid from './SearchResultsGrid';
import { userTradeProfile } from '../constants';

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

const bookSchema = z.object({
  bookTitle: z.string().min(1, 'Book title is required'),
  author: z.string().min(1, 'Author name is required'),
  condition: z.string().min(1, 'Select a condition'),
  radius: z.string().min(1, 'Select a radius')
});

type BookFormData = z.infer<typeof bookSchema>;

const TradeForm = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [randomEmptyState, setRandomEmptyState] = useState(emptyStateMessages[0]);
  const [showModal, setShowModal] = useState(false);

  const form = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      bookTitle: '',
      author: '',
      condition: '',
      radius: ''
    }
  });

  const onSubmit = async (data: BookFormData) => {
    setLoading(true);
    setResults([]);
    setShowEmptyState(false);

    setTimeout(() => {
      const filtered = userTradeProfile.filter((user) =>
        user.hasBook &&
        user.bookTitle.toLowerCase().includes(data.bookTitle.toLowerCase())
      );

      if (filtered.length === 0) {
        const random = emptyStateMessages[Math.floor(Math.random() * emptyStateMessages.length)];
        setRandomEmptyState(random);
        setShowEmptyState(true);
        setShowModal(true);
      } else {
        setResults(filtered);
      }

      setLoading(false);
    }, 1500);
  };

  const notifyMe = () => {
    alert("We'll notify you when someone adds this book to our collection!");
  };

  if (loading) return <Loading />;

  return (
    <div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.01 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-12 border-4 inline-block hover:rotate-6 transition-transform border-purple-200"
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-6">Search for Books to Trade</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="bookTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Book Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter book title" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter author name" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condition</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Book Condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="like-new">Like New</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="acceptable">Acceptable</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="radius"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Search Radius</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Trade Radius" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="mile5">5 miles</SelectItem>
                          <SelectItem value="mile10">10 miles</SelectItem>
                          <SelectItem value="mile20">20 miles</SelectItem>
                          <SelectItem value="mile50">50 miles</SelectItem>
                          <SelectItem value="mile100">100 miles</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search for Matches
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>

      {results.length > 0 && <SearchResultsGrid results={results} />}

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
              <div className="flex justify-center mb-4">{randomEmptyState.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{randomEmptyState.title}</h3>
              <p className="text-gray-600 mb-6">{randomEmptyState.subtitle}</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowModal(false);
                    setShowEmptyState(false);
                  }}
                >
                  Try Another Book
                </Button>
                <Button
                  onClick={() => {
                    notifyMe();
                    setShowModal(false);
                    setShowEmptyState(false);
                  }}
                >
                  <Bell className="h-4 w-4 mr-1" />
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
    </div>
  );
};

export default TradeForm;
