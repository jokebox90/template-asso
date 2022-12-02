// src/layouts/Main.js

import _ from "lodash";
import { Fragment } from "react";
import { routes } from "../App";
import { NavBar, NavBrand, Navigation, NavItem } from "../components/NavBar";

const Main = (props) => {
  return (
    <main className="main pb-5">
      <NavBar>
        <NavBrand title="CAC40" name="guitar" />
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
      {props.children}
    </main>
  );
};

export default Main;
