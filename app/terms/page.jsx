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

const Terms = () => {
  const router = useRouter();
  const [terms, setTerms] = useState([]);

  const fetchTermsData = async () => {
    try {
      const termsResponse = await fetch("/api/terms/getAllTerms", {
        cache: "no-store",
      });
      const response = await termsResponse.json();

      if (response) {
        const termsData = response.data;
        console.log("data:", termsData);

        setTerms(termsData);
      } else {
      }
    } catch (error) {
      console.error("Error fetching terms", error);
    }
  };

  const handleEdit = (term) =>
    router.push(`update-term?termid=${term._id}`);

  useEffect(() => {
    fetchTermsData();
  }, []);

  return (
    <div className="py-4 pt-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Terms
        </h1>
        <button
          className="pb-7 black_btn"
          onClick={() => {
            router.push("/create-term");
          }}
        >
          Create Term
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="admin users table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Terms</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {terms.map((term) => (
              <StyledTableRow key={term._id}>
                <StyledTableCell component="th" scope="row">
                  {term.term}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => {
                      handleEdit(term);
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

export default Terms;
