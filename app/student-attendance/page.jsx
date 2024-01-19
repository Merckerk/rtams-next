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
import axios from "axios";

import Section from "@enums/section";
import Term from "@enums/term";

const StudentAttendance = () => {
  const [attendances, setAttendances] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [attendanceMap, setAttendanceMap] = useState({});
  const [coursesAPI, setCoursesAPI] = useState([]);
  const [payload, setPayload] = useState({
    courseCode: "",
    section: "",
    term: "",
  });
  const [errMsg, setErrMsg] = useState({
    courseCode: "",
    section: "",
    term: "",
  });

  //GET all students enrolled in a subject.
  const getAttendancesAndStudents = async () => {
    //TODO: REPLACE WITH API INTEGRATION LATER
    setEnrolledStudents(studentMock);
    setAttendances(attendanceMock1);
  };

  const getCourses = async () => {
    try {
      const coursesResponse = await axios.get("api/courses/fetchCourses");
      const coursesData = coursesResponse.data;
      console.log("courses data:", coursesData);
      setCoursesAPI(coursesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const isPresent = (studentName, studentsOnDate) => {
    return studentsOnDate.includes(studentName);
  };

  useEffect(() => {
    console.log("coursesAPI:", coursesAPI);
  }, [coursesAPI]);

  useEffect(() => {
    getCourses();
  }, []);

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
      <div className="container mx-auto mt-5 mb-8">
        <div
          id="searchPrompt"
          className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism"
        >
          <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
            Tabulated Attendances
          </h1>
          <h2 className="text-l font-satoshi text-gray-900">
            Enter course, section and term to get tabulated attendance data.
          </h2>

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
                setPayload({ ...payload, courseCode: e.target.value });
              }}
              value={payload?.courseCode}
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
              setPayload({ ...payload, section: e.target.value });
            }}
            value={payload?.section}
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
              setPayload({ ...payload, term: e.target.value });
            }}
            value={payload?.term}
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
          <span className="error_message">{errMsg.term}</span>
        </div>

        </div>
      </div>
      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="admin users table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Student Name</StyledTableCell>
              {Object.keys(attendanceMap).map((date) => (
                <StyledTableCell key={date} align="left">
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
                      attendanceMap[date].includes(student.name) ? (
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                          <span>Present</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                          <span>Absent</span>
                        </div>
                      )
                    }
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
