import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h3>{props.phonetic.text} </h3>
      <div className="audio-player">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    </div>
  );
}
