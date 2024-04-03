"use client";

import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      {children}
      <Suspense>
        <ProgressBar
          height="4px"
          color="#4f46e5"
          options={{ showSpinner: false, speed: 500 }}
          delay={500}
        />
      </Suspense>
    </SessionProvider>
  );
};
