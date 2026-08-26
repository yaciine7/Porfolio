import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[90%] max-w-5xl">
      <nav className="flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <a href="#home" className="cursor-default text-white font-extrabold text-xl sm:text-2xl">
          <span className="text-blue-500 hover:text-purple-500 transition-colors duration-200">Yacine</span> Dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-white text-sm font-bold uppercase tracking-wide">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="relative group py-1">
                {l.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 flex flex-col items-center gap-5 py-6 rounded-2xl border border-white/10 bg-black/85 backdrop-blur-xl text-white text-base font-bold"
          >
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
