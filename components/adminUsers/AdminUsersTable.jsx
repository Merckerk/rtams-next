"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import { useSelector, useDispatch } from "react-redux";
import { getAdminUsers } from "@app/redux/features/admin-users/admin-users-slice";
import { useEffect } from "react";
import Link from "next/link";

const AdminUsersTable = () => {
  const adminUsers = useSelector((state) => state.adminUsers.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminUsers());
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table
        className="min-w-[700px] md:min-w-screen-lg"
        aria-label="admin users table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminUsers.map((adminUser) => (
            // <Link href={`/admin-users/${adminUser.userId}`}>
            <StyledTableRow key={adminUser.username} onClick={() => {}}>
              <StyledTableCell component="th" scope="row">
                {adminUser.username}
              </StyledTableCell>
              <StyledTableCell align="right">{adminUser.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminUsersTable;