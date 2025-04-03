import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch } from "react-icons/fi";
import Logo_IMG from "../assets/images/logo.png";
import SubMenu1 from "./SubMenu1";
import SubMenu2 from "./SubMenu2";
import SubMenu3 from "./SubMenu3";
import TopBar from "./TopBar";
import { BiX } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const menuItems = [
  { label: "Home", url: "/", subMenuType: "subMenu1" },
  { label: "Services", url: "/services", subMenuType: "subMenu2" },
  { label: "Industries", url: "/industries", subMenuType: "subMenu3" },
  { label: "Insights", url: "/insights" },
  { label: "About Us", url: "/about-us" },
  { label: "Blogs", url: "/blogs" },
];

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const mobileMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="hidden lg:block w-full fixed z-10 top-0 left-0">
        <TopBar />

        <div className="bg-white text-gray-700">
          <div className="max-layout-container relative z-10 flex justify-between items-center h-[118px] px-6">
            <Link to="/">
              <img src={Logo_IMG} alt="logo" className="w-80" />
            </Link>

            {/* Links */}
            <div
              className={`relative flex items-center ${
                search
                  ? "opacity-0"
                  : "opacity-100 transition-opacity duration-700"
              }`}
            >
              <ul className="flex gap-6">
                {menuItems.map((link, ind) => (
                  <li
                    key={link.url}
                    className={`relative pb-1 border-b-4 ${
                      location.pathname === link.url
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent"
                    } transition-colors`}
                    onMouseEnter={() => setActiveIndex(ind)}
                  >
                    <Link
                      to={link.url}
                      className="text-lg font-semibold px-2 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <button
                  onClick={() => setSearch(true)}
                  className="text-xl hover:text-blue-600"
                >
                  <FiSearch />
                </button>
              </ul>
            </div>

            {/* Search field */}
            {search && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-end px-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[350px] border border-[#6b7280] px-4 py-2"
                />
                <button className="bg-primary text-white flex w-10 justify-center items-center">
                  <FiSearch />
                </button>
                <button
                  onClick={() => setSearch(false)}
                  className="ml-2 text-xl text-gray-700 hover:text-red-500"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sub menu items toggle visibility based on mouse event */}
        {activeIndex !== null && menuItems[activeIndex]?.subMenuType && (
          <div
            onMouseLeave={() => {
              setActiveIndex(null);
            }}
            className="absolute left-0 top-full w-full z-50 hidden lg:block"
          >
            <SubNav type={menuItems[activeIndex].subMenuType} />
          </div>
        )}
      </nav>

      {/* Mobile nav menu slide in from the left */}
      <nav className="lg:hidden relative w-full">
        <div className="max-layout-container flex justify-between items-center p-4">
          <Link to="/">
            <img src={Logo_IMG} alt="logo" className="w-52" />
          </Link>
          <button
            onClick={() => setToggle((prevToggle) => !prevToggle)}
            className="text-3xl text-gray-700 hover:text-blue-600"
          >
            <FiMenu />
          </button>
        </div>

        {/* side bar nav */}
        {toggle && (
          <div
            className={`flex flex-col ${
              toggle ? "opacity-1" : "opacity-0"
            } bg-white right-0 py-10 px-6 fixed z-20 ${
              toggle ? "w-[250px]" : "w-0"
            } border-t-2 border-primary transition-all ease-in-out`}
          >
            <button
              onClick={() => setToggle(false)}
              className="absolute right-4 top-4 mb-4 text-xl text-gray-700 hover:text-red-500"
            >
              <BiX />
            </button>
            <ul className="flex flex-col gap-5 text-lg">
              {menuItems.map((link) => (
                <li key={link.url}>
                  <Link to={link.url} onClick={() => setToggle(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

function SubNav({ type }) {
  return (
    <div className="absolute left-0 top-full bg-white shadow-xl p-6 z-50 w-full border-t-2 border-primary">
      {type === "subMenu1" && <SubMenu1 />}
      {type === "subMenu2" && <SubMenu2 />}
      {type === "subMenu3" && <SubMenu3 />}
    </div>
  );
}
