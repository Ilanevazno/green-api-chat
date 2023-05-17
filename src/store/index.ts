import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import messengerReducer from "./messenger/slice";
import contactsReducer from "./contacts/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    messenger: messengerReducer,
    contacts: contactsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
