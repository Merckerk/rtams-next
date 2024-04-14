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

const Sections = () => {
  const router = useRouter();
  const [sections, setSections] = useState([]);

  const fetchSectionsData = async () => {
    try {
      const sectionsResponse = await fetch("/api/sections/getAllSections", {
        cache: "no-store",
      });
      const response = await sectionsResponse.json();

      if (response) {
        const sectionsData = response.data;
        console.log("data:", sectionsData);

        setSections(sectionsData);
      } else {
      }
    } catch (error) {
      console.error("Error fetching sections", error);
    }
  };

  const handleEdit = (section) => router.push(`update-section?sectionid=${section._id}`);

  useEffect(() => {
    fetchSectionsData();
  }, []);

  return (
    <div className="py-4 pt-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Sections
        </h1>
        <button
          className="pb-7 black_btn"
          onClick={() => {
            router.push("/create-section");
          }}
        >
          Create Section
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
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sections.map((section) => (
              <StyledTableRow key={section._id}>
                <StyledTableCell component="th" scope="row">
                  {section.section}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => {
                      handleEdit(section);
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

export default Sections;
