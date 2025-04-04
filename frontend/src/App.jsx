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

function App() {
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
      </div>
      <Footer />
    </>
  );
}

export default App;
