import React from "react";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech} </h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">{definition.definition}</p>
            <p className="example">Exampl: {definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
