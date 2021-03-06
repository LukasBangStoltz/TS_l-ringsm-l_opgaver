const makeSecure = require("./ex1_b");
// makeSecure.makeSecureRandomList([8, 16, 24, 32, 40, 48]).then((data) => {
//   console.log(data);
// });


async function getResult () {
    const obj = await makeSecure.makeSecureRandomList([8, 16, 24, 32, 40, 48])
    console.log(obj)
}
getResult()