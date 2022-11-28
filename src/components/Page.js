// src/Page.js

import { Fragment } from "react";

const Page = (props) => {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  );
};

export default Page;
