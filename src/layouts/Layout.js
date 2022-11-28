// src/layouts/Layout.js

import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Fragment>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
