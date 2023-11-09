"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminCrudForm from "@components/adminUsers/adminCrudForm";

const CreateUser = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    image: "",
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
      const { image, email, userId, username, password, isAdmin } = post;
      const postValues = { image, email, userId, username, password, isAdmin };
      const response = await axios.post("api/users/create", postValues);
      console.log("Signup successful", response.data); // Delete in prod
      router.push("/login");
    } catch (error) {
      console.log(error);
      //TODO: MARCKUS: ALERT OR TOAST ERROR MSG
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(post);
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
