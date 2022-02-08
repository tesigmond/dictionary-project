import React from "react";

export default function MWDefinition(props){
    console.log(props.definition);
    return(<div className="definition">
        <h2>{props.definition[0].fl}</h2>
    </div>);
}