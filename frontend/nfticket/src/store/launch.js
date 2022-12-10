import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  la: null,
};

export const launch = createSlice({
  name: "launch",
  initialState,
  reducers: {
    setLaunch: (state, action) => {
      state.launch = action.payload;
    },
  },
});

export const { setLaunch } = launch.actions;

export default launch.reducer;
