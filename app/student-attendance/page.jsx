"use client";
import React, { useMemo } from "react";
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
import ReusableDropdown from "@components/reusableDropdown/ReusableDropdown";

import Section from "@enums/section";
import Term from "@enums/term";

const StudentAttendance = () => {
  const [attendances, setAttendances] = useState([]);
  const [attendancesAPI, setAttendancesAPI] = useState([]);
  const [studentsAPI, setStudentsAPI] = useState([]);
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
  const [loading, setLoading] = useState(false);

  const fetchAttendanceReports = async () => {
    try {
      const attendanceResponse = await fetch(
        `api/attendance/fetchAttendanceReportsV2/${payload?.courseCode}`,
        { cache: "no-store" }
      );

      const response = await attendanceResponse.json();

      if(response){
        const attendanceData = response.data;
        setAttendances(attendanceData);
      }else {
        console.error("No response");
      }
    } catch (error) {
      console.error("Error fetching attendances", error)
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      const [attendanceResponse, studentsResponse] = await Promise.all([
        fetch(
          `/api/attendance/fetchCourseReports/${payload.courseCode}/${payload.section}/${payload.term}`
        ),
        fetch(
          `/api/students/getStudentByCS/${payload.courseCode}/${payload.section}`
        ),
      ]);

      if (
        attendanceResponse.status === 200 &&
        studentsResponse.status === 200
      ) {
        const attendanceData = await attendanceResponse.json();
        const enrolledStudentsData = await studentsResponse.json();
        console.log("attendance Response:", attendanceData);
        console.log("students Response:", enrolledStudentsData);
        setAttendancesAPI(attendanceData);
        setStudentsAPI(enrolledStudentsData);
      } else {
        console.log("Error fetching both data");
      }
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const getCourses = async () => {
    try {
      const coursesResponse = await fetch("api/classlist/getAllClasslists", {
        cache: "no-store",
      });
      const response = await coursesResponse.json();

      if (response) {
        const coursesData = response.data;
        setCoursesAPI(coursesData);
      }
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
    console.log("attendances:", attendances);
    console.log("enrolledStudents:", enrolledStudents);
  }, [attendances, enrolledStudents]);

  useEffect(() => {
    // Create a hashmap for attendance dates and students attended
    if (attendancesAPI && studentsAPI) {
      const map = {};
      attendancesAPI.forEach((attendance) => {
        const date = attendance.date.split("T")[0]; // Extracting date part only
        if (!map[date]) {
          map[date] = [];
        }
        map[date].push(attendance.studentName);
      });
      //TODO: SORT BY DATE
      setAttendanceMap(map);
    }
  }, [attendancesAPI, studentsAPI]);

  useEffect(() => {
    console.log("attendances:", attendances);
    console.log("enrolledStudents:", enrolledStudents);
    console.log("attendanceMap:", attendanceMap);
  }, [attendances, enrolledStudents, attendanceMap]);

  useEffect(() => {
    console.log("payload:", payload);
  }, [payload]);

  useEffect(() => {
    console.log("studentsAPI:", studentsAPI);
    console.log("attendancesAPI:", attendancesAPI);
  }, [studentsAPI, attendancesAPI]);

  const classlistsOptions = useMemo(() => {
    return coursesAPI.map((course) => ({
      value: course._id,
      label: `${course.sectionCode} - ${course.subjectCode} - ${course.term}`,
    }));
  }, [coursesAPI]);

  const sectionsOptions = useMemo(() => {
    return Object.entries(Section).map(([key, value]) => ({
      value: key,
      label: value,
    }));
  });

  const termsOptions = useMemo(() => {
    return Object.entries(Term).map(([key, value]) => ({
      value: key,
      label: value,
    }));
  });

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

          <ReusableDropdown
            label="Section"
            id="section"
            name="section"
            options={sectionsOptions}
            value={payload?.section}
            onChange={(e) => {
              setPayload({ ...payload, section: e.target.value });
            }}
            placeholder="Select Section"
          />

          <ReusableDropdown
            label="Term"
            id="term"
            name="term"
            options={termsOptions}
            value={payload?.term}
            onChange={(e) => {
              setPayload({ ...payload, term: e.target.value });
            }}
            placeholder="Select Term"
          />

          <ReusableDropdown
            label="Classlist"
            id="classlist"
            name="classlist"
            options={classlistsOptions}
            value={payload?.courseCode}
            onChange={(e) => {
              setPayload({ ...payload, courseCode: e.target.value });
            }}
            placeholder="Select Classlist"
          />

          <button
            className="black_btn"
            disabled={loading}
            onClick={() => {
              fetchAttendanceReports();
            }}
          >
            {loading ? "Processing" : `Get Attendances`}
          </button>
        </div>
      </div>
{/*       
      {Object.keys(attendanceMap).length > 0 && (
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
              {studentsAPI.map((student) => (
                <StyledTableRow key={student._id}>
                  <StyledTableCell component="th" scope="row">
                    {student.name}
                  </StyledTableCell>
                  {Object.keys(attendanceMap).map((date) => (
                    <StyledTableCell align="center" key={date}>
                      {
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
      )} */}
    </>
  );
};

export default StudentAttendance;
