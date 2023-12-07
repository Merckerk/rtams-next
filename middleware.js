import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const publicPath = path === "/login";

  const token = request.cookies.get("next-auth.csrf-token")?.value || "";

  if (publicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!publicPath && !token) {
    console.log(
      "This page is protected. Please log in to a valid account to continue."
    );
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/login",
    "/create-admin",
    "/admin-users",
    "/students",
    "/courses",
    "/attendances",
    "/create-report",
    "/create-student",
    "/student-load",
    "/teaching-load",
    "/update-admin",
    "/update-course",
    "/update-student",
    "/update-admin/:path",
    "/update-course/:path",
    "/update-student/:path",
    "/",
  ],
};
