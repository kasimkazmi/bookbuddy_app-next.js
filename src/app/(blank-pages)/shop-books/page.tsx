'use client';
import BookCard from '@/src/components/BookCard';
import { mockBooks } from '@/src/constants';
import React, { useState, useEffect } from 'react';

const BookShoppingList = () => {
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [sortOption, setSortOption] = useState('Recently Added');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Added loading state
    const booksPerPage = 4;

    useEffect(() => {
        // Simulate data fetching with a delay
        setTimeout(() => {
            setLoading(false); // Set loading to false after some delay (simulated data fetch)
        }, 1500); // 1.5 seconds delay to simulate loading time
    }, []);

    const handleBuy = (bookTitle: string) => alert(`Buying ${bookTitle}`);
    const handleSave = (bookTitle: string) => alert(`Saved ${bookTitle} to your list`);

    const filteredBooks = mockBooks.filter(
        (book) => selectedGenre === 'All' || book.genre === selectedGenre
    );

    const sortedBooks = [...filteredBooks].sort((a, b) => {
        switch (sortOption) {
            case 'Price: Low to High':
                return a.price - b.price;
            case 'Price: High to Low':
                return b.price - a.price;
            case 'Alphabetical':
                return a.title.localeCompare(b.title);
            default:
                return 0; // Recently Added (default order)
        }
    });

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(sortedBooks.length / booksPerPage);

    return (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
            <header className="bg-white shadow-md p-6 text-center">
                <h1 className="text-4xl font-bold text-purple-600 mb-2">
                    📚 Bazam Book Shopping List
                </h1>
                <p className="text-gray-600">Your curated collection of must-read books</p>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Stats Card */}
                    {['Books in List', 'Estimated Cost', 'Potential Savings'].map((title, index) => (
                        <div
                            key={index}
                            className={`bg-white p-6 rounded-2xl shadow-md ${
                                index === 0 ? 'border-l-4 border-purple-400' : 
                                index === 1 ? 'border-l-4 border-green-400' : 'border-l-4 border-blue-400'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg text-xl ${index === 0 ? 'bg-purple-100 text-purple-600' : 
                                    index === 1 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {index === 0 ? '📚' : index === 1 ? '💰' : '🏷️'}
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">{title}</p>
                                    <p className="text-2xl font-bold text-gray-800">
                                        {title === 'Books in List' ? mockBooks.length : '$42.75'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex space-x-2 mb-2 sm:mb-0">
                        {['All', 'Fiction', 'Non-Fiction'].map((genre) => (
                            <button
                                key={genre}
                                className={`px-3 py-1 rounded-full text-sm ${
                                    selectedGenre === genre
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-white border border-gray-300'
                                }`}
                                onClick={() => setSelectedGenre(genre)}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <label className="mr-2 text-sm text-gray-600">Sort by:</label>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
                        >
                            <option>Recently Added</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Alphabetical</option>
                        </select>
                    </div>
                </div>

                {/* Skeleton Loader or Books Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {loading
                        ? Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <div className="bg-gray-200 h-48 rounded-md"></div>
                                <div className="mt-4 h-6 bg-gray-300 rounded-md"></div>
                                <div className="mt-2 h-4 bg-gray-300 rounded-md"></div>
                                <div className="mt-4 h-8 bg-gray-300 rounded-md"></div>
                            </div>
                        ))
                        : currentBooks.map((book, index) => (
                            <BookCard
                                key={index}
                                title={book.title}
                                author={book.author}
                                price={book.price}
                                status={book.status}
                                emoji={book.emoji}
                                onBuy={() => handleBuy(book.title)}
                                onSave={() => handleSave(book.title)}
                            />
                        ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-10">
                    <nav className="inline-flex rounded-md shadow">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-4 py-2 border-t border-b border-gray-300 bg-white ${
                                    currentPage === i + 1
                                        ? 'text-purple-600 font-medium'
                                        : 'text-gray-500'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default BookShoppingList;
