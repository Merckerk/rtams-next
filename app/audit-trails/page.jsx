"use client";

import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";
import { useRouter } from "next/navigation";

const AuditTrails = () => {
  const router = useRouter();
  const [audits, setAudits] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/audits/fetchAudits", {
        cache: "no-store",
      });

      const data = await response.json();

      if (data.success) {
        setAudits(data.data);
        console.log("data", data.data);
      } else {
        console.error("Error fetching audits data");
      }
    } catch (error) {
      console.error("Error fetching audits data:", error);
    }
  };

  const handleView = (audit) =>{
    router.push(`view-audit?auditid= ${audit._id}`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("audits:", audits);
  }, [audits]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="audits table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Target</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Change Made</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {audits.map((audit) => (
              <StyledTableRow key={audit._id}>
                <StyledTableCell component="th" scope="row">
                  {audit?.target}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {audit?.description}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {audit?.changeMade}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => {
                      handleView(audit);
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
    </>
  );
};

export default AuditTrails;
