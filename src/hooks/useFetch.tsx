import React, { useState } from "react";
import { getRequests } from "../requests/request";

type useFetchProps = {
  url: string;
};

const useFetch = ({ url }: useFetchProps) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getData = async () => {
    setLoading(true);
    const { data }: any = await getRequests(url)
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });

    setData(data);
  };

  React.useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
