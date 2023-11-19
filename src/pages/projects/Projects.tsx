import MainLayout from "../../components/layouts/main/Main";
import ProjectItem from "../../components/project-item/PorjectItem";
import { Row } from "antd";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";

const Projects = () => {
  const { data, error, loading } = useFetch({ url: "/project/all" });

  return (
    <MainLayout>
      {error && <Error />}
      <Loading loading={loading} />
      <Row className="h-85" gutter={[24, 24]}>
        {data?.map((item: any) => (
          <ProjectItem
            key={item._id}
            description={item.description}
            link={item.link}
            title={item.title}
            techs={item?.techs}
          />
        ))}
      </Row>
    </MainLayout>
  );
};

export default Projects;
