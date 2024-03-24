import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalSlice from "../features/globalSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    globalSlice,
  },
});
const rootReducer = combineReducers({});
export type GlobalState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
