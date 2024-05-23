import axios from "axios";
import { SignInDto, SignInWithGoogleDto } from "../model/auth/auth.dto";
import { BackendRoutesEnum } from "../routes";

export const authApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.AUTH.toString()}`,
  withCredentials: true,
});

export async function signInMutationFn(signInDto: SignInDto) {
  return await authApi.post(`/signin`, signInDto);
}

export async function signInWithGoogleMutationFn(
  signInWithGoogleDto: SignInWithGoogleDto
) {
  return await authApi.post(`/signin/google`, signInWithGoogleDto);
}

export async function signOutMutationFn(acessToken: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${acessToken}`,
    },
  };
  return await authApi.post(`/signout`, {}, config);
}

export async function refreshTokenMutationFn(refreshToken: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  };
  return await authApi.post(`/refresh`, { refreshToken }, config);
}
