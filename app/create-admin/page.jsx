"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminCrudForm from "@components/adminUsers/adminCrudForm";

const CreateUser = () => {
  const [post, setPost] = useState({
    email: "",
    userId: "",
    username: "",
    password: "",
    repassword: "",
    isAdmin: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const onCreateUser = async () => {
    try {
      setIsLoading(true);
      const {email, userId, username, password, isAdmin} = post
      const postValues = {email, userId, username, password, isAdmin}
      const response = await axios.post("api/users/create", postValues);
      console.log("Signup successful", response.data);
    } catch (error) {
      console.log(error);
      //TODO: MARCKUS: ALERT OR TOAST ERROR MSG
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      !post.email ||
      !post.userId ||
      !post.username ||
      !post.password ||
      !post.repassword
    ) {
      setAreFieldsValid(true);
    } else {
      setAreFieldsValid(false);
    }
  }, [post]);

  return (
    <AdminCrudForm
      type="Create"
      post={post}
      setPost={setPost}
      loading={isLoading}
      areFieldsValid={areFieldsValid}
      handleSubmit={onCreateUser}
    />
  );
};

export default CreateUser;
