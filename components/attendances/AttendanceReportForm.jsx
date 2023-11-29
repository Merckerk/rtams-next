"use client";

import ReusableInput from "@components/reusableInput/ReusableInput";

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

  const validateDate = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      date: isValid ? "" : "Date is required",
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
          label="Date"
          type="date"
          id="dateTime"
          name="coursecode"
          placeholder="Enter Date"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, date: e.target.value });
            validateDate(e.target.value);
          }}
          value={post?.date}
          errorMessage={errMsg.date}
          required
        />

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
