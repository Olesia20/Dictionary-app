import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
// documentation  dictionaryapi.dev/
export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexels(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    const pexelesApiKey =
      "563492ad6f917000010000013611a0333fee44318135da3b7656a436";
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelesApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexels);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
