import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles/index.scss";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {}
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
