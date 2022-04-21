import React from "react";
import { useDispatch } from "react-redux";
import { addToPlayList } from "../store/playlistSlice";
import "./CardContent.scss";

export const CardContent = (props) => {
  const dispatch = useDispatch();

  const numberFormatter = (number) => {
    const numberOfData =
      typeof number === "number" ? number.toString() : number;

    return numberOfData?.split(/(?=(?:\d{3})+(?:\.|$))/g).join(".") || "";
  };

  const handleClickAddToPlayList = () => {
    try {
      dispatch(
        addToPlayList({
          title: props.title,
          artist: props?.artist,
          playCount: props?.playCount,
          image: props.image[0]["#text"],
          trackUrl: props?.trackUrl,
        })
      );
    } catch (error) {
      console.error(error);
    } finally {
      alert("Playlist Updated");
    }
  };

  return (
    <div className="box content fade-up">
      <div className="is-flex">
        <img
          src={props.image[0]["#text"]}
          alt="banner-track"
          className="content__image"
        />
        <div className="content__meta">
          <h4 className="content__track-title ">{props.title}</h4>
          <div className="is-flex">
            {props.artist && <p>Artist: {props.artist}</p>}
            {props.playCount && (
              <p className="ml-4">
                Play: {numberFormatter(props.playCount)} times
              </p>
            )}
            <button
              className="button is-primary is-rounded is-small ml-4 content__save-button"
              onClick={handleClickAddToPlayList}
            >
              save
            </button>
          </div>
        </div>
        <a
          className="content__play-button"
          role="button"
          href={props.trackUrl}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../assets/images/play-icon.png")}
            alt="ply-button"
            className=""
          />
        </a>
      </div>
    </div>
  );
};
