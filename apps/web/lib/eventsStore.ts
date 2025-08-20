// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// // ✅ 1. Define Event type
// export interface Event {
//   id: string;
//   name: string;
//   date: string;
// }

// // ✅ 2. Define Store shape
// interface EventStore {
//   events: Event[];
//   addEvent: (event: Omit<Event, 'id'>) => void;
//   deleteEvent: (id: string) => void;
//   clearAll: () => void;
// }

// // ✅ 3. Create store with Zustand + localStorage persistence
// export const useEventStore = create<EventStore>()(
//   persist(
//     (set) => ({
//       events: [],

//       addEvent: (event) =>
//         set((state) => ({
//           events: [
//             ...state.events,
//             { ...event, id: crypto.randomUUID() }, // unique id
//           ],
//         })),

//       deleteEvent: (id) =>
//         set((state) => ({
//           events: state.events.filter((e) => e.id !== id),
//         })),

//       clearAll: () => set({ events: [] }),
//     }),
//     {
//       name: 'event-storage', // key in localStorage
//     }
//   )
// );


"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Event = {
  id: string;
  name: string;
  date: string;
};

type EventStore = {
  events: Event[];
  addEvent: (event: Omit<Event, "id">) => void;
  deleteEvent: (id: string) => void;
  updateEvent: (id: string, name: string, date: string) => void;
  clearAll: () => void;
};

export const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      events: [],
      addEvent: (event) =>
        set((state) => ({
          events: [
            ...state.events,
            { id: crypto.randomUUID(), name: event.name, date: event.date },
          ],
        })),
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        })),
        updateEvent: (id, name, date) =>
        set((state) => ({
          events: state.events.map((event) =>
            event.id === id ? { ...event, name, date } : event
          ),
        })),
      clearAll: () => set({ events: [] }),
    }),
    {
      name: "event-storage", // key in localStorage
    }
  )
);
