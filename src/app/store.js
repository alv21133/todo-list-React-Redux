import { configureStore } from "@reduxjs/toolkit";
import playListReducer from "../store/playlistSlice";
import userActionReducer from "../store/actionSlice";

export const store = configureStore({
  reducer: {
    playList: playListReducer,
    userAction: userActionReducer,
  },
});
