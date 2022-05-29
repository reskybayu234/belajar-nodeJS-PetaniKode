// ==============================
// MEMBUAT WEBSERVER DENGAN HTTP
// ==============================

const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h3>Halo Bayu</h3>");
//     res.end();
//   })
//   .listen(8000);

// ========================
// MEMBACA FILE DI NODE JS
// ========================

const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(8000);
