export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 mt-12 py-6">
      <div className="max-w-5xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Mini Event Manager. All rights reserved.</p>
        <p className="mt-2">
          <a href="/legal" className="hover:underline">
            Privacy & Terms
          </a>
        </p>
      </div>
    </footer>
  );
}
