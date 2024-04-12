"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import StudentCrudForm from "@components/students/StudentCrudForm";
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
    load: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  //TODO: MAKE THIS FUNCTIONAL
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const onCreateStudent = async () => {
    try {
      setIsLoading(true);
      const {
        image,
        studentNumber,
        nfcUID,
        email,
        name,
        username,
        password,
        section,
        load,
      } = post;
      const postValues = {
        image,
        studentNumber,
        nfcUID,
        email,
        name,
        username,
        password,
        section,
        load,
      };
      const response = await axios.post("api/students/newStudent", postValues);
      if (response) {
        toast.success("Successfully created a student!", response);
        router.push("/students");
      } else {
        toast.error("Failed to create student");
      }
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
      !post.studentNumber ||
      !post.nfcUID ||
      !post.name ||
      !post.password ||
      !post.repassword
    ) {
      setAreFieldsValid(true);
    } else {
      setAreFieldsValid(false);
    }
  }, [post]);

  return (
    <StudentCrudForm
      type="Create"
      post={post}
      setPost={setPost}
      loading={isLoading}
      handleSubmit={onCreateStudent}
    />
  );
};

export default CreateStudent;
