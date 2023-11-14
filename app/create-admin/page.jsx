"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminCrudForm from "@components/adminUsers/adminCrudForm";
import toast from "react-hot-toast";

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
      toast.success("Successfully created an admin user!");
      router.push("/login");
    } catch (error) {
      console.log(error);
      //TODO: MARCKUS: ALERT OR TOAST ERROR MSG
      toast.error(error);
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
      handleSubmit={onCreateUser}
    />
  );
};

export default CreateUser;
