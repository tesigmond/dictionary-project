import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {index+1}. {definition.definition}
              <br />
              <br />
              Example: <em>{definition.example}</em>
              <br />
              Synonyms: <Synonyms synonyms={definition.synonyms}/>
            </p>
          </div>
        );
      })}
    </div>
  );
}
