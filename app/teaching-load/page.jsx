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
import ReusableInput from "@components/reusableInput/ReusableInput";

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

  const [coursesAPI, setCoursesAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedLoad, setEditedLoad] = useState([]);
  const [userDetailsAPI, setUserDetailsAPI] = useState({
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
      const [coursesResponse, userDetailsResponse] = await Promise.all([
        axios.get("/api/courses/fetchCourses"),
        fetch(`/api/users/${userId}`),
      ]);

      const coursesData = coursesResponse.data;
      const userData = await userDetailsResponse.json();

      setCoursesAPI(coursesData);
      setUserDetailsAPI({
        image: userData.image,
        name: userData.name,
        username: userData.username,
        email: userData.email,
        load: userData.load,
      });

      setEditedLoad(userData?.load);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userId]);

  const handleEditLoad = async () => {
    try {
      setLoading(true);

      const response = await axios.patch(`/api/users/${userId}/editLoad`, {
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

  useEffect(() => {
    console.log("current load:", userDetailsAPI.load);
    console.log("edited load:", editedLoad);
  }, [userDetailsAPI.load, editedLoad]);

  const isCourseInLoad = (courseId) => userDetailsAPI.load.includes(courseId);

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
        {!userDetailsAPI.image ? (
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
            src={userDetailsAPI.image}
            alt="User Profile"
            width={100}
            height={100}
            objectFit="contain"
            className="rounded-full"
          />
        )}
        <div className="ml-5">
          <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
            Teaching Load
          </h1>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {userDetailsAPI.name || userDetailsAPI.username}
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

export default TeachingLoad;
