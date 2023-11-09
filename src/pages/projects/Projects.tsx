import React, { useState } from "react";
import { getRequests } from "../../requests/request";
import MainLayout from "../../components/layouts/main/Main";
import ProjectItem from "../../components/project-item/PorjectItem";
import { Row } from "antd";

const Projects = () => {
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    const { data }: any = await getRequests("/project");
    setData(data);
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <MainLayout>
      <Row className="h-85" gutter={[24, 4]}>
        {data?.projects?.map((item: any) => (
          <ProjectItem key={item._id} {...item} />
        ))}
      </Row>
    </MainLayout>
  );
};

export default Projects;
