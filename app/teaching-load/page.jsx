"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TeachingLoad = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userid");

  const [loading, setLoading] = useState(false);

  const [coursesAPI, setCoursesAPI] = useState([]); //all courses
  const [editedLoad, setEditedLoad] = useState([]); //courses to be edited (ids of courses)
  const [userDetailsAPI, setUserDetailsAPI] = useState({
    image: "",
    name: "",
    email: "",
    load: [],
  });

  const fetchCoursesData = async () => {
    const response = await axios.get("/api/courses/fetchCourses");
    if (response) {
      setCoursesAPI(response.data);
    } else {
    }
  };

  const getUserDetails = async () => {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    console.log(data);

    setUserDetailsAPI({
      image: data.image,
      name: data.name,
      email: data.email,
      load: data.load,
    });
  };

  useEffect(() => {
    fetchCoursesData();
    getUserDetails();
  }, []);

  const isCourseInLoad = (courseId) => userDetailsAPI.load.includes(courseId);

  return (
    <div>
      <div className="flex flex-row items-center mb-10">
        {userDetailsAPI.image && (
          <div className="mr-4">
            <Image
              src={userDetailsAPI.image}
              alt="User Image"
              width={100}
              height={100}
              objectFit="contain"
              className="rounded-full"
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
            Teaching Load
          </h1>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {userDetailsAPI.name}
          </span>
        </div>
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
              <StyledTableCell align="center">In Load</StyledTableCell>
              <StyledTableCell align="center">Add or Remove Load</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coursesAPI.map((course) => (
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
                    control={<Checkbox checked={isCourseInLoad(course._id)} onChange={() => {}} />}
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

export default TeachingLoad;
