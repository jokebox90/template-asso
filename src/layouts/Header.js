// src/Header.js

import _ from "lodash";
import { Fragment } from "react";
import { NavBar, NavBrand, Navigation, NavItem } from "../components/NavBar";
import { routes } from "../App";

const Header = (props) => {
  return (
    <header className="header">
      <NavBar>
        <NavBrand title="<brand>" name="guitar" />
        <Navigation>
          {({ collapse }) => (
            <Fragment>
              {_.map(routes[0].children, (location, index) => (
                <NavItem key={index} to={location.path} collapse={collapse}>
                  {location.title}
                </NavItem>
              ))}
            </Fragment>
          )}
        </Navigation>
      </NavBar>
    </header>
  );
};

export default Header;
