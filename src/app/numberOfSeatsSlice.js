import { createSlice } from "@reduxjs/toolkit";

export const numberOfSeatsSlice = createSlice({
  name: "numberOfSeats",
  initialState: {
    value: 0,
  },
  reducers: {
    saveNumber: (state, action) => {
      state.value = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { saveNumber, decrement } = numberOfSeatsSlice.actions;

export default numberOfSeatsSlice.reducer;
