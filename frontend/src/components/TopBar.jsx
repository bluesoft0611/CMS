import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
export default function TopBar() {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialItems = [
    { label: "LinkedIn", href: "#", icon: <FaLinkedin className="w-5 h-5" /> },
    { label: "Facebook", href: "#", icon: <FaFacebook className="w-5 h-5" /> },
    { label: "Twitter", href: "#", icon: <FaTwitter className="w-5 h-5" /> },
    { label: "Login", href: "#" },
  ];

  return (
    <div
      className={`bg-primary text-white w-full hidden md:block transition-all ${
        headerActive ? "mt-[-50px]" : ""
      }`}
    >
      <div className="max-layout-container text-sm py-3 flex flex-col md:flex-row justify-between md:items-center gap-3">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex items-center gap-2 text-base">
            <FaPhoneAlt className="text-white" />
            <span>Call Us Today! 800-784-9402</span>
          </div>
          <div className="flex items-center gap-2 text-base">
            <FaEnvelope className="text-white" />
            <span>emailexample@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socialItems.map((item, ind) => (
            <a
              key={ind}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={
                item.label.toLowerCase() !== "login" ? `w-5 h-5` : "text-base"
              }
            >
              {item?.icon || item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
