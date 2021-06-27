import React from "react"

function FilterGreased({onChangeSelection}) {
    
   function handleChange(event) {
    onChangeSelection(event);
   }
    
    return(
        <div>
            <form onChange={handleChange}>
                <input name="greasecheck" type="radio" value="All" ></input>
                    <label>All</label>
                <input name="greasecheck" type="radio" value="Greased" ></input>
                    <label>Greased</label>
                <input name="greasecheck" type="radio" value="Ungreased" ></input>  
                    <label>Ungreased</label>
            </form>
        </div>
    );
}

export default FilterGreased