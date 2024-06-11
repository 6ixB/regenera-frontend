import axios from "axios";
import { BackendRoutesEnum } from "../routes";

export const searchApi = axios.create({
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
  return await searchApi.get(`?query=${query}&page=${page}&limit=${limit}`);
}
