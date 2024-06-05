import { auth } from "@/lib/next-auth/auth";
import { NextResponse } from "next/server";
import { FrontendRoutesEnum } from "./lib/routes";

const protectedRoutes = [
  "/dashboard",
  "/auth/signout",
  // "/projects/create",
  "/chats",
];
const publicRoutes = ["/auth/signin", "/auth/signup"];

export default auth((req) => {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (isProtectedRoute && !req.auth) {
    return NextResponse.redirect(
      new URL(FrontendRoutesEnum.SIGNIN.toString(), req.nextUrl)
    );
  }

  if (
    isPublicRoute &&
    req.auth &&
    !req.nextUrl.pathname.startsWith(FrontendRoutesEnum.DASHBOARD.toString())
  ) {
    return NextResponse.redirect(
      new URL(FrontendRoutesEnum.DASHBOARD.toString(), req.nextUrl)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
