// src/Header.js

import { NavBar, NavBrand } from "../components/NavBar";

const Header = (props) => {
  return (
    <header className="header">
      <NavBar fixedTop>
        <NavBrand title="CAC40" name="volleyball" />
      </NavBar>
    </header>
  );
};

export default Header;
