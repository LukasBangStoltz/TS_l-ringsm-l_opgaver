const nameArray = ["jens", "frans", "karl", "anders", "jensOle"];

Array.prototype.arrayToUpperCase = function () {
  const newArray = [];
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
    newArray.push(this[i]);
  }
  return newArray;
};

console.log(nameArray.arrayToUpperCase());
