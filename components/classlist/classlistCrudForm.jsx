"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ReusableInput from "@components/reusableInput/ReusableInput";
import ReusableDropdown from "@components/reusableDropdown/ReusableDropdown";
import { useEffect, useState, useMemo } from "react";

import Section from "@enums/section";

const ClasslistCrudForm = ({
  type,
  post,
  setPost,
  loading,
  handleSubmit,
  handleDelete = () => {},
  faculties,
  students,
  editedStudentsList,
  setEditedStudentsList,
}) => {
  const [errMsg, setErrMsg] = useState({
    user: "",
    sectionCode: "",
    subjectCode: "",
    subjectDescription: "",
    term: "",
    schedule: "",
    students: "",
  });

  const handleFormSubmit = (e) => {};

  const validateFaculty = () => {};
  const validateSectionCode = () => {};
  const validateSubjectCode = () => {};
  const validateSubjectDescription = () => {};
  const validateTerm = () => {};
  const validateSchedule = () => {};

  const handleFacultyChange = (value) => setPost({ ...post, user: value });

  const isStudentInClassList = (studentId) =>
    post?.students.includes(studentId);

  const isStudentInEditedList = (studentId) =>
    editedStudentsList.includes(studentId);

  const handleCheckboxChange = (studentId) => {
    const isStudentInPayload = editedStudentsList.includes(studentId);

    if (isStudentInPayload) {
      setEditedStudentsList((prevList) =>
        prevList.filter((id) => id !== studentId)
      );
    } else {
      setEditedStudentsList((prevList) => [...prevList, studentId]);
    }
  };

  const facultyOptions = useMemo(() => {
    return faculties.map((faculty) => ({
      value: faculty._id,
      label: faculty.name,
    }));
  }, [faculties]);

  const sectionOptions = useMemo(() => {
    return Object.entries(Section).map(([key, value]) => ({
      value: key,
      label: value,
    }));
  }, []);

  const memoizedStudents = useMemo(() => {
    return students.map((student) => (
      <StyledTableRow key={student._id}>
        <StyledTableCell component="th" scope="row">
          {student.studentNumber}
        </StyledTableCell>
        <StyledTableCell align="left">{student.name}</StyledTableCell>
        <StyledTableCell align="left">{student.section}</StyledTableCell>
        <StyledTableCell align="center">
          {isStudentInClassList(student._id) ? (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
              <span>In List</span>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
              <span>Not In List</span>
            </div>
          )}
        </StyledTableCell>
        <StyledTableCell align="center">
          <FormControlLabel
            control={
              <Checkbox
                checked={isStudentInEditedList(student._id)}
                onChange={() => handleCheckboxChange(student._id)}
              />
            }
          />
        </StyledTableCell>
      </StyledTableRow>
    ));
  }, [students]);

  return (
    <div className="container mx-auto mt-5 mb-8">
      <form
        className="max-w-2xl mb-8 mx-auto flex flex-col gap-7 glassmorphism"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          {type} Class list
        </h1>

        <ReusableDropdown
          label="Faculty"
          id="faculty"
          name="faculty"
          options={facultyOptions}
          value={post?.user}
          onChange={(e) => {
            setPost({ ...post, user: e.target.value });
          }}
          placeholder="Select Faculty"
        />

        <ReusableDropdown
          label="Section Code"
          id="sectionCode"
          name="sectionCode"
          options={sectionOptions}
          value={post?.sectionCode}
          onChange={(e) => {
            setPost({ ...post, sectionCode: e.target.value });
          }}
          placeholder="Select Section"
        />

        <ReusableInput
          label="Subject Code"
          type="text"
          id="subjectCode"
          name="subjectCode"
          placeholder="Enter Subject Code"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, subjectCode: e.target.value });
            validateSubjectCode(e.target.value);
          }}
          value={post?.subjectCode}
          errorMessage={errMsg.subjectCode}
          required
        />

        <ReusableInput
          label="Subject Description"
          type="text"
          id="subjectDescription"
          name="subjectDescription"
          placeholder="Enter Subject Description"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, subjectDescription: e.target.value });
            validateSubjectDescription(e.target.value);
          }}
          value={post?.username}
          errorMessage={errMsg.username}
          required
        />

        <ReusableInput
          label="Term"
          type="text"
          id="term"
          name="term"
          placeholder="Enter Term"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, term: e.target.value });
            validateTerm(e.target.value);
          }}
          value={post?.term}
          errorMessage={errMsg.term}
        />

        <ReusableInput
          label="Schedule"
          type="text"
          id="schedule"
          name="schedule"
          placeholder="Schedule"
          className="form_input"
          onChange={(e) => {
            setPost({ ...post, schedule: e.target.value });
            validateSchedule(e.target.value);
          }}
          value={post?.schedule}
          errorMessage={errMsg.schedule}
        />

        {type == "Edit" ? (
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Reson for Edit:
            </span>
            <textarea
              id="audit"
              name="audit"
              placeholder="Your reason for editing values here..."
              className="form_input"
              onChange={(e) => {
                setPost({ ...post, audit: e.target.value });
                validateAudit(e.target.value);
              }}
              value={post?.audit}
            />
            {errMsg.audit ? (
              <p className="error_message">{errMsg.audit}</p>
            ) : null}
          </label>
        ) : null}

        <button className="black_btn" disabled={loading}>
          {loading ? "Processing" : `${type} Class list`}
        </button>
        {type == "Edit" ? (
          <button className="red_btn" disabled={loading} onClick={handleDelete}>
            {loading ? "Processing" : "Delete Class list"}
          </button>
        ) : null}
      </form>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Class list
        </h1>
        <button
          className="pb-7 black_btn"
          onClick={() => {
            router.push("/create-report");
          }}
        >
          Add Class list
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="admin users table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Student Number</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Section</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memoizedStudents}
            {/* {students.map((student) => (
              <StyledTableRow key={student._id}>
                <StyledTableCell component="th" scope="row">
                  {student.studentNumber}
                </StyledTableCell>
                <StyledTableCell align="left">{student.name}</StyledTableCell>
                <StyledTableCell align="left">
                  {student.section}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {isStudentInClassList(student._id) ? (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                      <span>In List</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                      <span>Not In List</span>
                    </div>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isStudentInEditedList(student._id)}
                        onChange={() => handleCheckboxChange(student._id)}
                      />
                    }
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClasslistCrudForm;
