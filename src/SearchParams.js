import React, { useState } from 'react'
import { ANIMALS } from "@frontendmasters/pet"
const SearchParams = () => {

    const [location, setLocation] = useState("Seattle, WA")
    const [animal, setAnimal] = useState("dog")
    
    return (
    <div className="search-params"> 
    <h1>{location}</h1>
        <form>
            <label htmlFor="location">
            Location
        <input id="location" value={location} placeholder="Location" onChange={ e => setLocation(e.target.value)} />
            </label>
            <label htmlFor="animal">
                Animal
                <select 
                id="abunak" 
                value={animal} 
                onChange-={ e => setAnimal(e.target.value)} 
                onBlur={ e => setAnimal(e.target.value)}>
                    <option>All</option>
                    {
                        ANIMALS.map( animal => {
                         <option value={animal}>{animal}</option>
                    })

                    }
                </select>

            </label>
        </form> 
        <button>Submit</button>
        </div>
    )
}

export default SearchParams
    //useState hook "location" is going to be the current state, "setLocation" will be the event.target.value
    //useState is the default state everytime you make a change it re-renders
    //this is a hook, all hooks begin with "use"

    //useState is like creating a hook. wWhen you get [state, updater()] 
    //updater() = setLocation()
 