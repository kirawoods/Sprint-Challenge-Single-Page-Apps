import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="nav-bar">
        <NavLink
          className="navbar-item nav-buttons"
          activeClassName="activeNavButton"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navbar-item nav-buttons"
          activeClassName="activeNavButton"
          to="/characters"
        >
          Character List
        </NavLink>
      </div>
    </header>
  );
}
