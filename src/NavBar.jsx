import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm bg-black/30">
      <h1 className="cursor-default text-white font-extrabold text-2xl md:text-3xl">
        <span className="hover:text-blue-500 transition-colors duration-200">Yacine</span> Dev
      </h1>

      {/* Desktop links */}
      <ul className="hidden md:flex text-white space-x-4 text-[1.2rem] font-extrabold">
        <li><a href="#home" className="hover:text-blue-500 transition-colors duration-200">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500 transition-colors duration-200">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition-colors duration-200">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-500 transition-colors duration-200">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-200">Contact</a></li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden absolute top-full left-0 w-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] bg-black/90 backdrop-blur-md flex flex-col items-center py-6 space-y-4 text-white text-[1.2rem] font-extrabold">
          <li><a href="#home" onClick={() => setOpen(false)} className="hover:text-blue-500 transition-colors duration-200">Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-500 transition-colors duration-200">About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)} className="hover:text-blue-500 transition-colors duration-200">Projects</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)} className="hover:text-blue-500 transition-colors duration-200">Skills</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-500 transition-colors duration-200">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;