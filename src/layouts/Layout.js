// src/layouts/Layout.js

import { Fragment, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useMatomo } from "@jonkoops/matomo-tracker-react";
import Page from "../components/Page";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView();
  }, [location.pathname, trackPageView]);

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
