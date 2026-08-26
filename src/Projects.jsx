import { FaUserTie } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Fade from "./Fade";
import SectionHeader from "./SectionHeader";
import dentalImg from "./assets/dental.jpg";
import ecomImg from "./assets/ecom.jpg";

function Projects() {
  const project = [
    {
      title: "Dental clinique",
      desc: "A dental clinic website built with React and Tailwind CSS. It features a responsive design, appointment booking system, and a gallery of services offered.",
      img: dentalImg,
      tags: ["React", "Tailwind", "Booking"],
      link: "https://github.com/yaciine7/Dental-Booking-System",
    },
    {
      title: "E-comm ordering service",
      desc: "A full-stack e-commerce ordering service built with React, Node.js, and MongoDB. It allows users to browse products, and complete purchases securely.",
      img: ecomImg,
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yaciine7/digital-store",
    },
    {
      title: "Portfolio",
      desc: "My previous personal portfolio website built with React and CSS. It showcases my skills, front-end projects, and experience in web development.",
      img: null,
      tags: ["React", "CSS"],
      link: "https://yacine-portfolio-web.netlify.app/",
    },
  ];

  return (
    <Fade>
      <section id="projects" className="scroll-mt-32 mt-28 sm:mt-36 md:mt-44 px-4">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Click any card to visit the live project or repository."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {project.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <FaUserTie className="text-6xl text-white/70" />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center justify-between gap-2">
                  {item.title}
                  <FaArrowUpRightFromSquare className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300 shrink-0" />
                </h3>
                <p className="text-gray-400 text-sm mt-2 flex-1">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Fade>
  );
}
export default Projects;
