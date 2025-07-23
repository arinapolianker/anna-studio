import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import logo from "./photos/anna_studio_logo.png";

export default function Head() {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.getElementById("navbarNav");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bd-navbar fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Anna logo" width="60" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                title="Homepage"
               >
                בית
               </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/works"
                title="My works"
              >
                עבודות
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/contact"
                title="Contact me"
              >
                צור קשר
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
