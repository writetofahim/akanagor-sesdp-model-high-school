import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useColorTheme from "../../hooks/useColorTheme";

const Navbar = () => {
  const [colorTheme, setTheme] = useColorTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = [
    { href: "/", name: "Home" },
    { href: "#about", name: "About" },
    // { href: "#services", name: "Service" },
    { href: "#portfolio", name: "Portfolio" },
    { href: "#blog", name: "Blog" },
    { href: "/login", name: "Login" },
  ];
  return (
    <div className="border-general sticky top-0 z-40 border-b dark:border-gray-700 bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80 dark:text-white">
      <div className="max-w-[1200px] w-full mx-auto ">
        <div className={` relative flex items-center justify-between h-16`}>
          <div className="flex items-center text-lg justify-between px-5 w-full">
            <div className="">
              <a className="" href="/">
                আকানগর এস ই এস ডিপি মডেল উচ্চ বিদ্যালয়
              </a>
            </div>
            <div onClick={() => setIsNavOpen(!isNavOpen)} className="lg:hidden">
              {isNavOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
          <div className="items-center lg:flex hidden gap-5 font-semibold">
            <div className="flex flex-shrink-0 items-center px-2 py-1 rounded-lg text-gray-400 hover:text-sky-400 ">
              <NavLink className="flex items-center text-sky-400 " to="/">
                Home
              </NavLink>
            </div>
            <div className="relative group flex flex-shrink-0 items-center px-2 py-1 rounded-lg text-gray-400 ">
              <Link className=" hover:text-sky-400  flex items-center" to="/">
                Facilities
              </Link>
              <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-8 left-0 w-40 p-5 rounded-md shadow-lg border">
                <Link className="hover:text-sky-400" to="/">
                  dropdown-1
                </Link>
                <Link className="hover:text-sky-400" to="/">
                  dropdown-2
                </Link>
                <Link className="hover:text-sky-400" to="/">
                  dropdown-3
                </Link>
              </div>
            </div>
            <div className="group relative flex flex-shrink-0 items-center px-2 py-1 rounded-lg text-gray-400  ">
              <Link className="hover:text-sky-400 flex items-center" to="/">
                Admission
              </Link>
              <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-8 left-0 w-40 p-5 rounded-md shadow-lg border">
                <Link className="hover:text-sky-400" to="/">
                  dropdown-1
                </Link>
                <Link className="hover:text-sky-400" to="/">
                  dropdown-2
                </Link>
                <Link className="hover:text-sky-400" to="/">
                  dropdown-3
                </Link>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center px-2 py-1 rounded-lg text-gray-400 hover:text-sky-400 ">
              <Link className="flex items-center" to="/">
                Academic
              </Link>
            </div>
            <div className="flex flex-shrink-0 items-center px-2 py-1 rounded-lg text-gray-400 hover:text-sky-400 ">
              <Link className="flex items-center" to="/">
                Administration
              </Link>
            </div>
            <div
              onClick={() => setTheme(colorTheme)}
              className="flex flex-shrink-0 items-center cursor-pointer"
            >
              {colorTheme === "dark" ? (
                <span className="text-gray-700">{darkIcon}</span>
              ) : (
                <span className="text-yellow-300">{lightIcon}</span>
              )}
            </div>
            <div
              className="text-white
             flex flex-shrink-0 items-center dark:bg-[#38bdf8] bg-[#38bdf8] px-2 py-1 rounded-lg"
            >
              <Link className="flex items-center" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className={`${isNavOpen ? "block" : "hidden"}  `}>
          <div className="md:flex gap-6 dark:text-white md:p-0 p-5 md:mt-10 mt-0 mb-10">
            <div>
              {navItems.map((item, index) => (
                <Link
                  to={item.href}
                  key={index}
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className={` block text-center pb-3  cursor-pointer relative md:text-xl text-base md:my-0 my-3 font-bold `}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div
              onClick={() => setTheme(colorTheme)}
              className="mx-auto w-5 cursor-pointer "
            >
              {colorTheme === "dark" ? darkIcon : lightIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const lightIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
  </svg>
);

const darkIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
  </svg>
);
