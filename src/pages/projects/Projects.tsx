import MainLayout from "../../components/layouts/main/Main";
import ProjectItem from "../../components/project-item/PorjectItem";
import { Row } from "antd";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";

const Projects = () => {
  const { data, error, loading } = useFetch({ url: "/project" });

  return (
    <MainLayout>
      {error && <Error />}
      <Loading loading={loading} />
      <Row className="h-85" gutter={[24, 4]}>
        {data?.projects?.map((item: any) => (
          <ProjectItem
            key={item._id}
            description={item.description}
            image={item.image}
            link={item.link}
            title={item.title}
          />
        ))}
      </Row>
    </MainLayout>
  );
};

export default Projects;
