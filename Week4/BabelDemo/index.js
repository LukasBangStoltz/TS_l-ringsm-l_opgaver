import fetch from "node-fetch"

function messageDelay(msg, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const upperCased = msg.toUpperCase();
      resolve(upperCased);
    }, delay);
  });
}


const promises = [
    messageDelay("Hi", 1300),
    messageDelay("Hi nr 2", 700),
    messageDelay("Hi nr 3", 1700),
    messageDelay("Hi nr 4", 500),
]

Promise.any(promises).then((upperCased) => console.log(upperCased))