import React from 'react';
import { motion } from 'framer-motion';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  distance: string;
  bookTitle: string;
  bookCondition: string;
  lookingFor: string[];
}

const SearchResultsGrid = ({ results }: { results: User[] }) => {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {results.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </motion.div>
  );
};

export default SearchResultsGrid;
