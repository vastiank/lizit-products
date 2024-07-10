import { API_URL } from "@/app/core/api";
import { AxiosInstance } from "@/app/core/config/AxiosInstance";

const api = AxiosInstance(API_URL);

export const getProducts = async () => await api.get("/products");
