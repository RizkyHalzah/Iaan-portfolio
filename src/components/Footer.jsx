export default function Footer() {
  return (
    <footer className="bg-[#18181b] text-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center gap-6 px-4 text-center sm:text-left">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold justify-self-center sm:justify-self-start">
          <a href="#">
            Iaan.
          </a>
        </h1>

        {/* Navigation */}
        <ul className="flex justify-center space-x-6 font-medium">
          <li><a href="#home" className="hover:text-violet-500 transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-violet-500 transition-colors duration-300">About</a></li>
          <li><a href="#project" className="hover:text-violet-500 transition-colors duration-300">Project</a></li>
        </ul>

        {/* Socials */}
        <div className="flex justify-center sm:justify-end space-x-4">
          <a href="https://github.com/RizkyHalzah" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors duration-300">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="https://instagram.com/penn1only._" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors duration-300">
            <i className="ri-instagram-line ri-2x"></i>
          </a>
          <a href="https://youtube.com/@Pennonly." target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors duration-300">
            <i className="ri-youtube-fill ri-2x"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Iaan. All rights reserved.
      </div>
    </footer>
  );
}
