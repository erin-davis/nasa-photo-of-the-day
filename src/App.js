import React from "react";
import "./App.css";
import PicList from "./PicList.js";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" alt="space ship emoji!">🚀</span>!
      </p>
      <PicList />
    </div>
  );
}

export default App;
