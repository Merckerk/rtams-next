"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminCrudForm from "@components/adminUsers/AdminCrudForm";
import toast from "react-hot-toast";
import ClasslistCrudForm from "@components/classlist/classlistCrudForm";

const CreateClassList = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    user: "",
    subjectCode: "",
    subjectDescription: "",
    term: "",
    schedule: "",
    students: [],
  });

  const [faculties, setFaculties] = useState([]);
  const [students, setStudents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const fetchData = async () => {
    try {
      const [facultyResponse, studentsResponse] = await Promise.all([
        fetch("/api/users/getFacultyIdAndName", { cache: "no-store" }),
        fetch("/api/students/getStudentsByIdNameSection", { cache: "no-store" }),
      ]);
  
      const facultyData = await facultyResponse.json();
      const studentsData = await studentsResponse.json();
  
      if (facultyData) {
        setFaculties(facultyData);
      } else {
      }
  
      if (studentsData) {
        setStudents(studentsData);
      } else {
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const onCreateClassList = async () => {};


  useEffect(() => {
    console.log("faculties:", faculties);
  }, [faculties]);
  
  useEffect(() => {
    console.log("students:", students);
  }, [students]);

  useEffect(() => {
    console.log("post:", post);
  }, [post]);

  return (
    <ClasslistCrudForm
      type="Create"
      post={post}
      setPost={setPost}
      loading={isLoading}
      handleSubmit={onCreateClassList}
      faculties={faculties}
      students={students}
    />
  );
};

export default CreateClassList;
