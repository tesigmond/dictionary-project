import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Definition(props) {
  console.log(props.definition);

  if (props.definition) {
    return (
      <div className="definition">
        <section>
          <h2>{props.definition.word}</h2>
          {props.definition.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
