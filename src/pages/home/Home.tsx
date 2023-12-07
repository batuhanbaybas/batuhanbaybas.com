import MainLayout from "../../components/layouts/main/Main";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaMedium } from "react-icons/fa";
import "./style.scss";
import { Button, Col, Row, Typography } from "antd";

type IconMenu = {
  icon: React.ReactNode;
  url: string;
  target?: string;
  type: string;
  danger?: boolean;
};

const iconMenu: IconMenu[] = [
  {
    icon: <BiLogoLinkedin size={24} />,
    url: "https://www.linkedin.com/in/batuhan-baybas",
    target: "_blank",
    type: "primary"
  },
  {
    icon: <FaGithub size={24} />,
    url: "https://github.com/batuhanbaybas",
    target: "_blank",
    type: "default"
  },
  {
    icon: <BiLogoGmail size={24} />,
    url: "mailto:b.baybas@gmail.com",
    target: "_blank",
    type: "primary",
    danger: true
  },
  {
    icon: <FaMedium size={24} />,
    url: "https://medium.com/@b.baybas",
    target: "_blank",
    type: "default"
  }
];

const Home = () => {
  return (
    <MainLayout home={true}>
      <Typography.Title level={1}> Hello I'm Batuhan 👋 </Typography.Title>
      <Typography.Title level={3}>I'm a Software Developer</Typography.Title>
      <Row
        gutter={12}
        style={{
          padding: "24px 0"
        }}
      >
        {iconMenu.map((item, index) => (
          <Col key={index}>
            <Button
              size="large"
              type={
                item.type as "primary" | "default" | "dashed" | "link" | "text"
              }
              target={item.target}
              href={item.url}
              icon={item.icon}
              danger={item.danger}
            />
          </Col>
        ))}
      </Row>
    </MainLayout>
  );
};

export default Home;
