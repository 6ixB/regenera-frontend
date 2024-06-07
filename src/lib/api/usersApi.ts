import axios from "axios";
import {
  CreateUserDto,
  UpdateUserDto,
  UpdateUserProfileDto,
} from "../model/user/user.dto";

const usersApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/users`,
  withCredentials: true,
});

export async function createUserMutationFn(createUserDto: CreateUserDto) {
  return usersApi.post("/", createUserDto);
}

export async function getUserByIdQueryFn(userId: string) {
  return usersApi.get(`/${userId}`);
}

export async function getUserProfileByIdQueryFn(userId: string) {
  return usersApi.get(`/profiles/${userId}`);
}

export async function updateUserByIdMutationFn({
  userId,
  updateUserDto,
  accessToken,
}: {
  userId: string;
  updateUserDto: UpdateUserDto;
  accessToken: string;
}) {
  const formData = new FormData();

  for (const key in updateUserDto) {
    const value = updateUserDto[key as keyof UpdateUserDto];

    if (value !== undefined) {
      if (!(value instanceof Blob)) {
        const stringValue = value === null ? "" : String(value);
        formData.append(key, stringValue);
      } else {
        formData.append(key, value);
      }
    }
  }

  return usersApi.patch(`/${userId}`, formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function updateUserProfileByIdMutationFn({
  userId,
  updateUserProfileDto,
  accessToken,
}: {
  userId: string;
  updateUserProfileDto: UpdateUserProfileDto;
  accessToken: string;
}) {
  const formData = new FormData();

  for (const key in updateUserProfileDto) {
    const value = updateUserProfileDto[key as keyof UpdateUserProfileDto];

    if (value !== undefined) {
      if (!(value instanceof Blob)) {
        const stringValue = value === null ? "" : String(value);
        formData.append(key, stringValue);
      } else {
        formData.append(key, value);
      }
    }
  }

  return usersApi.patch(`/profiles/${userId}`, formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
}
