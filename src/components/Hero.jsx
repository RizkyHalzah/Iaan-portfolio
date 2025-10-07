function App() {
  return (
    <>
      <section className="bg-zinc-900 text-white pt-37 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Hi, I’m <span className="text-purple-500">Rizky Halzah</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Hello everyone, nice to meet you. I have an interest in
              programming, especially in{" "}
              <span className="text-purple-500">Frontend & Game Developer</span>
              {""} using modern technologies and creating engaging games.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/assets/CV Iaan.pdf"
                download
                className="px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          {/* photo profile */}
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <img
              src="/assets/proyek/orang.jpg"
              alt="profile"
              className="w-64 h-64 rounded-full border-4 border-purple-500 shadow-lg object-cover object-top"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
