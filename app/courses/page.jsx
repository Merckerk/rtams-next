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

const Courses = () => {
  const adminUsers = useSelector((state) => state.adminUsers.value);
  const [adminUsersAPI, setAdminUsersAPI] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEdit = (adminUser) => {
    router.push(`/update-admin?userid=${adminUser._id}`);
  };

  const fetchAdminData = async () => {
    const response = await axios.get("/api/users/displayAdminUsers");
    if (response) {
      setAdminUsersAPI(response.data);
    } else {
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const filteredUsers = adminUsersAPI.filter(
          (users) => users._id !== userId
        );
        setAdminUsersAPI(filteredUsers);
      }
    } catch (error) {
      console.error("Error deleting the user", error);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  useEffect(() => {
    dispatch(getAdminUsers(adminUsersAPI));
  }, [adminUsersAPI]);

  return (
    <div className="py-4 pt-7">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-satoshi font-semibold text-gray-900 pb-7">
          Admin Users
        </h1>
        <button
          className="pb-7 black_btn"
          onClick={() => {
            router.push("/create-admin");
          }}
        >
          Add User
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table
          className="min-w-[700px] md:min-w-screen-lg"
          aria-label="admin users table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminUsersAPI.map((adminUser) => (
              <StyledTableRow key={adminUser._id}>
                <StyledTableCell component="th" scope="row">
                  {adminUser.username}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {adminUser.email}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "30px" }}
                    onClick={() => handleEdit(adminUser)}
                  >
                    Edit
                  </button>
                  <button
                    variant="outlined"
                    color="primary"
                    onClick={() => deleteUser(adminUser._id)}
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

export default Courses;
