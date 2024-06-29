import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useAppSelector,
  useDispatch as useAppDispatch,
} from "react-redux";
import contact from "./reducers/contact";

const rootReducers = combineReducers({
  contact,
});

export type RootState = ReturnType<typeof rootReducers>;

const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
const useDispatch = () => useAppDispatch<AppDispatch>();

export { store, useSelector, useDispatch };
