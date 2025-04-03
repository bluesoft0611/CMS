import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section7";
import Section8 from "./Sections/Section8";
import Section9 from "./Sections/Section9";
import Contact from "./Contact";

export default function SectionRenderer({ section, index }) {
  switch (section.__component) {
    case "top-bar.top-bar":
      return <TopBar key={index} />;
    case "navigation.menu":
      return <NavBar key={index} />;
    case "section.section1":
      return <Section1 key={index} />;
    case "section.section2":
      return <Section2 key={index} />;
    case "section.section3":
      return <Section3 key={index} />;
    case "section.section4":
      return <Section4 key={index} />;
    case "section.section5":
      return <Section5 key={index} />;
    case "section.section6":
      return <Section6 key={index} />;
    case "section.section7":
      return <Section7 key={index} />;
    case "section.section8":
      return <Section8 key={index} />;
    case "section.section9":
      return <Section9 key={index} />;
    case "contact.contact":
      return <Contact key={index} />;
    default:
      return null;
  }
}
