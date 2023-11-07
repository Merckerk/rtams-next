'use client';

import { createSlice } from "@reduxjs/toolkit";
import mockAdminData from "app/mocks/mockAdminData.json"

const initialState = {
    value: []
};

export const adminUsersSlice = createSlice({
    name: 'adminUsers',
    initialState,
    reducers: {
        getAdminUsers: (state) => { state.value = mockAdminData },
    }
});

export const { getAdminUsers } = adminUsersSlice.actions;
export default adminUsersSlice.reducer;
