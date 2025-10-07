export default function About() {
  return (
    <section id="about" className="bg-zinc-900 text-white py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-purple-500 mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hello! My name is{" "}
          <span className="text-purple-400 font-semibold">Rizky Halzah</span>,
          a passionate{" "}
          <span className="text-purple-400">Frontend & Game Developer</span> who
          enjoys creating interactive and visually appealing digital
          experiences.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          I love combining creativity and technical skills to build projects
          that not only work well but also look amazing. When I’m not coding, I
          enjoy exploring new technologies and experimenting with game
          mechanics.
        </p>
      </div>
    </section>
  );
}
