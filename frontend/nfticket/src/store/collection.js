import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  col: null,
};

export const collection = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setLaunch: (state, action) => {
      state.collection = action.payload;
    },
  },
});

export const { setLaunch } = collection.actions;

export default collection.reducer;
