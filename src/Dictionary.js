import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

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
      {/* <InputGroup
        onSubmit={search}
        onChange={handlKeyworldChange}
        className="mb-3"
      >
        <Form.Control
          className="search"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup> */}
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input
          className="search mb-3"
          type="search"
          placeholder="Type a word"
          onChange={handlKeyworldChange}
        />
        {/* <input className="button" type="submit" value="search" /> */}
      </form>
      <Results results={results} />
    </div>
  );
}
