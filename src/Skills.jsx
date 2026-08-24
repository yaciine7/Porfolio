import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

function Skills() {

  const skills= [{
    name : "MongoDB",
    icon : <SiMongodb className="mx-auto text-8xl"/>,
    color : "#47A248"
  },{
    name : "Express",
    icon : <SiExpress className="mx-auto text-8xl"/>,
    color : "#FFFFFF"
  },{
    name : "React",
    icon : <SiReact className="mx-auto text-8xl"/>,
    color : "#61DAFB"
  },{
    name : "Node.js",
    icon : <SiNodedotjs className="mx-auto text-8xl"/>,
    color : "#339933"
  },{
    name : "Tailwind CSS",
    icon : <SiTailwindcss className="mx-auto text-8xl"/>,
    color : "#06B6D4"
  }]

  return (
    <>
      <h1 className="text-white mt-60 mb-20 font-extrabold text-4xl hover:text-blue-500 transition-colors duration-200 cursor-default w-fit mx-auto ">
        Skills
      </h1>
      <div className="grid grid-cols-5 gap-8 px-2">
        {skills.map((s, index) => {
          return (
            <div key={index} style={{"--color": s.color}} className="flex flex-col items-center mx-7 gap-4 text-white hover:text-[var(--color)] hover:scale-120 transition-all duration-300 cursor-default">
              {s.icon}
              <p className=" font-bold mt-2 text-2xl text-center">{s.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Skills;
