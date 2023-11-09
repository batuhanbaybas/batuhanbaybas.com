import { Typography } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRequests } from "../../requests/request";
import MainLayout from "../../components/layouts/main/Main";
const SingleBlog = () => {
  const [data, setData] = React.useState<any>([]);
  const { id } = useParams();

  const getSingleBlog = async () => {
    const { data }: any = await getRequests(`/post/${id}`);
    setData(data);
  };

  useEffect(() => {
    getSingleBlog();
  }, [id]);
  return (
    <MainLayout>
      <div className="single-post">
        <Typography.Title level={2}>{data?.post?.title}</Typography.Title>
        <Typography.Text>{data?.post?.content}</Typography.Text>
      </div>
    </MainLayout>
  );
};

export default SingleBlog;
