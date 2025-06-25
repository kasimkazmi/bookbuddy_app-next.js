// types/room.d.ts
export interface Room {
    id: number | string;
    title: string;
    description: string;
    image: string;
    category: string;
    isLive: boolean;
    isUpcoming: boolean;
    participants: number;
    date: string;
    time: string;
    host: string;
    badge?: string;
}


export interface UserViewType {
    id: number;
    name: string;
    location: string;
    distance: string;
    genres: string[];
    stats: {
        booksOwned: number;
        successfulTrades: number;
        rating: number;
    };
    availableBooks: {
        title: string;
        author: string;
        condition: string;
    }[];
}


export type StatusType =
    | 'New Release'
    | 'Classic'
    | 'Bestseller'
    | "Reader's Choice"
    | 'Available';

export interface BookCardProps {
    title: string;
    author: string;
    price: number | string;
    status?: StatusType| string;
    emoji?: string;
    onBuy?: () => void;
    onSave?: () => void;
    showActions?: boolean;
    className?: string;
}