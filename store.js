import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "../features/clientSlice";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

export default store;
