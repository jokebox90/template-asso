//

import _ from "lodash";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

export const NavBrand = (props) => {
  const title = _.get(props, "title", null);

  return (
    <Fragment>
      {title ? (
        <div className="navbar-brand ps-3">
          <h3 className="p-0 m-0">
            <Icon {...props}></Icon>

            {title ? <span>{title}</span> : null}
          </h3>
        </div>
      ) : null}
    </Fragment>
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
        <span className="navbar-toggler-icon"></span>
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
    <nav className="navbar navbar-expand-md navbar-dark bg-color4">
      {props.children}
    </nav>
  );
};
