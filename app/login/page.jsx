"use client";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onLoginUser = async () => {
    try {
      const { username, password } = formik.values;
      const postValues = { username, password };

      setIsLoading(true);
      const response = await axios.post("api/users/login", postValues);
      console.log("Login successful", response.data);
      router.push("/");
    } catch (error) {
      console.log("Login failed.", error);
    } finally {
      setIsLoading(false);
    }
  };

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
      //Login using postValues
      onLoginUser();
    },
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]); //delete in prod

  return (
    <div className="w-full h-screen flex items-center justify-center">
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
