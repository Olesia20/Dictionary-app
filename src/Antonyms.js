import React from "react";
export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="antonyms">
        {props.antonyms.map(function (antonym, index) {
          return (
            <p key={index}>
              <strong className="antonyms2">Antonyms: </strong>
              {antonym}
            </p>
          );
        })}
      </div>
    );
  } else {
  }
  return null;
}
