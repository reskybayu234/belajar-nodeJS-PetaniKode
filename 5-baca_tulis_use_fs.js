// ==============================
// MEMBUAT WEBSERVER DENGAN HTTP
// ==============================

const http = require("http");
const fs = require("fs");
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

http
  .createServer((req, res) => {
    fs.readFile("./index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);
// http
//   .createServer(function (req, res) {
//     fs.readFile("index.html", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   })
//   .listen(8000);

// =======================
// MEMBUAT FILE DI NODEJS
// =======================

// fs.appendFile("file1.txt", "Resky Bayu Andhika", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// =====================================
// MEMBUAT FILE DENGAN FUNGSI FS.OPEN()
// =====================================

fs.open("file1.txt", "w+", function (err, file) {
  if (err) throw err;
  fs.appendFile("file1.txt", "fs.open()", function (err) {
    if (err) throw err;
    console.log("Saved");
  });
});
