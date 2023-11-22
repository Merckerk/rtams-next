import "@styles/globals.css";
import { Providers } from "./redux/provider";
import { NavBar } from "@components";

export const metadata = {
  title: "RTAMS",
  description:
    "A Real-Time Attendance Monitoring System for the CpE Department",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Providers>
          <main className="app">
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
