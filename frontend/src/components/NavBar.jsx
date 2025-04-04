import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch } from "react-icons/fi";
// import Logo_IMG from "../assets/images/logo.png";
import Logo_IMG from "../assets/svg/Logo2.svg";
import SubMenu1 from "./SubMenu1";
import SubMenu2 from "./SubMenu2";
import SubMenu3 from "./SubMenu3";
import TopBar from "./TopBar";
import { BiX } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "./styles/navbar.css";

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
  const [activePage, setActivePage] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const mobileMenuRef = useRef();
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setToggle(false);
      }
      if (submenuRef.current && !submenuRef.current.contains(e.target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleActivePage = (ind) => {
    setActivePage(ind);
    setActiveIndex(null);
  };

  return (
    <>
      <nav className="hidden lg:block w-full fixed z-10 top-0 left-0">
        <TopBar />

        <div class="bg-white">
          <div class="max-layout-container flex justify-between h-[118px]">
            {/* Logo */}
            <div class="flex">
              <Link to="/" className="flex justify-center max-w-[320px]">
                <img
                  src={Logo_IMG}
                  alt="logo"
                  className="object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* NavLinks */}
            <div class={`flex wrapper z-0 relative ${search ? "search" : ""}`}>
              {/* nav items */}
              <ul className="nav-links flex gap-6">
                {menuItems.map((link, ind) => (
                  <li
                    key={link.url}
                    className={`nav-li ${
                      activePage === ind ? "text-primary" : ""
                    } ${
                      activeIndex === ind && link?.subMenuType
                        ? "border-b-4 border-solid border-primary"
                        : ""
                    }`}
                    onMouseEnter={() => setActiveIndex(ind)}
                    onClick={() => handleActivePage(ind)}
                  >
                    <Link to={link.url} className="nav-link">
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

              {/* Search field */}
              <div class="search-input absolute">
                <fieldset class="relative w-full flex justify-end">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-[350px] border border-[#6b7280] px-4 py-2"
                  />
                  <button className="bg-primary text-white flex w-10 justify-center items-center">
                    <FiSearch />
                  </button>
                </fieldset>
                <button
                  onClick={() => setSearch(false)}
                  className="ml-2 text-xl text-gray-700 hover:text-red-500"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Sub menu items toggle visibility based on mouse event */}
            {activeIndex !== null && menuItems[activeIndex]?.subMenuType && (
              <div
                ref={submenuRef}
                className="absolute left-0 top-full w-full z-50 hidden lg:block"
              >
                <SubNav type={menuItems[activeIndex].subMenuType} />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile nav menu slide in from the left */}
      <nav className="lg:hidden relative w-full">
        <div className="max-layout-container flex justify-between items-center p-4">
          {/* Office Motive Icon */}
          <div>
            <Link to="/" className="flex justify-center max-w-[240px]">
              <img
                src={Logo_IMG}
                alt="Officemotive logo"
                class="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* close icon */}
          <div class="menu flex items-center">
            <button
              onClick={() => setToggle((prevToggle) => !prevToggle)}
              className="menu text-3xl text-gray-700 hover:text-primary"
            >
              <FiMenu />
            </button>
          </div>
        </div>

        {/* side bar nav */}
        <div
          className={`nav-items flex ${
            toggle ? "opacity-1" : "opacity-0"
          } bg-white right-0 py-10 px-6 fixed ${
            toggle ? "w-[250px]" : "w-0"
          } z-20`}
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
                <Link
                  to={link.url}
                  className="slide-li"
                  onClick={() => setToggle(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
