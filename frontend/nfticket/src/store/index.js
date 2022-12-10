import { configureStore } from "@reduxjs/toolkit";
import launch from "./launch";

const store = configureStore({
  reducer: {
    launch,
  },
});

export default store;
