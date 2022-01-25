import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Definition from "./Definition";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded]=useState(false);

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0]);
    setDefinition(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function load(){
    setLoaded(true);
    search();
  }
if (loaded){ return (
  <div className="Dictionary">
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus={true}
          onChange={updateKeyword}
        />
      </form>
    </section>
    <Definition definition={definition} />
  </div>
);} else{
  load();
  return "Loading";
}
 
}
