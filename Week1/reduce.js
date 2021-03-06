//a reduce throuh join
const all = ["Lars", "Jens", "Ole", "Jan", "Frank"];

let joined = all.join(", #-");
console.log(joined);

//b custom reducer function

const numbers = [2, 3, 67, 33];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(reducer));

//c

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

let averageAge = members.reduce(
  (accumulator, currentValue, currentIndex, members) =>
    accumulator + currentValue.age / members.length,
  0
);

console.log(averageAge);

//d

const votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

var reducer2 = function (obj, vote) {
  if (!obj[vote]) {
    obj[vote] = 1;
  } else {
    obj[vote] += 1;
  }
  return obj;
};
var result = votes.reduce(reducer2, {});
console.log(result);




ost = 5

function pik () {
    var ost  = 1
}
console.log(ost)