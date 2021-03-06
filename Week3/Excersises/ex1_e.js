const http = require("http");
const makeSecure = require("./ex1_b");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("yalla");
    res.end();
  }

  if (req.url === "/api/courses") {
    makeSecure.makeSecureRandomList([8, 16, 24, 32, 40, 48]).then((data) => {
      res.write(JSON.stringify(data));
    });

    res.write("hej");
    setTimeout(() => {
      res.end();
    }, 3000);
  }
});

server.listen(3000);

console.log("listening on port 3000.... ");
