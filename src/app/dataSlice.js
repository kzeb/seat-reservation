import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
  },
  reducers: {
    saveData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveData } = dataSlice.actions;

export default dataSlice.reducer;
