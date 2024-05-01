"use client";
import React, { useMemo } from "react";
import attendanceMock1 from "@mocks/mockAttendances1";
import studentMock from "@mocks/mockStudent";
import { useState } from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { CSVDownload, CSVLink } from "react-csv";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";
import axios from "axios";
import ReusableDropdown from "@components/reusableDropdown/ReusableDropdown";
import LineChart from "@components/charts/LineChart";

import Section from "@enums/section";
import Term from "@enums/term";

const StudentAttendance = () => {
  const { data: session } = useSession();

  const [attendances, setAttendances] = useState([]);
  const [attendancesAPI, setAttendancesAPI] = useState([]);
  const [studentsAPI, setStudentsAPI] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [attendanceMap, setAttendanceMap] = useState({});
  const [hoursRenderedMap, setHoursRenderedMap] = useState({});
  const [termsAPI, setTermsAPI] = useState([]);
  const [sectionsAPI, setSectionsAPI] = useState([]);
  const [classlistInfo, setClasslistInfo] = useState({});

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

      console.log("response:", response);

      if (response) {
        const attendanceData = response.attendanceData;
        const enrolledStudents = response.enrolledStudents;
        const classlistInfo = response.classlistInfo;

        console.log("new att data", attendanceData);
        setAttendanceMap(attendanceData);
        setStudentsAPI(enrolledStudents);
        setHoursRenderedMap(response.hoursRenderedDataMap);
        setClasslistInfo(classlistInfo);
      } else {
        console.error("No response");
      }
    } catch (error) {
      console.error("Error fetching attendances", error);
    }
  };

  const fetchTermsAndSections = async () => {
    try {
      const [terms, sections] = await Promise.all([
        fetch("/api/terms/getAllTerms", { cache: "no-store" }),
        fetch("/api/sections/getAllSections", { cache: "no-store" }),
      ]);

      const termsResponse = await terms.json();
      const sectionsResponse = await sections.json();

      if (termsResponse) {
        const termsData = termsResponse.data;
        setTermsAPI(termsData);
      }
      if (sectionsResponse) {
        const sectionsData = sectionsResponse.data;
        setSectionsAPI(sectionsData);
      }
    } catch (error) {}
  };

  const sectionsOptions = useMemo(() => {
    return sectionsAPI.map((section) => ({
      value: section._id,
      label: section.section,
    }));
  }, [sectionsAPI]);

  const termsOptions = useMemo(() => {
    return termsAPI.map((term) => ({
      value: term._id,
      label: term.term,
    }));
  }, [termsAPI]);

  const getCourses = async () => {
    try {
      let coursesResponse;

      if (session?.user) {
        if (session?.user?.role === "Admin") {
          coursesResponse = await fetch("api/classlist/getAllClasslists", {
            cache: "no-store",
          });
        } else {
          coursesResponse = await fetch(
            `api/classlist/getClasslistsByFaculty/${session?.user?.id}`,
            {
              cache: "no-store",
            }
          );
        }
      }

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
    getCourses();
  }, [session?.user?.id]);

  useEffect(() => {
    fetchTermsAndSections();
  }, []);

  const classlistsOptions = useMemo(() => {
    return coursesAPI.map((course) => ({
      value: course?._id,
      label: `${course?.sectionCode?.section} - ${course?.subjectCode} - ${course?.term?.term}`,
    }));
  }, [coursesAPI]);

  const transformDataToArray = (
    attendanceData,
    enrolledStudents,
    hoursRenderedDataMap
  ) => {
    const dates = Object.keys(attendanceData);

    const headerRow = ["Student Name", "Attendance percentage", ...dates];

    const dataRows = enrolledStudents.map((student) => {
      const rowData = [
        student.name,
        hoursRenderedDataMap[student._id]?.attendancePercentage || "0",
      ];

      dates.forEach((date) => {
        rowData.push(
          attendanceData[date]["students"]?.includes(student._id)
            ? "Present"
            : "Absent"
        );
      });

      return rowData;
    });
    const result = [headerRow, ...dataRows];

    return result;
  };

  useEffect(() => {
    console.log("attendance map:", attendanceMap);
    console.log("studentsAPI:", studentsAPI);
    console.log("hoursRenderedMap:", hoursRenderedMap);
  }, [attendanceMap, studentsAPI, hoursRenderedMap]);

  useEffect(() => {
    console.log("classlist info", classlistInfo);
  }, [classlistInfo]);

  return (
    <>
      <div className="container mx-auto mt-5 mb-8">
        <div
          id="searchPrompt"
          className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism"
        >
          <div className="flex justify-between items-center my-5">
            <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
              Tabulated Attendances
            </h1>
            {Object.keys(attendanceMap).length > 0 && (
              <CSVLink
                data={transformDataToArray(
                  attendanceMap,
                  studentsAPI,
                  hoursRenderedMap
                )}
                filename={"attendance-report.csv"}
                className="black_btn "
                target="_blank"
              >
                Download Attendance Data
              </CSVLink>
            )}
          </div>

          {Object.keys(attendanceMap).length > 0 && (
            <>
              <div>
                <TableContainer component={Paper}>
                  <Table
                    className="min-w-[700px] md:min-w-screen-lg"
                    aria-label="admin users table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Student Name</StyledTableCell>
                        <StyledTableCell>Attendance Percentage</StyledTableCell>
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

                          <StyledTableCell component="th" scope="row">
                            {hoursRenderedMap[`${student._id}`]
                              ?.minimumAttendance ? (
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                                {
                                  hoursRenderedMap[`${student._id}`]
                                    ?.attendancePercentage
                                }
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                                {
                                  hoursRenderedMap[`${student._id}`]
                                    ?.attendancePercentage
                                }
                              </div>
                            )}
                          </StyledTableCell>
                          {Object.keys(attendanceMap).map((date) => (
                            <StyledTableCell align="center" key={date}>
                              {attendanceMap[date]["students"].includes(
                                student._id
                              ) ? (
                                <div className="flex items-center">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                                  <span>Present</span>
                                </div>
                              ) : (
                                <div className="flex items-center">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                                  <span>Absent</span>
                                </div>
                              )}
                            </StyledTableCell>
                          ))}
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <LineChart
                  chartInfo={`${classlistInfo.subjectDescription} - ${classlistInfo.sectionCode.section}`}
                  labels={Object.keys(attendanceMap)}
                  data={Object.values(attendanceMap).map(
                    (entry) => entry.aveHours
                  )}
                />
              </div>
            </>
          )}

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
    </>
  );
};

export default StudentAttendance;
