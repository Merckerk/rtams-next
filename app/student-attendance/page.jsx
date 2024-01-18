"use client";
import React from "react";
import attendanceMock1 from "@mocks/mockAttendances1";
import studentMock from "@mocks/mockStudent";
import { useState } from "react";
import { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

const StudentAttendance = () => {
  const [attendances, setAttendances] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [attendanceMap, setAttendanceMap] = useState({});

  //GET all students enrolled in a subject.
  const getAttendancesAndStudents = async () => {
    //TODO: REPLACE WITH API INTEGRATION LATER
    setEnrolledStudents(studentMock);
    setAttendances(attendanceMock1);
  };

  const isPresent = (studentName, studentsOnDate) => {
    return studentsOnDate.includes(studentName);
  };  

  useEffect(() => {
    getAttendancesAndStudents();
  }, []);

  useEffect(() => {
    console.log("attendances:", attendances);
    console.log("enrolledStudents:", enrolledStudents);
  }, [attendances, enrolledStudents]);

  useEffect(() => {
    // Create a hashmap for attendance dates and students attended
    if (attendances && enrolledStudents) {
      const map = {};
      attendances.forEach((attendance) => {
        const date = attendance.date.split("T")[0]; // Extracting date part only
        if (!map[date]) {
          map[date] = [];
        }
        map[date].push(attendance.studentName);
      });
      //TODO: SORT BY DATE
      setAttendanceMap(map);
    }
  }, [attendances, enrolledStudents]);

  useEffect(() => {
    console.log("attendances:", attendances);
    console.log("enrolledStudents:", enrolledStudents);
    console.log("attendanceMap:", attendanceMap);
  }, [attendances, enrolledStudents, attendanceMap]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="admin users table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Student Name</StyledTableCell>
              {Object.keys(attendanceMap).map((date) => (
                <StyledTableCell key={date} align="center">
                  {date}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {enrolledStudents.map((student) => (
              <StyledTableRow key={student._id}>
                <StyledTableCell component="th" scope="row">
                  {student.name}
                </StyledTableCell>
                {/* Loop through each date in the attendanceMap */}
                {Object.keys(attendanceMap).map((date) => (
                  <StyledTableCell align="center" key={date}>
                    {
                      // isPresent(student.name, attendanceMap[date])
                    attendanceMap[date].includes(student.name)
                      ? "Present"
                      : "Absent"}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentAttendance;
