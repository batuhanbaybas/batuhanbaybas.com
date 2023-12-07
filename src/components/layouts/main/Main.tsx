import { Layout } from "antd";
import React from "react";
import "./style.scss";
type MainLayoutProps = {
  home?: boolean;
  children: React.ReactNode;
};

const MainLayout = ({ home, children }: MainLayoutProps) => {
  return (
    <>
      <Layout.Content
        className={`${home ? "homeWrapper" : "contentWrapper"}  `}
      >
        {children}
      </Layout.Content>
    </>
  );
};

export default MainLayout;
