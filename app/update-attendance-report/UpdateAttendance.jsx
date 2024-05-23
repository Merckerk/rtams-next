"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReusableInput from "@components/reusableInput/ReusableInput";
import InfoDisplay from "@components/infoDisplay/infoDisplay";
import TimeSelector from "@components/timeSelector/TimeSelector";

const UpdateAttendance = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reportId = searchParams.get("reportid");

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    reportId: "",
    studentName: "",
    course: null,
    date: "",
    timeInHours: null,
    timeInMinutes: null,
    timeOutHours: null,
    timeOutMinutes: null,
  });

  const [errMsg, setErrMsg] = useState({
    timeInHours: "",
    timeInMinutes: "",
    timeOutHours: "",
    timeOutMinutes: "",
  });

  const getAttendanceDetails = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/api/attendance/${reportId}`, {
        cache: "no-store",
      });
      const attendanceResponse = await response.json();

      if (attendanceResponse && attendanceResponse.data) {
        const attendanceData = attendanceResponse.data;

        const timeInPartsRes = attendanceData.timeIn.split(":");
        const timeInHoursRes = timeInPartsRes[0];
        const timeInMinutesRes = timeInPartsRes[1];

        let timeOutHoursRes = "";
        let timeOutMinutesRes = "";
        if (attendanceData?.timeOut) {
          const timeOutPartsRes = attendanceData?.timeOut.split(":");
          timeOutHoursRes = timeOutPartsRes[0];
          timeOutMinutesRes = timeOutPartsRes[1];
        }

        setPost({
          reportId: attendanceData?.reportId,
          studentName: attendanceData?.studentName,
          course: attendanceData?.course,
          date: attendanceData?.date,
          timeInHours: timeInHoursRes,
          timeInMinutes: timeInMinutesRes,
          timeOutHours: timeOutHoursRes,
          timeOutMinutes: timeOutMinutesRes,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const onUpdateAttendance = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!reportId) {
      alert("Attendance ID not found");
      setLoading(false);
      return;
    }

    // Validate timeIn values
    if (post.timeInHours === null || post.timeInMinutes === null) {
      setErrMsg((prevErrMsg) => ({
        ...prevErrMsg,
        timeInHours:
          post.timeInHours === null ? "Time In Hours is required." : "",
        timeInMinutes:
          post.timeInMinutes === null ? "Time In Minutes is required." : "",
      }));
      setLoading(false);
      return;
    }

    const timeIn = `${post.timeInHours}:${post.timeInMinutes}`;

    // Validate timeOut values
    let timeOut = null;
    if (post.timeOutHours === null && post.timeOutMinutes === null) {
      timeOut = null;
    } else if (post.timeOutHours !== null && post.timeOutMinutes !== null) {
      timeOut = `${post.timeOutHours}:${post.timeOutMinutes}`;
    } else {
      setErrMsg((prevErrMsg) => ({
        ...prevErrMsg,
        timeOutHours:
          post.timeOutHours === null
            ? "Time Out Hours is required if Time Out Minutes is provided."
            : "",
        timeOutMinutes:
          post.timeOutMinutes === null
            ? "Time Out Minutes is required if Time Out Hours is provided."
            : "",
      }));
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/attendance/${reportId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timeInHours: post.timeInHours,
          timeInMinutes: post.timeInMinutes,
          timeOutHours: post.timeOutHours,
          timeOutMinutes: post.timeOutMinutes,
        }),
      });

      if (response.ok) {
        router.push("/attendances");
      } else {
        const errorData = await response.json();
        if (errorData && errorData.errors) {
          setErrMsg(errorData.errors);
        }
      }
    } catch (error) {
      console.log("Error updating attendance data", error);
    } finally {
      setLoading(false);
    }
  };

  const checkForEmptyValue = (value, param) => {
    const isValid = !!value;
    setErrMsg((prevErrMsg) => ({
      ...prevErrMsg,
      [param]: isValid ? "" : "This field cannot be empty",
    }));
    return isValid;
  };

  const removeErrMsg = (param) => {
    setErrMsg((prev) => ({
      ...prev,
      [param]: "",
    }));
  };

  useEffect(() => {
    getAttendanceDetails();
  }, []);

  useEffect(() => {
    console.log("post", post);
  }, [post]);

  return (
    <div className="container mx-auto mt-5 mb-8">
      <form
        className="max-w-2xl mx-auto flex flex-col gap-7 glassmorphism"
        onSubmit={onUpdateAttendance}
      >
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900">
          Edit Attendance
        </h1>

        <InfoDisplay label="Student" value={post?.studentName} />
        <InfoDisplay
          label="Class"
          value={`${post?.course?.subjectDescription}`}
        />
        <InfoDisplay label="Date" value={`${post?.date}`} />

        <div className="flex gap-4">
          <TimeSelector
            label="Time In Hours (24 hr format)"
            id="timeInHours"
            name="timeInHours"
            placeholder="Enter Time In Hours"
            className="form_input flex-1"
            onChange={(e) => {
              setPost({ ...post, timeInHours: Number(e.target.value) });
              checkForEmptyValue(e.target.value, "timeInHours");
            }}
            value={post?.timeInHours}
            unitType="hours"
            errorMessage={errMsg?.timeInHours}
            required
          />

          <TimeSelector
            label="Time Out Minutes"
            type="number"
            id="timeInMinutes"
            name="timeInMinutes"
            placeholder="Enter Time In Minutes"
            className="form_input flex-1"
            onChange={(e) => {
              setPost({ ...post, timeInMinutes: Number(e.target.value) });
              checkForEmptyValue(e.target.value, "timeInHours");
            }}
            value={post?.timeInMinutes}
            unitType="minutes"
            errorMessage={errMsg?.timeInMinutes}
            required
          />
        </div>

        <div className="flex gap-4">
          <TimeSelector
            label="Time Out Hours (24 hr format)"
            type="number"
            id="timeOutHours"
            name="timeOutHours"
            placeholder="Enter Time Out Hours"
            className="form_input flex-1"
            onChange={(e) => {
              setPost({ ...post, timeOutHours: Number(e.target.value) });
              removeErrMsg("timeOutHours");
            }}
            value={post?.timeOutHours}
            unitType="hours"
            errorMessage={errMsg?.timeOutHours}
          />

          <TimeSelector
            label="Time Out Minutes"
            type="number"
            id="timeOutMinutes"
            name="timeOutMinutes"
            placeholder="Enter Time Out Minutes"
            className="form_input flex-1"
            onChange={(e) => {
              setPost({ ...post, timeOutMinutes: Number(e.target.value) });
              removeErrMsg("timeOutHours");
            }}
            value={post?.timeOutMinutes}
            unitType="minutes"
            errorMessage={errMsg?.timeOutMinutes}
          />
        </div>

        {/* <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Reason for Edit:
          </span>
          <textarea
            id="audit"
            name="audit"
            placeholder="Your reason for editing values here..."
            className="form_input"
            onChange={(e) => {
              setPost({ ...post, audit: e.target.value });
              validateAudit(e.target.value);
            }}
            value={post?.audit}
          />
          {errMsg?.audit ? (
            <p className="error_message">{errMsg?.audit}</p>
          ) : null}
        </label> */}

        <button className="black_btn" disabled={loading}>
          {loading ? "Processing" : "Update Attendance"}
        </button>
      </form>
    </div>
  );
};

export default UpdateAttendance;
