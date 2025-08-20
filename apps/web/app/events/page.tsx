// "use client";

// import { useEventStore } from "../../lib/eventsStore";
// import { useForm } from "react-hook-form";
// import EventCard from "../../components/EventCard";
// import { useState } from "react";

// type EventFormData = {
//   name: string;
//   date: string;
// };

// export default function EventsPage() {
//   const { events, addEvent, deleteEvent, clearAll } = useEventStore();
//   const [search, setSearch] = useState("");

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<EventFormData>();

//   const onSubmit = (data: EventFormData) => {
//     addEvent({ name: data.name, date: data.date });
//     reset();
//   };

//   // ✅ Filter events by search text
//   const filteredEvents = events.filter((event) =>
//     event.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Mini Event Manager</h1>

//       {/* ✅ Event Form */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="mb-8 p-4 bg-white shadow rounded-lg space-y-4"
//       >
//         <div>
//           <label className="block mb-1 font-medium">Event Name</label>
//           <input
//             type="text"
//             placeholder="Enter event name"
//             {...register("name", { required: "Event name is required" })}
//             className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Date</label>
//           <input
//             type="date"
//             {...register("date", { required: "Date is required" })}
//             className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.date && (
//             <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//         >
//           Add Event
//         </button>
//       </form>

//       {/* ✅ Search Box */}
//       <input
//         type="text"
//         placeholder="Search events..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full mb-6 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//       />

//       {/* ✅ Clear all events */}
//       {events.length > 0 && (
//         <button
//           onClick={clearAll}
//           className="mb-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//         >
//           Clear All Events
//         </button>
//       )}

//       {/* ✅ Event List */}
//       {filteredEvents.length === 0 ? (
//         <p className="text-gray-500">No events found.</p>
//       ) : (
//         <ul className="space-y-3">
//           {filteredEvents.map((event) => (
//             <EventCard
//               key={event.id}
//               id={event.id}
//               name={event.name}
//               date={event.date}

//             />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



"use client";

import { useEventStore } from "../../lib/eventsStore";
import { useForm } from "react-hook-form";
import EventCard from "../../components/EventCard";
import { useState } from "react";

type EventFormData = {
  name: string;
  date: string;
};

export default function EventsPage() {
  const { events, addEvent, clearAll } = useEventStore();
  const [search, setSearch] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventFormData>();

  const onSubmit = (data: EventFormData) => {
    addEvent({ name: data.name, date: data.date });
    reset();
  };

  // ✅ Filter events by search text
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">📅 Mini Event Manager</h1>
        <p className="mt-2 text-gray-600">
          Create, search, and manage your events — all in one place.
        </p>
      </header>

      {/* Event Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Add New Event
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Event Name
            </label>
            <input
              type="text"
              placeholder="Team Meeting"
              {...register("name", { required: "Event name is required" })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Add Event
        </button>
      </form>

      {/* Search + Clear Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="🔍 Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {events.length > 0 && (
          <button
            onClick={clearAll}
            className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Event List */}
      <section>
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500 text-center py-10 border rounded-lg bg-gray-50">
            No events found. Add a new event to get started 🚀
          </p>
        ) : (
          <ul className="space-y-4">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                date={event.date}
              />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
