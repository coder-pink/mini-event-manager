export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
}
