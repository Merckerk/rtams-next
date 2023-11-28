"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AttendanceReportForm from "@components/attendances/AttendanceReportForm"; // Update the import path
import toast from "react-hot-toast";

const CreateAttendanceReport = () => {
  const router = useRouter();
  const [attendanceData, setAttendanceData] = useState({
    nfcUID: "",
    dateTime: "",
    courseCode: "",
    term: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [areFieldsValid, setAreFieldsValid] = useState(false);

  const onCreateAttendanceReport = async () => {
    try {
      setIsLoading(true);
      const { nfcUID, dateTime, courseCode, term } = post;
      const postValues = { nfcUID, dateTime, courseCode, term };
      const [isLoading, setIsLoading] = useState(false);

      // Make the API call to create an attendance report
      const response = await axios.post(
        "api/attendance/createReport",
        attendanceData
      );

      toast.success("Successfully created an attendance report!");
      router.push("/attendance-reports");
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      !attendanceData.nfcUID ||
      !attendanceData.dateTime ||
      !attendanceData.status ||
      !attendanceData.courseCode ||
      !attendanceData.term
    ) {
      setAreFieldsValid(true);
    } else {
      setAreFieldsValid(false);
    }
  }, [attendanceData]);

  return (
    <AttendanceReportForm
      type="Create"
      attendanceData={attendanceData}
      setAttendanceData={setAttendanceData}
      loading={isLoading}
      handleSubmit={onCreateAttendanceReport}
    />
  );
};

export default CreateAttendanceReport;
