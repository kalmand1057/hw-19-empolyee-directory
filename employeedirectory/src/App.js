import React from "react";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Dropdown />
      <Card />
    </div>
  );
}

export default App;
