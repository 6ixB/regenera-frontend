import axios from "axios";
import { CreateUserDto } from "../model/user/user.dto";

const usersApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/users`,
  withCredentials: true,
});

export async function createUserMutationFn(createUserDto: CreateUserDto) {
  return usersApi.post("/", createUserDto);
}
