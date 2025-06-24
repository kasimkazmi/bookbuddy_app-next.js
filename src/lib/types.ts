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
