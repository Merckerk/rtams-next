export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // "/create-admin",
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
