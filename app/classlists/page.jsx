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

const Classlists = () => {
  const router = useRouter();
  const [classlists, setClasslists] = useState([]);

  const fetchClasslistsData = async () => {
    try {
      const response = await fetch("/api/classlist/getAllClasslists", {
        cache: "no-store",
      });
      const data = await response.json();

      if (data) {
        const classlistData = data.data;
        console.log("data:", classlistData);

        setClasslists(classlistData);
      } else {
      }
    } catch (error) {
      console.error("Error fetching classlists", error);
    }
  };

  const handleEdit = (classlist) =>
    router.push(`update-classlist?classlistid=${classlist._id}`);

  useEffect(() => {
    fetchClasslistsData();
  }, []);

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
              <StyledTableCell>Section</StyledTableCell>
              <StyledTableCell align="left">Subject Code</StyledTableCell>
              <StyledTableCell align="left">
                Subject Description
              </StyledTableCell>
              <StyledTableCell align="center">Term</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classlists.map((classlist) => (
              <StyledTableRow key={classlist._id}>
                <StyledTableCell component="th" scope="row">
                  {classlist.sectionCode.section}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {classlist.subjectCode}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {classlist.subjectDescription}
                </StyledTableCell>
                <StyledTableCell align="left">{classlist.term.term}</StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => {
                      handleEdit(classlist);
                    }}
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

export default Classlists;
