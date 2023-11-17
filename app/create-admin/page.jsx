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
  //TODO: MAKE THIS FUNCTIONAL
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const onCreateUser = async () => {
    try {
      setIsLoading(true);
      const { image, email, userId, username, password, isAdmin } = post;
      const postValues = { image, email, userId, username, password, isAdmin };
      const response = await axios.post("api/users/create", postValues);
      toast.success("Successfully created an admin user!");
      router.push("/login");
    } catch (error) {
      toast.error(error);
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
      handleSubmit={onCreateUser}
    />
  );
};

export default CreateUser;
