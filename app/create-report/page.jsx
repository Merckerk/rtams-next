"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AttendanceReportForm from "@components/attendances/AttendanceReportForm";
import toast from "react-hot-toast";

const createAttendance = () => {
  const router = useRouter;
  const [post, setPost] = useState({
    nfcUID: "",
    courseCode: "",
    date: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const onCreateReport = async () => {
    try {
      setIsLoading(true);
      const { nfcUID, courseCode, date } = post;
      const postValues = { nfcUID, courseCode, date };
      const response = await axios.post(
        "api/attendance/createReport",
        postValues
      );
      toast.success("Successfully created an attendance entry!");
      router.push("/attendances");
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!post.nfcUID || !post.courseCode) {
      setAreFieldsValid(true);
    } else {
      setAreFieldsValid(true);
    }
  }, [post]);

  return (
    <AttendanceReportForm
      type="Create"
      post={post}
      setPost={setPost}
      loading={isLoading}
      handleSubmit={onCreateReport}
    />
  );
};

export default createAttendance;
