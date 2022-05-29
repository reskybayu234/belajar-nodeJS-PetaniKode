const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("Hallo");
});

server.listen(8000);

console.log("Server running ong http://localhost:8000");
