// src/layouts/Layout.js

import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Page from "../components/Page";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Fragment>
      <Page>
        <Header />
        <Outlet />
        <Footer />
      </Page>
    </Fragment>
  );
};

export default Layout;
