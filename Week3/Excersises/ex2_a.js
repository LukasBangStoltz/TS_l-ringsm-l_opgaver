const fetch = require("node-fetch");

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  let lukeObj;
  let movieObj;
  let speciesObj;
  let homeworldObj;
  fetch("https://swapi.dev/api/people/" + id)
    .then((response) => response.json())
    .then((data) => (lukeObj = data));
    
  setTimeout(() => {
    console.log("Name: " + lukeObj.name);
    fetch(lukeObj.films[0])
      .then((response) => response.json())
      .then((data) => (movieObj = data));
    setTimeout(() => {
      console.log("First Movie: " + movieObj.title);
      fetch(movieObj.species[0])
        .then((response) => response.json())
        .then((data) => (speciesObj = data));
      setTimeout(() => {
        console.log("Species: " + speciesObj.name);
        fetch(speciesObj.homeworld)
          .then((response) => response.json())
          .then((data) => console.log("Homeworld: " + data.name));
      }, 200);
    }, 200);
  }, 1000);
}
getPlanetforFirstSpeciesInFirstMovieForPerson(1);
