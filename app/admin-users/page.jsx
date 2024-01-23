"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "@styles/tableStyles";

import { useDispatch } from "react-redux";
import { getAdminUsers } from "@app/redux/features/admin-users/admin-users-slice";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";


const AdminUsers = () => {
  const [adminUsersAPI, setAdminUsersAPI] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchAdminData = async () => {
    const response = await fetch("/api/users/displayAdminUsers", {cache: "no-store"});
    const data = await response.json()
    if (data) {
      setAdminUsersAPI(data);
    } else {
    }
  };
  
  const handleEdit = (adminUser) => {
    router.push(`/update-admin?userid=${adminUser._id}`);
  };

  const deleteUser = async (userId) => {
    const hasConfirmed = confirm("Are you sure you want to delete this user?");
  
    if (hasConfirmed) {
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
    }
  };

  const handleLoad = (userId) => {
    router.push(`teaching-load?userid=${userId._id}`)
  }
  

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
                    style={{ marginRight: "30px" }}   
                    onClick={() => deleteUser(adminUser._id)}
                  >
                    Delete
                  </button>
                  <button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleLoad(adminUser)}
                  >
                    Load
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
