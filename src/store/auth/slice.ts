import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  idInstance?: string;
  apiTokenInstance?: string;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { apiTokenInstance, idInstance } = action.payload;

      state.isAuthenticated = true;

      window.apiTokenInstance = apiTokenInstance;
      window.idInstance = idInstance;
    },
  },
});

export const { setUserData } = slice.actions;

export default slice.reducer;
