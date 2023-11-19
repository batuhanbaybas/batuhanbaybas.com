import { Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const NavBar = () => {
  return (
    <Layout.Header className="navbar">
      <div className="menu-item">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </Layout.Header>
  );
};

export default NavBar;
