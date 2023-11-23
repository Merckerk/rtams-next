"use client";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux";
import { getAdminUsers } from "@app/redux/features/admin-users/admin-users-slice";
import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
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

const Courses = () => {
  const [coursesAPI, setCoursesAPI] = useState([]);

  const router = useRouter();

  const handleEdit = (course) => {
    router.push(`/update-course?courseid=${course._id}`);
  };

  const fetchCoursesData = async () => {
    const response = await axios.get("/api/courses/fetchCourses");
    if (response) {
      setCoursesAPI(response.data);
    } else {
    }
  };

  const deleteCourse = async (userId) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this course?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/courses/${userId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const filteredCourses = coursesAPI.filter(
            (users) => users._id !== userId
          );
          setCoursesAPI(filteredCourses);
        }
      } catch (error) {
        console.error("Error deleting the course", error);
      }
    }
  };

  useEffect(() => {
    fetchCoursesData();
  }, []);

  return (
    <div className="py-4 pt-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Courses
        </h1>
        <button
          className="pb-7 black_btn"
          onClick={() => {
            router.push("/create-course");
          }}
        >
          Add Course
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
              <StyledTableCell align="center">Actions</StyledTableCell>
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
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => handleEdit(course)}
                  >
                    Edit
                  </button>
                  <button
                    variant="outlined"
                    color="primary"
                    onClick={() => deleteCourse(course._id)}
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

export default Courses;
