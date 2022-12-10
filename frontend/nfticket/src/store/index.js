import { configureStore } from "@reduxjs/toolkit";
import launch from "./launch";
import collection from "./collection";
import nft from "./nft";

const store = configureStore({
  reducer: {
    launch,
    collection,
    nft,
  },
});

export default store;
