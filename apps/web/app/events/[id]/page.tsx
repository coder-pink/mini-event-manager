"use client";

import { useParams, useRouter } from "next/navigation";
import { useEventStore } from "../../../lib/eventsStore";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { events } = useEventStore();

  const eventId = params?.id as string;
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Event not found</h1>
        <button
          onClick={() => router.push("/events")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
      <p className="text-lg text-gray-700 mb-6">
        📅 <span className="font-medium">{event.date}</span>
      </p>
      <button
        onClick={() => router.push("/events")}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
      >
        Back to Events
      </button>
    </div>
  );
}
