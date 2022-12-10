import { configureStore } from "@reduxjs/toolkit";
import launch from "./launch";
import collection from "./collection";

const store = configureStore({
  reducer: {
    launch,
    collection,
  },
});

export default store;
