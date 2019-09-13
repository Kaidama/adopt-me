import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown'
const SearchParams = () => {
  // have stateful logic using hooks
  //hook, all hooks begin with useState
  // useState creates a hook. When you get back a hook you get back an array with 2 elements
  // first element will always be the current state
  // second element will be the updated state
  // DO NOT PUT HOOKS INSIDE "IF STATEMENTS"
  // React Hooks must be called in the exact same order in every componenet
  const [location, setLocation] = useState("Seattle, WA");
  //keep track of breeds
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)  
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds)
    
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown  />
      <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
//useState hook "location" is going to be the current state, "setLocation" will be the event.target.value
//useState is the default state everytime you make a change it re-renders
//this is a hook, all hooks begin with "use"

//useState is like creating a hook. wWhen you get [state, updater()]
//updater() = setLocation()
