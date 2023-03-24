import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  usersLoading: false,
};

// ==============================|| SLICE - USERS ||============================== //

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, action) {
        state.users = action.payload;
    },
    setUserLoading(state, action) {
        state.usersLoading = action.payload;
    }
  }
});

export default users.reducer;

export const { closeSnackbar, openSnackbar } = users.actions;
