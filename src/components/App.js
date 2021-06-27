import React, { useState } from "react";
import Nav from "./Nav";
import TileList from "./TileList";
import FilterGreased from "./FilterGreased";

import hogs from "../porkers_data";

function App() {
  const [inputValue, setInputValue] = useState("All");
  
  function handleChangeSelection(event) {  
    setInputValue(event.target.value);
    console.log("INPUTVAL IS: ", inputValue);
  }

  function filterGreased() {
    if(inputValue === "All") {
      return hogs;
    }
    else if(inputValue === "Greased") {
      return hogs.filter( (hog)=> hog.greased);
    }
    else if(inputValue === "Ungreased") {
        return hogs.filter((hog)=> !hog.greased) 
    }
  }

  return (
    <div className="App">
      <Nav />
      <FilterGreased onChangeSelection={handleChangeSelection}/>
      <TileList hogData={filterGreased()}/>
    </div>
  );
}

export default App;
