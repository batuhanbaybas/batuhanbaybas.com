import { Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import React from "react";

type ErrorProps = {
  status?: string;
  title?: string;
};

const Error = ({
  status = "Error",
  title = "Ups! something broke"
}: ErrorProps) => {
  return (
    <Result
      status={status as ResultStatusType}
      title={title as ResultStatusType}
    />
  );
};

export default Error;
