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
import SectionHeader from "./SectionHeader";

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
    <Fade>
      <section id="contact" className="scroll-mt-32 mt-28 sm:mt-36 md:mt-44 px-4 pb-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Reach out through any of these platforms — I usually reply within a day."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {contacts.map((c, index) => (
            <a
              key={index}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.name}
              style={{ "--icon-color": c.color }}
              className="group flex flex-col items-center gap-3 py-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-(--icon-color) hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl text-white group-hover:text-(--icon-color) transition-colors duration-300">
                {c.icon}
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                {c.name}
              </span>
            </a>
          ))}
        </div>
      </section>
    </Fade>
  );
}

export default Contact;
