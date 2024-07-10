import axios from "axios";

export const AxiosInstance = (baseURL: string) => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
