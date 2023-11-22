'use client';

import { configureStore } from '@reduxjs/toolkit'
import adminUsersReducer from './features/admin-users/admin-users-slice';
import loggedInUserReducer from './features/loggedInUser/loggedInUserSlice';

/**
 * @typedef {ReturnType<typeof configureStore>['getState']} RootState
 * @typedef {typeof configureStore} AppDispatch
 */

export const store = configureStore({
  reducer: {
    adminUsers: adminUsersReducer,
    loggedInUser: loggedInUserReducer,
  }
})
