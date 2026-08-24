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

function Contact() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/your-profile",
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/your-username",
      color: "#0969DA",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      link: "https://twitter.com/your-username",
      color: "#000000",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/your-username",
      color: "#E1306C",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/your-username",
      color: "#1877F2",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@your-username",
      color: "#FE2C55",
    },
    {
      name: "Email",
      icon: <MdEmail />,
      link: "mailto:your-email@example.com",
      color: "#D44638",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/your-phone-number",
      color: "#25D366",
    },
  ];

  return (
    <>
      <h1 id="contact" className="text-white mt-80 font-extrabold text-4xl hover:text-blue-500 transition-colors duration-200 cursor-default w-fit mb-15 mx-auto">
        Contact Me
      </h1>
      <div className="flex flex-wrap gap-8 justify-center items-center w-fit mx-auto text-white text-5xl">
        {contacts.map((c, index) => (
          <a
            key={index}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--icon-color": c.color }}
            className="inline-flex items-center justify-center hover:scale-160 transition-all duration-300 hover:mx-5 hover:text-(--icon-color)"
          >
            {c.icon}
          </a>
        ))}
      </div>
    </>
  );
}

export default Contact;