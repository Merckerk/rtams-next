"use client";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux";
import { getAdminUsers } from "@app/redux/features/admin-users/admin-users-slice";
import { useEffect } from "react";
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