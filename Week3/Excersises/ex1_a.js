const crypto = require("crypto");

const ex1_obj = {
  title: "6 Secure Randoms",
  randoms: [],
};

function generateRandomBytes(size, callback) {
  crypto.randomBytes(size, function (err, buffer) {
    let secureHex = buffer.toString("hex");
    const obj = { length: size, random: secureHex };
    callback(obj);
  });
}

generateRandomBytes(8, (obj) => {
  ex1_obj.randoms.push(obj);
  generateRandomBytes(16, (obj) => {
    ex1_obj.randoms.push(obj);
    generateRandomBytes(24, (obj) => {
      ex1_obj.randoms.push(obj);
      generateRandomBytes(32, (obj) => {
        ex1_obj.randoms.push(obj);
        generateRandomBytes(40, (obj) => {
          ex1_obj.randoms.push(obj);
          generateRandomBytes(48, (obj) => {
            ex1_obj.randoms.push(obj);
            console.log(ex1_obj.randoms);
          });
        });
      });
    });
  });
});