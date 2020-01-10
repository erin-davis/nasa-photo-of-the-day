import React from "react";
import "./App.css";
import PhotoList from "./Components/PhotoList.js";

function App() {
  return (
    <div className="App">
      <h1>Today's NASA Photo of the Day!</h1>
      <PhotoList />
    </div>
  );
}

export default App;
