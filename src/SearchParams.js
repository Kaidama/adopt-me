import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //    have stateful logic using hooks
  //    hook, all hooks begin with useState
  //    useState creates a hook. When you get back a hook you get back an array with 2 elements
  //    first element will always be the current state
  //    second element will be the updated state
  //    DO NOT PUT HOOKS INSIDE "IF STATEMENTS"
  //    React Hooks must be called in the exact same order in every componenet

  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    //await returns a promise
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }

  useEffect(() => {
    //  useEffect is going to take case of lifecycle hooks "component/mount/update/etc"
    //  disconnecterd from when the render happens
    //  the return gets rendered first before the useEffect runs
    //   pet.breeds("dog").then(console.log, console.error) //grabs the data from api

    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      // const breedStrings = breeds.map((breedObj) => breedObj.name)
      const breedStrings = breeds.map(({ name }) => name);
      //destructed the name and grabbed the breed name

      setBreeds(breedStrings);
    }, console.error);
    // LOGIC
    //  did animal change? if yes, immediately setBreeds([]) then setBreed('') then call the api to fetch new breeds back and then re-render
    // in useEffect you need to declare your dependencies --> [animal, setBreed, setBreeds]
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

// Lifecycle using Hooks
// 1. SeachParams --> sets all the hooks
// 2. Return the markup to the DOM for the user to see
// 3. useEffect() gets called, the effect is dependant on animal
// NOTE: if you set dependencies as an [empty array], it means you run it once and never again, if you pass nothing it will be infinite
