import { Typography } from "antd";
import { useParams } from "react-router-dom";
import "./style.scss";
import MainLayout from "../../components/layouts/main/Main";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
const SingleBlog = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch({ url: `/post/${id}` });

  return (
    <MainLayout>
      {error && <Error />}
      <Loading loading={loading}>
        <div className="single-post">
          <Typography.Title level={2}>{data?.title}</Typography.Title>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content
            }}
          />
        </div>
      </Loading>
    </MainLayout>
  );
};

export default SingleBlog;
