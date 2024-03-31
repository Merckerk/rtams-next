"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminCrudForm from "@components/adminUsers/AdminCrudForm";
import toast from "react-hot-toast";
import ClasslistCrudForm from "@components/classlist/classlistCrudForm";

const CreateClassList = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    user: "",
    subjectCode: "",
    subjectDescription: "",
    term: "",
    schedule: "",
    students: [],
  });

  const [faculties, setFaculties] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const fetchFacultyData = async () => {
    const response = await fetch("/api/users/getFacultyIdAndName", {
      cache: "no-store",
    });
    const data = await response.json();
    if (data) {
      setFaculties(data);
    } else {
    }
  };

  const onCreateClassList = async () => {};

  useEffect(() => {
    fetchFacultyData();
  }, []);

  useEffect(() => {
    console.log("faculties:", faculties);
  }, [faculties]);

  useEffect(() => {
    console.log("post:", post);
  }, [post]);

  return (
    <ClasslistCrudForm
      type="Create"
      post={post}
      setPost={setPost}
      loading={isLoading}
      handleSubmit={onCreateClassList}
      faculties={faculties}
    />
  );
};

export default CreateClassList;
