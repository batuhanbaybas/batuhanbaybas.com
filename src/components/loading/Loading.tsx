import { Skeleton } from "antd";

type LoadingProps = {
  loading: boolean;
  children?: React.ReactNode;
};

const Loading = ({ loading, children }: LoadingProps) => {
  return children ? (
    <Skeleton active loading={loading}>
      {children}
    </Skeleton>
  ) : (
    <Skeleton active loading={loading} />
  );
};

export default Loading;
