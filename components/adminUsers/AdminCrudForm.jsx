"use client";
import { useEffect, useState } from "react";

const AdminCrudForm = ({
  type,
  post,
  setPost,
  loading,
  areFieldsValid,
  handleSubmit,
}) => {
  const [errMsg, setErrMsg] = useState({
    email: "",
    userId: "",
    username: "",
    password: "",
    repassword: "",
  });

  const validateEmail = (value) => {
    const isValid = !value || /\S+@\S+\.\S+/.test(value);
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      email: isValid ? "" : "Invalid email",
    }));
    return isValid;
  };

  const validateUserId = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      userId: isValid ? "" : "User ID is required",
    }));
    return isValid;
  };

  const validateUsername = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      username: isValid ? "" : "Username is required",
    }));
    return isValid;
  };

  const validatePassword = (value) => {
    const isLengthValid = value.length >= 12;
    const isCriteriaValid =
      /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value);
    const isValid = isLengthValid && isCriteriaValid;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      password: isLengthValid && isCriteriaValid ? "" : "Invalid password",
    }));
    return isValid;
  };

  const validateRepassword = (value) => {
    const isValid = !value || value === post.password;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      repassword: isValid ? "" : "Passwords do not match",
    }));
    return isValid;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          {type} User
        </h1>
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
              onChange={(e) => {
                setPost({ ...post, email: e.target.value });
                validateEmail(e.target.value);
              }}
              value={post.email}
              required
            />
            {errMsg.email ? (
              <p className="error_message">{errMsg.email}</p>
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
              onChange={(e) => {
                setPost({ ...post, userId: e.target.value });
                validateUserId(e.target.value);
              }}
              value={post.userId}
              required
            />
            {errMsg.userId ? (
              <p className="error_message">{errMsg.userId}</p>
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
              onChange={(e) => {
                setPost({ ...post, username: e.target.value });
                validateUsername(e.target.value);
              }}
              value={post.username}
              required
            />
            {errMsg.username ? (
              <p className="error_message">{errMsg.username}</p>
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
              onChange={(e) => {
                setPost({ ...post, password: e.target.value });
                validatePassword(e.target.value);
              }}
              value={post.password}
              required
            />
            {errMsg.password ? (
              <p className="error_message">{errMsg.password}</p>
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
              onChange={(e) => {
                setPost({ ...post, repassword: e.target.value });
                validateRepassword(e.target.value);
              }}
              value={post.repassword}
              required
            />
            {errMsg.repassword ? (
              <p className="error_message">{errMsg.repassword}</p>
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
                checked={post.isAdmin}
                onChange={(e) =>
                  setPost({ ...post, isAdmin: e.target.checked })
                }
              />
              <span className="toggle"></span>
            </label>
          </label>
        </div>
        <button
          className="black_btn"
          disabled={loading || areFieldsValid}
          onClick={handleSubmit}
        >
          {loading ? "Processing" : "Create User Account"}
        </button>
      </form>
    </div>
  );
};

export default AdminCrudForm;
