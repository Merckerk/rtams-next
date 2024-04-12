"use client";

import ReusableInput from "@components/reusableInput/ReusableInput";
import axios from "axios";
import Section from "@enums/section";
import Term from "@enums/term";

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
  const [nfcAPI, setNFC_API] = useState([]);

  const fetchCoursesData = async () => {
    const response = await axios.get("/api/courses/fetchCourses");
    if (response) {
      setCoursesAPI(response.data);
    } else {
    }
  };

  const fetchNFC = async () => {
    const response = await axios.get("/api/students/fetchNFC");
    if (response) {
      setNFC_API(response.data);
    } else {
    }
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

  useEffect(() => {
    fetchNFC();
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

        {/* <ReusableInput
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
        /> */}

        {/* NFC UID Selector */}
        <label
          htmlFor="nfcUID"
          className="form_label font-satoshi font-semibold text-base text-gray-700"
        >
          NFC UID
        </label>

        <select
          id="nfcUID"
          name="nfcUID"
          onChange={(e) => {
            setPost({ ...post, nfcUID: e.target.value });
            validateUID(e.target.value);
          }}
          value={post?.nfcUID}
          required
        >
          {/* Default Option */}
          <option value="disabled">Select UID</option>

          {/* Map of nfcUID for options */}
          {nfcAPI.map((nfcAPI) => (
            <option key={nfcAPI._id} value={nfcAPI.nfcUID}>
              {nfcAPI.nfcUID}
            </option>
          ))}
        </select>
        <span className="error_message">{errMsg.nfcUID}</span>

        {/* Course Code Selector */}
        <div className="form_group">
          <label
            htmlFor="coursecode"
            className="form_label font-satoshi font-semibold text-base text-gray-700"
          >
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

        <div className="form_group">
          <label
            htmlFor="section"
            className="form_label font-satoshi font-semibold text-base text-gray-700"
          >
            Section
          </label>
          <select
            id="section"
            name="section"
            className="form_input"
            onChange={(e) => {
              setPost({ ...post, section: e.target.value });
              validateCourseCode(e.target.value);
            }}
            value={post?.section}
            required
          >
            {/* Default option */}
            <option value="" disabled>
              Select Section
            </option>

            {/* Map over coursesAPI to create options */}
            {Object.entries(Section).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
          <span className="error_message">{errMsg.section}</span>
        </div>

        {/* Term Selector */}
        <div className="form_group">
          <label
            htmlFor="coursecode"
            className="form_label font-satoshi font-semibold text-base text-gray-700"
          >
            Term
          </label>
          <select
            id="term"
            name="term"
            className="form_input"
            onChange={(e) => {
              setPost({ ...post, term: e.target.value });
              validateCourseCode(e.target.value);
            }}
            value={post?.term}
            required
          >
            {/* Default option */}
            <option value="" disabled>
              Select Term
            </option>

            {/* Map over coursesAPI to create options */}
            {Object.entries(Term).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
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
