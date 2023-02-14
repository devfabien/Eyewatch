import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./src/features/CounterSlice";
import authReducer from "./src/features/AuthenticationSlice";

export const Store = configureStore({
  reducer: {
    
    auth: authReducer,
  },
});