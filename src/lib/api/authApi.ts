import axios from "axios";
import { SignInDto, SignInWithGoogleDto } from "../model/auth/auth.dto";
import { BackendRoutesEnum } from "../routes";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export const authApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.AUTH.toString()}`,
  withCredentials: true,
});

async function refreshAuthLogic(failedRequest: any) {
  const refreshToken = failedRequest.response.config.headers["RefreshToken"];

  if (!refreshToken) {
    return Promise.reject("No refresh token available");
  }

  refreshTokenMutationFn(refreshToken)
    .then((tokenRefreshResponse) => {
      failedRequest.response.config.headers["Authorization"] =
        "Bearer " + tokenRefreshResponse.data.accessToken;
      return Promise.resolve();
    })
    .catch((error) => {
      return Promise.reject();
    });
}

createAuthRefreshInterceptor(authApi, refreshAuthLogic);

export async function signInMutationFn(signInDto: SignInDto) {
  return await authApi.post(`/signin`, signInDto);
}

export async function signInWithGoogleMutationFn(
  signInWithGoogleDto: SignInWithGoogleDto
) {
  return await authApi.post(`/signin/google`, signInWithGoogleDto);
}

// Addes a refreshToken parameter and pass it to the request,
// so if it fails the interceptor can access the refresh token from the failed request
export async function signOutMutationFn(
  accessToken: string,
  refreshToken: string
) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      RefreshToken: refreshToken,
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
