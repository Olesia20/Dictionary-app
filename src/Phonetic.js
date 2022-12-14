import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phoetic">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
