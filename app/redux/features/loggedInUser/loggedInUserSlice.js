"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInImage: "",
};

export const loggedInUser = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    setLoggedInImage: (state, action) => {
      state.loggedInImage = action.payload;
    },
  },
});

export const { setLoggedInImage } = loggedInUser.actions;
export default loggedInUser.reducer;
