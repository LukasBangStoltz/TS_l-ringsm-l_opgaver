const fetch = require("node-fetch");
async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  let lukeObj;
  let movieObj;
  let speciesObj;
  let homeworldObj;
  try {
    const luke = await fetch("https://swapi.dev/api/people/" + id)
      .then((response) => response.json())
      .then((data) => (lukeObj = data));
    console.log("Name : " + lukeObj.name);

    const movie = await fetch(luke.films[0])
      .then((response) => response.json())
      .then((data) => (movieObj = data));
    console.log("Movie title: " + movieObj.title);

    const species = await fetch(movie.species[0])
      .then((response) => response.json())
      .then((data) => (speciesObj = data));
    console.log("Species: " + speciesObj.name);

    const homeworld = await fetch(species.homeworld)
      .then((response) => response.json())
      .then((data) => (homeworldObj = data));
    console.log("Homeworld: " + homeworldObj.name);
  } catch (err) {
    console.log(err);
  }
}
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
