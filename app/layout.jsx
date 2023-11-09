import "@styles/globals.css";
import { Providers } from "./redux/provider";

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
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
