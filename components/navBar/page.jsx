"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setLoggedInImage } from "@app/redux/features/loggedInUser/loggedInUserSlice";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const image = useSelector((state) => state.loggedInUser.loggedInImage);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      dispatch(setLoggedInImage(""));
      console.log("After dispatch");
      router.push("/login");
      console.log("After router.push");
    } catch (error) {
      console.log(error);
    }
  };

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

      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => {
                signOut();
              }}
              className="outline_btn"
            >
              Sign Out
            </button>

            <Link href={"/profile"}>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              {session?.user?.name || session?.user?.username || "nothing"}
            </span>
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
