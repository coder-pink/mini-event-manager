"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-wide hover:text-gray-200">
          Event Manager
        </Link>

        {/* Navigation links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/events" className="hover:text-gray-200">
            Events
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
