import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
  name: "selected",
  initialState: {
    value: [],
  },
  reducers: {
    addValue: (state, action) => {
      state.value.push(action.payload);
    },
    removeValue: (state, action) => {
      console.log("remove");
    },
    resetSelected: (state) => {
      state.value = [];
    },
  },
});

export const { addValue, removeValue, resetSelected } = selectedSlice.actions;

export default selectedSlice.reducer;
