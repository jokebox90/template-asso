// src/Header.js

import _ from "lodash";
import { Fragment } from "react";
import { NavBar, NavBrand, Navigation, NavItem } from "../components/NavBar";
import { routes } from "../App";

const Header = (props) => {
  return (
    <header className="header">
      <NavBar fixedTop>
        <NavBrand title="CAC40" name="guitar" />
      </NavBar>
    </header>
  );
};

export default Header;
