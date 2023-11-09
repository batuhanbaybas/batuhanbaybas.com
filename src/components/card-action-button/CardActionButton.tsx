import { Button, Col, Row } from "antd";

type CardActionButtonProps = {
  handleClickDetail?: () => void;
};

const CardActionButton = ({ handleClickDetail }: CardActionButtonProps) => {
  return (
    <Row gutter={[24, 4]}>
      <Col span={24}>
        <Button type="text" onClick={handleClickDetail} block>
          Detail
        </Button>
      </Col>
    </Row>
  );
};

export default CardActionButton;
