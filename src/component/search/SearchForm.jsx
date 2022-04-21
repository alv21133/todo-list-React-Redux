import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchTrackByAlbum,
  searchTrackByArtist,
  searchTrackBySong,
} from "../../service/RequestApi";
import { updateUserAction } from "../../store/actionSlice";
import { CardContent } from "../CardContent";
import "./SearchForm.scss";

export const SearchForm = () => {
  const [tabActive, setTabActive] = useState("song");
  const [isLoadData, setIsLoadData] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [resultTracks, setResultTracks] = useState([]);
  const { userAction } = useSelector((state) => state.userAction);
  const dispatch = useDispatch();
  const isUserOnSearch = userAction === "search";
  const isEmptyKeyword = keyword.length <= 0;

  const handleClickSong = async () => {
    setTabActive("song");
    if (isEmptyKeyword) return;
    setIsLoadData(true);
    const res = await searchTrackBySong(keyword);
    setResultTracks(res.data?.results?.trackmatches?.track);
    setIsLoadData(false);
  };

  const handleClickArtist = async () => {
    setTabActive("artist");
    if (isEmptyKeyword) return;
    setIsLoadData(true);
    const res = await searchTrackByArtist(keyword);
    setResultTracks(res.data?.results?.artistmatches?.artist);
    setIsLoadData(false);
  };
  const handleClickAlbum = async () => {
    setTabActive("album");
    if (isEmptyKeyword) return;
    setIsLoadData(true);
    const res = await searchTrackByAlbum(keyword);
    setResultTracks(res.data?.results?.albummatches?.album);
    setIsLoadData(false);
  };

  const handleClickSearch = () => {
    dispatch(updateUserAction({ userAction: "search" }));
    if (tabActive === "song") {
      handleClickSong();
    } else if (tabActive === "artist") {
      handleClickArtist();
    } else {
      handleClickAlbum();
    }
  };

  return (
    <div className="mt-5 ">
      <div className="input-form">
        <input
          className="input is-rounded is-primary "
          type="text"
          placeholder="Search song and artist"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="button is-primary ml-2 is-rounded"
          onClick={handleClickSearch}
        >
          Search
        </button>
      </div>

      {isUserOnSearch && (
        <>
          <div className="tabs is-boxed mt-6 mb-3">
            <ul>
              <li
                className={tabActive === "song" ? " is-active" : ""}
                onClick={handleClickSong}
              >
                <a>
                  <span className="icon is-small" />
                  <span>Song</span>
                </a>
              </li>
              <li
                className={tabActive === "artist" ? " is-active" : ""}
                onClick={handleClickArtist}
              >
                <a>
                  <span className="icon is-small" />
                  <span>Artist</span>
                </a>
              </li>
              <li
                className={tabActive === "album" ? " is-active" : ""}
                onClick={handleClickAlbum}
              >
                <a>
                  <span className="icon is-small" />
                  <span>Album</span>
                </a>
              </li>
            </ul>
          </div>

          {!isLoadData &&
            resultTracks?.map((item, i) => {
              return (
                <CardContent
                  image={item.image}
                  title={item.name}
                  artist={item.artist}
                  playCount={item.listeners}
                  trackUrl={item.url}
                  key={i}
                />
              );
            })}

          {isLoadData && (
            <div className="is-flex is-justify-content-center">
              <h1 className="is-size-2">Loading....</h1>
            </div>
          )}

          {!isLoadData && !isEmptyKeyword && resultTracks.length <= 0 && (
            <div className="is-flex is-justify-content-center mt-6">
              <h1 className="is-size-3 mt-6">Oops.. Please Try Again..</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};
