import React, { useState } from "react";
import { Navbar } from "../component/Navbar";
import { MainContent } from "../component/MainContent";
import { useDispatch } from "react-redux";
import "./Home.scss";
import { updateUserAction } from "../store/actionSlice";

export const Home = () => {
  const [buttonActive, setButtonActive] = useState("get-top-track");
  const dispatch = useDispatch();

  const handleClickButton = (action) => {
    dispatch(updateUserAction({ userAction: action }));
    setButtonActive(action);
  };

  return (
    <>
      <div className=" home">
        <Navbar />
        <div className="home-content">
          <div className="home-sidebar-left has-background-link-light">
            <button
              className={`mt-5  button is-rounded ${
                buttonActive === "playlist" ? "is-success" : "is-primary"
              } `}
              onClick={() => handleClickButton("playlist")}
            >
              My playlist
            </button>
            <button
              className={`mt-5 button is-rounded ${
                buttonActive === "get-top-track" ? "is-success" : "is-primary"
              }`}
              onClick={() => handleClickButton("get-top-track")}
            >
              Top Track
            </button>
            <button
              className={`mt-5  button is-rounded  ${
                buttonActive === "get-top-artist" ? "is-success" : "is-primary"
              }`}
              onClick={() => handleClickButton("get-top-artist")}
            >
              Top Artist
            </button>
          </div>
          <div className="home-sidebar-right">
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
