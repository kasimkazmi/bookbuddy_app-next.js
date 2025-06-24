// lib/rooms.ts

import { broadcastRooms } from '../constants';
import { Room } from './types';

export function getRoomById(id: string): Room | undefined {
    const found = broadcastRooms.find((room) => String(room.id) === id);
    return found ? ({ ...found, id: String(found.id) } as Room) : undefined;
}
