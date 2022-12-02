// src/layouts/Main.js

import _ from "lodash";

const Main = (props) => {
  return (
    <main className="main pb-5">
      {props.children}
    </main>
  );
};

export default Main;
