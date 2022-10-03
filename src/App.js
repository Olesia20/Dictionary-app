import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
      </div>
      <div className="coded">
        Coded by Olesia Kononova check on{" "}
        <a
          className="githubLink"
          href="https://github.com/Olesia20/Dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
