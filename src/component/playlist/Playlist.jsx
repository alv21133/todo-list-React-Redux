import React from "react";
import { useSelector } from "react-redux";
import { CardContent } from "../CardContent";

export const Playlist = () => {
  const { userAction } = useSelector((state) => state.userAction);
  const { playList } = useSelector((state) => state.playList);
  const isOnPlayList = userAction === "playlist";

  return (
    isOnPlayList && (
      <>
        <h1 className="title is-5 mt-6">PlayList:</h1>
        {playList?.map((item, i) => (
          <CardContent
            image={item.image}
            title={item.title}
            artist={item?.artist}
            playCount={item.playcount}
            trackUrl={item.trackUrl}
            key={i}
          />
        ))}

        {playList?.length <= 0 && (
          <div className="is-flex is-justify-content-center">
            <h1 className="is-size-4">Oops... Playlist not found !</h1>
          </div>
        )}
      </>
    )
  );
};
