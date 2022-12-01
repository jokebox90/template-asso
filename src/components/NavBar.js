//

import _ from "lodash";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
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
    return isActive ? "nav-link active" : "nav-link";
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
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <Fragment>
      <button
        className="navbar-toggler me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavigation"
        aria-controls="mainNavigation"
        aria-expanded={collapse ? "false" : "true"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-name"></span>
      </button>

      <div
        className={collapse ? "collapse navbar-collapse" : "navbar-collapse"}
        id="mainNavigation"
      >
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center px-3">
          {props.children({ collapse: handleCollapse })}
        </ul>
      </div>
    </Fragment>
  );
};

export const NavBar = (props) => {
  return (
    <nav className="navbar">{props.children}</nav>
  );
};
