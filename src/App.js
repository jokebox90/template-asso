// src/App.js

import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Accueil from "./pages/Accueil";
import Programme from "./pages/Programme";
import Evenements from "./pages/Evenements";
import Billeterie from "./pages/Billeterie";
import Souvenirs from "./pages/Souvenirs";

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        title: "Accueil",
        element: <Accueil />,
      },
      {
        path: "/programme",
        title: "Programme",
        element: <Programme />,
      },
      {
        path: "/evenements",
        title: "Evenements",
        element: <Evenements />,
      },
      {
        path: "/billeterie",
        title: "Billeterie",
        element: <Billeterie />,
      },
      {
        path: "/souvenirs",
        title: "Souvenirs",
        element: <Souvenirs />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
