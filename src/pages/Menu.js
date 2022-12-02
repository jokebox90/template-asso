// src/layouts/Menu.js

import { Fragment } from "react";
import { NavBar, Navigation, NavItem } from "../components/NavBar";
import { routes } from "../App";
import _ from "lodash";

export function Menu({ navProps }) {
  return (
    <NavBar>
      <Navigation {...navProps}>
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
  );
}
