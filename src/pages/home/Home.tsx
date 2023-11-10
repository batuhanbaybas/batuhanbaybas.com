import MainLayout from "../../components/layouts/main/Main";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
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
  }
];

const Home = () => {
  return (
    <MainLayout home={true}>
      <Typography.Title> Hello I'm Batuhan</Typography.Title>
      <Typography.Title level={3}>I'm a MERN STACK Developer</Typography.Title>
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
      <Row>
        <Button danger type="primary" size="large">
          Download CV
        </Button>
      </Row>
    </MainLayout>
  );
};

export default Home;
