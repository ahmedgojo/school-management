import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // { id: 1, name: 'John Doe', role: 'admin' | 'teacher' | 'student' | 'parent' }
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
