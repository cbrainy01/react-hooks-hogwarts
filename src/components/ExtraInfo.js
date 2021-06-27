import React from "react"

function ExtraInfo({showExtras, greased, weight, specialty, highestMedal}) {
    
    return(
        <section className={showExtras? "show-extras" : "hide-extras"}>
            <p>specialty: {specialty}</p>
            <p>weight: {weight}</p>
            <p>greased status: {greased? "has been greased" : "has not been greased"}</p>
            <p>highest medal achieved: {highestMedal}</p>
        </section>
    );
}

export default ExtraInfo