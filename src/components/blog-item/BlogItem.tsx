import React from "react";
import { Card, Col } from "antd";
import { trancate } from "../../helpers/utils";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import CardActionButton from "../card-action-button/CardActionButton";
type BlogItemProps = {
  title: string;
  content: string;
  date: string;
  id: string;
};

const BlogItem = ({ title, content, date, id }: BlogItemProps) => {
  const navigate = useNavigate();

  return (
    <Col className="blog-card" xs={24} sm={24} md={12}>
      <Card
        extra={dayjs(date).format("DD/MM/YYYY")}
        bodyStyle={{ height: "85%" }}
        actions={[
          <CardActionButton handleClickDetail={() => navigate(`/blog/${id}`)} />
        ]}
        className="h-full"
        title={title}
        bordered={false}
      >
        {trancate(content)}
      </Card>
    </Col>
  );
};

export default BlogItem;
