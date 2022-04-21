import axios from "axios";

const API_KEY = "22576cc96d8ba56080f90532ad961e88";

export const getTopTracks = () => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`
  );
};
export const getTopArtist = () => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format&format=json`
  );
};

export const searchTrackByArtist = (keyword) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${keyword}&api_key=${API_KEY}&formatY&format=json`
  );
};

export const searchTrackBySong = (keyword) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${keyword}&api_key=${API_KEY}&formatY&format=json`
  );
};

export const searchTrackByAlbum = (keyword) => {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=${API_KEY}&formatY&format=json`
  );
};
