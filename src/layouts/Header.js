// src/Header.js

import { Fragment } from "react";
import { NavBar, NavBrand, Navigation, NavItem } from "../components/NavBar";

const Header = (props) => {
  return (
    <header className="header">
      <NavBar>
        <NavBrand title="<branding>" icon="guitar" />
        <Navigation>
          {({ collapse }) => (
            <Fragment>
              <NavItem to="/" collapse={collapse}>
                Accueil
              </NavItem>
              <NavItem to="/" collapse={collapse}>
                Evènements
              </NavItem>
              <NavItem to="/" collapse={collapse}>
                Programme
              </NavItem>
            </Fragment>
          )}
        </Navigation>
      </NavBar>
    </header>
  );
};

export default Header;
