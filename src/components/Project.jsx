export default function Project() {
  const projects = [
    //Web Section
    {
      title: "Personal Website",
      description: "Personal portfolio website with a clean and professional design.",
      image: "src/components/assets/personal-website.png",
      tech: ["HTML", "CSS", "Javascript",],
      link: "#",
    },
    {
      title: "POS Website",
      description: "Web-based Point of Sale (POS) system for cafés, designed for efficient order management, product tracking, and checkout handling.",
      image: "src/components/assets/pos-web.png",
      tech: ["HTML", "CSS", "Javascript"],
      link: "#",
    },
    {
      title: "Mini Game Web Arcade",
      description: "Interactive arcade machine built with JavaScript, featuring custom spin logic, auto-play, and coin tracking using state management.",
      image: "src/components/assets/arcade-machine.png",
      tech: ["HTML", "CSS", "Javascript"],
      link: "#",
    },
    //Blender Section
    {
      title: "3D Model Coffe Shop",
      description: "A minimalist coffee shop building model with simple signboard details and ornaments, created in Blender for basic architectural modeling practice.",
      image: "src/components/assets/Coffee-Shop.png", 
      tech: ["Blender"],
      link: "#",
    },
    {
      title: "3D Model Gas Station",
      description: "A modern-style charging station model with a modular structure and glass elements, focused on the use of transformations and object hierarchies in Blender.",
      image: "src/components/assets/Gas-Station.png",
      tech: ["Blender"],
      link: "#",
    },
    {
      title: "3D Model Cup of Coffe",
      description: "A simple scene containing a coffee cup and coffee beans as an exercise in composition, lighting, and object scale in Blender.",
      image: "src/components/assets/kopi-gelas.png",
      tech: ["Blender"],
      link: "#",
    },
    //Unity Section
     {
      title: "3D Endless Runner",
      description: "An endless runner game I developed in Unity, inspired by Subway Surfers, with a coin spawn system and dynamic obstacles.",
      image: "src/components/assets/prototype.png", 
      tech: ["Unity"],
      link: "#",
    },
    {
      title: "RPG System Unity",
      description: "A basic RPG system development project in Unity, including character controls, NPC interactions, and a camera that follows the player.",
      image: "src/components/assets/Rpg-System.png",
      tech: ["Unity"],
      link: "#",
    },
    {
      title: "Simple RPG Game",
      description: "My first project in Godot, where I created a simple 2D RPG-style game with a tilemap system, characters, and collectible items.",
      image: "src/components/assets/Godot.png",
      tech: ["Godot"],
      link: "#",
    },
  ];

  return (
    <section className="project mt-32 py-10 text-white">
      <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
      <p className="text-base text-center opacity-60 mb-12">
        Here are the projects I have created.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg flex flex-col transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-sm opacity-70 mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-3 py-1 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-purple-600 hover:bg-purple-700 text-center text-sm font-semibold py-2 rounded-lg transition-colors duration-300"
              >
                Lihat Website
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
