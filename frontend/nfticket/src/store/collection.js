import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  col: null,
};

export const collection = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollection: (state, action) => {
      state.collection = action.payload;
    },
  },
});

export const { setCollection } = collection.actions;

export default collection.reducer;
