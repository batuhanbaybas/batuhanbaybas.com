import React from "react";
import { Card, Col, Empty } from "antd";
import { trancate } from "../../helpers/utils";
import "./style.scss";

const { Meta } = Card;

type BlogItemProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const ProjectItem = ({ title, description, link, image }: BlogItemProps) => {
  return (
    <Col xs={24} sm={24} md={12} lg={8}>
      <Card
        cover={image ? image : <Empty />}
        className="h-full"
        bodyStyle={{ paddingTop: "0px", paddingBottom: "0px" }}
        bordered={false}
      >
        <Meta title={title} description={trancate(description, 100)} />
      </Card>
    </Col>
  );
};

export default ProjectItem;
