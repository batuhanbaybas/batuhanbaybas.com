import { FloatButton, Layout } from "antd";
import React from "react";
import NavBar from "../../Navbar/NavBar";
import "./style.scss";
type MainLayoutProps = {
  home?: boolean;
  actionButton?: boolean;
  handleFlatClick?: () => void;
  method?: "post" | "put";
  children: React.ReactNode;
};

const MainLayout = ({ home, children }: MainLayoutProps) => {
  return (
    <>
      <NavBar />
      <Layout.Content
        className={`${home ? "homeWrapper" : "contentWrapper"}  `}
      >
        {children}
      </Layout.Content>
    </>
  );
};

export default MainLayout;
