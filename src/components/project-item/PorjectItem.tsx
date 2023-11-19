import { Button, Card, Col, Tag } from "antd";
import { trancate } from "../../helpers/utils";
import "./style.scss";

type BlogItemProps = {
  title: string;
  description: string;
  link: string;
  techs: any[];
};

const ProjectItem = ({ title, description, techs, link }: BlogItemProps) => {
  return (
    <Col xs={24} sm={24} md={12} lg={8}>
      <Card
        style={{
          height: "300px"
        }}
        bordered={false}
        title={
          <Button type="link" href={link} target="_blank">
            {title}
          </Button>
        }
      >
        <div className="word-break">{trancate(description, 500)}</div>
        <div className="tech-area">
          {techs.map((tech: any) => (
            <Tag key={tech._id} color="purple">
              {tech.name}
            </Tag>
          ))}
        </div>
      </Card>
    </Col>
  );
};

export default ProjectItem;
