"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import ReusableInput from "@components/reusableInput/ReusableInput";
import attendanceMock from "@mocks/mockAttendances";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import Section from "@enums/section";
import Course from "@enums/course";

const AttendanceMetrics = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [attendanceMockData, setAttendanceMockData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // const sections = [
  //   { value: "section1", label: "Section 1" },
  //   { value: "section2", label: "Section 2" },
  // ];

  // const courses = [
  //   { value: "course1", label: "Course 1" },
  //   { value: "course2", label: "Course 2" },
  // ];

  const intializeMockData = async () => {
    await setAttendanceMockData(attendanceMock);
    console.log("done initializing");
  };

  const sections = Object.entries(Section).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const courses = Object.entries(Course).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  // useEffect(() => {
  //   console.log(
  //     Object.entries(Section).map(([key, value]) => ({
  //       value: key,
  //       label: value,
  //     }))
  //   );
  // }, []);

  useEffect(() => {
    console.log("selectied date:", selectedDate);
    console.log("selectied section:", selectedSection);
    console.log("selectied course:", selectedCourse);
  }, [selectedCourse, selectedSection, selectedDate]);

  useEffect(() => {
    console.log("done initializing attendance mock", attendanceMockData);
  }, [attendanceMockData]);

  useEffect(() => {
    intializeMockData();
  }, []);

  return (
    <div className="container mx-auto mt-5 mb-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-7 glassmorphism p-6">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Attendance Metrics
        </h1>

        <div className="flex gap-4 mb-4 items-center">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2 w-32">
            Select Date:
          </label> */}

          <ReusableInput
            label="date"
            type="date"
            id="date"
            name="date"
            placeholder="Enter date..."
            className="form_input"
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate}
          />

          {/* <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          /> */}
        </div>

        {/* <div className="grid grid-cols-2 gap-4"> */}
        {/* <div className="flex gap-4 mb-4 items-center"> */}
        {/* <label className="block text-gray-700 text-sm font-bold mb-2 w-60">
              Select Section:
            </label> */}
        <ReusableInput
          label="section"
          type="text"
          id="section"
          name="section"
          placeholder="Enter section..."
          className="form_input"
          onChange={(e) => setSelectedSection(e.target.value)}
          value={selectedSection}
        />
        {/* <Select
              options={sections}
              value={selectedSection}
              onChange={(option) => setSelectedSection(option)}
              isSearchable
              className="w-80"
            /> */}
        {/* </div> */}
        {/* </div> */}

        {/* <div className="grid grid-cols-2 gap-4"> */}
        {/* <div className="flex gap-4 mb-4 items-center"> */}
        {/* <label className="block text-gray-700 text-sm font-bold mb-2 w-60">
              Select Course:
            </label> */}
        <ReusableInput
          label="course"
          type="text"
          id="course"
          name="course"
          placeholder="Enter course..."
          className="form_input"
          onChange={(e) => setSelectedCourse(e.target.value)}
          value={selectedCourse}
        />
        {/* <Select
              options={courses}
              value={selectedCourse}
              onChange={(option) => setSelectedCourse(option)}
              isSearchable
              className="w-80"
            /> */}
        {/* </div> */}
        {/* </div> */}

        <button
          className="pb-7 black_btn"
          onClick={() => {}}
        >
          Get Metrics
        </button>

        <TableContainer component={Paper}>
          <Table
            className="min-w-[700px] md:min-w-screen-lg"
            aria-label="Attendance Reports table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>General Attendance Report</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                {/* <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell align="left">Time in/Time out</StyledTableCell> */}
                {/* <StyledTableCell align="center">Time out</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>
                  Total Attendances:
                </StyledTableCell>
                <StyledTableCell>
                  From API
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>
                  Attendance Rate:
                </StyledTableCell>
                <StyledTableCell>
                  Total att./students enrolled
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>
                  Average Attendance Time
                </StyledTableCell>
                <StyledTableCell>
                  Ave. att. time from api
                </StyledTableCell>
              </StyledTableRow>
              {/* {post.map((report) => (
              <StyledTableRow key={report._id}>
                <StyledTableCell component="th" scope="row">
                  {report.nfcUID}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {report.studentName}
                </StyledTableCell>
                <StyledTableCell align="left">{report.date}</StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => handleEdit(report)}
                  >
                    Edit
                  </button>
                  <button
                    variant="outlined"
                    color="primary"
                    onClick={() => deleteReport(report._id)}
                  >
                    Delete
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))} */}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table
            className="min-w-[700px] md:min-w-screen-lg"
            aria-label="Attendance Reports table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Student Name</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell align="left">Time in/Time out</StyledTableCell>
                {/* <StyledTableCell align="center">Time out</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {post.map((report) => (
              <StyledTableRow key={report._id}>
                <StyledTableCell component="th" scope="row">
                  {report.nfcUID}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {report.studentName}
                </StyledTableCell>
                <StyledTableCell align="left">{report.date}</StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => handleEdit(report)}
                  >
                    Edit
                  </button>
                  <button
                    variant="outlined"
                    color="primary"
                    onClick={() => deleteReport(report._id)}
                  >
                    Delete
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AttendanceMetrics;
