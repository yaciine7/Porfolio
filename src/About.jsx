import Fade from "./Fade";
import SectionHeader from "./SectionHeader";

function About() {
  const tags = ["USTHB Student", "MERN Stack", "3 Languages", "Freelance Ready"];

  return (
    <Fade>
      <section id="about" className="scroll-mt-32 mt-28 sm:mt-36 md:mt-44 px-4">
        <SectionHeader eyebrow="About Me" title="Get to know me" />
        <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <p className="text-center text-base sm:text-lg leading-7 font-medium text-gray-200">
            I'm a second-year Computer Science student at USTHB, Algiers, and a self-taught
            full-stack developer specializing in the MERN stack. I've built and deployed real
            projects — from an anonymous messaging app with JWT auth to client work like a café
            website and beauty brand promotional content. I'm fluent in Arabic, French, and
            English, which lets me work comfortably with French-speaking and North African
            clients. Currently building toward freelance work on Upwork and Fiverr, one project
            at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {tags.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 cursor-default hover:scale-110 hover:mx-3 transition-all duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}
export default About;
