import { createSlice } from "@reduxjs/toolkit";

export const sideBySideSlice = createSlice({
  name: "sideBySide",
  initialState: {
    value: false,
  },
  reducers: {
    saveValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveValue } = sideBySideSlice.actions;

export default sideBySideSlice.reducer;
