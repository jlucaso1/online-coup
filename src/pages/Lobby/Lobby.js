import React from "react";
import "./Lobby.scss";

const Lobby = (props) => {
  return (
    <div className="lobby-container">
      <div className="game-title">online coup</div>
      {props.children}
      <div className="game-info">
        Developed by vyang1222 -{" "}
        <a href="https://github.com/vyang1222/online-coup" rel="noopener noreferrer" target="_blank">
          about this project.
        </a>
        {"\n"}
        Based on the original Coup board game by La Mame Games.
      </div>
    </div>
  );
};

export default Lobby;
