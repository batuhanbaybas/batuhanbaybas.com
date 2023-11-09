import { axiosInstance } from "../axios/axios-instance";

export const getRequests = async (url: string) => {
  try {
    const data: any = axiosInstance.get(url);
    return data;
  } catch (error: any) {
    throw error.message;
  }
};

export const postRequest = async (url: string, body: any) => {
  try {
    const data = await axiosInstance.post(url, body);
    return data;
  } catch (error: any) {
    throw error.message;
  }
};

export const putRequest = async (
  url: string,
  id: number | string,
  body: any
) => {
  try {
    await axiosInstance.put(`${url}/${id}`, body);
  } catch (error: any) {
    throw error.message;
  }
};

export const deleteRequest = async (url: string, id: number | string) => {
  try {
    await axiosInstance.delete(`${url}/${id}`);
  } catch (error: any) {
    throw error.message;
  }
};
