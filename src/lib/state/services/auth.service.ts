import { AuthEntity } from "@/lib/model/auth/auth.entity";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const regeneraApi = createApi({
  reducerPath: "regeneraApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getUserById: builder.query<AuthEntity, string>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = regeneraApi;
