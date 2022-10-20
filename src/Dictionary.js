import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
// documentation  dictionaryapi.dev/
export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handlSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlKeyworldChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h1>Dictionary</h1>
          <form onSubmit={handlSubmit}>
            <input
              className="search mb-3"
              type="search"
              placeholder="Type a word"
              onChange={handlKeyworldChange}
            />
            {/* <input className="button" type="submit" value="search" /> */}
          </form>
          <div className="hint">Suggested words: sunset, wine, joga, suset</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
