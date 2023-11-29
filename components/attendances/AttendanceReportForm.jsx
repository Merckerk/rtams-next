"use client";

import ReusableInput from "@components/reusableInput/ReusableInput";
import axios from "axios";

import { useEffect, useState } from "react";

const AttendanceReportForm = ({
  type,
  post,
  setPost,
  loading,
  handleSubmit,
  handleDelete = () => {},
}) => {
  const [errMsg, setErrMsg] = useState({
    courseCode: "",
    nfcUID: "",
    date: "",
  });
  const [coursesAPI, setCoursesAPI] = useState([]);

  const fetchCoursesData = async () => {
    const response = await axios.get("/api/courses/fetchCourses");
    if (response) {
      setCoursesAPI(response.data);
    } else {
    }
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

  useEffect(() => {
    console.log("courses:", coursesAPI);
  }, [coursesAPI]);

  const validateCourseCode = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      courseCode: isValid ? "" : "Course Code is required",
    }));
    return isValid;
  };

  const validateUID = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      nfcUID: isValid ? "" : "The NFC UID is required",
    }));
    return isValid;
  };

  return (
    <div className="container mx-auto mt-5 mb-8">
      <form className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          {type} Attendance Report
        </h1>

        <ReusableInput
          label="NFC UID"
          type="text"
          id="nfcUID"
          name="nfcUID"
          placeholder="Enter NFC UID"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, nfcUID: e.target.value });
            validateUID(e.target.value);
          }}
          value={post?.nfcUID}
          errorMessage={errMsg.nfcUID}
          required
        />

        <div className="form_group">
          <label htmlFor="coursecode" className="form_label font-satoshi font-semibold text-base text-gray-700">
            Course Code
          </label>
          <select
            id="coursecode"
            name="coursecode"
            className="form_input"
            onChange={(e) => {
              setPost({ ...post, courseCode: e.target.value });
              validateCourseCode(e.target.value);
            }}
            value={post?.courseCode}
            required
          >
            {/* Default option */}
            <option value="" disabled>
              Select Course Code
            </option>

            {/* Map over coursesAPI to create options */}
            {coursesAPI.map((course) => (
              <option key={course._id} value={course._id}>
                {course.courseCode} - {course.courseName}
              </option>
            ))}
          </select>
          <span className="error_message">{errMsg.courseCode}</span>
        </div>

        <button className="black_btn" disabled={loading} onClick={handleSubmit}>
          {loading ? "Processing" : `${type} Attendance Report`}
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

export default AttendanceReportForm;
