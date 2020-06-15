import React from "react";
import Header from "./components/Header";
import List from "./components/List";

const beers = ["Punk IPA", "Hoevels", "Chainbreaker", "Elvis Juice"];

export default function App() {
  return (
    <div className="App">
      <Header>Marwin's favourite beers</Header>
      <List items={beers} />
    </div>
  );
}
