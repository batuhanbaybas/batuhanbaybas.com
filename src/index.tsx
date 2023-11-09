import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles/index.scss";
import Blogs from "./pages/blogs/Blogs";
import SingleBlog from "./pages/single-blog/SingleBlog";
import Projects from "./pages/projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/blog/:id",
    element: <SingleBlog />
  },
  {
    path: "/projects",
    element: <Projects />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
