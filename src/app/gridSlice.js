import { createSlice } from "@reduxjs/toolkit";

export const gridSlice = createSlice({
  name: "grid",
  initialState: {
    value: [],
  },
  reducers: {
    saveGrid: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveGrid } = gridSlice.actions;

export default gridSlice.reducer;
