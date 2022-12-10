import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nft: null,
};

export const nft = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setNft: (state, action) => {
      state.nft = action.payload;
    },
  },
});

export const { setNft } = nft.actions;

export default nft.reducer;
