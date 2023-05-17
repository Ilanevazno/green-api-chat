import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "api";
import { IContact } from "entities/contact";

interface IContactsState {
  contacts: Record<string, IContact>;
}

const initialState: IContactsState = {
  contacts: {},
};

export const findNewContact = createAsyncThunk(
  "FIND_CONTACT",
  async (payload: string) => {
    try {
      return await api.contacts.getContact(payload);
    } catch {
      throw new Error("error in founding new contact");
    }
  }
);

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(
      findNewContact.fulfilled,
      (state, action: PayloadAction<IContact>) => {
        const { chatId } = action.payload;

        state.contacts[chatId] = action.payload;
      }
    );
  },
});

export default slice.reducer;
