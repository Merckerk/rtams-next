"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const signOut = () => {};
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/rtams-logo.svg"
          alt="rtams logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">RTAMS</p>
      </Link>

      {/* Mobile navigation */}

      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-admin" className="black_btn">
              Users
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href={"/profile"}>
              {/* 
                //TODO: decode token, edit user for now 
                */}
              <Image
                src="/assets/images/defaultProfilePicture.jpg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile icon"
              ></Image>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
