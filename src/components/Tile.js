import React, { useState } from "react"
import ExtraInfo from "./ExtraInfo";

function Tile({name, img, greased, weight, specialty, highestMedal}) {
     const [showExtras, setShowExtras] = useState(false); 
    
    function handleClick() {
      setShowExtras(!showExtras);
    }

    return(
      <div onClick={handleClick} className="tile">
        <h3>Name:{name}</h3>
        <img src={img} height={"400"} width={'500'} alt=""/>
        <ExtraInfo showExtras={showExtras} greased={greased} weight={weight} specialty={specialty} highestMedal={highestMedal}/>
      </div>
    );
}

export default Tile;
//