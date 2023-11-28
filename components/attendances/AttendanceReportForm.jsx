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
    studentNumber: "",
    courseCode: "",
    name: "",
    section: "",
    nfcUID: "",
  });

  const validateCourseCode = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      courseCode: isValid ? "" : "Course Code is required",
    }));
    return isValid;
  };

  const validateStudentNumber = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      studentNumber: isValid ? "" : "Student Number is required",
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

  const validateName = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      name: isValid ? "" : "Name is required",
    }));
    return isValid;
  };

  const validateSection = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      section: isValid ? "" : "Section is required",
    }));
    return isValid;
  };

  const validateDateTime = (value) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      dateTime: isValid ? "" : "Date is required",
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
          label="Student Number"
          type="text"
          id="studentNumber"
          name="studentNumber"
          placeholder="Enter Student Number"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, studentNumber: e.target.value });
            validateStudentNumber(e.target.value);
          }}
          value={post?.studentNumber}
          errorMessage={errMsg.studentNumber}
          required
        />

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
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, name: e.target.value });
            validateName(e.target.value);
          }}
          value={post?.name}
          errorMessage={errMsg.name}
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
            setPost({ ...post, courseCode: e.target.value });
            validateCourseCode(e.target.value);
          }}
          value={post?.courseCode}
          errorMessage={errMsg.courseCode}
          required
        />

        <ReusableInput
          label="Section"
          type="text"
          id="section"
          name="section"
          placeholder="Enter Section"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, section: e.target.value });
            validateSection(e.target.value);
          }}
          value={post?.section}
          errorMessage={errMsg.section}
          required
        />

        <ReusableInput
          label="Term"
          type="text"
          id="term"
          name="term"
          placeholder="Enter School Year/Term"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, term: e.target.value });
            validateCourseName(e.target.value);
          }}
          value={post?.term}
          errorMessage={errMsg.term}
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

export default AttendanceReportForm;
