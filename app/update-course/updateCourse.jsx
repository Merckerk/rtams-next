"use client";

import CoursesCrudForm from "@components/courses/CoursesCrudForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateCourse = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseid");

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    courseCode: "",
    courseName: "",
  });

  const getCourseDetails = async () => {
    try {
      const response = await fetch(`/api/courses/${courseId}`);

      if (response.ok) {
        const data = await response.json();

        setPost({
          courseCode: data.courseCode || "",
          courseName: data.courseName || "",
        });
      } else if (response.status === 404) {
        console.error("Course not found");
      } else {
        console.error("Error fetching course details");
      }
    } catch (error) {
      console.error("Internal Server Error", error);
    }
  };

  useEffect(() => {
    if (courseId) {
      getCourseDetails();
    }
  }, [courseId]);

  const onUpdateCourse = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!courseId) {
      alert("Course ID not found.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`/api/courses/${courseId}`, {
        method: "PATCH",
        body: JSON.stringify({
          courseCode: post.courseCode,
          courseName: post.courseName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        router.push("/courses");
      } else {
        console.error("Error updating course details", response.statusText);
      }
    } catch (error) {
      console.error("Error updating course details", error);
    } finally {
      setLoading(false);
    }
  };

  const onDeleteCourse = async () => {
    const hasConfirmed = confirm("Are you sure you want to delete this course?");
  
    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/courses/${courseId}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          router.push("/courses");
        } else {
          console.error("Error deleting the course", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting the course", error);
      }
    }
  };

  return (
    <CoursesCrudForm
      type="Edit"
      post={post}
      setPost={setPost}
      loading={loading}
      handleSubmit={onUpdateCourse}
      handleDelete={onDeleteCourse}
    />
  );
};

export default UpdateCourse;
