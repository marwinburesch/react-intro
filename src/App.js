import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import "./App.css";

const beers = ["Punk IPA", "Hoevels", "Chainbreaker", "Elvis Juice"];

export default function App() {
  return (
    <div className="App">
      <Header>Marwin's favourite beers</Header>
      <MainContent>
        <List items={beers} />
      </MainContent>
      <Footer>made with React</Footer>
    </div>
  );
}
