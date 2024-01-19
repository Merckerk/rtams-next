"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useDispatch } from "react-redux";
import { getAdminUsers } from "@app/redux/features/admin-users/admin-users-slice";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";

const StudentsTable = ({ students, setStudents, post }) => {
  return (
    <div className="py-4 pt-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Students
        </h1>
        <button className="pb-7 black_btn" onClick={() => {}}>
          Update Attendance
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="admin users table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Student No.</StyledTableCell>
              <StyledTableCell>NFC UID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Timed-in</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student._id}>
                <StyledTableCell component="th" scope="row">
                  {student.studentNumber}
                </StyledTableCell>
                <StyledTableCell>{student.nfcUID}</StyledTableCell>
                <StyledTableCell align="left">
                  {student.name || student.username}
                </StyledTableCell>
                <StyledTableCell align="left">TO BE FILLED</StyledTableCell>
                <StyledTableCell align="center">
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={() => {}} />}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentsTable;
