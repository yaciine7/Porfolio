function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-blue-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        {eyebrow}
      </span>
      <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl cursor-default hover:text-blue-500 transition-colors duration-200">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-xl text-sm sm:text-base font-medium">
          {subtitle}
        </p>
      )}
      <span className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
    </div>
  );
}

export default SectionHeader;
