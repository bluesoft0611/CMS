import { Routes, Route } from "react-router-dom";
// import Page from "./pages/Page";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home/Index";
import Services from "./components/pages/Services/Index";
import Industries from "./components/pages/Industries/Index";
import Insights from "./components/pages/Insights/Index";
import Blog from "./components/pages/Blog/Index";
import AboutUs from "./components/pages/AboutUs/Index";
import { IoTriangle } from "react-icons/io5";
import { useEffect, useState } from "react";

function App() {
  const [activeBackToTop, setActiveBackToTop] = useState(false);

  // handle back to top
  useEffect(() => {
    const handleScroll = () => {
      setActiveBackToTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <NavBar />
      <div className="lg:mt-[165px]">
        <Routes>
          {/* <Route path="/:slug" element={<Page />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="*" element={<div className="p-6">404 Not Found</div>} />
        </Routes>

        <button
          onClick={toTop}
          className={`fixed bottom-5 z-[1000] right-10 transition-opacity bg-primary px-5 py-[9px] text-white flex items-center rounded duration-400 ease-in ${
            activeBackToTop
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <span>Back to top</span>
          <span className="ml-2">
            <IoTriangle size={16} />
          </span>
        </button>
      </div>
    </>
  );
}

export default App;
