"use client";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onCreateUser = (async) => {
    try {
    } catch (error) {
      //TODO: FOR CLINT: KAHIT CONSOLE LOG MO LANG YUNG ERROR
      //TODO: MARCKUS: ALERT OR TOAST ERROR MSG

      const { email, username, password, isAdmin } = formik.values;
      const postValues = { email, username, password, isAdmin };
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      userId: "",
      username: "",
      password: "",
      repassword: "",
      isAdmin: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Email Required"),
      userId: Yup.string().required("User ID is required"),
      username: Yup.string().required("Username required"),
      password: Yup.string()
        .min(12, "Password must be atleast 12 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character."
        )
        .notOneOf(
          ["password", "123456", "qwerty", "abc123"], //StrongPassword121! for default siguro idk xd
          "Common passwords are not allowed"
        )
        .notOneOf([Yup.ref("username")], "Password cannot be the username")
        .required("Password is required"),
      repassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: () => {
      //TODO: post method here
      const { email, userId ,username, password, isAdmin } = formik.values;
      const postValues = { email, userId,username, password, isAdmin };
      console.log("to submit:", postValues); //delete in prod
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
              Email
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="form_input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="error_message">{formik.errors.email}</p>
            ) : null}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              ID
            </span>
            <input
              type="text"
              id="userId"
              name="userId"
              placeholder="Enter User ID"
              className="form_input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userId}
              required
            />
            {formik.errors.userId && formik.touched.userId ? (
              <p className="error_message">{formik.errors.userId}</p>
            ) : null}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Username
            </span>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
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
              placeholder="Enter password"
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
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Retype Password
            </span>
            <input
              type="password"
              id="repassword"
              name="repassword"
              placeholder="Enter password"
              className="form_input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.repassword}
              required
            />
            {formik.errors.repassword && formik.touched.repassword ? (
              <p className="error_message">{formik.errors.repassword}</p>
            ) : null}
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Is Admin:
            </span>
            <label className="toggle-container ml-2">
              <input
                type="checkbox"
                id="isAdmin"
                name="isAdmin"
                checked={formik.values.isAdmin}
                onChange={formik.handleChange}
              />
              <span className="toggle"></span>
            </label>
          </label>
        </div>
        <button type="submit" className="black_btn">
          {isLoading ? ("Processing") : ("Create User Account")}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
