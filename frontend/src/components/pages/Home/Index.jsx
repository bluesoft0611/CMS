import React from "react";
import HeroSec from "./HeroSec";
import Empowering from "./Empowering";
import OurSolutions from "./OurSolutions";
import IndustryWrServe from "./IndustryWrServe";
import "./Home.css";
import FromOurBlog from "./FromOurBlog";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
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
      <Contact />
    </div>
  );
}
