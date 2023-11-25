"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setLoggedInImage } from "@app/redux/features/loggedInUser/loggedInUserSlice";
import axios from "axios";
import { toast } from "react-hot-toast";

const NavBar = () => {
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
            <button type="button" onClick={logout} className="outline_btn">
              Sign Out
            </button>

            <Link href={"/profile"}>
              {!image ? (
                <Image
                  src="/assets/images/defaultProfilePicture.jpg"
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile icon"
                  style={{ maxWidth: "37px", maxHeight: "37px" }}
                ></Image>
              ) : (
                <Image
                  src={image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile icon"
                  style={{ maxWidth: "37px", maxHeight: "37px" }}
                ></Image>
              )}
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
