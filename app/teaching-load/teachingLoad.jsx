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
import { useSession } from "next-auth/react";

const TeachingLoad = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);

  const [coursesAPI, setCoursesAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedLoad, setEditedLoad] = useState([]);
  const [userDetailsAPI, setUserDetailsAPI] = useState({
    image: "",
    name: "",
    username: "",
  });

  // const filteredCourses = coursesAPI.filter(
  //   (course) =>
  //     course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const fetchData = async () => {
    try {
      const [coursesResponse, userDetailsResponse] = await Promise.all([
        fetch(`/api/classlist/${session?.user?.id}/getClasslistsByUser`),
        fetch(`/api/users/${session?.user?.id}`),
      ]);

      const coursesData = await coursesResponse.json();
      const userData = await userDetailsResponse.json();

      if (coursesData.success) {
        setCoursesAPI(coursesData.data);
      }

      if (userData) {
        console.log("user found");
        setUserDetailsAPI({
          image: userData.image,
          name: userData.name,
          username: userData.username,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchData();
    }
  }, [session?.user?.id]);

  useEffect(() => {
    console.log("teachingload:", coursesAPI);
  }, [coursesAPI]);

  // ! DO NOT DELETE THE COMMENTS IN THIS FILE
  // const handleEditLoad = async () => {
  //   try {
  //     setLoading(true);

  //     const response = await axios.patch(`/api/users/${userId}/editLoad`, {
  //       load: editedLoad,
  //     });

  //     console.log("Load changes saved:", response.data);

  //     fetchData();
  //   } catch (error) {
  //     console.error("Error saving load changes:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    console.log("current load:", userDetailsAPI.load);
    console.log("edited load:", editedLoad);
  }, [userDetailsAPI.load, editedLoad]);

  // const isCourseInLoad = (courseId) => userDetailsAPI.load.includes(courseId);

  // const isCourseInEditedLoad = (courseId) => editedLoad.includes(courseId);

  // const handleCheckboxChange = (courseId) => {
  //   const isCourseInLoad = editedLoad.includes(courseId);

  //   if (isCourseInLoad) {
  //     setEditedLoad((prevLoad) => prevLoad.filter((id) => id !== courseId));
  //   } else {
  //     setEditedLoad((prevLoad) => [...prevLoad, courseId]);
  //   }
  // };

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

      {/* <div className="flex-between mb-4">
        <button
          className="black_btn"
          onClick={handleEditLoad}
          disabled={loading}
        >
          Save Load Changes
        </button>
      </div> */}

      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="Courses table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Subject Code</StyledTableCell>
              <StyledTableCell align="left">Section Code</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Schedule</StyledTableCell>
              <StyledTableCell align="center">
                Attendance Status
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coursesAPI.map((course) => (
              <StyledTableRow key={course._id}>
                <StyledTableCell component="th" scope="row">
                  {course.subjectCode}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {course?.sectionCode?.section}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {course.subjectDescription}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {course.schedule}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {!course?.flagged ? (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                      <span>Clear</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-1" />
                      <span>Warning</span>
                    </div>
                  )}
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
