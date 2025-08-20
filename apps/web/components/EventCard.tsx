// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useEventStore } from "../lib/eventsStore";

// interface EventCardProps {
//   id: string;
//   name: string;
//   date: string;

// }

// export default function EventCard({ id, name, date }: EventCardProps) {
//   const deleteEvent = useEventStore((state) => state.deleteEvent);
//   const updateEvent = useEventStore((state) => state.updateEvent);

//   const [isEditing, setIsEditing] = useState(false);
//   const [editedName, setEditedName] = useState(name);
//   const [editedDate, setEditedDate] = useState(date);

//   const handleSave = () => {
//     if (editedName.trim() && editedDate) {
//       updateEvent(id, editedName, editedDate);
//       setIsEditing(false);
//     }
//   };

//   return (
//     <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-3 hover:shadow-lg transition">
//       {isEditing ? (
//         <div className="flex flex-col gap-2 w-full">
//           <input
//             type="text"
//             value={editedName}
//             onChange={(e) => setEditedName(e.target.value)}
//             className="border p-2 rounded"
//             placeholder="Event Name"
//           />
//           <input
//             type="date"
//             value={editedDate}
//             onChange={(e) => setEditedDate(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <div className="flex gap-2">
//             <button
//               onClick={handleSave}
//               className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setIsEditing(false)}
//               className="px-3 py-1 bg-gray-400 text-white text-sm rounded hover:bg-gray-500"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       ) : (
//         <>
//           <div>
//             <Link
//               href={`/events/${id}`}
//               className="text-lg font-semibold text-blue-600 hover:underline"
//             >
//               {name}
//             </Link>
//             <p className="text-sm text-gray-500">{date}</p>
//           </div>
//           <div className="flex gap-2">
//             <button
//               onClick={() => setIsEditing(true)}
//               className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => deleteEvent(id)}
//               className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
//             >
//               Delete
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { useEventStore } from "../lib/eventsStore";
import { Pencil, Trash2, Save, X } from "lucide-react"; // ✅ nice icons

interface EventCardProps {
  id: string;
  name: string;
  date: string;
}

export default function EventCard({ id, name, date }: EventCardProps) {
  const deleteEvent = useEventStore((state) => state.deleteEvent);
  const updateEvent = useEventStore((state) => state.updateEvent);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDate, setEditedDate] = useState(date);

  const handleSave = () => {
    if (editedName.trim() && editedDate) {
      updateEvent(id, editedName, editedDate);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-start bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      {isEditing ? (
        <div className="flex flex-col gap-3 w-full">
          {/* Editable Fields */}
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Event Name"
          />
          <input
            type="date"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Action buttons */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
            >
              <Save size={16} /> Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-1 px-3 py-2 bg-gray-400 text-white text-sm font-medium rounded-lg hover:bg-gray-500 transition"
            >
              <X size={16} /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Event Info */}
          <div>
            <Link
              href={`/events/${id}`}
              className="block text-lg font-semibold text-blue-600 hover:underline"
            >
              {name}
            </Link>
            <span className="inline-block mt-1 px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md">
              {date}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1 px-3 py-1.5 bg-yellow-400 text-white text-sm font-medium rounded-lg hover:bg-yellow-500 transition"
            >
              <Pencil size={16} /> Edit
            </button>
            <button
              onClick={() => deleteEvent(id)}
              className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
