import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbaar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          <h1>MKList</h1>
        </NavLink>
        <NavLink className="nav-linkss-parent" to="/create">
          <p className="nav-linkss">Create Record</p>
        </NavLink>
      </nav>
    </div>
  );
}
