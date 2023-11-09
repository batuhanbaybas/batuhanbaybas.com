import axios from "axios";
import { env } from "../helpers/env";

export const axiosInstance = axios.create({
  baseURL: env.baseURL
});
