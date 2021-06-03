import { configureStore } from "@reduxjs/toolkit";
import numberOfSeatsReducer from "./numberOfSeatsSlice";
import sideBySideReducer from "./sideBySideSlice";
import gridReducer from "./gridSlice";
import dataReducer from "./dataSlice";
import selectedReducer from "./selectedSlice";

export const store = configureStore({
  reducer: {
    numberOfSeats: numberOfSeatsReducer,
    sideBySide: sideBySideReducer,
    grid: gridReducer,
    data: dataReducer,
    selected: selectedReducer,
  },
});
