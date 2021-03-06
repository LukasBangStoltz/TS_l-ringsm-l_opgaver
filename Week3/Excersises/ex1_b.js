const crypto = require("crypto");
const { setTimeout } = require("timers");

function makeSecureRandom(size) {
  return new Promise(function (resolve, reject) {
    crypto.randomBytes(size, function (err, buffer) {
      let secureHex = buffer.toString("hex");
      const obj = { length: size, random: secureHex };
      resolve(obj);
    });
  });
}

// Promise.all([
//   makeSecureRandom(8),
//   makeSecureRandom(16),
//   makeSecureRandom(24),
//   makeSecureRandom(32),
//   makeSecureRandom(40),
//   makeSecureRandom(48),
// ]).then((data) => {
//   console.log(data);
// });

const ex1_obj = {
  title: "6 Secure Randoms",
  randoms: [],
};
function makeSecureRandomList(array) {
  return new Promise(function (resolve, reject) {
    array.forEach((number) => {
      crypto.randomBytes(number, function (err, buffer) {
        let secureHex = buffer.toString("hex");
        const obj = { length: number, random: secureHex };
        ex1_obj.randoms.push(obj);
      });
    });
    setTimeout(() => {
      resolve(ex1_obj);
    }, 1000);
  });
}

module.exports.makeSecureRandomList = makeSecureRandomList;
