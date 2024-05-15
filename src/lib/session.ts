"use server";

import { cookies } from "next/headers";
import { JWTPayload, SignJWT, jwtVerify } from "jose";

const secretKey = process.env.NEXT_PRIVATE_SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("5m")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(accessToken: string) {
  const payload = await decrypt(accessToken);

  if (!payload) {
    return null;
  }

  const expiresAt = new Date(payload.exp! * 1000);
  cookies().set("session", accessToken, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const session = cookies().get("session")?.value;

  if (!session) {
    return null;
  }

  return await decrypt(session);
}

export async function updateSession() {
  let session = cookies().get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  payload.exp = expires.getTime() / 1000;
  session = await encrypt(payload);

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  cookies().delete("session");
}
