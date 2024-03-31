"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";

import React from "react";

import classesMock from "@mocks/mockClassesData";

const Class = () => {
  const router = useRouter();
  return (
    <div className="py-4 pt-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Classes
        </h1>
        <button
          className="pb-7 black_btn"
          onClick={() => {
            router.push("/create-classlist");
          }}
        >
          Create Class
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="admin users table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Faculty</StyledTableCell>
              <StyledTableCell align="left">Subject Code</StyledTableCell>
              <StyledTableCell align="left">Subject Description</StyledTableCell>
              <StyledTableCell align="center">Term</StyledTableCell>
              <StyledTableCell align="center">Schedule</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {classesMock.map((classlist) => (
              <StyledTableRow key={classlist._id}>
                <StyledTableCell component="th" scope="row">
                  {classlist.user}
                </StyledTableCell>
                <StyledTableCell align="left">{classlist.subjectCode}</StyledTableCell>
                <StyledTableCell align="left">
                  {classlist.subjectDescription}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {classlist.term}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {classlist.schedule}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => {}}
                  >
                    View
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

export default Class;
