import Fade from "./Fade";

function About() {
  return (
    <><Fade>
      <h1
        id="about"
        className="scroll-mt-40 text-white mt-32 sm:mt-40 md:mt-60 font-extrabold text-3xl sm:text-4xl hover:text-blue-500 transition-colors duration-200 cursor-default w-fit mb-10 sm:mb-16 mx-auto"
      >
        About Me
      </h1>
      <p className="text-center my-4 mx-4 sm:mx-10 md:mx-20 lg:mx-40 text-base sm:text-lg leading-7 font-bold text-white">I'm a second-year Computer Science student at USTHB, Algiers, and a self-taught full-stack developer specializing in the MERN stack. I've built and deployed real projects — from an anonymous messaging app with JWT auth to client work like a café website and beauty brand promotional content. I'm fluent in Arabic, French, and English, which lets me work comfortably with French-speaking and North African clients. Currently building toward freelance work on Upwork and Fiverr, one project at a time.</p>
    </Fade></>
  );
}
export default About;