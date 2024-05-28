"use client";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInImage } from "@app/redux/features/loggedInUser/loggedInUserSlice";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userImage = useSelector((state) => {
    state.loggedInUser.loggedInImage;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onLoginUser = async (username, password) => {

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (!res?.error) {
        router.push("/");
        router.refresh();
        return;
      }else{
        alert("Invalid Username or Password");
      }
      // setTimeout(() => router.replace("/"), 500);
    } catch (error) {
      console.log(error)}
  };

  useEffect(() => {
    console.log("userImage", userImage);
  }, [userImage]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required."),
      password: Yup.string().required("Password is required."),
    }),
    onSubmit: () => {
      onLoginUser(formik.values.username, formik.values.password);
    },
  });

  return (
    <div className="w-full h-70vh flex items-center justify-center">
      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Username
            </span>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="form_input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              required
            />
            {formik.errors.username && formik.touched.username ? (
              <p className="error_message">{formik.errors.username}</p>
            ) : null}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Password
            </span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form_input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="error_message">{formik.errors.password}</p>
            ) : null}
          </label>
        </div>
        <button type="submit" className="black_btn" disabled={isLoading}>
          {isLoading ? "Processing" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
