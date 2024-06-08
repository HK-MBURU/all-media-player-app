import React, { useEffect, useState } from "react";
import "./music.css";
import { Menu } from "@mui/material";
import {
  Favorite,
  List,
  PlayCircle,
  Repeat,
  Search,
  Shuffle,
  SkipNext,
  SkipPrevious,
  Tune,
} from "@mui/icons-material";

const Music = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  let playing = false,
    currentSong = 0,
    shuffle = false,
    favorites = [],
    audio = new Audio();

    const songs=[
        {
            title:"song1",
            artist:"artist song 1",
            img_src:"1.jpg",
            src:"1.mp3",
        },
        {
            title:"song3",
            artist:"artist song 3",
            img_src:"3.jpg",
            src:"3.mp3",
        },
        {
            title:"song2",
            artist:"artist song 2",
            img_src:"2.jpg",
            src:"2.mp3",
        }
    ]

  return (
    <div className="App">
      <div className={`container ${isActive ? "active" : ""}`}>
        <div className="top">
          <List className="icon" onClick={toggleActive} />
          <Search className="icon" />
        </div>
        <div className="cover_image"></div>
        <div className="player_body"></div>

        <div className="list-wrapper">
          <table className="list" id="playlist">
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
            <tr className="song">
              <td className="no">
                <h5>1</h5>
              </td>
              <td className="title">
                <h6>Audio Title</h6>
              </td>
              <td className="length">
                <h5>2:03</h5>
              </td>
              <td>
                <Favorite className="icon" />
              </td>
            </tr>
          </table>
        </div>
        <div className="info">
          <h2>song title</h2>
          <h3>artist</h3>
        </div>
        <div className="controls">
          <SkipPrevious className="icon prev" />
          <PlayCircle className="icon playpause" />
          <SkipNext className="icon next" />
        </div>
        <div className="more-controls">
          <Favorite className="icon" />
          <Shuffle className="icon" />
          <Repeat className="icon" />
          <Tune className="icon" />
        </div>

        <p className="current-song-title">song title</p>
      </div>
    </div>
  );
};

export default Music;
