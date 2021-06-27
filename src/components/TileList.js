import React, { useState } from "react"
import Tile from "./Tile";

function TileList({hogData, onUserSort}) {
  console.log("INTILE: ", hogData);
  const [sortBy, setSortBy] = useState("All")

 
    function handleChange(event) {
       setSortBy(event.target.value);
    }

    function sort() {
      if(sortBy === "All") {
        return hogData;
      }
      else if(sortBy === "name") {
        const alphabeticalSort = hogData.sort(function(a, b) {
          if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;   
          });
          return alphabeticalSort;
      }
      else if(sortBy === "hilo") {
         const weightSortHiToLo = hogData.sort( function(a, b) {
        return b.weight - a.weight;
        } );
        return weightSortHiToLo;
      }
       else if(sortBy === "lohi") {
          const weightSortLoToHi = hogData.sort(  function(a, b) {
            return a.weight - b.weight;
          }  )
           return weightSortLoToHi
       }
    }

     const hogDisplay = sort().map( (hog)=>{
       return (<Tile key={hog.name} name={hog.name} img={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} highestMedal={hog["highest medal achieved"]}/>)
      } );

    return(
        <>
        <label> Sort by</label>
        <select onChange={handleChange}>
          <option value="All"></option>
          <option value="name">name</option>
          <option value="hilo">weight(high to low)</option>
          <option value="lohi">weight(low to high)</option>
        </select>
         {hogDisplay}
        </>
    );
}

export default TileList;
