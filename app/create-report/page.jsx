"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AttendanceReportForm from "@components/attendances/AttendanceReportForm";
import toast from "react-hot-toast";
import StudentsTable from "@components/attendances/StudentsTable";

const createAttendance = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [post, setPost] = useState({
    nfcUID: "",
    course: "",
    nfcUids: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [areFieldsValid, setAreFieldsValid] = useState(false);
  const [studentsAPI, setStudentsAPI] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [coursesAPI, setCoursesAPI] = useState([]);
  const [nfcAPI, setNFC_API] = useState([]);

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

  const fetchCoursesData = async () => {
    try {
      let coursesResponse;
      console.log("le good 1");
      if (session?.user) {
        if (session?.user?.role === "Admin") {
          console.log("le good 1 admin");
          coursesResponse = await fetch("api/classlist/getAllClasslists", {
            cache: "no-store",
          });
        } else {
          console.log("le good 1 user");
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

  const fetchNFC = async () => {
    const response = await axios.get("/api/students/fetchNFC");
    if (response) {
      setNFC_API(response.data);
    } else {
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchCoursesData();
      fetchNFC();
      getAllStudents();
    }
  }, [session?.user?.id]);

  const filterStudentsByClasslist = () => {};

  const onCreateReport = async () => {
    try {
      setIsLoading(true);

      const { nfcUID, course } = post;
      const postValues = {
        nfcUID,
        course,
      };
      const response = await axios.post(
        "api/attendance/createReport",
        postValues
      );
      if (response) {
        toast.success("Successfully created an attendance entry!");
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

  // const onCreateMultipleReports = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { nfcUids, student, studentName, courseCode, term, section } = post;
  //     const postValues = {
  //       nfcUids,
  //       student,
  //       studentName,
  //       student,
  //       studentName,
  //       courseCode,
  //       term,
  //       section,
  //     };

  //     const response = await axios.post(
  //       "api/attendance/createMultipleReports",
  //       postValues
  //     );

  //     if (response) {
  //       toast.success("Successfully created multiple attendance entries!");
  //       router.push("/attendances");
  //     } else {
  //       alert("Attendance sending failed");
  //     }
  //   } catch (error) {
  //     toast.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    console.log("course:", post.course);
  }, [post.course]);

  // !REWRITE LATER AFTER REHAUL
  // useEffect(() => {
  //   console.log("post values:", post);
  //   const filtered = studentsAPI.filter((student) => {
  //     const courseCodeMatch = post.courseCode
  //       ? student.load.includes(post.courseCode)
  //       : true;
  //     const sectionMatch = post.section
  //       ? student.section === post.section
  //       : true;
  //     return courseCodeMatch && sectionMatch;
  //   });

  //   setFilteredStudents(filtered);
  // }, [post]);

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
        coursesAPI={coursesAPI}
        nfcAPI={nfcAPI}
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
