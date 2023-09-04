import React from "react";
import { NavLink } from "react-router-dom";

const PageSidebar = ({ sectionName, links }) => {
  const activeClassName = "block py-2 px-3 bg-orange-300 text-white";
  const inactiveClassName =
    "block py-2 px-3 bg-gray-300 hover:bg-orange-300 hover:text-white duration-200";
  return (
    <div className="md:w-[25%] w-full">
      <h1 className="text-xl font-bold dark:text-gray-200">
        <span className="text-orange-300">{sectionName}</span>
      </h1>
      <div className="border-t border-2 w-20 mt-2 border-orange-300"></div>
      <div className="flex flex-col gap-3 mt-5">
        {links.map(({ id, to, title }) => (
          <NavLink
            key={id}
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
            to={to}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PageSidebar;
