"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import ReusableInput from "@components/reusableInput/ReusableInput";
import ReusableDropdown from "@components/reusableDropdown/ReusableDropdown";
import { useEffect, useState } from "react";

const ClasslistCrudForm = ({
  type,
  post,
  setPost,
  loading,
  handleSubmit,
  handleDelete = () => {},
  faculties,
  students,
}) => {
  const [errMsg, setErrMsg] = useState({
    user: "",
    subjectCode: "",
    subjectDescription: "",
    term: "",
    schedule: "",
    students: "",
  });

  const fetchFacultyData = async () => {
    const response = await axios.get();
  };

  const handleFormSubmit = (e) => {};

  const validateFaculty = () => {};
  const validateSubjectCode = () => {};
  const validateSubjectDescription = () => {};
  const validateTerm = () => {};
  const validateSchedule = () => {};

  const handleFacultyChange = (value) => setPost({ ...post, user: value });

  return (
    <div className="container mx-auto mt-5 mb-8">
      <form
        className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          {type} Class list
        </h1>

        <ReusableDropdown
          label="Faculty"
          id="faculty"
          name="faculty"
          options={faculties.map((faculty) => ({
            value: faculty._id,
            label: faculty.name,
          }))}
          value={post?.user}
          onChange={(e) => {
            setPost({ ...post, user: e.target.value });
          }}
          placeholder="Select Faculty"
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
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student._id}>
                <StyledTableCell component="th" scope="row">
                  {student.studentNumber}
                </StyledTableCell>
                <StyledTableCell align="left">{student.name}</StyledTableCell>
                <StyledTableCell align="left">
                  {student.section}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => deleteStudent(student._id)}
                  >
                    Delete
                  </button>
                  <button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleLoad(student)}
                  >
                    Load
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClasslistCrudForm;
