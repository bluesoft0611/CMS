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
import ContactFormModal from "./components/common/ContactFormModal";

function App() {
  const [active, setActive] = useState(false);
  const [activeBackToTop, setActiveBackToTop] = useState(false);
  const [isContactTriggered, setIsContactTriggered] = useState(false);

  // handle contact form button
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setActive(window.scrollY > 200);
    };

    // Initial check on mount
    handleScroll();

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle back to top
  useEffect(() => {
    const handleScroll = () => {
      setActiveBackToTop(window.scrollY > 700);
    };

    // Initial check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // to top handle smoothly
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

        {isContactTriggered && (
          <ContactFormModal
            isContactTriggered={isContactTriggered}
            onClose={setIsContactTriggered}
          />
        )}

        {/* contact btn */}
        <button
          className={`btn py-4 fixed bg-[#f7c326] rounded text-[18px] px-12 top-[50%] z-10 rotate-90 ${
            active ? "right-[-54px]" : "right-[-109px]"
          } transition-all duration-400 ease-in-out`}
          onClick={() => setIsContactTriggered(true)}
        >
          <span>Contact</span>
        </button>

        {/* To top btn */}
        <button
          onClick={toTop}
          className={`fixed bottom-5 right-10 transition-opacity bg-primary px-5 py-[9px] text-white flex items-center rounded duration-400 ease-in ${
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
