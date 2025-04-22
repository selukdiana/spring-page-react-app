import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    updataAuthData(state, action) {
      state.isAuth = action.payload.isAuth;
    },
  },
});

export default authSlice.reducer;
export const { updataAuthData } = authSlice.actions;
