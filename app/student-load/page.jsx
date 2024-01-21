"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReusableInput from "@components/reusableInput/ReusableInput";

import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const StudentLoad = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const studentId = searchParams.get("studentid");

  const [loading, setLoading] = useState(false);

  const [coursesAPI, setCoursesAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedLoad, setEditedLoad] = useState([]);
  const [studentDetailsAPI, setStudentDetailsAPI] = useState({
    image: "",
    name: "",
    username: "",
    email: "",
    load: [],
  });

  const filteredCourses = coursesAPI.filter(
    (course) =>
      course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchData = async () => {
    try {
      const [coursesResponse, studentDetailsResponse] = await Promise.all([
        axios.get("/api/courses/fetchCourses"),
        fetch(`/api/students/${studentId}`),
      ]);

      const coursesData = coursesResponse.data;
      const studentData = await studentDetailsResponse.json();

      setCoursesAPI(coursesData);
      setStudentDetailsAPI({
        image: studentData.image,
        name: studentData.name,
        username: studentData.studentname,
        email: studentData.email,
        load: studentData.load,
      });

      setEditedLoad(studentData?.load);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [studentId]);

  const handleEditLoad = async () => {
    try {
      setLoading(true);

      const response = await axios.patch(`/api/students/${studentId}/editLoad`, {
        load: editedLoad,
      });

      console.log("Load changes saved:", response.data);

      fetchData();
    } catch (error) {
      console.error("Error saving load changes:", error);
    } finally {
      setLoading(false);
    }
  };

  const isCourseInLoad = (courseId) => studentDetailsAPI.load.includes(courseId);

  const isCourseInEditedLoad = (courseId) => editedLoad.includes(courseId);

  const handleCheckboxChange = (courseId) => {
    const isCourseInLoad = editedLoad.includes(courseId);

    if (isCourseInLoad) {
      setEditedLoad((prevLoad) => prevLoad.filter((id) => id !== courseId));
    } else {
      setEditedLoad((prevLoad) => [...prevLoad, courseId]);
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center mb-10">
        {!studentDetailsAPI.image ? (
          <Image
            src={"/assets/images/defaultProfilePicture.jpg"}
            alt="Default Profile"
            width={100}
            height={100}
            objectFit="contain"
            className="rounded-full"
          />
        ) : (
          <Image
            src={studentDetailsAPI.image}
            alt="Student Profile"
            width={100}
            height={100}
            objectFit="contain"
            className="rounded-full"
          />
        )}
        <div className="ml-5">
          <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
            Student Load
          </h1>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {studentDetailsAPI.name || studentDetailsAPI.username}
          </span>
        </div>
      </div>

      <div className="flex-between">
        <ReusableInput
          label="Search"
          type="text"
          id="search"
          name="search"
          placeholder="Search by course code or name"
          className="p-2 border border-gray-300 rounded w-64 m-3"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />

        <button
          className="black_btn"
          onClick={handleEditLoad}
          disabled={loading}
        >
          Save Load Changes
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="Courses table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Course Code</StyledTableCell>
              <StyledTableCell align="left">Course Name</StyledTableCell>
              <StyledTableCell align="center">
                Current Load Status
              </StyledTableCell>
              <StyledTableCell align="center">
                Add or Remove Load
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses.map((course) => (
              <StyledTableRow key={course._id}>
                <StyledTableCell component="th" scope="row">
                  {course.courseCode}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {course.courseName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {isCourseInLoad(course._id) ? (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                      <span>In Load</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                      <span>Not In Load</span>
                    </div>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {/* Use a checkbox for selecting courses */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isCourseInEditedLoad(course._id)}
                        onChange={() => handleCheckboxChange(course._id)}
                      />
                    }
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentLoad;
