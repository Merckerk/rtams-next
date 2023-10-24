import "@styles/globals.css";

export const metadata = {
  title: "RTAMS",
  description:
    "A Real-Time Attendance Monitoring System for the CpE Department",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
