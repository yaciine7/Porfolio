import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import FadeIn from "./Fade";

function Skills() {

  const skills= [{
    name : "MongoDB",
    icon : <SiMongodb className="mx-auto text-7xl sm:text-8xl md:text-8xl"/>,
    color : "#47A248"
  },{
    name : "Express",
    icon : <SiExpress className="mx-auto text-6xl sm:text-7xl md:text-8xl"/>,
    color : "#FFFFFF"
  },{
    name : "React",
    icon : <SiReact className="mx-auto text-6xl sm:text-7xl md:text-8xl"/>,
    color : "#61DAFB"
  },{
    name : "Node.js",
    icon : <SiNodedotjs className="mx-auto text-6xl sm:text-7xl md:text-8xl"/>,
    color : "#339933"
  },{
    name : "Tailwind CSS",
    icon : <SiTailwindcss className="mx-auto text-6xl sm:text-7xl md:text-8xl"/>,
    color : "#06B6D4"
  }]

  return (
    <><FadeIn>
      <h1 id="skills" className="scroll-mt-40 text-white mt-32 sm:mt-40 md:mt-60 mb-20 font-extrabold text-3xl sm:text-4xl hover:text-blue-500 transition-colors duration-200 cursor-default w-fit mx-auto ">
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:gap-y-10 sm:grid-cols-2 md:grid-cols-5 gap-8 px-2">
        {skills.map((s, index) => {
          return (
            <div key={index} style={{"--color": s.color}} className="flex flex-col items-center gap-4 text-white hover:text-(--color) w-fit mx-auto hover:scale-120 max-sm:hover:my-8 transition-all duration-300 cursor-default">
              {s.icon}
              <p className=" font-bold mt-2 text-xl sm:text-2xl text-center">{s.name}</p>
            </div>
          );
        })}
      </div>
    </FadeIn></>
  );
}
export default Skills;