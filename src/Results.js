import React from "react";
import Meaning from "./Meaning";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="resultes">
        <h3 className="word">{props.results.word} </h3>
        <h3>{props.results.phonetic} </h3>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
