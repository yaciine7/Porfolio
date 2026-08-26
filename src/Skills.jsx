import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import Fade from "./Fade";
import SectionHeader from "./SectionHeader";

function Skills() {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  ];

  return (
    <Fade>
      <section id="skills" className="scroll-mt-32 mt-28 sm:mt-36 md:mt-44 px-4">
        <SectionHeader eyebrow="Tech Stack" title="Skills & Tools" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {skills.map((s, index) => (
            <div
              key={index}
              style={{ "--color": s.color }}
              className="group flex flex-col items-center justify-center gap-4 py-8 px-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-(--color) hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <div className="text-5xl sm:text-6xl text-white group-hover:text-(--color) transition-colors duration-300">
                {s.icon}
              </div>
              <p className="font-bold text-sm sm:text-base text-gray-200 group-hover:text-white text-center">
                {s.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
export default Skills;
