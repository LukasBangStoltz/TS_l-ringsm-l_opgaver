const osObj = require("./Os-File");
console.log(osObj.osObj);

const dosDetector = require("./dosDetector");
const publisher = new dosDetector(3000);

publisher.on("DDos detected", (e) => console.log(JSON.stringify(e)));


publisher.addUrl("hej")

setTimeout(() => {
    publisher.addUrl("hej")
}, 2000);
