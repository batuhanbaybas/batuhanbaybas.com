import MainLayout from "../../components/layouts/main/Main";
import { Row } from "antd";

import "./style.scss";
import BlogItem from "../../components/blog-item/BlogItem";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
type blogItem = {
  _id: string;
  title: string;
  subtitle: string;
  createDate: string;
  content: string;
};

const Blogs = () => {
  const { data, error, loading } = useFetch({ url: "/post/all" });

  return (
    <MainLayout>
      {error && <Error />}
      <Loading loading={loading} />
      <Row className="h-85" gutter={[24, 24]}>
        {data?.map((item: blogItem) => (
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
