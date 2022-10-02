import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlKeyworldChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word"
          onChange={handlKeyworldChange}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
