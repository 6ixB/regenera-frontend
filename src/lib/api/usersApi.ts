import axios from "axios";

const usersApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/users`,
});

export async function getUserByIdQueryFn(id: string) {
  const response = await usersApi.get(`/${id}`);
  return response.data;
}
