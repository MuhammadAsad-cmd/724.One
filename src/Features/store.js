import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './usersSlice';

export const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
