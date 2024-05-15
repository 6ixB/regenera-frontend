import axios from "axios";
import { SignInDto } from "../model/auth/signin.dto";

const authApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/auth`,
});

export async function signInMutationFn(signInDto: SignInDto) {
  return await authApi.post(`/signin`, signInDto);
}
