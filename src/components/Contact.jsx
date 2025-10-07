export default function Contact() {
  return (
    <div id="contact" className="contact mt-32 px-6 py-12">
      <h1 className="text-center text-4xl font-bold mb-2">Contact</h1>
      <p className="text-center text-base mb-10 opacity-70">
        Let's Connect With Me
      </p>

      <form
        action="https://formsubmit.co/rizkyhalzah154@gmail.com"
        method="POST"
        className="bg-zinc-800 p-6 sm:p-10 w-full max-w-lg mx-auto rounded-xl shadow-md"
        autoComplete="off"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="border border-zinc-600 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="border border-zinc-600 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Your Message"
              className="border border-zinc-600 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-violet-700 text-white font-medium py-3 rounded-lg hover:bg-violet-600 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
