import axios from "axios";
import { BackendRoutesEnum } from "../routes";

export const authApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.SEARCH.toString()}`,
  withCredentials: true,
});

export async function searchQueryFn({
  query,
  page,
  limit,
}: {
  query: string;
  page: number;
  limit: number;
}) {
  return await authApi.get(`?query=${query}&page=${page}&limit=${limit}`);
}
