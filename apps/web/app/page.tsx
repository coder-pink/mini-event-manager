

// export default function HomePage() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50">
//       {/* Hero Section */}
//       <section className="text-center max-w-2xl">
//         <h1 className="text-4xl font-bold sm:text-5xl text-gray-900">
//           Mini Event Manager 🎉
//         </h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Create, manage, and keep track of your events effortlessly — all in one place.
//         </p>

//         <div className="mt-6">
//           <a
//             href="/events"
//             className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
//           >
//             Get Started
//           </a>
//         </div>

//         {/* Placeholder illustration */}
//         <img
//           src="https://placehold.co/600x400/png"
//           alt="Event illustration"
//           className="mt-12 mx-auto rounded-lg shadow-lg w-full max-w-md"
//         />

//       </section>

//       {/* Features Section */}
//       <section className="mt-16 grid gap-8 sm:grid-cols-3 max-w-5xl">
//         <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
//           <h3 className="text-xl font-semibold">📅 Easy Scheduling</h3>
//           <p className="mt-2 text-gray-600">
//             Quickly add events with just a name and date. Simple and fast.
//           </p>
//         </div>
//         <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
//           <h3 className="text-xl font-semibold">📝 Organized View</h3>
//           <p className="mt-2 text-gray-600">
//             View all your events at a glance with a clean, mobile-friendly layout.
//           </p>
//         </div>
//         <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
//           <h3 className="text-xl font-semibold">⚡ Manage Easily</h3>
//           <p className="mt-2 text-gray-600">
//             Delete or edit events anytime. Stay in control of your schedule.
//           </p>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="mt-20 text-center">
//         <h2 className="text-2xl font-semibold text-gray-900">
//           Ready to manage your events?
//         </h2>
//         <a
//           href="/events"
//           className="mt-6 inline-block px-8 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow hover:bg-green-700"
//         >
//           Go to Events
//         </a>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 py-16 bg-gray-50">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          Mini Event Manager 🎉
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          A simple, clean, and efficient way to <span className="font-medium">create</span>,{" "}
          <span className="font-medium">manage</span>, and{" "}
          <span className="font-medium">track</span> your events — all in one place.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/events"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            🚀 Get Started
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 grid gap-8 sm:grid-cols-3 max-w-6xl w-full">
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold">📅 Easy Scheduling</h3>
          <p className="mt-3 text-gray-600">
            Add events quickly with just a name and date. No extra steps.
          </p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold">📝 Organized View</h3>
          <p className="mt-3 text-gray-600">
            See all your events at a glance with a clean, mobile-first design.
          </p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold">⚡ Manage Easily</h3>
          <p className="mt-3 text-gray-600">
            Edit or delete events anytime. Stay in control of your schedule.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Ready to get started?
        </h2>
        <Link
          href="/events"
          className="mt-6 inline-block px-8 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow hover:bg-green-700 transition"
        >
          Go to Events
        </Link>
      </section>
    </main>
  );
}
