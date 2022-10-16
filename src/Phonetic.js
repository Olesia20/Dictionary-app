import React from "react";
export default function Phonetic(props) {
  return (
    <div className="Phoetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Lisen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
