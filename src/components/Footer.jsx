import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className=" flex flex-col justify-center items-center py-10 pt-16 ">
      <h1 className="text-3xl font-bold ">
        Akash<span className="text-blue-500">P</span>
      </h1>
      <ul className="flex items-center py-10 gap-9 flex-row">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/work"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <p>
        {" "}
        &#169; All right reserved. <span className="text-blue-500">AkashP</span>
      </p>
    </div>
  );
}

export default Footer;
