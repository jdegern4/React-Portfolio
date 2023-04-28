import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "About Me",
    path: "/about-me",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Nav() {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) => isActive && "highlight"}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
