import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (
        req.nextUrl.pathname === "/create-admin" ||
        req.nextUrl.pathname === "/create-classlist" ||
        req.nextUrl.pathname === "/admin-users" ||
        req.nextUrl.pathname === "/classlists" ||
        req.nextUrl.pathname === "/update-admin/:path" ||
        req.nextUrl.pathname === "/update-classlist/:path"
      ) {
        return token?.role === "Admin";
      }
      return Boolean(token);
    },
  },
});

export const config = {
  matcher: [
    "/create-admin",
    "/create-report",
    "/create-student",
    "/create-classlist",
    "/admin-users",
    "/classlists",
    "/students",
    "/courses",
    "/attendances",
    "/student-load",
    "/teaching-load",
    "/update-admin",
    "/update-course",
    "/update-student",
    "/update-admin/:path",
    "/update-course/:path",
    "/update-student/:path",
    "/update-classlist/:path",
    "/",
  ],
};
