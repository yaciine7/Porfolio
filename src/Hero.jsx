import Fade from "./Fade";

function Hero() {
  return (
    <Fade>
      <section
        id="home"
        className="scroll-mt-32 flex flex-col items-center justify-center px-6 sm:px-10 pt-32 sm:pt-40 pb-10 text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-green-400 text-xs sm:text-sm font-bold mb-6 cursor-default">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for freelance work
        </span>

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold cursor-default leading-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Yacine
          </span>
        </h1>
        <h2 className="text-gray-300 text-xl sm:text-2xl md:text-3xl font-bold mt-4 cursor-default">
          a passionate full-stack Dev
        </h2>
        <p className="text-gray-400 max-w-xl mt-5 text-sm sm:text-base font-medium">
          I build fast, modern and responsive web apps with the MERN stack —
          from concept to deployment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold text-sm sm:text-base hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/10 hover:border-blue-500 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </Fade>
  );
}
export default Hero;
