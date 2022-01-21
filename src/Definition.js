import React from "react";
import Meaning from "./Meaning";

export default function Definition(props) {
  console.log(props.definition);

  if (props.definition) {
    return (
      <div className="definition">
        <h2>{props.definition.word}</h2>
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
    return <div className="definition">Hello world!</div>;
  }
}
