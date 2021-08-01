import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "message",
  initialState: {
    open: false,
    description: "",
    type: "",
  },
  reducers: {
    showMessage: (message, action) => {
      const { description, type } = action.payload;

      message.open = true;
      message.description = description;
      message.type = type;
    },
    closeMessage: (message) => {
      message.open = false;
    },
  },
});

export const { showMessage, closeMessage } = slice.actions;
export default slice.reducer;
