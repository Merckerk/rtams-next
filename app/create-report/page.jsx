"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AttendanceReportForm from "@components/attendances/AttendanceReportForm";
import toast from "react-hot-toast";
import StudentsTable from "@components/attendances/StudentsTable";

const createAttendance = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    nfcUID: "",
    courseCode: "",
    section: "",
    term: "",
    nfcUids: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [areFieldsValid, setAreFieldsValid] = useState(false);
  const [studentsAPI, setStudentsAPI] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/students/fetchStudents");
      if (response) {
        console.log("response:", response);
        setStudentsAPI(response.data);
        setFilteredStudents(response.data);
      } else {
        alert("please refresh. error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  // useEffect(() => {
  //   console.log("students:", studentsAPI);
  // }, [studentsAPI]);

  const onCreateReport = async () => {
    try {
      setIsLoading(true);

      const { nfcUID, student, studentName, courseCode, section, term } = post;
      const postValues = {
        nfcUID,
        student,
        studentName,
        courseCode,
        section,
        term,
      };
      const response = await axios.post(
        "api/attendance/createReport",
        postValues
      );
      if (response) {
        toast.success("Successfully created an attendance entry!");
        //LUWIS
        router.push("/attendances");
        //LUWIS
      } else {
        alert("Attendance sending failed");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onCreateMultipleReports = async () => {
    try {
      setIsLoading(true);
      const { nfcUids, student, studentName, courseCode, term, section } = post;
      const postValues = {
        nfcUids,
        student,
        studentName,
        student,
        studentName,
        courseCode,
        term,
        section,
      };

      const response = await axios.post(
        "api/attendance/createMultipleReports",
        postValues
      );

      if (response) {
        toast.success("Successfully created multiple attendance entries!");
        router.push("/attendances");
      } else {
        alert("Attendance sending failed");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("post values:", post);
    const filtered = studentsAPI.filter((student) => {
      const courseCodeMatch = post.courseCode
        ? student.load.includes(post.courseCode)
        : true;
      const sectionMatch = post.section
        ? student.section === post.section
        : true;
      return courseCodeMatch && sectionMatch;
    });

    setFilteredStudents(filtered);
  }, [post]);

  return (
    <>
      {/* 
    //TODO: SUSPENSE THIS PLS 
    //TODO: CLEAR FIELDS OPTION
    */}
      <AttendanceReportForm
        type="Create"
        post={post}
        setPost={setPost}
        loading={isLoading}
        handleSubmit={onCreateReport}
      />

      <StudentsTable
        students={filteredStudents}
        setStudents={setFilteredStudents}
        post={post}
      />
    </>
  );
};

export default createAttendance;
