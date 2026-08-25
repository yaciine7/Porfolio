import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Fade from "./Fade";

function Contact() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohamed-yacine-kecir-b99b79398/",
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/yaciine7",
      color: "#0969DA",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      link: "https://x.com/Yacineotaku7",
      color: "#000000",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/yaciinne7/",
      color: "#E1306C",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/yacine.kecir.737",
      color: "#1877F2",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@yaciine.kr?lang=fr",
      color: "#FE2C55",
    },
    {
      name: "Email",
      icon: <MdEmail />,
      link: "mailto:yacinekecir63@gmail.com",
      color: "#D44638",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/+213772749259",
      color: "#25D366",
    },
  ];

  return (
    <><Fade>
      <h1 id="contact" className="scroll-mt-50 text-white mt-40 sm:mt-60 md:mt-80 font-extrabold text-3xl sm:text-4xl hover:text-blue-500 transition-colors duration-200 cursor-default w-fit mb-16 sm:mb-16 mx-auto">
        Contact Me
      </h1>
      <div className="flex flex-wrap gap-8 justify-center max-sm:grid max-sm:grid-cols-4 items-center w-fit mx-auto text-white text-5xl sm:text-4xl md:text-5xl">
        {contacts.map((c, index) => (
          <a
            key={index}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--icon-color": c.color }}
            className="inline-flex items-center justify-center sm:hover:scale-160 transition-all duration-300 sm:hover:mx-5 hover:text-(--icon-color) active:text-(--icon-color)"
          >
            {c.icon}
          </a>
        ))}
      </div>
    </Fade></>
  );
}

export default Contact;