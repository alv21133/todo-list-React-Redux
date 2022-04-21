import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardContent } from "./CardContent";
import { getTopArtist, getTopTracks } from "../service/RequestApi";
import { SearchForm } from "./search/SearchForm";
import { Playlist } from "./playlist/Playlist";

export const MainContent = () => {
  const [topTracks, setTopTracks] = useState([]);
  const { userAction } = useSelector((state) => state.userAction);
  const [isLoadData, setIsLoadData] = useState(false);
  const isGetTopTracks = userAction === "get-top-track";
  const isGetTopArtist = userAction === "get-top-artist";
  const isGetTopAction = isGetTopTracks || isGetTopArtist;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    handleGetTop();
  }, [userAction]);

  const handleGetTop = async () => {
    setIsLoadData(true);
    let res = [];

    if (isGetTopTracks) {
      res = await getTopTracks();
      setTopTracks(res.data?.tracks?.track);
    }

    if (isGetTopArtist) {
      res = await getTopArtist();
      setTopTracks(res.data?.artists?.artist);
    }

    setIsLoadData(false);
  };

  return (
    <>
      <SearchForm />
      <Playlist />
      {isGetTopAction && (
        <>
          <h1 className="title is-5 mt-6">
            {isGetTopTracks ? "Top Tracks:" : "Top Artists:"}
          </h1>
          {!isLoadData &&
            topTracks?.map((item, i) => (
              <CardContent
                image={item.image}
                title={item.name}
                artist={item?.artist?.name}
                playCount={item.playcount}
                trackUrl={item.url}
                key={i}
              />
            ))}

          {isLoadData && (
            <div className="is-flex is-justify-content-center">
              <h1 className="is-size-2">Loading....</h1>
            </div>
          )}
        </>
      )}
    </>
  );
};
