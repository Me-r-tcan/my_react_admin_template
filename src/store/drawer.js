import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "drawer",
  initialState: {
    open: true,
  },
  reducers: {
    openDrawer: (drawer) => {
      drawer.open = true;
    },
    closeDrawer: (drawer) => {
      drawer.open = false;
    },
  },
});

export const { openDrawer, closeDrawer } = slice.actions;
export default slice.reducer;
