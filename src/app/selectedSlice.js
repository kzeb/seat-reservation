import { createSlice, current } from "@reduxjs/toolkit";

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
      let temp = Array.from(current(state).value);

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].x === action.payload.x && temp[i].y === action.payload.y) {
          temp.splice(i, 1);
        }
      }

      state.value = temp;
    },
    resetSelected: (state) => {
      state.value = [];
    },
  },
});

export const { addValue, removeValue, resetSelected } = selectedSlice.actions;

export default selectedSlice.reducer;
