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
import { useEffect, useState, useMemo, Suspense } from "react";

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
    sectionCode: "",
    subjectCode: "",
    subjectDescription: "",
    term: "",
    audit: "",
  });

  const checkForEmptyValue = (value, param) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      [param]: isValid ? "" : "This field cannot be empty",
    }));
    return isValid;
  };

  const validateAudit = (value, param) => {
    if (type === "Edit") {
      checkForEmptyValue(value, param);
    }
  };

  const areAllFieldsEmpty = () => {
    if (!post.sectionCode)
      setErrMsg((prev) => ({
        ...prev,
        sectionCode: "This field cannot be empty",
      }));
    if (!post.subjectCode)
      setErrMsg((prev) => ({
        ...prev,
        subjectCode: "This field cannot be empty",
      }));
    if (!post.subjectDescription)
      setErrMsg((prev) => ({
        ...prev,
        subjectDescription: "This field cannot be empty",
      }));
    if (!post.term)
      setErrMsg((prev) => ({
        ...prev,
        term: "This field cannot be empty",
      }));
    if (!post.audit)
      setErrMsg((prev) => ({
        ...prev,
        audit: "This field cannot be empty",
      }));
  };

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
  }, [students, editedStudentsList]);

  const handleEdit = (e) => {
    areAllFieldsEmpty();
    handleSubmit(e);
  };

  const onDelete = () => {
    areAllFieldsEmpty();
    handleDelete();
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto mt-5 mb-8">
        <form className="max-w-2xl mb-8 mx-auto flex flex-col gap-7 glassmorphism">
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
              checkForEmptyValue(e.target.value, "subjectCode");
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
              checkForEmptyValue(e.target.value, "subjectDescription");
            }}
            value={post?.subjectDescription}
            errorMessage={errMsg.subjectDescription}
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
              checkForEmptyValue(e.target.value, "term");
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
            }}
            value={post?.schedule}
            errorMessage={errMsg.schedule}
          />

          {type == "Edit" ? (
            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Reason to Edit or Delete:
              </span>
              <textarea
                id="audit"
                name="audit"
                placeholder="Your reason for editing/deleting here..."
                className="form_input"
                onChange={(e) => {
                  setPost({ ...post, audit: e.target.value });
                  validateAudit(e.target.value, "audit");
                }}
                value={post?.audit}
              />
              {errMsg.audit ? (
                <p className="error_message">{errMsg.audit}</p>
              ) : null}
            </label>
          ) : null}
        </form>

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
            Class list
          </h1>

          <div className="flex">
            <button className="pb-7 mx-2 black_btn" onClick={handleEdit}>
              {loading ? "Processing" : `${type} Class List`}
            </button>
            {type == "Edit" ? (
              <button
                className="red_btn ml-2"
                disabled={loading}
                onClick={onDelete}
              >
                {loading ? "Processing" : "Delete Classlist"}
              </button>
            ) : null}
          </div>
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
            <TableBody>{memoizedStudents}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </Suspense>
  );
};

export default ClasslistCrudForm;
