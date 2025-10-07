export default function ToolsSection() {
  const tools = [
    {
      name: "Visual Studio Code",
      desc: "Code Editor",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Unity",
      desc: "Game Engine",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    },
    {
      name: "Blender",
      desc: "3D Modeling",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    },
    {
      name: "Godot",
      desc: "Game Engine",
      icon: "https://skillicons.dev/icons?i=godot",
    },
    {
      name: "React JS",
      desc: "Frontend Framework",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      desc: "CSS Framework",
      icon: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      name: "HTML5",
      desc: "Markup Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      desc: "Styling Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      desc: "Programming Language",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "C#",
      desc: "Programming Language",
      icon: "https://skillicons.dev/icons?i=cs",
    },
    
  ];
  return (
    <section className="tools mt-32 px-6">
      <h1 className="text-4xl font-bold mb-4 text-white">Tools I Use</h1>
      <p className="w-full md:w-2/5 text-base opacity-50 text-gray-300">
        Here are some tools that I commonly use to create websites and games.
      </p>

      <div className="tools-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition-all duration-200 group hover:scale-105"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-14 h-14 p-2 bg-zinc-800 rounded-md group-hover:bg-zinc-900 transition-all duration-200"
            />
            <div>
              <h4 className="text-white font-semibold text-sm">{tool.name}</h4>
              <p className="text-gray-400 text-xs">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
