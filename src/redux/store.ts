import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// Reduces
import { modalReducer } from "@/redux";

export function makeStore() {
  return configureStore({
    reducer: {
      modal: modalReducer,
    },
  });
}

const store = makeStore();

// Types
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
