/* esNavLinknt-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../logo.jpeg";

// React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="logo" src={logo} alt="logo..." />
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavLink
                  exact
                  className="main-nav"
                  to={"/"}
                  className="main-nav"
                  activeClassName="main-nav-active"
                >
                  Home
                </NavLink>
                <Switch>
                  <NavLink
                    exact
                    className="main-nav"
                    to={"/aboutme"}
                    activeClassName="main-nav-active"
                  >
                    about me
                  </NavLink>
                </Switch>

                <Switch>
                  <NavLink
                    exact
                    className="main-nav"
                    activeClassName="main-nav-active"
                    to={"/experience"}
                  >
                    Experience
                  </NavLink>
                </Switch>

                <Switch>
                  <NavLink
                    exact
                    className="main-nav"
                    to={"/projects"}
                    activeClassName="main-nav-active"
                  >
                    Projects
                  </NavLink>
                </Switch>

                <Switch>
                  <NavLink
                    exact
                    className="main-nav"
                    to={"/contactme"}
                    activeClassName="main-nav-active"
                  >
                    contact me
                  </NavLink>
                </Switch>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
