"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CoursesCrudForm from "@components/courses/CoursesCrudForm";
import toast from "react-hot-toast";

const CreateCourse = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    courseCode: "",
    courseName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  //TODO: MAKE THIS FUNCTIONAL
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const onCreateCourse = async () => {
    try {
      setIsLoading(true);
      const { courseCode, courseName } = post;
      const postValues = { courseCode, courseName };
      const response = await axios.post("api/courses/createCourse", postValues)
      toast.success("Successfully created a Course!");
      //LUWIS
      router.push("/courses");
      //LUWIS
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      !post.courseCode ||
      !post.courseName
    ) {
      setAreFieldsValid(true);
    } else {
      setAreFieldsValid(false);
    }
  }, [post]);

  return (
    <CoursesCrudForm
      type="Create"
      post={post}
      setPost={setPost}
      loading={isLoading}
      handleSubmit={onCreateCourse}
    />
  );
};

export default CreateCourse;
