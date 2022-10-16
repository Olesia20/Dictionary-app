import React from "react";
import Synonyms from "./Synonyms";
import Exampl from "./Exampl";
import Antonyms from "./Antonyms";
export default function Meaning(props) {
  console.log(props.meaning.antonyms);

  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech} </h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">
              <strong>Definition:</strong>
              {definition.definition}
            </p>
            <Exampl exampl={definition.example} />
          </div>
        );
      })}
      <Antonyms antonyms={props.meaning.antonyms} />

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
