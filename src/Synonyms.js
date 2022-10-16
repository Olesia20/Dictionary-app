import React from "react";
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Syonym">
        {props.synonyms.map(function (synonym, index) {
          return (
            <p key={index}>
              Synonym:{""} {synonym}
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
