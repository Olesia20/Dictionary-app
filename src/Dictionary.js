import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlKeyworldChange(event) {
    setKeyword(event.target.value);
  }
  // documentation  dictionaryapi.dev/
  return (
    <div className="dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input
          className="search"
          type="search"
          placeholder="Type a word"
          onChange={handlKeyworldChange}
        />
        <input className="button" type="submit" value="search" />
      </form>
      <Results results={results} />
    </div>
  );
}
