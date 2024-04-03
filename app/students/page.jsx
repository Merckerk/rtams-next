"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const router = useRouter();

  const fetchStudentData = async () => {
    const response = await axios.get("/api/students/fetchStudents");
    if (response) {
      setStudents(response.data);
    } else {
      console.log("failed to fetch students");
    }
  };

  const handleEdit = (student) => {
    router.push(`/update-student?studentid=${student._id}`);
  };

  const deleteStudent = async (studentId) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this student?"
    );

    if (hasConfirmed) {
      console.log("deleting user")
      try {
        const response = await fetch(`/api/students/${studentId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const filteredStudents = students.filter(
            (student) => student._id !== studentId
          );
          console.log("delet student response:", response);
          fetchStudentData();
        }
      } catch (error) {
        console.error("Error deleting the student", error);
      }
    }
  };

  const handleLoad = (studentId) => {
    router.push(`student-load?studentid=${studentId._id}`);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <div className="py-4 pt-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Students
        </h1>
        <button
          className="pb-7 black_btn"
          onClick={() => {
            router.push("/create-student");
          }}
        >
          Add Student
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
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Students;
