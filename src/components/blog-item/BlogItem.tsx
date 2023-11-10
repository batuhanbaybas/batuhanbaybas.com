import React from "react";
import { Card, Col } from "antd";
import { trancate } from "../../helpers/utils";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./style.scss";
type BlogItemProps = {
  title: string;
  content: string;
  date: string;
  id: string;
};

const BlogItem = ({ title, content, date, id }: BlogItemProps) => {
  const navigate = useNavigate();

  return (
    <Col xs={24} sm={24} md={12} lg={8}>
      <Card
        extra={dayjs(date).format("DD/MM/YYYY")}
        onClick={() => navigate(`/blog/${id}`)}
        bodyStyle={{ paddingBottom: "0px" }}
        title={title}
        className="h-full"
        bordered={false}
      >
        {trancate(content)}
      </Card>
    </Col>
  );
};

export default BlogItem;
