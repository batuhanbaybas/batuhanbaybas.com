import React, { useEffect } from "react";
import MainLayout from "../../components/layouts/main/Main";
import { getRequests } from "../../requests/request";
import { Row } from "antd";

import "./style.scss";
import BlogItem from "../../components/blog-item/BlogItem";
type blogItem = {
  _id: string;
  title: string;
  subtitle: string;
  createDate: string;
  content: string;
};

const Blogs = () => {
  const [data, setData] = React.useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data }: any = await getRequests("/post");
    setData(data);
    console.log(data);
  };
  return (
    <MainLayout>
      <Row className="h-85" gutter={[24, 4]}>
        {data?.posts?.map((item: blogItem) => (
          <BlogItem
            key={item._id}
            id={item._id}
            title={item.title}
            content={item.content}
            date={item.createDate}
          />
        ))}
      </Row>
    </MainLayout>
  );
};

export default Blogs;
