import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap";
import "./scss/index.scss";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { MatomoProvider } from "@jonkoops/matomo-tracker-react";
import { matomo } from "./services/matomoConfig";

library.add(fab, fas, far);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MatomoProvider value={matomo}>
      <App />
    </MatomoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
