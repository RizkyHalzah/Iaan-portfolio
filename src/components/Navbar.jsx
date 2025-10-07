import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Tutup menu jika di klik
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        active
          ? "bg-zinc-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo */}
        <div
          onClick={() => handleScrollTo("home")}
          className="text-3xl font-bold cursor-pointer"
        >
          Iaan.
        </div>

        {/* Tombol hamburger (mobile) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Menu utama */}
        <ul
          className={`flex flex-col md:flex-row md:gap-10 gap-6 md:static absolute md:bg-transparent bg-zinc-900 left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"
          } md:opacity-100`}
        >
          {["home", "about", "project", "contact"].map((item) => (
            <li key={item} className="text-center md:text-left">
              <button
              onClick={() => handleScrollTo(item)}
              className="text-lg font-medium hover:text-violet-500 transition-colors w-full py-2 cursor-pointer"
              >
             {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
