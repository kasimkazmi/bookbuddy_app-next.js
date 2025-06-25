'use client';
import BookCard from '@/src/components/BookCard';
import { mockBooks } from '@/src/constants';
import React, { useState } from 'react';

const BookShoppingList = () => {
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [sortOption, setSortOption] = useState('Recently Added');
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 4;

    const handleBuy = (bookTitle: string) => alert(`Buying ${bookTitle}`);
    const handleSave = (bookTitle: string) =>
        alert(`Saved ${bookTitle} to your list`);

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
                    📚 BookBuddy Shopping List
                </h1>
                <p className="text-gray-600">
                    Your curated collection of must-read books
                </p>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-400">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-100 rounded-lg text-purple-600 text-xl">
                                📚
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">
                                    Books in List
                                </p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {mockBooks.length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-400">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-100 rounded-lg text-green-600 text-xl">
                                💰
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">
                                    Estimated Cost
                                </p>
                                <p className="text-2xl font-bold text-gray-800">
                                    $
                                    {mockBooks
                                        .reduce(
                                            (acc, book) => acc + book.price,
                                            0
                                        )
                                        .toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-400">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 rounded-lg text-blue-600 text-xl">
                                🏷️
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">
                                    Potential Savings
                                </p>
                                <p className="text-2xl font-bold text-gray-800">
                                    $42.75
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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
                        <label className="mr-2 text-sm text-gray-600">
                            Sort by:
                        </label>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentBooks.map((book, index) => (
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

                <div className="flex justify-center mt-10">
                    <nav className="inline-flex rounded-md shadow">
                        <button
                            onClick={() =>
                                setCurrentPage((p) => Math.max(1, p - 1))
                            }
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
                            onClick={() =>
                                setCurrentPage((p) =>
                                    Math.min(totalPages, p + 1)
                                )
                            }
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
