import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "api";
// import { ICharactersRequest } from "api/auth/interfaces";
// import { IPagination } from "api/interfaces";
// import { ICharacter } from "entities/characters";

interface LandingPageState {
  idInstance?: string;
  apiTokenInstance?: string;
  isAuthenticated: boolean;
}

const initialState: LandingPageState = {
  // idInstance: undefined,
  // apiTokenInstance: undefined,
  // isAuthenticated: false,
  idInstance: "1101820955",
  apiTokenInstance: "cc7850ea1dd64c5ba26ce33e4ae5a2a789f512a1fd334561bf",
  isAuthenticated: true,
};

// export const auth = createAsyncThunk(
//   "GET_CHARACTERS",
//   async (payload: ICharactersRequest = {}) => {
//     try {
//       const response = await api.characters.fetchCharacters(payload);

//       return response;
//     } catch {
//       throw new Error("mock");
//     }
//   }
// );

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { apiTokenInstance, idInstance } = action.payload;

      state.apiTokenInstance = apiTokenInstance;
      state.idInstance = idInstance;
      state.isAuthenticated = true;

      window.apiTokenInstance = apiTokenInstance;
      window.idInstance = idInstance;
    },
  },
  extraReducers(builder): void {
    // builder.addCase(getCharacters.pending, (state) => {
    // state.isLoading = true;
    // });
  },
});

export const { setUserData } = slice.actions;

export default slice.reducer;
