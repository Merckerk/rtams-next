"use client";

import ReusableInput from "@components/reusableInput/ReusableInput";
import ReusableDropdown from "@components/reusableDropdown/ReusableDropdown";
import axios from "axios";
import Section from "@enums/section";
import Term from "@enums/term";

import { useEffect, useMemo, useState } from "react";

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
    const response = await fetch("/api/classlist/getAllClasslists", {
      cache: "no-store",
    });
    const data = await response.json();

    if (data) {
      const classlistData = data.data;
      setCoursesAPI(classlistData);
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

  const classlistsOptions = useMemo(() => {
    return coursesAPI.map((course) => ({
      value: course._id,
      label: `${course.sectionCode.section} - ${course.subjectCode} - ${course.term.term}`,
    }));
  }, [coursesAPI]);

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
        <ReusableDropdown
          label="Classlist"
          id="classlist"
          name="classlist"
          options={classlistsOptions}
          value={post?.course}
          onChange={(e) => {
            setPost({ ...post, course: e.target.value });
          }}
          placeholder="Select Classlist"
        />

        {/* <div className="form_group">
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
            <option value="" disabled>
              Select Course Code
            </option>

            {coursesAPI.map((course) => (
              <option key={course._id} value={course._id}>
                {course.courseCode} - {course.courseName}
              </option>
            ))}
          </select>
          <span className="error_message">{errMsg.courseCode}</span>
        </div> */}

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
