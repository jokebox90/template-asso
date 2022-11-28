// src/App.js

import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Accueil from "./pages/Accueil";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
