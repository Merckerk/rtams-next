"use client";

import ReusableInput from "@components/reusableInput/ReusableInput";

import { useEffect, useState } from "react";

const CoursesCrudForm = ({
  type,
  post,
  setPost,
  loading,
  handleSubmit,
  handleDelete = () => {},
}) => {
  const [errMsg, setErrMsg] = useState({
    courseCode: "",
    courseName: "",
  });

  const validateCourseCode = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      courseCode: isValid ? "" : "Course Code is required",
    }));
    return isValid;
  };

  const validateCourseName = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      courseName: isValid ? "" : "Course Name is required",
    }));
    return isValid;
  };

  return (
    <div className="container mx-auto mt-5 mb-8">
      <form className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          {type} Course
        </h1>

        <ReusableInput
          label="Course Code"
          type="text"
          id="coursecode"
          name="coursecode"
          placeholder="Enter Course Code"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, courseCode: e.target.value });
            validateCourseCode(e.target.value);
          }}
          value={post?.courseCode}
          errorMessage={errMsg.courseCode}
          required
        />
        
        <ReusableInput
          label="Course Name"
          type="text"
          id="coursename"
          name="coursename"
          placeholder="Enter Course Name"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, courseName: e.target.value });
            validateCourseName(e.target.value);
          }}
          value={post?.courseName}
          errorMessage={errMsg.courseName}
          required
        />
        
        <button className="black_btn" disabled={loading} onClick={handleSubmit}>
          {loading ? "Processing" : `${type} Course`}
        </button>
        {type == "Edit" ? (
          <button className="red_btn" disabled={loading} onClick={handleDelete}>
            {loading ? "Processing" : "Delete Course"}
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default CoursesCrudForm;
