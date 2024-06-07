import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      username: string;
      rating: number | null;
      imageUrl: string | null;
      createdAt: Date;
      updatedAt: Date;
    };
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    backendData: {
      user: {
        id: string;
        email: string;
        username: string;
        rating: number | null;
        createdAt: Date;
        updatedAt: Date;
      };
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}
