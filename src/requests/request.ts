import { axiosInstance } from "../axios/axios-instance";

export const getRequests = async (url: string) => {
  try {
    const data: any = axiosInstance.get(url);
    return data;
  } catch (error: any) {
    throw error.message;
  }
};
