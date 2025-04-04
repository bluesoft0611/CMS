import React, { useEffect, useState } from "react";
import HeroSec from "./HeroSec";
import Empowering from "./Empowering";
import OurSolutions from "./OurSolutions";
import IndustryWrServe from "./IndustryWrServe";
import FromOurBlog from "./FromOurBlog";
import Contact from "./Contact";
import Footer from "../../Footer";
import "./Home.css";

export default function Home() {
  const [active, setActive] = useState(false);
  const [isContactTriggered, setIsContactTriggered] = useState(false);

  // handle contact form button
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <button
        className={`btn py-4 fixed bg-[#f7c326] rounded text-[18px] px-12 top-[50%] z-10 rotate-90 ${
          active ? "right-[-54px]" : "right-[-109px]"
        } transition-all duration-400 ease-in-out`}
        onClick={() => setIsContactTriggered(true)}
      >
        <span>Contact</span>
      </button>

      {/* Her Section */}
      <HeroSec />

      {/* Section Two */}
      <Empowering />

      {/* Section Three - Our solutions */}
      <OurSolutions />

      {/* Section Four - Industries We Serve */}
      <IndustryWrServe />

      {/* Section Five - From Our Blog */}
      <FromOurBlog />

      {/* Section Six - Contact */}
      <Contact
        isContactTriggered={isContactTriggered}
        onClose={() => setIsContactTriggered(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
