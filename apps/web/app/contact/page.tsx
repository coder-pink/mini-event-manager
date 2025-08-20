export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-600">
        Have questions or feedback? Fill out the form below and we’ll get back to you.
      </p>

      <form className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your full name"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Write your message..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
