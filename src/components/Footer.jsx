import { FaDiscord, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-r from-black to-[#8b1a1a] py-6 text-white border-t border-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          &copy; Deadly 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-6 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-300 transition transform duration-300 ease-in-out hover:text-white hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
      
      <div className="container mx-auto mt-4 px-4">
        <p className="text-center text-xs italic text-gray-200">
          "Breaking the fourth wall since day one." - Deadpool
        </p>
      </div>
    </footer>
  );
};

export default Footer;
