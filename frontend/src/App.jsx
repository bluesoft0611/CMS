import { Routes, Route } from "react-router-dom";
// import Page from "./pages/Page";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home/Index";
import Services from "./components/pages/Services/Index";
import Industries from "./components/pages/Industries/Index";
import Insights from "./components/pages/Insights/Index";
import Blog from "./components/pages/Blog/Index";
import AboutUs from "./components/pages/AboutUs/Index";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [active, setActive] = useState(false);

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
    <>
      <NavBar />
      <button
        className={`btn py-4 fixed bg-[#f7c326] rounded text-[18px] px-12 top-[50%] z-10 rotate-90 ${
          active ? "right-[-54px]" : "right-[-109px]"
        } transition-all duration-400 ease-in-out`}
        onClick={open}
      >
        <span>Contact</span>
      </button>
      <div className="lg:mt-[165px]">
        <Routes>
          {/* <Route path="/:slug" element={<Page />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<div className="p-6">404 Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
