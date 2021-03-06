const osInfo = require("./Os-File");
const Ddos = require("./dosDetector");
const publisher = new Ddos(3000);
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/api/os-info") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(osInfo.osObj));
    publisher.addUrl(req.url);
    return res.end();
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", (sock) => {
  sock.remoteAddress;
});
server.listen(3000);
console.log("listening on 3000");

publisher.on("DDos detected", (e) => console.log(JSON.stringify(e)));
