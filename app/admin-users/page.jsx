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
import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

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

const AdminUsers = () => {
  const adminUsers = useSelector((state) => state.adminUsers.value);
  const [adminUsersAPI, setAdminUsersAPI] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEdit = (adminUser) => {
    router.push(`/update-admin?userid=${adminUser._id}`);
  };

  const fetchAdminData = async () => {
    const response = await axios.get("/api/users/displayAdminUsers");
    console.log(response.data);
    if (response) {
      setAdminUsersAPI(response.data);
    } else {
      console.log("tite");  //TODO: REMOVE HAHAHAHAHAHA
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  useEffect(() => {
    dispatch(getAdminUsers(adminUsersAPI));
  }, [adminUsersAPI]);

  useEffect(() => {
    console.log("Admin Users: ", adminUsers);
  }, [adminUsers]);

  return (
    <div className="py-4 pt-7">
      <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
        Admin Users
      </h1>
      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="admin users table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminUsersAPI.map((adminUser) => (
              <StyledTableRow key={adminUser.username}>
                <StyledTableCell component="th" scope="row">
                  {adminUser.username}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {adminUser.email}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(adminUser)}
                  >
                    Edit
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

export default AdminUsers;
