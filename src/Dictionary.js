import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event){
      event.preventDefault();
      search();
  }

  function search (){
      console.log(keyword);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={updateKeyword}/>
      </form>
    </div>
  );
}
