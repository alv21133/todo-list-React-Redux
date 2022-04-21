import { createSlice } from "@reduxjs/toolkit";

const playListSlice = createSlice({
  name: "playlist",
  initialState: {
    playList: [],
  },

  reducers: {
    addToPlayList: (state, action) => {
      const dataTask = {
        title: action.payload.title,
        artist: action.payload?.artist,
        image: action.payload?.image,
        playCount: action.payload?.playCount,
        trackUrl: action.payload.trackUrl,
      };
      state.playList.push(dataTask);
    },
  },
});

export const { addToPlayList } = playListSlice.actions;
export default playListSlice.reducer;
