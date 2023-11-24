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

  const fetchCoursesData = async () => {
    const response = await axios.get("/api/courses/fetchCourses");
    if (response) {
      setCoursesAPI(response.data);
    } else {
    }
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table
        className="min-w-[700px] md:min-w-screen-lg"
        aria-label="Courses table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Course Code</StyledTableCell>
            <StyledTableCell align="left">Course Name</StyledTableCell>
            <StyledTableCell align="center">Select</StyledTableCell>
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
                {/* Use a checkbox for selecting courses */}
                <FormControlLabel
                  control={<Checkbox />}
                  label="Select"
                  onChange={(e) => {}}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeachingLoad;
