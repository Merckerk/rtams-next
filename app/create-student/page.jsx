"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminCrudForm from "@components/adminUsers/AdminCrudForm";
import toast from "react-hot-toast";

const CreateStudent = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    image: "",
    studentNumber: "",
    nfcUID: "",
    email: "",
    name: "",
    username: "",
    password: "",
    repassword: "",
    section: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  //TODO: MAKE THIS FUNCTIONAL
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const onCreateUser = async () => {
    try {
      setIsLoading(true);
      const { image, email, name, userId, username, password, load } = post;
      const postValues = { image, email, name, userId, username, password, load };
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
    console.log(post);
    if (
      !post.email ||
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
    />
  );
};

export default CreateStudent;
