import React from "react";
import { Card, Col, Typography } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { trancate } from "../../helpers/utils";
type BlogItemProps = {
  title: string;
  content: string;
  date: string;
  id: string;
};

const BlogItem = ({ title, content, date, id }: BlogItemProps) => {
  const navigate = useNavigate();

  return (
    <Col xs={24} sm={24}>
      <Card
        className="word-break card"
        extra={dayjs(date).format("DD/MM/YYYY")}
        onClick={() => navigate(`/blog/${id}`)}
        title={
          <div className="blog-item-title">
            <Typography.Title className="typography-title" level={3}>
              {title}
            </Typography.Title>
          </div>
        }
        bordered={false}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: trancate(content, 700)
          }}
        />
      </Card>
    </Col>
  );
};

export default BlogItem;
