"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AttendanceReports = () => {
  const { data: session } = useSession();
  const [post, setPost] = useState([]);
  const router = useRouter();

  const handleEdit = (report) => {
    router.push(`/update-attendance-report?reportid=${report._id}`);
  };

  const fetchReports = async () => {
    try {
      let response;
      if (session?.user?.id) {
        if (session?.user?.role === "Admin") {
          console.log("admin");
          response = await axios.get("/api/attendance/fetchReports");
        } else {
          console.log("non admin");
          response = await axios.get(
            `/api/attendance/fetchReports/${session?.user?.id}`
          );
        }
      }

      if (response) {
        setPost(response.data);
        console.log(response.data);
      } else {
        // Handle error if needed
      }
    } catch (error) {
      console.error("Error fetching attendance reports", error);
    }
  };

  const deleteReport = async (reportId) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this attendance report?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/attendance/${reportId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const filteredReports = post.filter(
            (report) => report._id !== reportId
          );
          setPost(filteredReports);
        }
      } catch (error) {
        console.error("Error deleting the attendance report", error);
      }
    }
  };

  useEffect(() => {
    fetchReports();
  }, [session?.user?.id]);

  return (
    <div className="py-4 pt-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Attendance Reports
        </h1>
        
        <button
          className="pb-7 black_btn"
          onClick={() => {
            router.push("/create-report");
          }}
        >
          Add Attendance Report
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="Attendance Reports table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">NFC UID</StyledTableCell>
              <StyledTableCell align="center">Student Name</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Time In</StyledTableCell>
              <StyledTableCell align="center">Time Out</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((report) => (
              <StyledTableRow key={report._id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {report.nfcUID}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {report.studentName}
                </StyledTableCell>
                <StyledTableCell align="center">{report.date}</StyledTableCell>
                <StyledTableCell align="center">
                  {report.timeIn}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {report.timeOut}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => handleEdit(report)}
                  >
                    Edit
                  </button>
                  <button
                    variant="outlined"
                    color="primary"
                    onClick={() => deleteReport(report._id)}
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

export default AttendanceReports;
