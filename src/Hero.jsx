import Fade from "./Fade"
function Hero() {
  return (
    <><Fade>
      <section
        id="home"
        className="scroll-mt-40 flex items-center justify-between px-6 sm:px-10 py-6 mt-20 sm:mt-32"
      >
        <div className="text-white flex flex-col items-center justify-center w-full cursor-default">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-extrabold py-6 text-center">
            Welcome to My Portfolio
          </h2>
          <h2 className="text-3xl sm:text-2xl md:text-3xl mt-6 text-center font-bold">
            I'm <span className="text-blue-500 hover:text-purple-500 transition-colors duration-200">Yacine</span> ,
          </h2>
          <h2 className="text-2xl sm:text-2xl md:text-3xl mt-6 text-center font-bold">
            a passionate full-stack
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl mt-6 text-center font-bold">Dev</h2>
        </div>
      </section>
    </Fade></>
  );
}
export default Hero;