import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
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
      <h4>Synonyms:</h4>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
