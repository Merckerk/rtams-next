'use client';

import { configureStore } from '@reduxjs/toolkit'
import adminUsersReducer from './features/admin-users/admin-users-slice';

/**
 * @typedef {ReturnType<typeof configureStore>['getState']} RootState
 * @typedef {typeof configureStore} AppDispatch
 */

export const store = configureStore({
  reducer: {
    adminUsers: adminUsersReducer,
  }
})
