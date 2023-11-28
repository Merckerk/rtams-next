"use client";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

const AttendanceReports = () => {
  const [attendanceReports, setAttendanceReports] = useState([]);
  const router = useRouter();

  const handleEdit = (report) => {
    router.push(`/update-attendance-report?reportid=${report._id}`);
  };

  const fetchAttendanceReports = async () => {
    try {
      const response = await axios.get("/api/attendance/fetchReports");
      if (response) {
        setAttendanceReports(response.data);
      } else {
        // Handle error if needed
      }
    } catch (error) {
      console.error("Error fetching attendance reports", error);
    }
  };

  const deleteAttendanceReport = async (reportId) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this attendance report?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/attendance/${reportId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const filteredReports = attendanceReports.filter(
            (report) => report._id !== reportId
          );
          setAttendanceReports(filteredReports);
        }
      } catch (error) {
        console.error("Error deleting the attendance report", error);
      }
    }
  };

  useEffect(() => {
    fetchAttendanceReports();
  }, []);

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
              <StyledTableCell>Student Name</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceReports.map((report) => (
              <StyledTableRow key={report._id}>
                <StyledTableCell component="th" scope="row">
                  {report.studentName}
                </StyledTableCell>
                <StyledTableCell align="left">{report.date}</StyledTableCell>
                <StyledTableCell align="left">{report.status}</StyledTableCell>
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
                    onClick={() => deleteAttendanceReport(report._id)}
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
