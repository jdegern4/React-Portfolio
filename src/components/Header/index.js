import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h2 className="Title">
        <Link to="/about-me">
          <strong>Jordan Degerness, Developer</strong>
        </Link>
      </h2>
      {props.children}
    </header>
  );
}

export default Header;
