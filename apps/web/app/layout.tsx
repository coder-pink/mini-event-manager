// import "./globals.css";
// import type { ReactNode } from "react";

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 text-gray-900 container mx-auto p-6">
//         <header className="mb-6">
//           <h1 className="text-2xl font-bold">Mini Event Manager</h1>
//           <nav className="mt-2">
//             <a href="/" className="mr-4 text-blue-600 hover:underline">Home</a>
//             <a href="/events" className="text-blue-600 hover:underline">Events</a>
//           </nav>
//         </header>
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }



import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Mini Event Manager",
  description: "A simple Next.js event manager assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow max-w-5xl mx-auto w-full p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
