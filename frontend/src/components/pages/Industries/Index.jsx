import React from "react";
import Section1 from "./Sections/Section1";
import SliderComponent from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section7";
import Section8 from "./Sections/Section8";
import Section9 from "./Sections/Section9";

export default function Industries() {
  return (
    <div>
      {/* Section 1--- */}
      <Section1 />

      {/* Section 2--- */}
      <SliderComponent />

      {/* Section 3--- */}
      <Section3 />

      {/* Section 4--- */}
      <Section4 />

      {/* Section 5--- */}
      <Section5 />

      {/* Section 6--- */}
      <Section6 />

      {/* Section 7--- */}
      <Section7 />

      {/* Section 8--- */}
      <Section8 />

      {/* Section 9--- */}
      <Section9 />
    </div>
  );
}
