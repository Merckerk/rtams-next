import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  //Public Paths (does not require user token, user is not yet logged in)
  const isPublicPath = path === "/login";

  //Extracts the user's token from the browser
  const token = request.cookies.get("token")?.value || "";

  //If user is verified and tries to go to a public path (login or register), redirects them to the homepage
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  //If user is not yet verified and tries to go in a private path (homepage), redirects them to /login
  if (!isPublicPath && !token) {
    console.log(
      "This page is protected. Please log in to a valid account to continue."
    );
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

//Paths protected from non-verified user access
export const config = {
  matcher: ["/login", "/create-admin", "/admin-users", "/"],
};
