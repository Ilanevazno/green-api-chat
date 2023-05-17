import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import messengerReducer from "./messenger/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    messenger: messengerReducer,
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