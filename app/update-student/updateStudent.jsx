"use client";

import StudentCrudForm from "@components/students/StudentCrudForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateStudent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const studentId = searchParams.get("studentid");

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    image: "",
    studentNumber: "",
    nfcUID: "",
    email: "",
    name: "",
    username: "",
    password: "",
    repassword: "",
    section: "",
    load: [],
    gender: "",
    mobileNumber: "",
    placeOfBirth: "",
    residentialAddress: "",
    permanentAddress: "",
    nameOfSpouse: "",
    audit: "",
  });

  const [errMsg, setErrMsg] = useState({
    studentNumber: "",
    nfcUID: "",
    email: "",
    name: "",
    username: "",
    password: "",
    repassword: "",
    section: "",
    gender: "",
    audit: "",
  });

  const getStudentDetails = async () => {
    const response = await fetch(`/api/students/${studentId}`);
    const data = await response.json();

    setPost({
      image: data?.image,
      studentNumber: data?.studentNumber,
      nfcUID: data?.nfcUID,
      email: data?.email,
      name: data?.name,
      username: data?.username,
      password: "",
      repassword: "",
      section: data?.section,
      load: data?.load,
      gender: data?.gender,
      mobileNumber: data?.mobileNumber,
      placeOfBirth: data?.placeOfBirth,
      residentialAddress: data?.residentialAddress,
      permanentAddress: data?.permanentAddress,
      nameOfSpouse: data?.nameOfSpouse,
    });
  };

  useEffect(() => {
    if (studentId) {
      getStudentDetails();
    }
  }, [studentId]);

  useEffect(() => {
    console.log(post);
  }, [post]);

  const onUpdateStudent = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!studentId) return alert("Student not found.");

    try {
      const response = await fetch(`/api/students/${studentId}`, {
        method: "PATCH",
        body: JSON.stringify({
          image: post.image,
          studentNumber: post.studentNumber,
          nfcUID: post.nfcUID,
          email: post.email,
          name: post.name,
          username: post.username,
          password: post.password,
          load: post.load,
          section: post.section,
          gender: post.gender,
          mobileNumber: post.mobileNumber,
          placeOfBirth: post.placeOfBirth,
          residentialAddress: post.residentialAddress,
          permanentAddress: post.permanentAddress,
          nameOfSpouse: post.nameOfSpouse,
          audit: post.audit,
        }),
      });
      if (response.ok) {
        router.push("/students");
      }
    } catch (error) {
      console.log("Error updating student details", error);
    } finally {
      setLoading(false);
    }
  };

  const onDeleteStudent = async () => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this student?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/students/${studentId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          router.push("/students");
        }
      } catch (error) {
        console.log("Error deleting the student", error);
      }
    }
  };

  return (
    <StudentCrudForm
      type="Edit"
      post={post}
      setPost={setPost}
      loading={loading}
      handleSubmit={onUpdateStudent}
      handleDelete={onDeleteStudent}
      errMsg={errMsg}
      setErrMsg={setErrMsg}
    />
  );
};

export default UpdateStudent;
