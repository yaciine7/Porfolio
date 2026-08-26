function Footer() {
  return (
    <footer className="mt-20 sm:mt-24 pt-8 pb-8 px-4 border-t border-white/10 text-center">
      <a
        href="#home"
        className="inline-block text-gray-400 hover:text-blue-500 text-sm font-bold transition-colors duration-200 mb-3"
      >
        ↑ Back to top
      </a>
      <p className="text-gray-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} Yacine Kecir. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
