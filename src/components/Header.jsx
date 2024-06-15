import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../assets/output.png";
import { useAnimate, stagger } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "div",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            {
              transform: "scale(1)",
              opacity: 1,
              filter: "blur(0px)",
            },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          ["div", { transform: "translateX(100%)" }, { at: "-0.1" }],
          [
            "li",
            {
              transform: "scale(0.5)",
              opacity: 0,
              filter: "blur(10px)",
            },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <nav
      ref={scope}
      className="sticky z-30 bg-white top-0 flex justify-between items-center h-14 py-5 overflow-hidden px-20"
    >
      {/* <div className="flex items-center"> */}
      {/* <img src={Logo} className="w-20" /> */}
      <h1 className="text-2xl font-bold flex justify-center items-center">
        Akash<span className="text-blue-500">P</span>
      </h1>
      {/* </div> */}

      <React.Fragment>
        <Menu />
        <button className="bg-[#323232] text-white px-5 py-2 rounded-xl hover:bg-blue-500 font-bold md:flex hidden">
          <Link to={"/contact"}>Let's talk</Link>
        </button>
      </React.Fragment>

      <React.Fragment>
        <MenuMobile />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </React.Fragment>
    </nav>
  );
}

export function MenuMobile() {
  return (
    <div className="menu-mobile z-40 md:hidden flex py-5">
      <ul className="flex items-center md:gap-9 md:flex-row flex-col">
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
        <li>
          <button className="talk bg-[#323232] text-white px-5 py-1 rounded-xl hover:bg-blue-500 font-bold">
            <Link to={"/contact"}>Let's talk</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export function Menu() {
  return (
    <article className="menu hidden md:flex z-50">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-black"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-black"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/work"}
        className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-black"}`
        }
      >
        Works
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `${isActive ? "text-blue-500" : "text-black"}`
        }
      >
        Contact
      </NavLink>
    </article>
  );
}

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => {
  return (
    <button className="toggle md:hidden flex" onClick={toggle}>
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default Header;
