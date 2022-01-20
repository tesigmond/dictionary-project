import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response){
      console.log(response);
  }

  function handleSubmit(event){
      event.preventDefault();
      search();
  }

  function search (){
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      console.log(apiUrl);
      axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={updateKeyword}/>
      </form>
    </div>
  );
}
