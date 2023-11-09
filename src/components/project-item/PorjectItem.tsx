import React from "react";
import { Card, Col, Empty } from "antd";
import { trancate } from "../../helpers/utils";
import "./style.scss";
import CardActionButton from "../card-action-button/CardActionButton";

const { Meta } = Card;

type BlogItemProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const ProjectItem = ({ title, description, link, image }: BlogItemProps) => {
  return (
    <Col className="project-card" xs={24} sm={24} md={8}>
      <Card
        cover={image ? image : <Empty />}
        className="h-full"
        bordered={false}
        actions={[<CardActionButton />]}
      >
        <Meta title={title} description={trancate(description, 100)} />
      </Card>
    </Col>
  );
};

export default ProjectItem;
