import { createSlice } from "@reduxjs/toolkit";

const actionSlice = createSlice({
  name: "action",
  initialState: {
    userAction: "get-top-track",
  },

  reducers: {
    updateUserAction: (state, action) => {
      state.userAction = action.payload.userAction;
    },
  },
});

export const { updateUserAction } = actionSlice.actions;
export default actionSlice.reducer;
