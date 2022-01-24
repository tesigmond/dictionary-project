import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Definition(props) {
  console.log(props.definition);

  if (props.definition) {
    return (
      <div className="definition">
        <h2>{props.definition.word}</h2>
        {props.definition.phonetics.map(function (phonetic, index) {
          return <div key={index}><Phonetic phonetic={phonetic} /></div>;
        })}
        {props.definition.meanings.map(function (meaning, index) {
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
