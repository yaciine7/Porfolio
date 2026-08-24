import { FaTooth } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

function Projects() {


    const project =[{
        title : "Dental clinique",
        desc : "A dental clinic website built with React and Tailwind CSS. It features a responsive design, appointment booking system, and a gallery of services offered.",
        img : <FaTooth className="text-8xl text-white hover:text-blue-500 transition-colors duration-250"/>,
        link : "https://github.com/yaciine7/Dental-Booking-System"

    },{
        title : "E-comm ordering service",
        desc : "A full-stack e-commerce ordering service built with React, Node.js, and MongoDB. It allows users to browse products, and complete purchases securely.",
        img : <MdLocalGroceryStore className="text-8xl text-white hover:text-blue-500 transition-colors duration-250"/>,
        link : "https://github.com/yaciine7/digital-store"
    },{
        title : "Portfolio",
        desc : "My previous personal portfolio website built with React and CSS. It showcases my skills, front-end projects, and experience in web development.",
        img : <FaUserTie className="text-8xl text-white hover:text-blue-500 transition-colors duration-250"/>,
        link : "https://yacine-portfolio-web.netlify.app/"
    }]

  return (
    <>
      <h1 id="projects" className="text-white mt-60 font-extrabold text-4xl hover:text-blue-500 transition-colors duration-200 cursor-default w-fit mb-7 mx-auto">
        Projects
      </h1>
      <p className="text-center text-white font-light text-2xl mb-20">Click to Visit</p>
      <div className="grid grid-cols-3 grid-flow-col gap-4 mt-10 mx-10 items-start">
            {project.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col justify-center items-center p-4 rounded-lg mb-4">
                        <a target="_blank" href={item.link}><div className="mb-3 cursor-pointer hover:scale-130 transition-all duration-300">
                            {item.img}
                        </div></a>
                        <a target="_blank" href={item.link}><h2 className="text-2xl font-bold text-white text-center py-5 cursor-pointer hover:text-blue-500 transition-all duration-250 hover:scale-110">
                            {item.title}
                        </h2></a>
                        <p className="text-gray-200 text-center font-medium">{item.desc}</p>
                    </div>
                );
            })}
        </div>
    </>
  );
}
export default Projects;
