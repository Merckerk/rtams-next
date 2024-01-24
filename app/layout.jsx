import "@styles/globals.css";
import { Providers } from "./redux/provider";
import { NavBar } from "@components";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "RTAMS",
  description:
    "A Real-Time Attendance Monitoring System for the CpE Department",
};

export const fetchCache = 'force-no-store'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <AuthProvider>
          <Providers>
            <main className="app">
              <NavBar />
              {children}
            </main>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
