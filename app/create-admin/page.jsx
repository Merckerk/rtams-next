"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminCrudForm from "@components/adminUsers/AdminCrudForm";
import toast from "react-hot-toast";

const CreateUser = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    image: "",
    name: "",
    userId: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
    role: "",
    load: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  //TODO: MAKE THIS FUNCTIONAL
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const [errMsg, setErrMsg] = useState({
    name: "",
    userId: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
    role: "",
    audit: "",
  });

  const onCreateUser = async () => {
    try {
      setIsLoading(true);
      if (post.password !== post.repassword)
        throw new Error("Passwords do not match");
      else {
        const { image, name, userId, email, username, password, role } = post;
        const postValues = {
          image,
          name,
          userId,
          email,
          username,
          password,
          role,
        };
        const response = await axios.post("api/users/create", postValues);
        if (response) {
          toast.success("Successfully created an admin user!");
          router.push("/login");
        } else {
          toast.error("Failed to create admin");
        }
      }
    } catch (error) {
      console.log("hahahahah ggs")
      if (error.response && error.response.data && error.response.data.errors) {
        setErrMsg(error.response.data.errors);
        console.log("error", error);
      } else {
        console.log("An error occurred:", error);
      }
      toast.error("Failed to create admin");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(post);
    if (
      !post.name ||
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
      errMsg={errMsg}
      setErrMsg={setErrMsg}
    />
  );
};

export default CreateUser;
