import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import "./App.css";

const beers = ["Punk IPA", "Hoevels", "Chainbreaker", "Elvis Juice"];
const animals = ["Sloth", "Ant", "Elephant", "Elvis"];

export default function App() {
  const [itemsToDisplay, setItemsToDisplay] = React.useState(beers);

  function displayBeers() {
    setItemsToDisplay(beers);
  }

  function displayAnimals() {
    setItemsToDisplay(animals);
  }

  return (
    <div className="App">
      <Header>Marwin's favourite beers</Header>
      <MainContent>
        <button onClick={displayBeers}>show me beers!</button>
        <button onClick={displayAnimals}>show me animals!</button>
        <List items={itemsToDisplay} />
      </MainContent>
      <Footer>made with React</Footer>
    </div>
  );
}
