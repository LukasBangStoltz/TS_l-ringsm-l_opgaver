//a

const nameArray = ["jens", "frans", "karl", "anders", "jensOle"];
//easy filter
function filterEasy(array) {
  const result = array.filter((name) => name.length > 5);
  return result;
}

function filter(array) {
  const newArray = [];
  array.map((name) => {
    if (name.length > 5) {
      newArray.push(name);
    }
  });

  return newArray;
}

function myFilter(array, callback) {
  const newArray = callback(array);

  return newArray;
}

console.log(myFilter(nameArray, filter));

//b

function myMap(array, callback) {
    const newArray = callback(array);
  
    return newArray;
  }

  const mapArray = (array) =>{
    const newArray = []
    array.forEach(x=> {
        newArray.push(x)
    })

    return newArray
  }

  console.log(myMap(nameArray, mapArray ))