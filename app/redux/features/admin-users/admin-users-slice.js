"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    getAdminUsers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getAdminUsers } = adminUsersSlice.actions;
export default adminUsersSlice.reducer;
