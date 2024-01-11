import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  auth: {
    isAuthenticated: boolean;
  };
}

export interface AuthStateType {
  isAuthenticated: boolean;
}

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
