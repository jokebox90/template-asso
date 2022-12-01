//

import _ from "lodash";
import { createRef, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { Collapse } from "bootstrap";
// import styles from "./Navbar.module.scss";

export const NavBrand = ({ title, ...iconProps }) => {
  return _.isEmpty(title) ? null : (
    <div className="navbar-brand d-flex">
      <Icon {...iconProps}></Icon>
      {_.isEmpty(title) ? null : <h3>{title}</h3>}
    </div>
  );
};

export const NavItem = (props) => {
  const handleNavLink = ({ isActive }) => {
    return isActive ? "nav-link active px-3" : "nav-link px-3";
  };

  return (
    <li className="nav-item">
      <NavLink to={props.to} className={handleNavLink} onClick={props.collapse}>
        {props.children}
      </NavLink>
    </li>
  );
};

export const Navigation = (props) => {
  const navbarRef = createRef();

  const handleCollapse = () => {
    new Collapse(navbarRef.current);
  };

  return (
    <Fragment>
      <button
        className="navbar-toggler me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavigation"
        aria-controls="mainNavigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="mainNavigation"
        ref={navbarRef}
      >
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center">
          {props.children({ collapse: handleCollapse })}
        </ul>
      </div>
    </Fragment>
  );
};

export const NavBar = (props) => {
  return <nav className="navbar">{props.children}</nav>;
};
