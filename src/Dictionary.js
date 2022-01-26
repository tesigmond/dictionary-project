import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Definition from "./Definition";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded]=useState(false);
  let [photos, setPhotos]=useState(null);

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0]);
    setDefinition(response.data[0]);
  }

  function handlePexelsResponse (response){
    console.log(response);
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000149dc45c48b5f426e84726103c0c3ad1c";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      let headers ={Authorization: `Bearer ${pexelsApiKey}`};
      axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
    <Photos photos={photos}/>
  </div>
);} else{
  load();
  return "Loading";
}
 
}
