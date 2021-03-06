const fetch = require("node-fetch");
const URL = "https://swapi.dev/api/people/";
var now = require("performance-now");

async function fetchPerson(URL) {
  const result = fetch(URL).then((response) => response.json());
  console.log(result)
  return result;
  
}
async function printNames() {
  console.log("Before");
  var start = now();
  let [person1, person2] = await Promise.all([
    fetchPerson(URL + "1"),
    fetchPerson(URL + "2"),
  ]);
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");
  var end = now();

  console.log((start - end).toFixed(3));
}

printNames();
