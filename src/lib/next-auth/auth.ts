import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";
import { signInMutationFn, signInWithGoogleMutationFn } from "../api/authApi";
import { SignInDtoSchema } from "@/lib/model/auth/auth.dto";
import { ZodError } from "zod";
import { JWT } from "next-auth/jwt";

export const pages = {
  signIn: "/auth/signin",
  signOut: "/auth/signout",
  error: "/auth/error",
};

export const providers: Provider[] = [
  Google,
  Credentials({
    id: "credentials",
    name: "Credentials",
    credentials: {
      email: {
        label: "Email",
        type: "email",
        placeholder: "Email Address",
      },
      password: {
        label: "Password",
        type: "password",
        placeholder: "Password",
      },
    },
    authorize: async (credentials) => {
      try {
        let authEntity = null;

        const { email, password } =
          await SignInDtoSchema.parseAsync(credentials);

        const signInDto = {
          email: email,
          password: password,
        };

        const response = await signInMutationFn(signInDto);

        authEntity = response.data;

        if (!authEntity) {
          throw new Error("User not found.");
        }

        return authEntity;
      } catch (error) {
        if (error instanceof ZodError) {
          return null;
        }
      }
    },
  }),
];

interface JWTParams {
  token: any;
  user?: any;
  account?: any;
  profile?: any;
  isNewUser?: any;
}

interface SessionParams {
  session: any;
  token: any;
  user: any;
}

interface SignInParams {
  user: any;
  account: any;
  profile?: any;
  email?: { verificationRequest?: boolean };
  credentials?: Record<string, any>;
}

async function refreshTokens(token: JWT): Promise<JWT> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/auth/refresh`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.backendData.refreshToken}`,
      },
    }
  );
  const data = await response.json();
  const { accessToken, refreshToken, expiresIn } = data;

  const backendData = {
    ...token.backendData,
    accessToken,
    refreshToken,
    expiresIn,
  };

  return { ...token, backendData };
}

export const callbacks = {
  async jwt({ token, user, account, profile, isNewUser }: JWTParams) {
    if (user) {
      return { ...token, ...user, ...account, ...profile };
    }

    if (new Date().getTime() < token.expiresIn) {
      return token;
    }

    return await refreshTokens(token);
  },
  async session({ session, user, token }: SessionParams) {
    session.user = token.backendData.user;
    session.accessToken = token.backendData.accessToken;
    session.refreshToken = token.backendData.refreshToken;

    return session;
  },
  async signIn({ user, account, profile, email, credentials }: SignInParams) {
    if (account.provider === "google") {
      const signInWithGoogleDto = {
        idToken: account.id_token,
      };

      const response = await signInWithGoogleMutationFn(signInWithGoogleDto);
      const data = response.data;

      if (data && data.accessToken) {
        user.backendData = data;
      }
    } else {
      const userCopy = { ...user };
      user.backendData = userCopy;
    }

    return true;
  },
};

export const authConfig = {
  pages,
  providers,
  callbacks,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
